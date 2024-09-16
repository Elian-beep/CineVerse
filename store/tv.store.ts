import { defineStore } from 'pinia'
import type { IBtnFilter } from '~/interfaces/IBtnFilter';
import type { ITv } from '~/interfaces/ITv';

export const useTvsStore = defineStore('tvs', {
    state: () => ({
        tvs: [] as Array<ITv>,
        popularTvs: [] as Array<ITv>,
        indexPopularTv: 0 as number,

        genres: [] as Array<IBtnFilter>,
        currentGenre: 0,

        currentPage: 1,
        totalPages: 0,
        totalTvs: 0,
    }),

    getters: {
        getTvs: (state) => state.tvs,
        getPopularTvs: (state) => state.popularTvs,
        getIndexPopularTv: (state) => state.indexPopularTv,

        getGenres: (state) => state.genres,
        getAsyncGenres: async () => await getGenres('tv'),
        getCurrentGenre: (state) => state.currentGenre,

        getCurrentPage: (state) => state.currentPage,
        getTotalPages: (state) => state.totalPages,
        getTotalMovies: (state) => state.totalTvs,
    },

    actions: {
        setTvs(dataTvs: Array<ITv>) {
            this.tvs = dataTvs;
        },
        setPopularTvs(dataTvs: Array<ITv>) {
            this.popularTvs = dataTvs;
        },
        setIndexPopularTv(newIndex: number) {
            this.indexPopularTv = newIndex;
        },

        setGenres(dataGenres: Array<IBtnFilter>) {
            this.genres = dataGenres;
        },
        setCurrentGenre(dataGenre: number) {
            this.currentGenre = dataGenre;
        },

        setCurrentPage(dataPage: number){
            this.currentPage = dataPage;
        },
        setTotalPages(dataTotal: number){
            this.totalPages = dataTotal;
        },
        setTotalTvs(dataTotalTvs: number){
            this.totalTvs = dataTotalTvs;
        },
        async fetchPage(pageNumber: number) {
            await getStream('tv', pageNumber, this.currentGenre);
        },
    }
})
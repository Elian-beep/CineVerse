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
    }),

    getters: {
        getTvs: (state) => state.tvs,
        getPopularTvs: (state) => state.popularTvs,
        getIndexPopularTv: (state) => state.indexPopularTv,

        getGenres: (state) => state.genres,
        getAsyncGenres: async () => await getGenres('tv'),
        getCurrentGenre: (state) => state.currentGenre,
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
        }
    }
})
import { defineStore } from 'pinia'
import type { IBtnFilter } from '~/interfaces/IBtnFilter';
import type { IMovie } from '~/interfaces/IMovie';
import type { IResponseStream } from '~/interfaces/IResponseStream';

export const useMoviesStore = defineStore('movies', {
    state: () => ({
        movies: [] as Array<IMovie>,
        popularMovies: [] as Array<IMovie>,
        indexPopularMovie: 0 as number,

        genres: [] as Array<IBtnFilter>,
        currentGenre: 0,

        currentPage: 1,
        totalPages: 0,
        totalMovies: 0,
    }),

    getters: {
        getMovies: (state) => state.movies,
        getPopularMovies: (state) => state.popularMovies,
        getIndexPopularMovie: (state) => state.indexPopularMovie,

        getGenres: (state) => state.genres,
        getAsyncGenres: async () => await getGenres('movie'),
        getCurrentGenre: (state) => state.currentGenre,

        getCurrentPage: (state) => state.currentPage,
        getTotalPages: (state) => state.totalPages,
        getTotalMovies: (state) => state.totalMovies,
    },

    actions: {
        setMovies(dataMovies: Array<IMovie>) {
            this.movies = dataMovies;
        },
        setPopularMovies(dataMovies: Array<IMovie>) {
            this.popularMovies = dataMovies;
        },
        setIndexPopularMovie(newIndex: number) {
            this.indexPopularMovie = newIndex;
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
        setTotalMovies(dataTotalMovies: number){
            this.totalMovies = dataTotalMovies;
        },
        async fetchPage(pageNumber: number) {
            await getStream('movie', pageNumber, this.currentGenre);
        },
    }
})
import { defineStore } from 'pinia'
import type { IMovie } from '~/interfaces/IMovie';

export const useMoviesStore = defineStore('movies', {
    state: () => ({
        popularMovies: [] as Array<IMovie>,
        indexPopularMovie: 0 as number,
    }),

    getters: {
        getPopularMovies: (state) => state.popularMovies,
        getIndexPopularMovie: (state) => state.indexPopularMovie,
    },

    actions: {
        setPopularMovies(dataMovies: Array<IMovie>) {
            this.popularMovies = dataMovies;
        },
        setIndexPopularMovie(newIndex: number) {
            this.indexPopularMovie = newIndex;
        },
    }
})
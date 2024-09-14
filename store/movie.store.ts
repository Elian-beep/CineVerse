import { defineStore } from 'pinia'

export const useMoviesStore = defineStore('movies', {
    state: () => ({
        popularMovies: [] as Array<any>,
        indexPopularMovie: 0 as number,
    }),

    getters: {
        getPopularMovies: (state) => state.popularMovies,
        getIndexPopularMovie: (state) => state.indexPopularMovie,
    },

    actions: {
        setPopularMovies(dataMovies: any) {
            this.popularMovies = dataMovies;
        },
        setIndexPopularMovie(newIndex: number) {
            this.indexPopularMovie = newIndex;
        },
    }
})
import { defineStore } from 'pinia'

export const useMoviesStore = defineStore('movies', {
    state: () => ({
        popularMovies: [] as Array<any>,
    }),

    getters: {
        getPopularMovies: (state) => state.popularMovies,
    },

    actions: {
        setPopularMovies(dataMovies: any) {
            this.popularMovies = dataMovies;
        },
    }
})
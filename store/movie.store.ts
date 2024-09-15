import { defineStore } from 'pinia'
import type { IBtnFilter } from '~/interfaces/IBtnFilter';
import type { IMovie } from '~/interfaces/IMovie';

export const useMoviesStore = defineStore('movies', {
    state: () => ({
        popularMovies: [] as Array<IMovie>,
        indexPopularMovie: 0 as number,
        genres: [] as Array<IBtnFilter>,
    }),

    getters: {
        getPopularMovies: (state) => state.popularMovies,
        getIndexPopularMovie: (state) => state.indexPopularMovie,
        getGenres: (state) => state.genres,
        getAsyncGenres: async () => await getGenres('movie'),
    },

    actions: {
        setPopularMovies(dataMovies: Array<IMovie>) {
            this.popularMovies = dataMovies;
        },
        setIndexPopularMovie(newIndex: number) {
            this.indexPopularMovie = newIndex;
        },
        setGenres(dataGenres: Array<IBtnFilter>) {
            this.genres = dataGenres;
        },
    }
})
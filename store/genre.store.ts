import { defineStore } from 'pinia'
import type { IBtnFilter } from '~/interfaces/IBtnFilter';

// TODO: Unificar gêneros em uma só store
export const useGenresStore = defineStore('genres', {
    state: () => ({
        genres: [] as Array<IBtnFilter>,
    }),

    getters: {
        getGenres: (state) => state.genres,
    },
    
    actions: {
        setGenres(dataGenres: Array<IBtnFilter>) {
            this.genres = dataGenres;
        },
        // getAsyncGenres: async () => {
        //     try{
        //         const [movieGenres, tvGenres] = await Promise.all([
        //             getGenres('movie'),
        //             getGenres('tv')
        //         ]);
        //         const allGenres = [...movieGenres, ...tvGenres];

        //         this.genres = allGenres.filter((genre, index, self) => {
        //             index === self.findIndex((g: IBtnFilter) => g.id === genre.id)
        //         })
        //     }catch(error){
        //         console.error("Erro ao obter gêneros:", error);
        //     }
        // },
    }
})
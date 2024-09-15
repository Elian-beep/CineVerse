import axios from "axios";
import { useMoviesStore } from "~/store/movie.store";


export const http_config = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export const getGenres = async (streamType: 'movie' | 'tv') => {
    const movieStore = useMoviesStore();
    const config = useRuntimeConfig();
    if(config.public.apiKeyTmdb){
        try{
            const response = await http_config.get(`genre/${streamType}/list?api_key=${config.public.apiKeyTmdb}&language=pt`);
            console.log(response);
            if(streamType === 'movie') movieStore.setGenres(response.data.genres);
        }catch(error) {
            console.log('Erro ao buscar gêneros: ', error);
        }
    }
}

export const getPopularStream = async (streamType: 'movie' | 'tv' | 'all', page: number) => {
    const config = useRuntimeConfig();
    const req_path = streamType === 'all' ? 'trending/all/day?' : streamType+'/popular?' ;
    if (config.public.apiKeyTmdb){
        try{
            const response = await http_config.get(`${req_path}api_key=${config.public.apiKeyTmdb}&language=pt-BR&page=${page}`);

            return response.data.results.slice(0, 10);
        } catch (error) {
            console.log('Erro ao buscar listagem de populares: ', error);
        }
    }
}
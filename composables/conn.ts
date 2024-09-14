import axios from "axios";

export const http_config = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export const getPopularStream = async (streamType: 'movie' | 'tv', page: number) => {
    const config = useRuntimeConfig();
    if (config.public.apiKeyTmdb){
        try{
            const response = await http_config.get(`${streamType}/popular?api_key=${config.public.apiKeyTmdb}&language=pt-BR&page=${page}`);
            return response.data.results.slice(0, 10);
        } catch (error) {
            console.log('Erro ao buscar listagem de populares: ', error);
        }
    }
}
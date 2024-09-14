import axios from "axios";

export const http_config = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export const getPopularStream = async (streamType: 'movie' | 'tv' | 'all', page: number) => {
    const config = useRuntimeConfig();
    const req_path = streamType === 'all' ? 'trending/all/day?' : streamType+'/popular?' ;
    if (config.public.apiKeyTmdb){
        try{
            const response = await http_config.get(`${req_path}api_key=${config.public.apiKeyTmdb}&language=pt-BR&page=${page}`);
            // trending/all/day?api_key=841f21ef9e7cfd7c23c9d1e28a153733&sort_by=popularity.desc&page=${page}

            return response.data.results.slice(0, 10);
        } catch (error) {
            console.log('Erro ao buscar listagem de populares: ', error);
        }
    }
}
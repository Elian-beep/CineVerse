import axios from "axios";
import type { IMovie } from "~/interfaces/IMovie";
import type { ITv } from "~/interfaces/ITv";
import { useMoviesStore } from "~/store/movie.store";
import { useStreamsStore } from "~/store/stream.store";
import { useTvsStore } from "~/store/tv.store";

// TODO: Instanciar stores runtimeConfig globalmente ou na raiz de arquivo
// TODO: Desfragmentar arquivo de funções

export const http_config = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export const getGenres = async (streamType: 'movie' | 'tv') => {
    const movieStore = useMoviesStore();
    const tvStore = useTvsStore();
    const config = useRuntimeConfig();
    if(config.public.apiKeyTmdb){
        try{
            const response = await http_config.get(`genre/${streamType}/list?api_key=${config.public.apiKeyTmdb}&language=pt`);
            if(streamType === 'movie'){
                movieStore.setGenres(response.data.genres);
                movieStore.setCurrentGenre(response.data.genres[0].id);
            }
            if(streamType === 'tv'){
                tvStore.setGenres(response.data.genres);
                tvStore.setCurrentGenre(response.data.genres[0].id);
            }
        }catch(error) {
            console.log('Erro ao buscar gêneros: ', error);
        }
    }
}

// TODO: Retornar data e realizar aplicações localmente nas stores
export const getStream = async (streamType: 'movie' | 'tv' | 'all', page: number, genre?: number) => {
    const streamStore = useStreamsStore();
    const movieStore = useMoviesStore();
    const tvStore = useTvsStore();

    const config = useRuntimeConfig();
    const req_path = streamType === 'all' ? 'trending/all/day' : 'discover/'+streamType;
    if(config.public.apiKeyTmdb){
        try{
            const response = await http_config.get(`${req_path}?api_key=${config.public.apiKeyTmdb}&with_genres=${genre}&language=pt-BR&page=${page}&sort_by=popularity.desc`);
            if(streamType === 'all'){
                streamStore.setStreams(response.data.results);
            }
            if(streamType === 'movie'){
                const movies: IMovie[] = response.data.results.map((m: Omit<IMovie, 'media_type'>) => ({
                    ...m, media_type: 'movie'
                }));
                movieStore.setMovies(movies);
                movieStore.setCurrentPage(response.data.page);
                movieStore.setTotalPages(response.data.total_pages);
                movieStore.setTotalMovies(response.data.total_results);
            }
            if(streamType === 'tv'){
                const tvs: ITv[] = response.data.results.map((t: Omit<ITv, 'media_type'>) => ({
                    ...t, media_type: 'tv'
                }));
                tvStore.setTvs(tvs);
                tvStore.setCurrentPage(response.data.page);
                tvStore.setTotalPages(response.data.total_pages);
                tvStore.setTotalTvs(response.data.total_results);
            }
        }catch(error) {
            console.log('Erro ao buscar listagem geral: ', error);
        }
    }
}

// TODO: Fixar page para 1 (Atualmente funciona por parâmetro)
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

export const getStreamById = async (streamType: 'movie' | 'tv', id: number) => {
    const config = useRuntimeConfig();
    if (config.public.apiKeyTmdb){
        try{
            const response = await http_config.get(`${streamType}/${id}?api_key=${config.public.apiKeyTmdb}&language=pt-BR`);
            return response.data;
        } catch (error) {
            console.log('Erro ao buscar mídia específica: ', error);
        }
    }
}
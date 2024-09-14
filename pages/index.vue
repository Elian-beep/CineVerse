<script lang="ts" setup>
import { getPopularStream } from '~/composables/conn';
import { useMoviesStore } from '~/store/movie.store';

const moviesStore = useMoviesStore();

const fetchPopularMovies = async () => {
    try{
        if(moviesStore.getPopularMovies.length === 0)
        moviesStore.setPopularMovies(await getPopularStream('movie', 1));
    }catch(error){
        console.error('Erro na requisição:', error);
    }
}

onMounted( async () => {
    fetchPopularMovies();
});

</script>

<template>
    <div v-for="movie in moviesStore.getPopularMovies">
        <p class="text-content">
            {{ movie.title }}
        </p>
    </div>
</template>
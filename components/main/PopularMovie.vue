<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { getPopularStream } from '~/composables/conn';
import { useMoviesStore } from '~/store/movie.store';
import { faPlay, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const moviesStore = useMoviesStore();

// const tempMovie = ref();
const indexMovie = ref(moviesStore.getIndexPopularMovie);


const fetchPopularMovies = async () => {
    try {
        if (moviesStore.getPopularMovies.length === 0) {
            moviesStore.setPopularMovies(await getPopularStream('movie', 1));
        }
        // tempMovie.value = moviesStore.getPopularMovies[0];
        // console.log('DADOS DO FILME: ', tempMovie.value);
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}

const nextPopularMovies = () => {
    const currentIndex = indexMovie.value;
    indexMovie.value = (currentIndex + 1) % moviesStore.getPopularMovies.length;
    moviesStore.setIndexPopularMovie(indexMovie.value);
}


onMounted(async () => {
    fetchPopularMovies();
    setInterval(nextPopularMovies, 20000);
});
</script>

<template>
    <div class="custom-background flex flex-col w-100 flex flex-col justify-items-end">

        <div class="custom-background-size relative bg-cover bg-no-repeat bg-center sm:h-xl sm:bg-top"
            :style="`background-image: url('https://image.tmdb.org/t/p/original${moviesStore.getPopularMovies[indexMovie]?.poster_path}');`">

            <div class="custom-background-desc w-full absolute bottom-0">
                <div class="w-96 bg-green mx-auto flex flex-col gap-4 sm:m-0 sm:ml-20 sm:gap-6 sm:w-1/2">

                    <span class="text-content text-3xl font-bold sm:text-5xl">{{ moviesStore.getPopularMovies[indexMovie]?.title }}</span>
                    <p class=" text-subtitle text-base sm:text-xl">{{ moviesStore.getPopularMovies[indexMovie]?.overview }}</p>

                    <div class="flex gap-4 sm:mt-6 sm:gap-6">
                        <a :href="`https://www.youtube.com/results?search_query=${moviesStore.getPopularMovies[indexMovie]?.title} Trailer`"
                            target=”_blank”
                            class=" custom-hover-trailer transition-transform transition-300 transition-ease bg-primary rounded-full px-4 py-3 flex gap-2 items-center text-app font-bold">
                            <FontAwesomeIcon :icon="faPlay" />
                            Trailer
                            <!-- <span class="text-app font-bold">Trailer</span> -->
                        </a>
                        <button
                            class="bg-transparent rounded-full px-4 py-3 text-primary flex gap-2 items-center border-solid border-2 border-primary sm:hover:bg-primary sm:hover:bg-opacity-15">
                            <FontAwesomeIcon :icon="faPlusCircle" />
                            <span>Adicionar à lista</span>
                        </button>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.custom-hover-trailer {
    @apply sm:hover:bg-primary_dark;
}

.custom-background {
    width: auto;
}

.custom-background-size {
    height: 550px;
}

.custom-background-desc {
    background: linear-gradient(0deg, theme('colors.background') 20%, transparent 100%, transparent 100%);
}

@media screen and (min-width: 640px) {
    .custom-background-size {
        height: 640px;
    }
}
</style>
<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { getPopularStream } from '~/composables/conn';
import { useMoviesStore } from '~/store/movie.store';
import { faPlay, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const moviesStore = useMoviesStore();

const tempMovie = ref();

const fetchPopularMovies = async () => {
    try {
        if (moviesStore.getPopularMovies.length === 0) {
            moviesStore.setPopularMovies(await getPopularStream('movie', 1));
        }
        tempMovie.value = moviesStore.getPopularMovies[0];
        console.log('DADOS DO FILME: ', tempMovie.value);
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}

onMounted(async () => {
    fetchPopularMovies();
});

</script>

<template>
    <div class="custom-background flex flex-col w-100 flex flex-col justify-items-end">

        <div class="custom-background-size relative bg-cover bg-no-repeat bg-center sm:h-xl"
            :style="`background-image: url('https://image.tmdb.org/t/p/original${tempMovie?.poster_path}');`">

            <div class="custom-background-desc w-full absolute bottom-0">
                <div class="w-96 bg-green mx-auto flex flex-col gap-4 sm:m-0 sm:ml-20 sm:gap-6 sm:w-1/3">

                    <span class="text-content text-3xl font-bold sm:text-5xl">{{ tempMovie?.title }}</span>
                    <p class="limit-overview text-subtitle text-base sm:text-xl">{{ tempMovie?.overview }}</p>

                    <div class="flex gap-4 sm:mt-6 sm:gap-6">
                        <a :href="`https://www.youtube.com/results?search_query=${tempMovie?.title} Trailer`"
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

.limit-overview {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
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
    .custom-background-size{
        height: 640px;
    }
}
</style>
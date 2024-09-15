<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { getPopularStream } from '~/composables/conn';
import { useMoviesStore } from '~/store/movie.store';
import { faPlay, faPlusCircle, faBookmark } from '@fortawesome/free-solid-svg-icons';

const btnConfigBookmarked = ref({
    iSave: false,
    titleSave: 'Adicionar à lista',
    titleUnsave: 'Adicionado a lista',
});

const moviesStore = useMoviesStore();

const index = ref(moviesStore.getIndexPopularMovie);

const fetchPopular = async () => {
    try {
        if (moviesStore.getPopularMovies.length === 0) {
            moviesStore.setPopularMovies(await getPopularStream('movie', 1));
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}

const nextPopularMovies = () => {
    index.value = (index.value + 1) % moviesStore.getPopularMovies.length;
    btnConfigBookmarked.value.iSave = checkBookmarked(moviesStore.getPopularMovies[index.value]);
    moviesStore.setIndexPopularMovie(index.value);
}

const handleToggleBookmarked = () => {
    toggleBookmarked(moviesStore.getPopularMovies[moviesStore.getIndexPopularMovie], 'movie')
    btnConfigBookmarked.value.iSave = checkBookmarked(moviesStore.getPopularMovies[index.value]);
}

watch(
    () => moviesStore.popularMovies,
    (newMovies) => {
        if (newMovies.length > 0) {
            btnConfigBookmarked.value.iSave = checkBookmarked(moviesStore.getPopularMovies[index.value]);
            setInterval(nextPopularMovies, 60000);
        }
    },
    { immediate: true }
);

onMounted(async () => {
    fetchPopular();
});
</script>

<template>
    <div class="custom-background flex flex-col w-100 flex flex-col justify-items-end">

        <div class="custom-background-size relative bg-cover bg-no-repeat bg-center sm:py-24 sm:px-5 sm:h-screen sm:bg-fixed sm:grid"
            :style="`background-image: url('https://image.tmdb.org/t/p/original${moviesStore.getPopularMovies[index]?.poster_path}');`">

            <div class="custom-background-desc w-full absolute bottom-0">
                <div class="w-96 bg-green mx-auto flex flex-col gap-4 sm:m-0 sm:ml-20 sm:gap-6 sm:w-1/2 md:w-1/3">

                    <span class="text-content text-3xl font-bold sm:text-5xl">{{
                        moviesStore.getPopularMovies[index]?.title }}</span>
                    <p class=" text-subtitle text-base sm:text-xl">{{ moviesStore.getPopularMovies[index]?.overview
                        }}</p>

                    <div class="flex gap-4 sm:mt-6 sm:gap-6">

                        <a :href="`https://www.youtube.com/results?search_query=${moviesStore.getPopularMovies[index]?.title} Trailer`"
                            target=”_blank”
                            class=" custom-hover-trailer transition-transform transition-300 transition-ease bg-primary rounded-full px-4 py-3 flex gap-2 items-center text-app font-bold">
                            <FontAwesomeIcon :icon="faPlay" />
                            Trailer
                        </a>

                        <button @click="handleToggleBookmarked()"
                            class="bg-transparent rounded-full px-4 py-3 text-primary flex gap-2 items-center border-solid border-2 border-primary sm:hover:bg-primary sm:hover:bg-opacity-15">
                            <FontAwesomeIcon :icon="btnConfigBookmarked.iSave ? faBookmark : faPlusCircle" />
                            <span>{{ btnConfigBookmarked.iSave ? btnConfigBookmarked.titleUnsave :
                                btnConfigBookmarked.titleSave }}</span>
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
    background-image: linear-gradient(to right, black, rgba(0, 0, 0, 0.5));
}

.custom-background-desc {
    background: linear-gradient(0deg, theme('colors.background') 20%, transparent 100%, transparent 100%);
}

@media screen and (min-width: 640px) {
    .custom-background-size {
        height: 75vh;
    }
}
</style>
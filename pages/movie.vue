<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { storeToRefs } from 'pinia';
import DefaultSection from '~/layouts/defaultSection.vue';
import { useMoviesStore } from '~/store/movie.store';

const movieStore = useMoviesStore();

const { currentPage, totalPages } = storeToRefs(movieStore);

const previousPage = () => {
    if (movieStore.currentPage > 1) {
        movieStore.fetchPage(movieStore.currentPage - 1);
    }
};

const nextPage = () => {
    if (movieStore.currentPage < movieStore.totalPages) {
        movieStore.fetchPage(movieStore.currentPage + 1);
    }
};

const handleFilter = async (value: number | string) => {
    if (typeof value === 'number') {
        movieStore.setCurrentGenre(value);
        await getStream('movie', movieStore.getCurrentPage, value);
    }
}

onMounted(() => {
    handleFilter(movieStore.getCurrentGenre);
    movieStore.fetchPage(movieStore.getCurrentPage);
});

</script>

<template>
    <MainPopularMovie />
    <DefaultSection>
        <MainRecentsBookmarkeds />

        <MainGroupFilter class="mt-6 mb-4 sm:mt-12 sm:mb-10" :filter="movieStore.getCurrentGenre"
            :values-filter="movieStore.getGenres" :onHandleFilter="handleFilter" />
        <MainGroupStream class="pt-0" :grup-stream="movieStore.getMovies" />

        <!-- TODO: Adicionar adição de página específica e componentizar este trecho -->
        <div class="flex justify-center gap-6 mt-4 font-base text-primary">
            <button @click="previousPage" :disabled="currentPage === 1">
                <FontAwesomeIcon :icon="faChevronLeft" />
            </button>
            <span>{{ currentPage }} - {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages">
                <FontAwesomeIcon :icon="faChevronRight" />
            </button>
        </div>
    </DefaultSection>
</template>
<script setup lang="ts">
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

watch(
    () => movieStore.genres,
    (newGenres) => {
        const firstGenre = newGenres[0].id;
        if (typeof firstGenre === 'number' && firstGenre === 0) movieStore.setCurrentGenre(firstGenre);
    },
    { immediate: true }
);

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

        <div class="pagination-controls bg-content">
            <button @click="previousPage" :disabled="currentPage === 1">Anterior</button>
            <span>Página {{ currentPage }} de {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages">Próxima</button>
        </div>
    </DefaultSection>
</template>
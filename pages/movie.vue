<script setup lang="ts">
import DefaultSection from '~/layouts/defaultSection.vue';
import { useMoviesStore } from '~/store/movie.store';

const movieStore = useMoviesStore();
const filter = ref(movieStore.getGenres[0].id);

const handleFilter = async (value: number | string) => {
    if (typeof value === 'number') {
        filter.value = value;
        await getStream('movie', 1, value);
    }
}

onMounted( () => {
    handleFilter(filter.value);
});

</script>

<template>
    <MainPopularMovie />
    <DefaultSection>
        <MainRecentsBookmarkeds />

        <MainGroupFilter class="mt-6 mb-4 sm:mt-12 sm:mb-10" :filter="filter" :values-filter="movieStore.getGenres" :onHandleFilter="handleFilter" />
        <MainGroupStream class="pt-0" :grup-stream="movieStore.getMovies" />
    </DefaultSection>
</template>
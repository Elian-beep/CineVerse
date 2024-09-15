<script setup lang="ts">
import DefaultSection from '~/layouts/defaultSection.vue';
import { useMoviesStore } from '~/store/movie.store';

const movieStore = useMoviesStore();
const filter = ref(movieStore.getGenres[0].id);

const handleFilter = (value: number | string) => {
    if(typeof value === 'number'){
        filter.value = value;
    }
}   
</script>

<template>
    <MainPopularMovie />
    <DefaultSection>
        <MainRecentsBookmarkeds />
        <MainGroupFilter :filter="filter" :values-filter="movieStore.getGenres" :onHandleFilter="handleFilter"  />
        <p class="text-content">Busca feita para: {{ filter }}</p>
    </DefaultSection>
</template>
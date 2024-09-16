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

onMounted(async () => {
    await getStream('movie', 1);
});

</script>

<template>
    <MainPopularMovie />
    <DefaultSection>
        <MainRecentsBookmarkeds />

        <MainGroupFilter class="my-6 sm:my-12" :filter="filter" :values-filter="movieStore.getGenres" :onHandleFilter="handleFilter"  />
    </DefaultSection>
</template>
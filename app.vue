<script setup lang="ts">
import defaultContainer from './layouts/defaultContainer.vue';
import { useMoviesStore } from './store/movie.store';
import { useTvsStore } from './store/tv.store';

const movieStore = useMoviesStore();
const tvStore = useTvsStore();

//TODO: Deve ser carregada globalmente ou apenas em /movie
const fecthGenres = async () => {
  await movieStore.getAsyncGenres;
  await tvStore.getAsyncGenres;
}
fecthGenres();

asyncBookmarkedsStorage();
</script>

<template>
  <NuxtRouteAnnouncer />
  <defaultContainer />
</template>

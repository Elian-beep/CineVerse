<script setup lang="ts">
import defaultContainer from './layouts/defaultContainer.vue';
import { useMoviesStore } from './store/movie.store';

const movieStore = useMoviesStore();

//TODO: Deve ser carregada globalmente ou apenas em /movie
const fecthGenres = async () => {
  await movieStore.getAsyncGenres;
}
fecthGenres();

asyncBookmarkedsStorage();
</script>

<template>
  <NuxtRouteAnnouncer />
  <defaultContainer />
</template>

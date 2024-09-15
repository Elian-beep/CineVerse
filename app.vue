<script setup lang="ts">
import defaultContainer from './layouts/defaultContainer.vue';
asyncBookmarkedsStorage();
</script>

<template>
  <NuxtRouteAnnouncer />
  <defaultContainer />
</template>

<script setup lang="ts">
import PopularTv from '~/components/main/PopularTv.vue';
import { useTvsStore } from '~/store/tv.store';

const tvStore = useTvsStore();
</script>

<template>
    <PopularTv />
</template>
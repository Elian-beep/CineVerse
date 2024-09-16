<script setup lang="ts">
import defaultSection from '~/layouts/defaultSection.vue';
import { useTvsStore } from '~/store/tv.store';

const tvStore = useTvsStore();
const filter = ref(tvStore.getGenres[0].id);

const handleFilter = async (value: number | string) => {
    if (typeof value === 'number') {
        filter.value = value;
        await getStream('tv', 1, value);
    }
}

onMounted( () => {
    handleFilter(filter.value);
});
</script>

<template>
    <MainPopularTv />
    <defaultSection>
        <MainRecentsBookmarkeds />

        <MainGroupFilter class="mt-6 mb-4 sm:mt-12 sm:mb-10"  :filter="filter" :values-filter="tvStore.getGenres" :onHandleFilter="handleFilter" />
        <MainGroupStream class="pt-0" :grup-stream="tvStore.getTvs" ></MainGroupStream>
    </defaultSection>
</template>
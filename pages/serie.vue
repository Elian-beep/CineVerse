<script setup lang="ts">
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { storeToRefs } from 'pinia';
import defaultSection from '~/layouts/defaultSection.vue';
import { useTvsStore } from '~/store/tv.store';

const tvStore = useTvsStore();

const { currentPage, totalPages } = storeToRefs(tvStore);

const previousPage = () => {
    if (tvStore.currentPage > 1) {
        tvStore.fetchPage(tvStore.currentPage - 1);
    }
};

const nextPage = () => {
    if (tvStore.currentPage < tvStore.totalPages) {
        tvStore.fetchPage(tvStore.currentPage + 1);
    }
};

const handleFilter = async (value: number | string) => {
    if (typeof value === 'number') {
        tvStore.setCurrentGenre(value);
        await getStream('tv', tvStore.getCurrentPage, value);
    }
}

onMounted( () => {
    handleFilter(tvStore.getCurrentGenre);
    tvStore.fetchPage(tvStore.getCurrentPage);
});
</script>

<template>
    <MainPopularTv />
    <defaultSection>
        <MainRecentsBookmarkeds />

        <MainGroupFilter class="mt-6 mb-4 sm:mt-12 sm:mb-10"  :filter="tvStore.getCurrentGenre" :values-filter="tvStore.getGenres" :onHandleFilter="handleFilter" />
        <MainGroupStream class="pt-0" :grup-stream="tvStore.getTvs" ></MainGroupStream>

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
    </defaultSection>
</template>
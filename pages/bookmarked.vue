<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import type { IMovie } from '~/interfaces/IMovie';
import type { ITv } from '~/interfaces/ITv';


const filter = ref('stream');
const bookmarkedLocal = ref([...bookmarkeds.value]);

const handleFilter = (value: string) => {
    filter.value = value;
    bookmarkedLocal.value = [...bookmarkeds.value];
    if(value !== 'stream'){
        bookmarkedLocal.value = bookmarkedLocal.value.filter((b: IMovie | ITv) => b.media_type === value);
    }
}

const removeBookmarked = (straem: IMovie | ITv | IMovie) => {
    toggleBookmarked(straem, null);
    asyncBookmarkedsStorage();
    handleFilter(filter.value);
}

</script>

<template>
    <section class="px-6 pt-4 mt-24 sm:px-20" style="min-height: calc(100vh - 176px);">
        <p class="text-content">{{ bookmarkeds.length }}</p>
        <div class="flex gap-6">
            <button class="default_btn" :class="filter === 'stream' ? 'selected_btn' : 'unselected_btn'"
                @click="handleFilter('stream')">Todos</button>
            <button class="default_btn" :class="filter === 'movie' ? 'selected_btn' : 'unselected_btn'"
                @click="handleFilter('movie')">Filmes</button>
            <button class="default_btn" :class="filter === 'tv' ? 'selected_btn' : 'unselected_btn'"
                @click="handleFilter('tv')">Séries</button>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 pt-6">
            <div v-for="bookmarked in bookmarkedLocal" :key="bookmarked.id" class="rounded-lg p-4">
                <div class="relative rounded-xl min-h-56 bg-cover bg-center sm:h-60 xl:h-64" :style="`background-image: url('https://image.tmdb.org/t/p/original${bookmarked.poster_path}');`">
                    <FontAwesomeIcon @click="removeBookmarked(bookmarked)" :icon="faMinus" class="absolute right-4 top-4 p-1 bg-primary text-app rounded-full"></FontAwesomeIcon>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
.default_btn {
    @apply font-bold px-6 py-3 rounded-full;
}

.unselected_btn {
    @apply text-subtitle bg-primary bg-opacity-15;
}

.selected_btn {
    @apply text-app bg-primary;
}
</style>
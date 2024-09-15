<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import type { IMovie } from '~/interfaces/IMovie';
import type { ITv } from '~/interfaces/ITv';
import type { IBtnFilter } from '~/interfaces/IBtnFilter';


const filter = ref('stream');
const filters: IBtnFilter[] = [
    {name: 'Todos', id: 'stream'},
    {name: 'Filmes', id: 'movie'},
    {name: 'Séries', id: 'tv'},
]
const bookmarkedLocal = ref([...bookmarkeds.value]);

const handleFilter = (value: string | number) => {
    if(typeof value === 'string'){
        filter.value = value;
        bookmarkedLocal.value = [...bookmarkeds.value];
        if(value !== 'stream'){
            bookmarkedLocal.value = bookmarkedLocal.value.filter((b: IMovie | ITv) => b.media_type === value);
        }
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
        <MainGroupFilter :values-filter="filters" :filter="filter" :onHandleFilter="handleFilter" />

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 pt-6">
            <div v-for="bookmarked in bookmarkedLocal" :key="bookmarked.id" class="rounded-lg p-4">
                <div class="relative rounded-xl min-h-56 bg-cover bg-center sm:h-60 xl:h-80" :style="`background-image: url('https://image.tmdb.org/t/p/original${bookmarked.poster_path}');`">
                    <FontAwesomeIcon @click="removeBookmarked(bookmarked)" :icon="faMinus" class="absolute right-4 top-4 p-1 bg-primary text-app rounded-full"></FontAwesomeIcon>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
</style>
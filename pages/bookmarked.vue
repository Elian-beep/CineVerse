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
    toggleBookmarked(straem);
    asyncBookmarkedsStorage();
    handleFilter(filter.value);
}

</script>

<template>
    <section class="px-6 pt-4 mt-24 sm:px-20" style="min-height: calc(100vh - 176px);">
        <MainGroupFilter :values-filter="filters" :filter="filter" :onHandleFilter="handleFilter" />
        <MainGroupStream :grup-stream="bookmarkedLocal">
            <template #default="{ stream, index }">
                <FontAwesomeIcon @click="removeBookmarked(stream)" :icon="faMinus" class="absolute right-4 top-4 p-1 bg-primary text-app rounded-full z-25"></FontAwesomeIcon>
            </template>
        </MainGroupStream>

    </section>
</template>

<style scoped>
</style>
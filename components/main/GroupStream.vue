<script lang="ts" setup>
import type { IMovie } from '~/interfaces/IMovie';
import type { IStream } from '~/interfaces/IStream';
import type { ITv } from '~/interfaces/ITv';


const props = defineProps<{
    grupStream: ITv[] | IMovie[] | IStream[],
}>();
</script>

<template>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 pt-6">
        <div v-for="stream in grupStream" :key="stream.id" class="rounded-lg p-4">
            <div class="relative rounded-xl min-h-56 bg-cover bg-center sm:h-60 xl:h-80"
                :style="`background-image: url('https://image.tmdb.org/t/p/original${stream.poster_path}');`">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
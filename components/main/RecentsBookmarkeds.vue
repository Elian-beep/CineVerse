<script lang="ts" setup>
import type { IMovie } from '~/interfaces/IMovie';
import type { IStream } from '~/interfaces/IStream';
import type { ITv } from '~/interfaces/ITv';

const router = useRouter();

const openDetails = (stream: IMovie | ITv | IStream) => {
    router.push({
        name: 'details-stream_type-id',
        params: { stream_type: stream.media_type, id: stream.id }
    });
}
</script>


<template>
    <h3 class="text-content text-base font-bold mb-6 sm:text-2xl">Adicionados recentes à sua lista</h3>
    <div class="custom_scroll flex flex-row flex-nowrap max-w-100 gap-4 overflow-x-auto justify-start sm:gap-6">
        <div v-for="bookmarked in bookmarkeds.slice(0, 6)" class="shrink-0">
            <img @click="openDetails(bookmarked)" class="h-72 sm:80" :src="`https://image.tmdb.org/t/p/original${bookmarked.poster_path}`"
                :alt="`Pôster ${bookmarked.id}`">
        </div>
    </div>
</template>

<style scoped>
</style>
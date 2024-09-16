<script lang="ts" setup>
import type { IMovie } from '~/interfaces/IMovie';
import type { IStream } from '~/interfaces/IStream';
import type { ITv } from '~/interfaces/ITv';

const router = useRouter();

const props = defineProps<{
    grupStream: ITv[] | IMovie[] | IStream[],
}>();

const openDetails = (stream: IMovie | ITv | IStream) => {
    router.push({
        name: 'details-stream_type-id',
        params: { stream_type: stream.media_type, id: stream.id }
    });
}
</script>

<template>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 pt-6">
        <div v-for="stream in grupStream" :key="stream.id" class="rounded-lg p-2">
            <div @click="openDetails(stream)" class="relative rounded-xl min-h-56 bg-cover bg-center sm:h-60 xl:h-80"
                :style="`background-image: url('https://image.tmdb.org/t/p/original${stream.poster_path}');`">
                <slot :stream="stream" :index="stream.id"></slot>
            </div>
        </div>
    </div>
</template>
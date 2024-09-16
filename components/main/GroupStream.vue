<script lang="ts" setup>
import type { IMovie } from '~/interfaces/IMovie';
import type { IStream } from '~/interfaces/IStream';
import type { ITv } from '~/interfaces/ITv';

const router = useRouter();

const props = defineProps<{
    grupStream: ITv[] | IMovie[] | IStream[],
}>();

// Transformar em uma função composable
const openDetails = (stream: IMovie | ITv | IStream) => {
    router.push({
        name: 'details-stream_type-id',
        params: { stream_type: stream.media_type, id: stream.id }
    });
}
</script>

<template>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 pt-6">
        <div v-for="stream in grupStream" :key="stream.id" class="rounded-lg p-2 sm:hover:p-4 transition-all duration-300">
            <div @click="openDetails(stream)" class="relative cursor-pointer rounded-xl min-h-56 bg-cover bg-center sm:h-60 xl:h-80"
                :style="`background-image: url('https://image.tmdb.org/t/p/original${stream.poster_path}');`">
                <slot :stream="stream" :index="stream.id">
                </slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card_desc{
    /* TODO: Refatorar cores presentes em gradients para as variaveis */
    background: linear-gradient(180deg, theme('colors.app') 80%, transparent 100%);
}
</style>
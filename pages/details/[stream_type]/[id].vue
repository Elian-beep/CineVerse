<script lang="ts" setup>
import { faBookmark, faPlay, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useRoute } from 'vue-router';
import type { IMovie } from '~/interfaces/IMovie';
import type { ITv } from '~/interfaces/ITv';

const route = useRoute();
const streamType = route.params.stream_type;
const id = route.params.id;

const stream = ref();
const colorAverage = ref('text-danger');
const isLoading = ref(true);

const btnConfigBookmarked = ref({
    iSave: false,
    titleSave: 'Adicionar à lista',
    titleUnsave: 'Adicionado a lista',
});

const handleToggleBookmarked = () => {
    toggleBookmarked(stream.value);
    btnConfigBookmarked.value.iSave = checkBookmarked(stream.value);
}

onMounted(async () => {
    if (streamType === 'movie' || streamType === 'tv') {
        stream.value = await getStreamById(streamType, Number(id));
        if (stream.value.vote_average > 5) colorAverage.value = 'text-warning';
        if (stream.value.vote_average >= 8) colorAverage.value = 'text-info';
        btnConfigBookmarked.value.iSave = checkBookmarked(stream.value);
    }
});

</script>

<template>
    <div class="details text-content">
        <div v-if="stream" class="background relative bg-cover bg-no-repeat bg-center"
            :style="`background-image: url('https://image.tmdb.org/t/p/original${stream?.poster_path}');`">

            <div class="flex flex-col gap-4 absolute text-content z-10 bottom-1/3 left-6 right-12 sm:left-20 md:right-1/3 xl:right-2/3">
                <h1 class="font-extrabold text-5xl">{{ stream?.title || stream?.name }}</h1>
                <div class="flex gap-4 flex-wrap">
                    <div v-for="genre in stream.genres" :key="genre.id">
                        <span class="bg-primary_dark py-1 px-2 rounded-md text-sm">{{ genre.name }}</span>
                    </div>
                </div>
                <p>{{ stream.overview }}</p>
                <p class="text-sm">Mídia de avaliação: <span :class="colorAverage">{{ stream.vote_average }}</span></p>

                <div class="flex gap-4">
                    <button @click="handleToggleBookmarked()"
                        class="bg-transparent rounded-full px-4 py-3 text-primary flex gap-2 items-center border-solid border-2 border-primary sm:hover:bg-primary sm:hover:bg-opacity-15">
                        <FontAwesomeIcon :icon="btnConfigBookmarked.iSave ? faBookmark : faPlusCircle" />
                        <span>{{ btnConfigBookmarked.iSave ? btnConfigBookmarked.titleUnsave :
                            btnConfigBookmarked.titleSave }}</span>
                    </button>

                    <a :href="`https://www.youtube.com/results?search_query=${stream?.title || stream?.name} Trailer`"
                        target=”_blank”
                        class=" custom-hover-trailer transition-transform transition-300 transition-ease bg-primary rounded-full px-4 py-3 flex gap-2 items-center text-app font-bold">
                        <FontAwesomeIcon :icon="faPlay" />
                        Trailer
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.details {
    height: calc(100vh - 56px);
}

.background {
    width: 100%;
    height: 100%;
}

.background::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background:
        linear-gradient(to left, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 70%),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 70%),
        linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 70%);
}
</style>

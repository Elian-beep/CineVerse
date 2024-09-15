<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { getPopularStream } from '~/composables/conn';
import { useStreamsStore } from '~/store/stream.store';
import { faPlay, faPlusCircle, faBookmark } from '@fortawesome/free-solid-svg-icons';
import type { IStream } from '~/interfaces/IStream';

const streamStore = useStreamsStore();

const indexStream = ref(streamStore.getIndexPopularStream);

const btnConfigBookmarked = ref({
    iSave: false,
    titleSave: 'Adicionar à lista',
    titleUnsave: 'Adicionado a lista',
});

const fetchPopularStreams = async () => {
    try {
        if (streamStore.getPopularStreams.length === 0) {
            streamStore.setPopularStreams(await getPopularStream('all', 1));
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}

const nextPopularStreams = () => {
    indexStream.value = (indexStream.value + 1) % streamStore.getPopularStreams.length;
    btnConfigBookmarked.value.iSave = checkBookmarked(streamStore.getPopularStreams[indexStream.value]);
    streamStore.setIndexPopularStream(indexStream.value);
}

const handleToggleBookmarked = (stream: IStream) => {
    toggleBookmarked(streamStore.getPopularStreams[streamStore.getIndexPopularStream], null)
    btnConfigBookmarked.value.iSave = checkBookmarked(streamStore.getPopularStreams[indexStream.value]);
}

watch(
    () => streamStore.popularStreams,
    (newStreams) => {
        if (newStreams.length > 0) {
            btnConfigBookmarked.value.iSave = checkBookmarked(streamStore.getPopularStreams[indexStream.value]);
            setInterval(nextPopularStreams, 60000);
        }
    },
    { immediate: true }
);

onMounted(async () => {
    fetchPopularStreams();
});
</script>

<template>
    <div class="custom-background flex flex-col w-100 flex flex-col justify-items-end">

        <div class="custom-background-size relative bg-cover bg-no-repeat bg-center sm:py-24 sm:px-5 sm:bg-fixed sm:grid"
            :style="`background-image: url('https://image.tmdb.org/t/p/original${streamStore.getPopularStreams[indexStream]?.poster_path}');`">

            <div class="custom-background-desc w-full absolute bottom-0">
                <div class="w-96 bg-green mx-auto flex flex-col gap-4 sm:m-0 sm:ml-20 sm:gap-6 sm:w-1/2 md:w-1/3">

                    <span class="text-content text-3xl font-bold sm:text-5xl">{{
                        streamStore.getPopularStreams[indexStream]?.title }}</span>
                    <p class=" text-subtitle text-base sm:text-xl">{{
                        streamStore.getPopularStreams[indexStream]?.overview
                        }}</p>

                    <div class="flex gap-4 sm:mt-6 sm:gap-6">

                        <a :href="`https://www.youtube.com/results?search_query=${streamStore.getPopularStreams[indexStream]?.title} Trailer`"
                            target=”_blank”
                            class=" custom-hover-trailer transition-transform transition-300 transition-ease bg-primary rounded-full px-4 py-3 flex gap-2 items-center text-app font-bold">
                            <FontAwesomeIcon :icon="faPlay" />
                            Trailer
                        </a>

                        <button @click="handleToggleBookmarked(streamStore.getPopularStreams[indexStream])"
                            class="bg-transparent rounded-full px-4 py-3 text-primary flex gap-2 items-center border-solid border-2 border-primary sm:hover:bg-primary sm:hover:bg-opacity-15">
                            <FontAwesomeIcon :icon="btnConfigBookmarked.iSave ? faBookmark : faPlusCircle" />
                            <span>{{ btnConfigBookmarked.iSave ? btnConfigBookmarked.titleUnsave :
                                btnConfigBookmarked.titleSave }}</span>
                        </button>

                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.custom-hover-trailer {
    @apply sm:hover:bg-primary_dark;
}

.custom-background {
    width: auto;
}

.custom-background-size {
    height: 550px;
    background-image: linear-gradient(to right, black, rgba(0, 0, 0, 0.5));
}

.custom-background-desc {
    background: linear-gradient(0deg, theme('colors.background') 20%, transparent 100%, transparent 100%);
}

@media screen and (min-width: 640px) {
    .custom-background-size {
        height: 75vh;
    }
}
</style>
<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { getPopularStream } from '~/composables/conn';
import { useTvsStore } from '~/store/tv.store';
import { faPlay, faPlusCircle, faBookmark } from '@fortawesome/free-solid-svg-icons';

const tvStore = useTvsStore(); //stream

const indexStream = ref(tvStore.getIndexPopularTv);

const btnConfigBookmarked = ref({
    iSave: false,
    titleSave: 'Adicionar à lista',
    titleUnsave: 'Adicionado a lista',
});

const fetchPopularTvs = async () => {
    try {
        if (tvStore.getPopularTvs.length === 0) {
            tvStore.setPopularTvs(await getPopularStream('tv', 1));
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}

const nextPopularTvs = () => {
    indexStream.value = (indexStream.value + 1) % tvStore.getPopularTvs.length;
    btnConfigBookmarked.value.iSave = checkBookmarked(tvStore.getPopularTvs[indexStream.value]);
    tvStore.setIndexPopularTv(indexStream.value);
}

const handleToggleBookmarked = () => {
    toggleBookmarked(tvStore.getPopularTvs[tvStore.getIndexPopularTv], 'tv')
    btnConfigBookmarked.value.iSave = checkBookmarked(tvStore.getPopularTvs[indexStream.value]);
}

watch(
    () => tvStore.popularTvs,
    (newStreams) => {
        if (newStreams.length > 0) {
            btnConfigBookmarked.value.iSave = checkBookmarked(tvStore.getPopularTvs[indexStream.value]);
            setInterval(nextPopularTvs, 60000);
        }
    },
    { immediate: true }
);

onMounted(async () => {
    fetchPopularTvs();
});
</script>

<template>
    <div class="custom-background flex flex-col w-100 flex flex-col justify-items-end">

        <div class="custom-background-size relative bg-cover bg-no-repeat bg-center sm:py-24 sm:px-5 sm:h-screen sm:bg-fixed sm:grid"
            :style="`background-image: url('https://image.tmdb.org/t/p/original${tvStore.getPopularTvs[indexStream]?.poster_path}');`">

            <div class="custom-background-desc w-full absolute bottom-0">
                <div class="w-96 bg-green mx-auto flex flex-col gap-4 sm:m-0 sm:ml-20 sm:gap-6 sm:w-1/2 md:w-1/3">

                    <span class="text-content text-3xl font-bold sm:text-5xl">{{ tvStore.getPopularTvs[indexStream]?.name
                        }}</span>
                    <p class=" text-subtitle text-base sm:text-xl">{{ tvStore.getPopularTvs[indexStream]?.overview }}</p>

                    <div class="flex gap-4 sm:mt-6 sm:gap-6">

                        <a :href="`https://www.youtube.com/results?search_query=${tvStore.getPopularTvs[indexStream]?.name} Trailer`"
                            target=”_blank”
                            class=" custom-hover-trailer transition-transform transition-300 transition-ease bg-primary rounded-full px-4 py-3 flex gap-2 items-center text-app font-bold">
                            <FontAwesomeIcon :icon="faPlay" />
                            Trailer
                        </a>

                        <button @click="handleToggleBookmarked()"
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
    background-image: linear-gradient(to right, black, rgba(0, 0, 0, 0.5))
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
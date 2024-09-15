<template>
    <h3 class="text-content text-base font-bold mb-6">Adicionados recentes à sua lista</h3>
    <div class="flex flex-row flex-nowrap max-w-100 gap-4 overflow-x-auto justify-start">
        <div v-for="bookmarked in bookmarkeds.slice(0, 6)" class="shrink-0">
            <img class="h-72" :src="`https://image.tmdb.org/t/p/original${bookmarked.poster_path}`"
                :alt="`Pôster ${bookmarked.title}`">
        </div>
    </div>
</template>
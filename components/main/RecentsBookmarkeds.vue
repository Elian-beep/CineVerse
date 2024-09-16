<script lang="ts" setup>
</script>

<template>
    <h3 class="text-content text-base font-bold mb-6 sm:text-2xl">Adicionados recentes à sua lista</h3>
    <div class="custom_scroll flex flex-row flex-nowrap max-w-100 gap-4 overflow-x-auto justify-start sm:gap-6">
        <div v-for="bookmarked in bookmarkeds.slice(0, 6)" class="shrink-0">
            <img class="h-72 sm:80" :src="`https://image.tmdb.org/t/p/original${bookmarked.poster_path}`"
                :alt="`Pôster ${bookmarked.id}`">
        </div>
    </div>
</template>

<style scoped>
</style>
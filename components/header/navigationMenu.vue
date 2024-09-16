<script setup lang="ts">
import { ref } from 'vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faNavicon, faClose, faSearch } from '@fortawesome/free-solid-svg-icons';

const isOpen = ref(false);
const menuItens = [
    { title: 'Home', to: '/' },
    { title: 'Filmes', to: '/movie' },
    { title: 'Séries', to: '/serie' },
    { title: 'Minha Lista', to: '/bookmarked' },
];

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};
</script>

<template>
    <div class="flex justify-between items-center">

        <div>
            <div class="flex gap-6 sm:hidden">
                <button :class="{ 'fixed left-0 top-6 ml-48': isOpen }" @click="toggleMenu"
                    class="z-50 transform transition-all duration-300">
                    <FontAwesomeIcon :icon="isOpen ? faClose : faNavicon"
                        :class="isOpen ? 'bg-primary bg-opacity-15' : 'bg-primary'" class="h-4 w-4 p-3 rounded-full" />
                </button>
                <div class="flex text-lg">
                    <span class="text-primary my-auto">Cine</span>
                    <span class="text-content my-auto">verse</span>
                </div>
            </div>

            <nav :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
                class="shadow-right fixed top-0 left-0 h-full w-64 p-4 text-white transform transition-transform duration-300 custom-desktop-navbar">
                <span class="block pt-6 pl-6 custom-desktop-items">
                    <div class="flex text-lg sm:text-3xl">
                        <span class="text-primary my-auto">Cine</span>
                        <span class="text-content my-auto">verse</span>
                    </div>
                </span>
                <div v-for="(item, index) in menuItens" class="sm:flex">
                    <NuxtLink @click="toggleMenu" :to="item.to" class="block pt-6 pl-6 custom-desktop-items sm:hover:border-b-2 sm:focus:text-primary">
                        {{ item.title }}</NuxtLink>
                </div>
            </nav>

        </div>

        <button @click="toggleMenu" class="transform transition-all duration-300 sm:hidden opacity-0">
            <FontAwesomeIcon :icon="faSearch" class="text-primary h-4 w-4 p-3 rounded-full" />
        </button>
    </div>
</template>

<style scoped>
.shadow-right {
    background: linear-gradient(90deg, theme('colors.app') 80%, transparent 100%);
}

.custom-desktop-navbar {
    @apply sm:static sm:flex sm:justify-center sm:space-x-6 sm:translate-x-0 sm:p-0 sm:w-auto sm:bg-none;
}

.custom-desktop-items {
    @apply sm:p-0 sm:mt-auto sm:text-lg sm:transition-colors;
}
</style>
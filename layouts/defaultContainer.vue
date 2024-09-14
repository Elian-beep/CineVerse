<script setup lang="ts">
import NavigationMenu from '~/components/header/navigationMenu.vue';

const isScrolled = ref(false);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 500;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <div  class="flex flex-col min-h-screen">
        <header :class="isScrolled ? 'bg-opacity-100' : 'bg-gradient-to-b from-gray-900 to-transparent'" 
        class="fixed top-0 left-0 w-full text-content p-6 transition-all duration-900 ease-in-out">
        <!-- <header class="bg-app text-content p-6 b-none"> -->
            <NavigationMenu />
        </header>
        <main class="flex-grow p-6 bg-background min-h-100">
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </main>

        <footer class="bg-app text-content p-4 text-center">
            <p>&copy; CineVerse</p>
        </footer>
    </div>
</template>
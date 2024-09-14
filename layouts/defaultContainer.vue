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
        <header :class="isScrolled ? 'bg-app bg-opacity-100' : 'custom-shadow-top'" 
        class="fixed z-50 top-0 left-0 w-full text-content p-6 transition-bg duration-900 ease-in sm:px-20">
            <NavigationMenu />
        </header>

        <main class="flex-grow pb-6 bg-background min-h-100">
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </main>

        <footer class="bg-app text-content p-4 text-center">
            <p>&copy; CineVerse</p>
        </footer>
    </div>
</template>

<style scoped>
.custom-shadow-top{
    background: linear-gradient(180deg, theme('colors.app') 20%, transparent 100%);
}
</style>
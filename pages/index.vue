<script lang="ts" setup>
import DefaultSection from '~/layouts/defaultSection.vue';
import { useStreamsStore } from '~/store/stream.store';

const streamStore = useStreamsStore();

onMounted(async () => {
    await getStream('all', 1);
});
</script>

<template>
    <MainPopularStream />
    <DefaultSection>
        <MainRecentsBookmarkeds />

        <MainGroupStream :grup-stream="streamStore.getStreams" />
    </DefaultSection>
</template>

<style scoped></style>
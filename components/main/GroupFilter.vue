<script lang="ts" setup>
import type { IBtnFilter } from '~/interfaces/IBtnFilter';

const props = defineProps<{
    valuesFilter: IBtnFilter[],
    onHandleFilter: (value: string | number) => void,
    filter: string | number,
}>();
</script>

<template>
    <div class="flex gap-6">
        <div v-for="(btnFilter, index) in valuesFilter" :key="index">
            <button class="default_btn" :class="filter === btnFilter.value ? 'selected_btn' : 'unselected_btn'"
                @click="props.onHandleFilter(btnFilter.value)">{{ btnFilter.title }}</button>
        </div>
    </div>
</template>

<style scoped>
.default_btn {
    @apply font-bold px-6 py-3 rounded-full;
}

.unselected_btn {
    @apply text-subtitle bg-primary bg-opacity-15;
}

.selected_btn {
    @apply text-app bg-primary;
}
</style>
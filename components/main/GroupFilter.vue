<script lang="ts" setup>
import type { IBtnFilter } from '~/interfaces/IBtnFilter';

const props = defineProps<{
    valuesFilter: IBtnFilter[],
    onHandleFilter: (value: string | number) => void,
    filter: string | number,
}>();
</script>

<template>
    <div class="flex flex-row max-w-100 gap-6 flex-nowrap overflow-x-scroll justify-start">
        <div v-for="(btnFilter, index) in valuesFilter" class="flex flex-row" :key="index">
            <button class="default_btn" :class="filter === btnFilter.id ? 'selected_btn' : 'unselected_btn'"
                @click="props.onHandleFilter(btnFilter.id)">{{ btnFilter.name }}</button>
        </div>
    </div>
</template>

<style scoped>
.default_btn {
    @apply font-bold px-6 py-3 rounded-full whitespace-nowrap;
}

.unselected_btn {
    @apply text-subtitle bg-primary bg-opacity-15;
}

.selected_btn {
    @apply text-app bg-primary;
}
</style>
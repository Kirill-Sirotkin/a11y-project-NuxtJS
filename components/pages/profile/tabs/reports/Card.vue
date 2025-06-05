<script setup lang="ts">
const props = defineProps({
    date: {
        type: String,
        required: true,
    },
    domain: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div
        class="
            flex
            justify-between items-center
            gap-2
            p-2
            border-1 rounded-lg
        "
    >
        <div 
            class="
                flex-1
                grid grid-cols-1
                gap-2
                md:grid-cols-3
            "
        >
            <div class="flex items-center">{{ props.date.slice(0, 10) }}</div>
            <div class="flex items-center w-full overflow-auto">{{ props.domain }}</div>
            <div v-if="props.status === 'COMPLETED'" class="flex items-center text-success">{{ props.status }}</div>
            <div v-else-if="props.status === 'PENDING'" class="flex items-center text-warning">{{ props.status }}</div>
            <div v-else-if="props.status === 'FAILED'" class="flex items-center text-error">{{ props.status }}</div>
            <div v-else class="flex items-center">{{ props.status }}</div>
        </div>
        <UButton label="Details" :disabled="props.status !== 'COMPLETED'" :to="props.link" />
    </div>
</template>
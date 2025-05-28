<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
});
const { title, text } = props;
</script>

<template>
    <UCard 
        variant="subtle" 
        class="
            flex-1 
            shadow-2xl 
            bg-primary
            text-neutral-50
            text-xs 
            min-w-0
            md:text-lg 
            dark:text-inverted
        "
    >
        <template #header>
            <div class="flex items-center gap-2">
                <UIcon name="material-symbols:timer-outline-rounded" />
                <p class="font-bold">{{ title }}</p>
            </div>
        </template>
        <p>{{ text }}</p>
    </UCard>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: ['auth-guard'],
});
</script>

<template>
    <div 
        class="
            flex flex-col
            gap-2
            p-4
        "
    >
        <PagesLoginFormCard />
    </div>
</template>
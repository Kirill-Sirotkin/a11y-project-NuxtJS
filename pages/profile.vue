<script setup lang="ts">
definePageMeta({
    layout: 'profile',
    middleware: ['token-guard'],
});
</script>

<template>
    <div>
        Profile
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    middleware: ['callback-guard'],
});
</script>

<template>
    <div
        class="
            flex flex-col
            p-4
        "
    >
        <span 
            class="
                font-bold
                text-xl
                md:text-2xl
            "
        >
            Redirecting, please wait...
        </span>
        <br>
        <span
            class="
                text-xl
                md:text-2xl
            "
        >
            If the redirect does not happen automatically, please click <NuxtLink to="/profile" class="text-primary">here</NuxtLink>.
        </span>
    </div>
</template>
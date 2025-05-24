<script setup lang="ts">
const slideoverOpen = ref(false)
const route = useRoute()

watch(() => route.fullPath, () => {
    slideoverOpen.value = false
})
</script>

<template>
    <header 
        class="
            flex
            items-center justify-between
            p-4
            backdrop-blur-sm shadow-md
            sticky top-0 z-50
        "
    >
        <NuxtLink 
            to="/" 
            class="
                flex 
                items-center gap-1
                text-2xl font-bold
            "
        >
            <UIcon name="material-symbols:bookmark-check-outline-rounded" size="32" />
            <span>My<span class="text-primary"> AC </span>Help</span>
        </NuxtLink>
        <LayoutsDefaultHeaderNavigation />
    </header>
</template>

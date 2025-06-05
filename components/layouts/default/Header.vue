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
            justify-between items-center
            p-4
            backdrop-blur-sm shadow-md
            bg-gray-950/10
            sticky top-0 z-50
            md:grid md:grid-cols-3
            dark:bg-gray-950/50
        "
    >
        <div class="flex justify-start">
            <LayoutsLogo />
        </div>
        
        <div class="flex gap-2 md:hidden">
            <div class="flex justify-end">
                <LayoutsLogIn />
            </div>
            <div class="flex justify-center">
                <LayoutsDefaultHeaderNavigation />
            </div>
        </div>

        <div class="hidden justify-center md:flex">
            <LayoutsDefaultHeaderNavigation />
        </div>
        <div class="hidden justify-end md:flex">
            <LayoutsLogIn />
        </div>
    </header>
</template>

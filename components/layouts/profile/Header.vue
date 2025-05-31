<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const items = ref<NavigationMenuItem[][]>([[
    {
        label: 'Home',
        icon: 'material-symbols:home-outline',
        to: '/',
    },
]])
</script>

<template>
    <header 
        class="
            flex
            justify-between items-center
            p-4
            backdrop-blur-sm shadow-md
            sticky top-0 z-50
            md:grid md:grid-cols-3
        "
    >
        <div class="flex justify-start">
            <LayoutsLogo />
        </div>
        
        <div class="flex md:hidden">
            <div class="flex justify-center">
                <UNavigationMenu :items="items" />
            </div>
            <div class="flex justify-end">
                <LayoutsLogOut />
            </div>
        </div>

        <div class="hidden justify-center md:flex">
            <UNavigationMenu :items="items" />
        </div>
        <div class="hidden justify-end md:flex">
            <LayoutsLogOut />
        </div>
    </header>
</template>
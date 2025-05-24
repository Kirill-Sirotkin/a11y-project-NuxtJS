<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const footerItems = ref<NavigationMenuItem[][]>([[
    {
        label: 'Conditions of Use',
        to: '/conditions',
    },
    {
        label: 'Privacy Notice',
        to: '/privacy'
    },
]])
</script>

<template>
    <footer
    class="
        flex flex-col md:flex-row items-start md:items-center justify-between
        py-4 px-4 md:px-8 bg-gray-800/80 text-gray-100 gap-2 md:gap-0
    ">
        <div class="flex flex-col md:flex-row gap-4">
            <div class="font-bold">
                Contact us:
            </div>
            <div class="flex flex-col gap-2">
                <!-- a href mailto: -->
                <div class="flex gap-2 items-center">
                    <UIcon name="material-symbols:mail-outline-rounded" />
                    <p>support@myachelp.com</p>
                </div>
                <!-- a href tel: -->
                <div class="flex gap-2 items-center">
                    <UIcon name="material-symbols:call-outline-rounded" />
                    <p>+358 xx xxx xx xx</p>
                </div>
            </div>
        </div>
        <UNavigationMenu
        :items="footerItems"
        highlight
        class="hidden md:flex"
        />
        <UNavigationMenu
        :items="footerItems"
        highlight
        orientation="vertical"
        class="flex md:hidden"
        />
    </footer>
</template>
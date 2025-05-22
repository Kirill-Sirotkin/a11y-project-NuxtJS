<script setup lang="ts">
    import type { NavigationMenuItem } from '@nuxt/ui'

    const slideoverOpen = ref(false)
    const route = useRoute()

    watch(() => route.fullPath, () => {
    slideoverOpen.value = false
    })

    const items = ref<NavigationMenuItem[][]>([[
        {
            label: 'Home',
            icon: 'material-symbols:home-outline-rounded',
            to: '/'
        },
        {
            label: 'About',
            icon: 'material-symbols:slab-serif-outline',
            to: '/about'
        },
        {
            label: 'Pricing',
            icon: 'material-symbols:attach-money-rounded',
            to: '/pricing'
        },
        {
            label: 'Blog',
            icon: 'material-symbols:text-ad-outline-rounded',
            to: '/blog'
        },
        {
            label: 'FAQ',
            icon: 'material-symbols:contact-support-outline-rounded',
            to: '/faq'
        },
        {
            label: 'Legal',
            icon: 'material-symbols:edit-document-outline-rounded',
            to: '/legal'
        },
    ]])

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
    <div class="flex flex-col min-h-screen">
        <header 
        class="
            hidden md:flex items-center justify-between
            h-16 border-b-4 border-gray-800/20
            p-8 sticky top-0 bg-gray-100/80 backdrop-blur z-50
        ">
            <p
            class="
                text-3xl font-bold
            ">
                My AC Help
            </p>
            <div 
            class="
                flex items-center
                gap-8
            ">
                <UNavigationMenu 
                :items="items" 
                highlight 
                />
                <NuxtLink to="login">
                    <UButton>
                        Log In
                    </UButton>
                </NuxtLink>
            </div>
        </header>
        <header 
        class="
            md:hidden flex items-center justify-between
            h-12 border-b-4 border-gray-800/20
            p-4 sticky top-0 bg-gray-100/80 backdrop-blur z-50
        ">
            <p
            class="
                text-lg font-bold
            ">
                My AC Help
            </p>
            <USlideover v-model:open="slideoverOpen" title="Navigation" >
                <UButton variant="subtle" color="neutral" class="p-1" @click="slideoverOpen = true">
                    <UIcon name="material-symbols:menu-rounded" />
                </UButton>
                <template #body>
                    <NuxtLink to="/login"><UButton class="mb-2">Log In</UButton></NuxtLink>
                    <UNavigationMenu :items="items" orientation="vertical"/>
                </template>
            </USlideover>
        </header>
        <main class="flex-1">
            <slot />
        </main>
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
    </div>
</template>

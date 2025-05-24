<script setup lang="ts">
    import type { NavigationMenuItem } from '@nuxt/ui'

    const slideoverOpen = ref(false)
    const route = useRoute()

    const colorMode = useColorMode()

    const isDark = computed({
        get() {
            return colorMode.value === 'dark'
        },
        set(_isDark) {
            colorMode.preference = _isDark ? 'dark' : 'light'
        }
    })

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
</script>

<template>
    <header 
    class="
        hidden md:flex items-center justify-between
        h-16 border-b-4 border-gray-800/20
        p-8 sticky top-0 bg-gray-100/80 backdrop-blur z-50
    ">
        <div class="flex items-center gap-4">
            <UIcon name="material-symbols:menu-rounded" size="32" />
            <p
            class="
                text-3xl font-bold
            ">
                My AC Help
            </p>
        </div>
        <div 
        class="
            flex items-center
            gap-8
        ">
            <UNavigationMenu 
            :items="items" 
            highlight 
            />
            <NuxtLink to="auth/login">
                <UButton>
                    Log In
                </UButton>
            </NuxtLink>
            <ClientOnly v-if="!colorMode?.forced">
                <UButton
                :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
                color="neutral"
                variant="ghost"
                @click="isDark = !isDark"
                />

                <template #fallback>
                <div class="size-8" />
                </template>
            </ClientOnly>
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
                <NuxtLink to="auth/login"><UButton class="mb-2">Log In</UButton></NuxtLink>
                <UNavigationMenu :items="items" orientation="vertical"/>
            </template>
        </USlideover>
    </header>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const open = ref(false)

function closeSlideover() {
    open.value = false
}

const items = ref<NavigationMenuItem[][]>([[
    {
        label: 'Home',
        icon: 'material-symbols:home-outline-rounded',
        to: '/',
        onSelect: closeSlideover
    },
    {
        label: 'About',
        icon: 'material-symbols:slab-serif-outline',
        to: '/about',
        onSelect: closeSlideover
    },
    {
        label: 'Pricing',
        icon: 'material-symbols:attach-money-rounded',
        to: '/pricing',
        onSelect: closeSlideover
    },
    {
        label: 'Blog',
        icon: 'material-symbols:text-ad-outline-rounded',
        to: '/blog',
        onSelect: closeSlideover
    },
    {
        label: 'FAQ',
        icon: 'material-symbols:contact-support-outline-rounded',
        to: '/faq',
        onSelect: closeSlideover
    },
    {
        label: 'Legal',
        icon: 'material-symbols:edit-document-outline-rounded',
        to: '/legal',
        onSelect: closeSlideover
    },
]])
</script>

<template>
    <!-- Full Nav on medium screens -->
    <div 
        class="
            hidden
            items-center gap-2
            md:flex
        "
    >
        <UNavigationMenu :items="items" />
        <NuxtLink
            to="/auth/login"
        >
            <UButton label="Log In" />
        </NuxtLink>
        <LayoutsDefaultHeaderColorModeButton />
    </div>

    <!-- Slideover Nav on small screens -->
    <div 
        class="
            flex
            items-center gap-2
            md:hidden
        "
    >
        <LayoutsDefaultHeaderColorModeButton />
        <USlideover 
            v-model:open="open"
            title="Navigation"
            description="Available pages"
        >
            <UButton 
                icon="material-symbols:menu-rounded" 
                color="neutral" 
                variant="subtle" 
            />
            <template #body>
                <div 
                    class="
                        flex flex-col
                        gap-2
                    "
                >
                    <NuxtLink
                        to="/auth/login"
                    >
                        <UButton 
                            label="Log In" 
                            @click="closeSlideover"
                        />
                    </NuxtLink>
                    <UNavigationMenu 
                        :items="items" 
                        orientation="vertical"
                    />
                </div>
            </template>
        </USlideover>
    </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const open = ref(false)

function closeSlideover() {
    open.value = false
}

const items = ref<NavigationMenuItem[][]>([[
    {
        label: 'Home',
        icon: 'material-symbols:home-outline',
        to: '/',
        onSelect: closeSlideover
    },
    {
        label: 'About',
        icon: 'material-symbols:info-outline',
        to: '/about',
        onSelect: closeSlideover
    },
    {
        label: 'Pricing',
        icon: 'material-symbols:attach-money',
        to: '/pricing',
        onSelect: closeSlideover
    },
    {
        label: 'Blog',
        icon: 'material-symbols:text-snippet-outline',
        to: '/blog',
        onSelect: closeSlideover
    },
    {
        label: 'FAQ',
        icon: 'material-symbols:contact-support-outline',
        to: '/faq',
        onSelect: closeSlideover
    },
    {
        label: 'Legal',
        icon: 'material-symbols:edit-document-outline',
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
        <UButton label="Log In" to="/auth/login" />
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
        <UButton 
            label="Log In" 
            to="/auth/login"
            @click="closeSlideover"
        />
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
                <div>
                    <UNavigationMenu 
                        :items="items" 
                        orientation="vertical"
                    />
                </div>
            </template>
        </USlideover>
    </div>
</template>

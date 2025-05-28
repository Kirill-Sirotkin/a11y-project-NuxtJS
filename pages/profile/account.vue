<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

definePageMeta({
    middleware: ['token-guard'],
});

const items = ref<NavigationMenuItem[][]>([[
    {
        label: 'Dashboard',
        to: '/profile',
    },
    {
        label: 'Reports',
        to: '/profile/reports'
    },
    {
        label: 'Account',
        to: '/profile/account'
    },
]])
</script>

<template>
    <div
        class="
            flex
            gap-2
            p-4
        "
    >
        <div 
            class="
                hidden
                w-32
                md:flex
            "
        >
            <UNavigationMenu 
                :items="items" 
                orientation="vertical"
            />
        </div>
        <div 
            class="
                flex
                w-8 h-7
                md:w-32 md:h-auto
                md:hidden
            "
        >
            <USlideover 
                title="Navigation"
                description="Available pages"
                side="left"
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
        <div>
            <div><span class="font-bold">Subscription: </span>Base</div>
            <div class="mt-2"><span class="font-bold">Role: </span>User</div>
        </div>
    </div>
</template>

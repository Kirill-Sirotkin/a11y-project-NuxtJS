<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

definePageMeta({
    middleware: ['auth-guard'],
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
        <div
            class="
                flex flex-col flex-1
                items-center
                gap-2
                md:flex-row
                md:items-stretch
            "
        >
            <UCard
                variant="subtle"
                class="
                    w-60
                "
            >
                <template #header>
                    <span class="font-bold">Compliance Score</span>
                </template>
                <div 
                    class="
                        flex flex-col
                        w-full  
                    "
                >
                    <div>
                        Your latest compliance score is:
                    </div>
                    <div class="font-bold text-2xl self-end">
                        98.6%
                    </div>
                </div>
                <template #footer>
                    <NuxtLink
                        to="/profile/reports"
                        class="
                            text-primary
                            underline
                        "
                    >
                        Learn more about scores
                    </NuxtLink>
                </template>
            </UCard>
            <UCard
                variant="subtle"
                class="
                    w-60
                "
            >
                <template #header>
                    <span class="font-bold">Latest report</span>
                </template>
                <div 
                    class="
                        flex flex-col
                        w-full  
                    "
                >
                    <div>
                        <span class="font-bold text-xl">
                            2
                        </span>
                        <span>severe violations</span>
                    </div>
                    <div>
                        <span class="font-bold text-xl">
                            7
                        </span>
                        <span>elements for manual review</span>
                    </div>
                </div>
                <template #footer>
                    <NuxtLink
                        to="/profile/reports"
                        class="
                            text-primary
                            underline
                        "
                    >
                        Learn more about WCAG standards
                    </NuxtLink>
                </template>
            </UCard>
            <UCard
                variant="subtle"
                class="
                    w-60
                "
            >
                <template #header>
                    <span class="font-bold">Remaing reports</span>
                </template>
                <div 
                    class="
                        flex flex-col
                        w-full  
                    "
                >
                    <div>
                        <span class="font-bold text-xl">
                            1
                        </span>
                        <span>report remaining this month</span>
                    </div>
                    <div>
                        <span>Next automatic report:</span>
                        <span class="font-bold text-xl">
                            01.06.2025
                        </span>
                    </div>
                </div>
                <template #footer>
                    <NuxtLink
                        to="/pricing"
                        class="
                            text-primary
                            underline
                        "
                    >
                        Upgrade to get more reports
                    </NuxtLink>
                </template>
            </UCard>
        </div>
    </div>
</template>
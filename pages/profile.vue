<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import type { Account } from '~/models/Account';

definePageMeta({
    layout: 'profile',
    middleware: ['token-guard'],
});

const accessTokenCookie = useCookie('access-token')
const config = useRuntimeConfig()
const { data, refresh } = await useFetch<Account>(`${config.public.serverUrl}/auth/profile-info`, {
    headers: {
        'Authorization': `Bearer ${accessTokenCookie.value}`,
    },
})

const items = ref<TabsItem[]>([
  {
    label: 'Reports',
    icon: 'material-symbols:document-search-outline',
    slot: 'reports' as const
  },
  {
    label: 'Account',
    icon: 'material-symbols:person-outline',
    slot: 'account' as const
  }
])
</script>

<template>
    <div 
        class="
            flex 
            p-4
        "
    >
        <UTabs 
            orientation="vertical" 
            variant="link" 
            :items="items" 
            class="
                hidden
                relative
                items-start
                w-full
                md:flex 
            "
            :ui="{ list: 'fixed' }"
        >
            <template #reports>
                <div class="ml-36">
                    <PagesProfileTabsReports :data="data?.reports || []" :refresh="refresh" />
                </div>
            </template>
            
            <template #account>
                <div class="ml-36">
                    <PagesProfileTabsAccount :data="data" />
                </div>
            </template>
        </UTabs>
        
        <UTabs 
            :items="items" 
            class="
                relative
                flex
                items-start 
                gap-4
                w-full
                md:hidden
            "
            :ui="{ 
                list: 'fixed w-auto left-1/2 -translate-x-1/2 z-49 shadow-xl', 
                trigger: 'px-8' 
            }"
        >
            <template #reports>
                <div class="mt-14">
                    <PagesProfileTabsReports :data="data?.reports || []" :refresh="refresh" />
                </div>
            </template>
            
            <template #account>
                <div class="mt-14">
                    <PagesProfileTabsAccount :data="data" />
                </div>
            </template>
        </UTabs>
    </div>
</template>
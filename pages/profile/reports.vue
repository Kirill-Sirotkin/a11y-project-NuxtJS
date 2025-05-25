<script setup lang="ts">
import type { NavigationMenuItem, FormSubmitEvent } from '@nuxt/ui';
import * as v from 'valibot'

definePageMeta({
    middleware: ['auth-guard'],
});

const schema = v.object({
    url: v.pipe(v.string(), v.url()),
})

type Schema = v.InferOutput<typeof schema>

const state = reactive({
    url: '',
})

const toast = useToast()
    async function onSubmit(event: FormSubmitEvent<Schema>) {
    toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
    console.log(event.data)
}

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
                gap-6
            "
        >  
            <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                <UFormField label="URL to analyze" name="url" help="Enter the full URL, including 'http://' or 'https://'">
                    <UInput v-model="state.url" placeholder="https://example.com" />
                </UFormField>

                <UButton type="submit">
                    Generate Report
                </UButton>
            </UForm>
            <div>
                <div>
                    <h2 class="text-lg font-semibold">Reports</h2>
                    <p class="text-sm text-neutral-500">Your generated reports will appear here.</p>
                </div>
                <ul class="mt-4 space-y-1">
                    <li class="w-full border-primary border-solid border-2 p-1 rounded-md"><span>24.05.2025 youtube.com </span><span class="text-amber-300">Pending</span></li>
                    <li class="w-full border-primary border-solid border-2 p-1 rounded-md"><span>23.05.2025 amazon.com </span><span class="text-green-500">Complete</span></li>
                    <li class="w-full border-primary border-solid border-2 p-1 rounded-md"><span>20.04.2025 google.com </span><span class="text-red-500">Failed</span></li>
                </ul>
            </div>
        </div>
    </div>
</template>

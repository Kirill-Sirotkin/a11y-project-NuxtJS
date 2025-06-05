<script setup lang="ts">
import * as v from 'valibot'
import type { FormSubmitEvent } from '@nuxt/ui'

const toast = useToast()
type Schema = v.InferOutput<typeof schema>

const schema = v.object({
    url: v.pipe(v.string(), v.url()),
})

const state = reactive({
    url: '',
})

const config = useRuntimeConfig()
async function onSubmit(event: FormSubmitEvent<Schema>) {
    toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
    console.log(event.data)

    // ------------------
    const accessToken = localStorage.getItem('access-token')
    const res: {     
        id: string;
        domain: string;
        fileName: string | null;
        passes: number | null;
        incompletePasses: number | null;
        violations: number | null;
        jobErrorMessage: string | null;
        status: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date; 
    } = await $fetch(`${config.public.serverUrl}/report`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
        body: {
            domain: event.data.url,
        }
    })
    console.log(res)
    // ------------------
}
</script>

<template>
    <UForm 
        :schema="schema" 
        :state="state" 
        class="
            flex flex-col
            items-center justify-center
            space-y-4
            md:items-start
        " 
        @submit="onSubmit"
    >
        <UFormField 
            label="URL" 
            name="url"
            help="Make sure the URL is full, including 'http://' or 'https://'" 
            required
        >
            <UInput 
                v-model="state.url"
                placeholder="https://example.com" 
                class="w-full" 
            />
        </UFormField>
        <div 
            class="
                flex 
                justify-center
            "
        >
            <UButton type="submit" class="rounded-full">
                Generate Report
            </UButton>
        </div>
    </UForm>
</template>

<script setup lang="ts">
const freeFeatures = ref<string[]>([
    'Up to 5 reports per month', 
    'Basic support', 
    'Access to summaries',
])
const premiumFeatures = ref<string[]>([
    'Unlimited reports per month', 
    'Advanced support', 
    'Access to summaries', 
    'Automatic monthly reports', 
    'AI summaries and tips',
])
</script>

<template>
    <div 
        class="
            flex flex-col
            gap-6
            p-4
            md:flex-row
            md:items-start
            md:justify-center
        "
    >
        <PagesPricingPricePlan 
            header-label="Free" 
            footer-label="Available by default"
            price="$ 0"
            :features="freeFeatures"
            :button-disabled="true"
            button-link="/"
        />
        <PagesPricingPricePlan 
            header-label="Premium" 
            footer-label="Coming soon"
            price="$ 15"
            :features="premiumFeatures"
            :button-disabled="true"
            button-link="/"
        />
    </div>
</template>

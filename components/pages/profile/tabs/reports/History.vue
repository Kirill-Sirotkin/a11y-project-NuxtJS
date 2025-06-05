<script setup lang="ts">
import type { Report } from '~/models/Report';

const props = defineProps({
    data: {
        type: [Array<Report>, null],
        required: true,
    },
});
</script>

<template>
    <ul class="w-full flex flex-col space-y-2 mt-2">
        <!-- <li v-for="report in data" :key="report.id" class="h-16 bg-blue-200">{{ report.id }}: {{ report.domain }}</li> -->
        <PagesProfileTabsReportsCard 
            v-for="report in props.data" :key="report.id" 
            :date="report.createdAt.toString()"
            :domain="report.domain"
            :status="report.status"
            :link="`/profile/report/${report.id}`"
        />
    </ul>
</template>
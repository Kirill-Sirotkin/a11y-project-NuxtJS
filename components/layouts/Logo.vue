<script setup lang="ts">
const props = defineProps({
    linkDisabled: {
        type: Boolean,
        default: false,
    },
    logoDisabled: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <NuxtLink 
        v-if="!props.linkDisabled"
        to="/" 
        class="
            flex 
            items-center gap-1
            text-lg font-bold
            xs:text-xl 
        "
    >
        <UIcon v-if="!props.logoDisabled" name="material-symbols:bookmark-check-outline-rounded" size="32" />
        <span>My<span class="text-primary"> AC </span>Help</span>
    </NuxtLink>
    
    <div 
        v-else 
        class="
            flex 
            items-center gap-1
            text-lg font-bold
            xs:text-xl 
        "
    >
        <UIcon v-if="!props.logoDisabled" name="material-symbols:bookmark-check-outline-rounded" size="32" />
        <span>My<span class="text-primary"> AC </span>Help</span>
    </div>
</template>
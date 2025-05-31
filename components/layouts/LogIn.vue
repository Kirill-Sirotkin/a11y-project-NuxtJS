<script setup lang="ts">
const props = defineProps({
    inverse: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div 
        v-if="!props.inverse"
        class="
            flex 
            items-center 
            gap-2
        "
    >
        <UButton label="Log In" to="/auth/login" />
        <LayoutsColorModeButton />
    </div>
    
    <div
        v-else  
        class="
            flex 
            items-center 
            gap-2
        "  
    >
        <LayoutsColorModeButton />
        <UButton label="Log In" to="/auth/login" />
    </div>
</template>
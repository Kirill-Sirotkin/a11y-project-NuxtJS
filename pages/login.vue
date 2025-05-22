<script setup lang="ts">
onMounted(()=> {
    const storedValue = localStorage.getItem('access-token')
    console.log('Loaded from localStorage access:', storedValue)
    const storedValue2 = localStorage.getItem('refresh-token')
    console.log('Loaded from localStorage refresh:', storedValue2)
})
</script>

<template>
    <div>
        LOGIN
    </div>
</template>
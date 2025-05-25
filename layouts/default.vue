<script setup lang="ts"></script>

<template>
    <div class="flex flex-col min-h-screen">
        <LayoutsDefaultHeader />
        <main class="flex-1">
            <slot />
        </main>
        <LayoutsDefaultFooter />
    </div>
</template>
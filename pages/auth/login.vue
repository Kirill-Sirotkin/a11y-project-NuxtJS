<script setup lang="ts">
definePageMeta({
    middleware: ['auth-guard'],
});

function login() {
    $fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        body: {
            email: 'jd@gmail.com',
            password: '123',
        }
    })
}

function oAuth() {
    window.location.href = 'http://localhost:3001/auth/google'
}
</script>

<template>
    <div>
        LOGIN
        <UButton @click="login">
            Login
        </UButton>
        <UButton @click="oAuth">
            O-Auth
        </UButton>
    </div>
</template>
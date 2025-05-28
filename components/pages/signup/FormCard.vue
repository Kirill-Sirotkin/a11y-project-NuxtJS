<script setup lang="ts">
function oAuth() {
    window.location.href = 'http://localhost:3001/auth/google'
}
</script>

<template>
    <UCard
        variant="subtle"
        class="
            w-80
            self-center
            shadow-lg
            md:w-112
        "
    >
        <template #header>
            <span 
                class="
                    font-bold
                    text-xl
                "
            >
                Sign<span class="text-primary"> Up</span>
            </span>
        </template>
        <PagesSignupForm />
        <template #footer>
            <div
                class="
                    flex
                    w-full
                    justify-center
                "
            >
                <UButton
                    variant="outline"
                    to="/auth/login"
                    class="
                        flex
                        justify-center
                        w-full
                        text-neutral
                        rounded-full
                    " 
                >
                    Already have an account? <span class="text-primary">Log In</span>
                </UButton>
            </div>
        </template>
    </UCard>
    <UButton
        label="Sign up with Google"
        icon="ci:google"
        variant="subtle"
        class="
            flex self-center
            justify-center items-center
            shadow-md
            mt-2
            w-78
            md:w-110
        "
        @click="oAuth"
    />
</template>

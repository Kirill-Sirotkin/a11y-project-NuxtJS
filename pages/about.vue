<script setup lang="ts"></script>

<template>
    <div class="flex flex-col p-4 overflow-x-hidden">  
        <section class="pr-10 fade-in-left">
            <h1 class="text-4xl md:text-7xl font-bold">
                About Us
            </h1>
            <p class="text-lg md:text-2xl pl-4 md:pl-10 pt-4 text-justify">
                Welcome to <span class="font-bold">My <span class="text-primary">AC</span> Help!</span> We are dedicated to bringing Accessibility to the web. Our mission is to provide tools and resources that help make the internet more accessible for everyone, regardless of their abilities or disabilities. We believe that everyone should have equal access to information and services online, and we are committed to making that a reality.
            </p>
        </section>
        <section class="mt-10 pr-10 fade-in-right">
            <h1 class="text-4xl md:text-7xl font-bold">
                Our Values
            </h1>
            <p class="text-lg md:text-2xl pl-4 md:pl-10 pt-4 text-justify">
                We value transparency, clarity, and simplicity in everything we do. We strive to create a user-friendly experience that is easy to navigate and understand. Our team is passionate about accessibility and is constantly working to improve our tools and resources to better serve our users.
            </p>
        </section>
        <section class="mt-10 mb-10 pr-10 fade-in-left">
            <h1 class="text-4xl md:text-7xl font-bold">
                Why It's Important
            </h1>
            <p class="text-lg md:text-2xl pl-4 md:pl-10 pt-4 text-justify">
                Accessibility is not just a legal requirement; it is a moral obligation. The internet should be a place where everyone can participate, regardless of their abilities. By making our tools and resources accessible, we are helping to create a more inclusive online environment for all.    
            </p>
        </section>
    </div>
</template>

<style lang="css" scoped>
.fade-in-left {
    animation: fadeSlideLeft 0.8s ease-out both;
}
.fade-in-right {
    animation: fadeSlideRight 0.8s ease-out both;
}

@keyframes fadeSlideLeft {
    from {
        opacity: 0;
        transform: translateX(-2rem); /* Instead of -50px */
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeSlideRight {
    from {
        opacity: 0;
        transform: translateX(2rem); /* Instead of 50px */
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>
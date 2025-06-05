<script setup lang="ts"></script>

<template>
    <div class="flex flex-col py-4 px-10 overflow-x-hidden">  
        <section class="pr-10 fade-in-left">
            <h1 class="text-4xl md:text-7xl font-bold">
                Making the Web<br>Accessible for Everyone
            </h1>
            <p class="text-lg md:text-2xl pl-4 md:pl-10 pt-4 text-justify">
                We believe that digital accessibility isn’t a luxury, it’s a right. Our mission is to help businesses, freelancers, and developers create websites that everyone can use, regardless of ability.
            </p>
        </section>
        <section class="mt-10 pr-10 fade-in-right">
            <h1 class="text-3xl md:text-7xl font-bold">
                Our Story
            </h1>
            <p class="text-lg md:text-2xl pl-4 md:pl-10 pt-4 text-justify">
                This project started with a simple question: <br><span class="italic">Why is it so hard for small businesses to know if their websites are accessible?</span><br><br>As accessibility laws tighten across the EU, we realized that most tools are too complex, too technical, or too expensive. So, we set out to build a scanner that’s simple, fast, and actually helpful, even if you're not a developer.
            </p>
        </section>
        <section class="mt-10 pr-10 fade-in-left">
            <h1 class="text-3xl md:text-7xl font-bold">
                Who We Are
            </h1>
            <p class="text-lg md:text-2xl pl-4 md:pl-10 pt-4 text-justify">
                We’re a small team based in Helsinki, Finland, combining tech, design, and accessibility know-how to bring a cleaner, more user-friendly approach to compliance.    
            </p>
        </section>
        <section class="mt-10 mb-10 pr-10 fade-in-right">
            <h1 class="text-3xl md:text-7xl font-bold">
                Why It Matters
            </h1>
            <p class="text-lg md:text-2xl pl-4 md:pl-10 pt-4 text-justify">
                Accessible websites mean more visitors, better user experience, and legal peace of mind. We're here to make sure no one gets left behind and that no business gets fined for something they can easily fix.    
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
<script setup lang="ts"></script>

<template>
    <UContainer class="flex flex-col gap-16 md:gap-32 py-16 md:w-full">
        <h1 class="hidden text-5xl font-bold md:flex flex-col gap-2 items-center justify-center">
            <p class="shadow-md">TEST YOUR WEBSITE ACCESSIBILITY</p><p class="shadow-md">COMPLIENCE IN 60 SECONDS</p>
        </h1>
        <h1 class="md:hidden text-xl font-bold flex flex-col gap-2 items-center justify-center">
            <p class="shadow-md text-center">TEST YOUR WEBSITE ACCESSIBILITY COMPLIENCE IN 60 SECONDS</p>
        </h1>
        <UContainer class="flex flex-col md:flex-row gap-4 items-stretch md:w-full">
            <UCard variant="subtle" class="flex-1 bg-primary shadow-2xl text-xs md:text-lg min-w-0">
                <template #header>
                    <div class="flex items-center gap-2">
                        <UIcon name="material-symbols:timer-outline-rounded" />
                        <p class="font-bold">Quick</p>
                    </div>
                </template>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non reprehenderit consequatur asperiores?</p>
            </UCard>
            <UCard variant="subtle" class="flex-1 bg-primary shadow-2xl text-xs md:text-lg min-w-0">
                <template #header>
                    <div class="flex items-center gap-2">
                        <UIcon name="material-symbols:check-circle-outline-rounded" />
                        <p class="font-bold">Easy</p>
                    </div>
                </template>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem aspernatur reprehenderit inventore minima? Dolore fugiat maxime dicta voluptate reiciendis iusto blanditiis ducimus saepe atque.</p>
            </UCard>
            <UCard variant="subtle" class="flex-1 bg-primary shadow-2xl text-xs md:text-lg min-w-0">
                <template #header>
                    <div class="flex items-center gap-2">
                        <UIcon name="material-symbols:attach-money-rounded" />
                        <p class="font-bold">Affordable</p>
                    </div>
                </template>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit laborum voluptate necessitatibus? Laudantium consequatur maiores natus, itaque animi reprehenderit neque, recusandae vero sint qui maxime doloribus dignissimos facere dicta quia asperiores ratione.</p>
            </UCard>
            <UCard variant="subtle" class="flex-1 bg-primary shadow-2xl text-xs md:text-lg min-w-0">
                <template #header>
                    <div class="flex items-center gap-2">
                        <UIcon name="material-symbols:document-search-outline-rounded" />
                        <p class="font-bold">WCAG 2.2</p>
                    </div>
                </template>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem aspernatur reprehenderit inventore minima? Dolore fugiat maxime dicta voluptate reiciendis iusto blanditiis ducimus saepe atque.</p>
            </UCard>
        </UContainer>
    </UContainer>
</template>

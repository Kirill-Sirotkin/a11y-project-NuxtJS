<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    readMore: {
        type: String,
        required: true,
    },
    postLink: {
        type: String,
        required: true,
    },
    thumbnailLinkTop: {
        type: String,
        required: true,
    },
    thumbnailLinkBottom: {
        type: String,
        required: true,
    },
});
const { title, date, readMore, postLink, thumbnailLinkTop, thumbnailLinkBottom } = props;
</script>

<template>
    <div 
        class="
            max-w-full w-128
            overflow-hidden
            rounded-xl
            border-2
            shadow-lg
        "
    >
        <NuxtImg 
            :src="thumbnailLinkTop" 
            class="
                w-full 
                max-h-32 
                object-cover
                shadow-xl
            " 
        />
        <div 
            class="
                flex flex-col
                gap-2
                p-4 
                inset-shadow-sm
            "
        >
            <div>
                {{ date }}
            </div>
            <div class="font-bold text-2xl">
                {{ title }}
            </div>
            <div class="text-lg">
                <slot name="description"></slot>
                <span class="font-bold">...</span>
            </div>
            <div class="font-bold mt-4">
                {{ readMore }}
            </div>
            <NuxtLink 
                :to="postLink"
                target="_blank"
                class="
                    flex flex-col
                    gap-2
                    w-full
                    bg-primary
                    p-4
                    rounded-md
                "
            >
                <div 
                    class="
                        text-neutral-100
                        underline
                        text-ellipsis
                        whitespace-nowrap 
                        overflow-hidden 
                        dark:text-neutral-900
                    "
                >
                    {{ postLink }}
                </div>
                <NuxtImg 
                    :src="thumbnailLinkBottom" 
                    class="
                        w-full 
                        max-h-24
                        object-cover
                        shadow-xl
                    "  
                />
            </NuxtLink>
        </div>
    </div>
</template>
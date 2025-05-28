<script setup lang="ts"></script>

<template>
    <div 
        class="
            flex flex-col
            gap-6
            p-4
            md:flex-row
            md:items-start
            md:justify-center
        "
    >
        <PagesBlogCard 
            title="What's new in WCAG 2.2." 
            date="28.05.2025" 
            read-more="Read more about it on the WCAG website:" 
            post-link="https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/" 
            thumbnail-link-top="/images/article_0_wcag_thumbnail_2.png" 
            thumbnail-link-bottom="/images/article_0_wcag_thumbnail_1.png"
        >
            <template #description>
                This page lists the new success criteria in WCAG 2.2, with:
                <br>
                - A brief introduction of what to do and why it’s important
                <br>
                - Quotes from personas to help you understand some aspects of the success criteria
                <br>
            </template>
        </PagesBlogCard>
    </div>
</template>

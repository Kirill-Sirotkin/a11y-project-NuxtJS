<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

const items = ref<AccordionItem[]>([
  {
    label: 'What does the scanner check?',
    content: 'The scanner checks for common Accessibility issues such as missing alt text, color contrast problems, and ARIA roles.'
  },
  {
    label: 'Is this compliant with WCAG 2.2?',
    content: 'Yes, the scanner is based on the Axe-Core algorithm, which currently supports the WCAG 2.2 standard.'
  },
  {
    label: 'Is my data safe? Do you store my scans?',
    content: 'Yes. We store your scans on our servers, so that you can have access to them at any time. We do not share your scans or any other data with anyone.'
  },
  {
    label: 'Can I scan sites that I do not own?',
    content: 'Yes, it\'s possoble to scan any website with a valid URL. However, we recommend scanning only sites that you own or have permission to scan.'
  },
  {
    label: 'What does my score mean?',
    content: 'Your score is a measure of how well your site complies with the WCAG 2.2 standard. The higher the score, the better the compliance.'
  },
  {
    label: 'Is this tool free? What will the paid version include?',
    content: 'The tool is free to use. The paid version includes unlimited scans, advanced reporting and monthly reports.'
  },
  {
    label: 'Who is this for?',
    content: 'The tool is primarily for small business owners and web developers who want to ensure their websites are accessible to all users.'
  },
  {
    label: 'How do I fix WCAG violations?',
    content: 'Our reports provide helpful tips on how to fix common WCAG violations. You can also refer to the official WCAG documentation for more information. Keep in mind that some violations cannot be checked automatically, and require manual review.'
  },
])
</script>

<template>
    <div class="py-4 px-4 md:px-20">
        <div class="font-bold text-2xl md:text-4xl mb-2">FAQ</div>
        <UAccordion type="multiple" :items="items" />
    </div>
</template>

<template>
    <!-- see https://github.com/tailwindlabs/tailwindcss-typography -->
    <article class="prose prose-slate max-w-none" v-html="props.content"></article>
</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps(['content']);
</script>


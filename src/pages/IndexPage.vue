<template>
    <div class="grid-cols-2 gap-4">

    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const slide = ref(1);
    const autoplay = ref(true);

    defineOptions({
        name: 'IndexPage',
    });
</script>




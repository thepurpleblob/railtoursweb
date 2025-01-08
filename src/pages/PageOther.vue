<template>
    <main>
        <div class="text-justify md:mx-auto md:px-8 px-1 py-3 border-b-2 mb-4 max-w-5xl">
            <h1 class="font-bold text-4xl">{{ title }}</h1>
            <EditorContent :content="content"></EditorContent>
        </div>
    </main>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import EditorContent from '@/components/EditorContent.vue';
    import axios from 'axios';
    import { toast, type ToastOptions } from 'vue3-toastify';

    const route = useRoute();
    const content = ref('');
    const title = ref('');

    onMounted(() => {
        const endpoint = import.meta.env.VITE_ENDPOINT;

        const slug = route.params.slug as string;
        const filter = '/Page?filter={ "status": {"_eq": "published"}, "slug": {"_eq": "' + slug + '"}}';
        axios.get(endpoint + filter)
        .then(result => {
            const pages = result.data.data;
            if (pages.length > 0) {
                const page = pages[0];
                content.value = page.Content;
                title.value = page.Title;
            } else {
                toast('Missing page');
            }
        })
        .catch(error => {
            window.console.error(error);
            toast('Server error');
        });
    });
</script>
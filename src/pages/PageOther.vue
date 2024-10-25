<template>
    <q-page class="q-pa-lg">
        <h4>{{ title }}</h4>
        <div v-html="content"></div>
    </q-page>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import axios from 'axios';
    import { Notify } from 'quasar';

    const route = useRoute();
    const content = ref('');
    const title = ref('');

    onMounted(() => {
        const endpoint = process.env.ENDPOINT;
        window.console.log(endpoint);

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
                Notify.create({
                    message: 'Missing page'
                });
            }
        })
        .catch(error => {
            window.console.error(error);
            Notify.create({
                message: 'Server error'
            })
        });
    });
</script>
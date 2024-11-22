<template>
    <q-page v-if="!loading" class="q-pa-lg">
        <div class="row justify-evenly">
            <q-card rounded class="rt-card-full">
                <q-card-section>
                    <q-banner v-if="notours" class="text-white bg-red">
                        No tours match the supplied code.
                    </q-banner>

                    <div v-if="!notours">
                        <h4>{{ title }}</h4>

                        <h5>{{ date }}</h5>

                        <div v-if="!ispage" v-html="description"></div>

                        <q-banner v-if="!ispage" class="q-mt-lg text-white bg-orange">
                            There is currently no detailed information about this tour. Please check back soon.
                        </q-banner>

                        <div v-if="ispage" v-html="page"></div>
                    </div>
                </q-card-section>
            </q-card>
        </div>
    </q-page>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import axios from 'axios';
    import { Notify } from 'quasar';

    // Tour object
    interface Tour {
        Title: string;
        Description: string;
        Page: string;
        Tourdate: Date;
        Showpage: Boolean;
    }

    const loading = ref(true);
    const title = ref('');
    const date = ref('');
    const description = ref('');
    const page = ref('');
    const ispage = ref(true);
    const notours = ref(false);
    const moretour = ref({} as Tour);

    const route = useRoute();

    onMounted(() => {
        const endpoint = process.env.ENDPOINT;

        loading.value = true;
        const code = route.params.code as string;

        // Select published tours
        const filter = {
            Code: {
                _eq: code
            }
        };

        const select = '/Tour?filter=' + JSON.stringify(filter);
        axios.get(endpoint + select)
        .then(result => {
            const tours = result.data.data;
            notours.value = tours.length == 0;
            if (!notours.value) {
                const tour = tours[0];
                ispage.value = (tour.Page != null) && (tour.Page.trim().length !== 0);
                title.value = tour.Title;
                const tourdate = new Date(tour.Tourdate);
                date.value = tourdate.toDateString();
                description.value = tour.Description;
                page.value = tour.Page;
            }
            loading.value = false;

        })
        .catch(error => {
            window.console.error(error);
            Notify.create({
                message: 'Server error'
            })
        });
    });
</script>

<style lang="sass">
.rt-card
    width: 700px

.rt-card-full
    max-width: 700px
</style>
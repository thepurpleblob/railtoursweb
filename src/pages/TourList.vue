<template>
    <q-page v-if="!loading" class="q-pa-lg">
        <q-banner v-if="notours" rounded class="bg-orange text-white">
            <b>There are currently no SRPS railtours available to book.</b>
        </q-banner>

        <div v-if="!notours">
            <div v-for="tour in tours" class="row justify-evenly">
                <q-card rounded class="rt-card q-mb-md">

                    <q-card-section>
                        <div class="text-h6">{{ tour.Title }}</div>
                        <div>{{ tour.Description }}</div>
                        <br />
                        <div><b>{{ tour.Tourdate.toDateString() }}</b></div>
                        <div v-if="tour.Showpage" class="q-mt-md">
                            <q-btn color="primary" label="Find out more..." @click="findoutmore(tour)"/>
                        </div>
                        <div v-else class="q-mt-md">
                            Full details coming soon.
                        </div>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import axios from 'axios';
    import { Notify } from 'quasar';

    // Tour object
    interface Tour {
        Code: string;
        Title: string;
        Description: string;
        Page: string;
        Tourdate: Date;
        Showpage: Boolean;
    }

    const loading = ref(true);
    const notours = ref(true);
    const tours = ref([] as Tour[]);
    const router = useRouter();

    onMounted(() => {
        const endpoint = process.env.ENDPOINT;

        loading.value = true;

        // Select published tours
        const filter = {
            status: {
                _eq: "published"
            }
        };

        //const select = '/Tour?filter={ "status": {"_eq": "published"}}';
        const select = '/Tour?filter=' + JSON.stringify(filter) + '&sort=Tourdate';
        axios.get(endpoint + select)
        .then(result => {
            const mytours = result.data.data;
            notours.value = mytours.length == 0;
            tours.value = mytours;
            loading.value = false;

            tours.value.forEach(tour => {
                tour.Tourdate = new Date(tour.Tourdate);
                tour.Showpage = (tour.Page != null) && (tour.Page.trim().length !== 0);
            });
        })
        .catch(error => {
            window.console.error(error);
            Notify.create({
                message: 'Server error'
            })
        });
    });

    /**
     * Find out more clicked
     */
    function findoutmore(tour: Tour) {
        const code = tour.Code;
        router.push({
            path: '/tourpage/' + code,
        });
    }
</script>

<style lang="sass">
.rt-card
    width: 700px

.rt-card-full
    max-width: 700px
</style>
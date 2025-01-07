<template>
    <main v-if="!loading" class="q-pa-lg text-justify md:mx-auto md:px-8 px-1 py-3 border-b-2 mb-4 max-w-5xl">
        <div v-if="notours" role="alert" class="alert alert-warning">
            <b>There are currently no SRPS railtours available to book.</b>
        </div>

        <div v-if="!notours">
            <div v-for="tour in tours" class="row justify-evenly">
                <div class="card shadow-xl">
                    <div class="card-body">
                        <h4 class="card-title">{{ tour.Title }}</h4>
                        <article class="prose max-w-none">
                            {{ tour.Description }}
                        </article>
                        <div><font-awesome-icon class="mr-2" icon="calendar-days" size="1x"/> <b>{{ tour.Tourdate.toDateString() }}</b></div>
                        <div v-if="tour.Showpage" class="q-mt-md">
                            <button class="btn btn-accent" @click="findoutmore(tour)">Find out more...</button>
                        </div>
                        <div v-else class="q-mt-md">
                            Full details coming soon.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import axios from 'axios';
    import { toast, type ToastOptions } from 'vue3-toastify';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

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
        const endpoint = import.meta.env.VITE_ENDPOINT;

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
            toast('Server error');
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

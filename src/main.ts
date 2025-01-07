import './assets/index.css'

/* import the fontawesome stuff */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(
    faSquareFacebook,
    faSquareXTwitter,
    faSquareInstagram,
    faSquareEnvelope,
    faSquarePhone,
    faCalendarDays
);


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const app = createApp(App)

app.use(router)

app.use(
    Vue3Toastify,
    {
        autoClose: 3000,
        // ...
    } as ToastContainerOptions,
)

app.mount('#app')

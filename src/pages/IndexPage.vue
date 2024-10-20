<template>
  <q-carousel
    animated
    v-model="slide"
    arrows
    infinite
    height="800px"
    :autoplay="autoplay"
  >
    <q-carousel-slide :name="1" img-src="rt1.jpg">
      <InMaintenance></InMaintenance>
    </q-carousel-slide>
    <q-carousel-slide :name="2" img-src="rt2.jpg">
      <InMaintenance></InMaintenance>
    </q-carousel-slide>
    <q-carousel-slide :name="3" img-src="rt3.jpg">
      <InMaintenance></InMaintenance>
    </q-carousel-slide>
    <q-carousel-slide :name="4" img-src="rt4.jpg">
      <InMaintenance></InMaintenance>
    </q-carousel-slide>
    <q-carousel-slide :name="5" img-src="rt5.jpg">
      <InMaintenance></InMaintenance>
    </q-carousel-slide>
    <q-carousel-slide :name="6" img-src="rt6.jpg">
      <InMaintenance></InMaintenance>
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InMaintenance from '../components/InMaintenance.vue';

const slide = ref(1);
const autoplay = ref(true);

defineOptions({
  name: 'IndexPage',
});
</script>


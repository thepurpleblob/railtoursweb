<template>
    <q-responsive :ratio="1" class="rt-slide">
        <q-carousel
            animated
            v-model="slide"
            arrows
            infinite
            height="800px"
            :autoplay="autoplay"
        >

          <q-carousel-slide v-for="i in 6" :name="i" :img-src="'rt' + i +'.jpg'">
              <!-- <InMaintenance></InMaintenance> -->
          </q-carousel-slide>

        </q-carousel>
    </q-responsive>
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

<style lang="sass">
.rt-slide
    width: 100%
</style>


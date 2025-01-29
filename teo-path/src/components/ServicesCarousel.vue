<template>
  <div class="navbar-overlay">
    <TeoPathNavBar :scrolledPastCarousel="scrolledPastCarousel"/>
  </div>
  <b-carousel
      id="carousel"
      :controls="true"
      :indicators="true"
      background="#ababab"
      :interval="5000"
      img-width="1024"
      img-height="480"
      class="mb-4"
  >
    <!-- Első dia -->
    <b-carousel-slide
        :img-src="slides[0].imgSrc"
        :caption="slides[0].caption"
        :text="slides[0].text"
        active="true"
    ></b-carousel-slide>

    <!-- Második dia -->
    <b-carousel-slide
        :img-src="slides[1].imgSrc"
        :caption="slides[1].caption"
        :text="slides[1].text"
    ></b-carousel-slide>

    <!-- Harmadik dia -->
    <b-carousel-slide
        :img-src="slides[2].imgSrc"
        :caption="slides[2].caption"
        :text="slides[2].text"
    ></b-carousel-slide>
  </b-carousel>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TeoPathNavBar from "@/components/TeoPathNavBar.vue";

export default defineComponent({
  name: "ServicesCarousel",
  components: {TeoPathNavBar},
  data() {
    return {
      slides: [
        {
          imgSrc: "https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          caption: "Első Dia",
          text: "Ez az első dia leírása.",
        },
        {
          imgSrc: "https://images.pexels.com/photos/347926/pexels-photo-347926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          caption: "Második Dia",
          text: "Ez a második dia leírása.",
        },
        {
          imgSrc: "https://images.pexels.com/photos/635705/pexels-photo-635705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          caption: "Harmadik Dia",
          text: "Ez a harmadik dia leírása.",
        },
      ],
    };
  },
  props: {
    scrolledPastCarousel: {
      type: Boolean,
      required: true
    }
  },
});
</script>

<style scoped>
#carousel {
  height: 480px;
  margin: 0 auto;
}

.navbar-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10; /* Magasabb, hogy a carousel felett legyen */
}
</style>

<script lang="ts">
import {computed, defineComponent, onBeforeMount, ref, watch} from "vue";
import TeoPathNavBar from "@/components/TeoPathNavBar.vue";
import {useI18n} from "vue-i18n";
import CalendlyPopup from "@/components/CalendlyPopup.vue";

export default defineComponent({
  name: "ServicesCarousel",
  components: {CalendlyPopup, TeoPathNavBar},
  setup() {
    const { t, locale } = useI18n();
    const activeSlide = ref(0);

    const slides = ref<Array<{
      backgroundImg: string;
      slideImg: string;
      caption: string;
      text: string;
      buttonText: string;
    }>>([]);

    const getSlides = () => [
      {
        backgroundImg: require("@/assets/header-picture-background.png"),
        slideImg: require("@/assets/logo-image-background.jpg"),
        caption: t("carousel.slide1.caption"),
        text: t("carousel.slide1.text"),
        buttonText: t("carousel.slide1.buttonText"),
      },
      {
        backgroundImg: require("@/assets/header-picture-background.png"),
        slideImg: require("@/assets/header-picture-logo.png"),
        // slideImg: require("@/assets/profile-transparent.png"),
        caption: t("carousel.slide2.caption"),
        text: t("carousel.slide2.text"),
        buttonText: t("carousel.slide2.buttonText"),
      }
    ];

    onBeforeMount(() => {
      slides.value = getSlides();
    });

    watch(locale, () => {
      slides.value = getSlides();
    });

    return { slides, activeSlide };
  },
  props: {
    scrolledPastCarousel: {
      type: Boolean,
      required: true
    }
  },
});
</script>

<template>
  <div class="navbar-overlay">
    <TeoPathNavBar :scrolledPastCarousel="scrolledPastCarousel"/>
  </div>
  <b-carousel
      id="carousel"
      :controls="true"
      :indicators="false"
      background="#ababab"
      :interval="5000"
      img-height="768"
      class="mb-4"
      v-model="activeSlide"
  >
    <b-carousel-slide
        v-for="(slide, index) in slides"
        :key="index"
        :img-src="slide.backgroundImg"
        :active="index === activeSlide"
    >
      <!-- Web view -->
      <div class="d-none d-md-flex carousel-caption web">
        <div style="display: flex">
          <img :src="slide.slideImg" alt="Slide image" class="slide-image"/>
          <div class="slide-content">
            <div>
              <h3>{{ slide.caption }}</h3>
              <p>{{ slide.text }}</p>
              <CalendlyPopup />
            </div>
          </div>
        </div>
      </div>
      <!-- Mobile view -->
      <div class="d-flex flex-column d-md-none carousel-caption mobile slide-container-mobile">
        <img :src="slide.slideImg" alt="Slide image" class="slide-image-mobile"/>
        <div class="slide-content-mobile">
          <h3>{{ slide.caption }}</h3>
          <p>{{ slide.text }}</p>
          <CalendlyPopup />
<!--          <button class="carousel-button" @click="openCalendlyPopup">{{ slide.buttonText }}</button>-->
        </div>
      </div>
    </b-carousel-slide>
  </b-carousel>
</template>

<style scoped>
#carousel {
  height: 748px;
  margin: 0 auto;
}

.navbar-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}

.carousel-caption.web {
  bottom: 20rem !important;
  left: 00% !important;
}

.carousel-caption.mobile {
  bottom: 20rem !important;
}

.carousel-button {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #FFD700;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.carousel-button:hover {
  background-color: #DAA520;
}

.slide-image {
  width: 300%;
  object-fit: cover;
}

.slide-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background: transparent;
  color: white;
}

.slide-container-mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.slide-image-mobile {
  width: 200%;
  height: auto;
  object-fit: cover;
}

.slide-content-mobile {
  background: transparent;
  color: white;
}
</style>

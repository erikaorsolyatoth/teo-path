<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import TeoPathNavBar from "@/components/TeoPathNavBar.vue";

export default defineComponent({
  setup() {
    const { locale } = useI18n();

    const changeLanguage = (lang: string) => {
      locale.value = lang;
    };

    return { changeLanguage };
  },
  components: {
    TeoPathNavBar,
  }
});

</script>

<template>

  <div>
    <b-img :src="require('./assets/logo-image-background.jpg')" fluid-grow alt="People in a seating image"></b-img>
  </div>

  <TeoPathNavBar />

  <router-view/>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

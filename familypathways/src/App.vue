<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import CalendlyPopup from "./components/CalendlyPopup.vue";

export default defineComponent({
  setup() {
    const { t, locale } = useI18n();

    const changeLanguage = (lang: string) => {
      locale.value = lang;
    };

    return { t, changeLanguage };
  },
  components: {
    CalendlyPopup,
  }
});
</script>

<template>
  <button @click="changeLanguage('en')">English</button>
  <button @click="changeLanguage('hu')">Magyar</button>
  <CalendlyPopup/>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

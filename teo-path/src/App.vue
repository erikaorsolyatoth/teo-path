<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import TeoPathNavBar from "@/components/TeoPathNavBar.vue";
import ScrollToTopArrow from "@/components/ScrollToTopArrow.vue";
import AboutMeView from "@/views/about/AboutMeView.vue";
import ExperiencesView from "@/views/about/ExperiencesView.vue";
import StudiesView from "@/views/about/StudiesView.vue";
// Not used for the time being
// import IssuesView from "@/views/IssuesView.vue";
// Not used for the time being
// import NewsEventsView from "@/views/NewsEventsView.vue";
import ContactsView from "@/views/ContactsView.vue";

export default defineComponent({
  setup() {
    const route = useRoute();

    const isHomeView = computed(() => route.name === 'Home');

    const { locale } = useI18n();

    const changeLanguage = (lang: string) => {
      locale.value = lang;
    };

    return { isHomeView, changeLanguage };
  },
  components: {
    ContactsView,
    // Not used for the time being
    // NewsEventsView,
    // Not used for the time being
    // IssuesView,
    StudiesView,
    ExperiencesView,
    AboutMeView,
    ScrollToTopArrow,
    TeoPathNavBar,
  }
});

</script>

<template>

  <TeoPathNavBar />

  <div v-if="isHomeView">

    <div>
      <b-img :src="require('./assets/logo-image-background.jpg')" fluid alt="People in a seating image"></b-img>
    </div>

    <section id="aboutMe">
      <AboutMeView/>
    </section>
    <section id="studies">
      <StudiesView/>
    </section>
    <section id="experiences">
      <ExperiencesView/>
    </section>
<!--  Not used for the time being     -->
<!--    <section id="issues">-->
<!--      <IssuesView/>-->
<!--    </section>-->
<!--  Not used for the time being     -->
<!--    <section id="newsEvents">-->
<!--      <NewsEventsView/>-->
<!--    </section>-->
    <section id="contacts">
      <ContactsView/>
    </section>

    <ScrollToTopArrow/>

  </div>

  <router-view v-else />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.section-padding {
  padding-top: 50px;
  padding-right: 20px;
  padding-bottom: 50px;
  padding-left: 20px;
  text-align: left;
}
</style>

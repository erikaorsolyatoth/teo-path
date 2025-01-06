<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import TeoPathNavBar from "@/components/TeoPathNavBar.vue";
import LogoImageBackground from "@/components/LogoImageBackground.vue";
import ScrollToTopArrow from "@/components/ScrollToTopArrow.vue";

export default defineComponent({
  setup() {
    const { locale } = useI18n();

    const changeLanguage = (lang: string) => {
      locale.value = lang;
    };

    return { changeLanguage };
  },
  components: {
    ScrollToTopArrow,
    LogoImageBackground,
    TeoPathNavBar,
  }
});

</script>

<template>

  <TeoPathNavBar />

  <div>
    <b-img :src="require('./assets/logo-image-background.jpg')" fluid-grow alt="People in a seating image"></b-img>
  </div>

  <section id="aboutMe">
    <div>
      <h1>{{ $t('aboutMeText') }}</h1>
      <LogoImageBackground/>
    </div>
  </section>
  <section id="experiences">
    <div>
      <h1>{{ $t('experiencesText') }}</h1>
      <LogoImageBackground/>
    </div>
  </section>
  <section id="studies">
    <div>
      <h1>{{ $t('studiesText') }}</h1>
      <LogoImageBackground/>
    </div>
  </section>
  <section id="issues">
    <div>
      <h1>{{ $t('issuesText') }}</h1>
      <LogoImageBackground/>
    </div>
  </section>
  <section id="newsEvents">
    <div>
      <h1>{{ $t('newsEventsText') }}</h1>
      <LogoImageBackground/>
    </div>
  </section>
  <section id="services">
    <div>
      <h1>{{ $t('servicesText') }}</h1>
      <LogoImageBackground/>
    </div>
  </section>
  <section id="contacts">
    <div>
      <h1>{{ $t('contactsText') }}</h1>
      <LogoImageBackground/>
    </div>
  </section>

<!--  <router-view/>-->

  <ScrollToTopArrow/>

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

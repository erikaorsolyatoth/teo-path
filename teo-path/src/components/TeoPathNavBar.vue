<template>
  <BNavbar toggleable="lg" type="light" :variant="scrolledPastCarousel ? 'dark' : 'transparent'" class="px-4 sticky-top" >
    <BNavbarBrand href="#" @click="scrollToTop">TeoPath</BNavbarBrand>

    <BNavbarToggle target="nav-collapse" />

    <BCollapse id="nav-collapse" isNav>

      <BNavbarNav>
        <BNavItem :to="{ path: '/', hash: '#aboutMe' }" class="mx-2">
          {{ t('sectionAboutMe.aboutMe') }}
        </BNavItem>
        <BNavItem :to="{ path: '/', hash: '#studies' }" class="mx-2">
          {{ t('sectionStudies.studies') }}
        </BNavItem>
        <BNavItem :to="{ path: '/', hash: '#experiences' }" class="mx-2">
          {{ t('sectionExperiences.experiences') }}
        </BNavItem>
<!--        <BDropdown :text="t('about')" variant="primary" class="mx-2">-->
<!--          <BDropdownItem :to="{ path: '/', hash: '#aboutMe' }">-->
<!--            {{ t('sectionAboutMe.aboutMe') }}-->
<!--          </BDropdownItem>-->
<!--          <BDropdownItem :to="{ path: '/', hash: '#studies' }">-->
<!--            {{ t('sectionStudies.studies') }}-->
<!--          </BDropdownItem>-->
<!--          <BDropdownItem :to="{ path: '/', hash: '#experiences' }">-->
<!--            {{ t('sectionExperiences.experiences') }}-->
<!--          </BDropdownItem>-->
<!--        </BDropdown>-->

<!--  Not used for the time being     -->
<!--        <BNavItem :to="{ path: '/', hash: '#issues' }" class="mx-2">-->
<!--          {{ t('sectionIssues.issues') }}-->
<!--        </BNavItem>-->
        <BNavItem :to="{ name: 'Services' }" class="mx-2">
          {{ t('sectionServices.services') }}
        </BNavItem>
<!--  Not used      -->
<!--        <BNavItem :to="{ name: 'BabyCounseling' }" class="mx-2">-->
<!--          {{ t('babyCounselingView.babyCounseling') }}-->
<!--        </BNavItem>-->
<!--  Not used for the time being     -->
<!--        <BNavItem :to="{ path: '/', hash: '#newsEvents' }" class="mx-2">-->
<!--          {{ t('sectionNewsEvents.newsEvents') }}-->
<!--        </BNavItem>-->
        <BNavItem :to="{ path: '/', hash: '#contacts' }" class="mx-2">
          {{ t('sectionContacts.contacts') }}
        </BNavItem>
      </BNavbarNav>

      <BNavbarNav class="ms-auto">
        <BNavItem>
          <BButton variant="light" class="mx-2" @click="openCalendlyPopup">
            {{ t('navBar.booking') }}
          </BButton>
        </BNavItem>

<!--        <BDropdown :text="t('navBar.language.language')" variant="primary" class="mx-2">-->
        <BDropdown variant="primary" class="language-dropdown mx-2" menu-class="dropdown-transparent">
          <template #button-content>
            <img :src="currentFlag" alt="Language" class="flag-icon" />
          </template>
          <BDropdownItem @click="changeLanguage('en')"><img src="@/assets/flags/en_flag.png" alt="English" class="flag-icon" /></BDropdownItem>
          <BDropdownItem @click="changeLanguage('hu')"><img src="@/assets/flags/hu_flag.png" alt="Hungarian" class="flag-icon" /></BDropdownItem>
          <BDropdownItem @click="changeLanguage('ro')"><img src="@/assets/flags/ro_flag.png" alt="Romanian" class="flag-icon" /></BDropdownItem>
        </BDropdown>
<!--        <BDropdown :text="t('navBar.language.language')" variant="primary" class="mx-2">-->
<!--          <BDropdownItem @click="changeLanguage('en')">{{ t('navBar.language.english') }}</BDropdownItem>-->
<!--          <BDropdownItem @click="changeLanguage('hu')">{{ t('navBar.language.hungarian') }}</BDropdownItem>-->
<!--          <BDropdownItem @click="changeLanguage('ro')">{{ t('navBar.language.romanian') }}</BDropdownItem>-->
<!--        </BDropdown>-->
      </BNavbarNav>

    </BCollapse>
  </BNavbar>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from "vue-router";

export default defineComponent({
  props: {
    scrolledPastCarousel: {
      type: Boolean,
      required: true
    }
  },
  name: 'TeoPathNavBar',
  setup() {
    const { t, locale } = useI18n()

    const currentFlag = computed(() => {
      return locale.value === "en"
          ? require("@/assets/flags/en_flag.png")
          : locale.value === "hu" ? require("@/assets/flags/hu_flag.png")
          : require("@/assets/flags/ro_flag.png");
    });

    function changeLanguage(lang: string) {
      locale.value = lang
    }

    function openCalendlyPopup() {
      console.log('Opening Calendly popup...');
      window.Calendly.initPopupWidget({ url: t('navBar.calendlyLink') })
    }

    const router = useRouter(); // Itt elérjük a Vue Routert

    const scrollToTop = (event: Event) => {
      event.preventDefault();

      if (router.currentRoute.value.path === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/").then(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      }
    };

    return {
      currentFlag,
      changeLanguage,
      openCalendlyPopup,
      scrollToTop,
      t,
    }
  },
})
</script>

<style>
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

  .navbar-overlay {
    background-color: #cfc4a8 !important;
  }

  .b-navbar.transparent {
    background-color: transparent !important;
    z-index: 1000;
    width: 100%; /* Teljes szélesség */
  }

  .b-navbar.dark {
    z-index: 1000;
    width: 100%; /* Teljes szélesség */
  }

  .navbar.bg-transparent.navbar-expand-lg.px-4.sticky-top {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .navbar.bg-dark.navbar-expand-lg.px-4.sticky-top {
    background-color: #cfc4a8 !important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    animation: slideDown 1.5s ease-out forwards;
  }

  @keyframes slideDown {
    0% {
      transform: translateY(-50%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  /* ✅ A legördülő gomb háttere átlátszó */
  .language-dropdown .btn {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0;
  }

  /* ✅ A legördülő menü háttere átlátszó */
  .dropdown-transparent {
    background: rgba(255, 255, 255, 0) !important;
    border: none !important;
    box-shadow: none !important;
  }

  /* ✅ A legördülő tartalmát beállítjuk, hogy ne lógjon ki a képernyőről */
  .dropdown-menu {
    min-width: 48px !important;
    right: 0 !important;
    left: auto !important;
    overflow: hidden;
  }

  /* ✅ Zászló ikon stílus */
  .flag-icon {
    width: 48px;
    height: 32px;
    //margin-right: 8px;
    //vertical-align: middle;
    horiz-align: right;
  }
</style>
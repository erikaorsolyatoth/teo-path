<template>
  <BNavbar toggleable="lg" type="light" :variant="scrolledPastCarousel ? 'dark' : 'transparent'" class="px-4 sticky-top" >
    <BNavbarBrand href="#" @click="scrollToTop">TeoPath</BNavbarBrand>

    <BNavbarToggle target="nav-collapse" />

    <BCollapse id="nav-collapse" isNav>

      <BNavbarNav>

<!--        <BNavItem :to="{ path: '/', hash: '#aboutMe' }" class="mx-2">-->
<!--          {{ t('sectionAboutMe.aboutMe') }}-->
<!--        </BNavItem>-->
<!--        <BNavItem :to="{ path: '/', hash: '#studies' }" class="mx-2">-->
<!--          {{ t('sectionStudies.studies') }}-->
<!--        </BNavItem>-->
<!--        <BNavItem :to="{ path: '/', hash: '#expertises' }" class="mx-2">-->
<!--          {{ t('sectionExpertises.expertises') }}-->
<!--        </BNavItem>-->
<!--        <BNavItem :to="{ path: '/', hash: '#affiliations' }" class="mx-2">-->
<!--          {{ t('sectionAffiliations.affiliations') }}-->
<!--        </BNavItem>-->
        <BDropdown :text="t('aboutMeShortly')" variant="primary" class="language-dropdown mx-2" :class="{ 'active-menu': isParentActive(['aboutMe', 'studies', 'expertises', 'affiliations']) }">
<!--        <BDropdown :text="t('aboutMeShortly')" variant="primary" class="language-dropdown mx-2" toggle-class="dropdown-toggle-custom" menu-class="dropdown-menu-custom" :class="{ 'active-menu': isParentActive(['aboutMe', 'studies', 'expertises', 'affiliations']), 'dropup': isMobile.value }">-->
          <BDropdownItem :to="{ path: '/', hash: '#aboutMe' }" class="menu-item" :class="{ 'active-submenu': isActive(['aboutMe']) }">
            {{ t('sectionAboutMe.aboutMe') }}
          </BDropdownItem>
          <BDropdownItem :to="{ path: '/', hash: '#studies' }" class="menu-item" :class="{ 'active-submenu': isActive(['studies']) }">
            {{ t('sectionStudies.studies') }}
          </BDropdownItem>
          <BDropdownItem :to="{ path: '/', hash: '#expertises' }" class="menu-item" :class="{ 'active-submenu': isActive(['expertises']) }">
            {{ t('sectionExpertises.expertises') }}
          </BDropdownItem>
          <BDropdownItem :to="{ path: '/', hash: '#affiliations' }" class="menu-item" :class="{ 'active-submenu': isActive(['affiliations']) }">
            {{ t('sectionAffiliations.affiliations') }}
          </BDropdownItem>
        </BDropdown>

        <BNavItem :to="{ name: 'Services' }" class="mx-2" :class="{ 'active-menu': isActive(['services']) }">
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
        <BNavItem :to="{ path: '/', hash: '#contacts' }" class="mx-2" :class="{ 'active-menu': isActive(['contacts']) }">
          {{ t('sectionContacts.contacts') }}
        </BNavItem>

      </BNavbarNav>

      <BNavbarNav class="ms-auto">
        <BNavItem>
          <CalendlyPopup />
        </BNavItem>

        <BDropdown variant="primary" class="language-dropdown mx-2" menu-class="dropdown-transparent">
          <template #button-content>
            <img :src="currentFlag" alt="Language" class="flag-icon" />
          </template>
          <BDropdownItem @click="changeLanguage('en')"><img src="@/assets/flags/en_flag.png" alt="English" class="flag-icon" /></BDropdownItem>
          <BDropdownItem @click="changeLanguage('hu')"><img src="@/assets/flags/hu_flag.png" alt="Hungarian" class="flag-icon" /></BDropdownItem>
          <BDropdownItem @click="changeLanguage('ro')"><img src="@/assets/flags/ro_flag.png" alt="Romanian" class="flag-icon" /></BDropdownItem>
        </BDropdown>
      </BNavbarNav>

    </BCollapse>
  </BNavbar>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, onUnmounted, ref} from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from "vue-router";
import CalendlyPopup from "@/components/CalendlyPopup.vue";

export default defineComponent({
  components: {CalendlyPopup},
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

    const isActive = (paths: string[]) => {
      const currentPath = router.currentRoute.value.path;
      const currentHash = router.currentRoute.value.hash;
      return paths.some(path => currentPath.includes(path) || currentHash.includes(path));
    };

    const isParentActive = (paths: string[]) => {
      const currentHash = router.currentRoute.value.hash;
      return paths.some(path => currentHash.includes(path));
    };

    // const isMobile = ref(window.innerWidth < 992);
    //
    // const handleResize = () => {
    //   isMobile.value = window.innerWidth < 992;
    //   console.log("isMobile: ", isMobile);
    // };
    //
    // onMounted(() => {
    //   window.addEventListener("resize", handleResize);
    // });
    //
    // onUnmounted(() => {
    //   window.removeEventListener("resize", handleResize);
    // });

    return {
      currentFlag,
      changeLanguage,
      scrollToTop,
      t,
      isActive,
      isParentActive
      // ,
      // isMobile
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

  .language-dropdown .btn {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0;
  }

  .dropdown-transparent {
    background: rgba(255, 255, 255, 0) !important;
    border: none !important;
    box-shadow: none !important;
  }

  .dropdown-menu {
    min-width: 48px !important;
    right: 0 !important;
    left: auto !important;
    overflow: hidden;
  }

  .flag-icon {
    width: 48px;
    height: 32px;
    horiz-align: right;
  }

  .menu-item {
    color: black !important;
    background-color: #f8f9fa !important;
  }

  .btn {
    color: black !important;
  }

  .active-menu {
    text-decoration: underline !important;
    font-weight: bold !important;
  }

  .active-menu .dropdown-toggle {
    text-decoration: underline !important;
    font-weight: bold !important;
  }

  .active-submenu {
    text-decoration: underline;
    font-weight: bold;
  }
</style>

  //@media (max-width: 992px) {
  //  .dropdown-menu-custom {
  //    display: block;
  //    position: static !important;
  //    width: 100%;
  //    margin-top: 0 !important;
  //  }
  //
  //  .dropdown-toggle-custom {
  //    width: 100%;
  //  }
  //
  //  .b-dropdown.show .dropdown-menu {
  //    position: static !important;
  //    display: block !important;
  //    width: 100%;
  //    margin-top: 0 !important;
  //  }
  //}

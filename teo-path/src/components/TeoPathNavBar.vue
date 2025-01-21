<template>
  <BNavbar toggleable="lg" type="dark" variant="primary" class="px-4 sticky-top" >
    <BNavbarBrand href="#">Teo Path</BNavbarBrand>

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

        <BDropdown :text="t('navBar.language')" variant="primary" class="mx-2">
          <BDropdownItem @click="changeLanguage('en')">English</BDropdownItem>
          <BDropdownItem @click="changeLanguage('hu')">Magyar</BDropdownItem>
        </BDropdown>
      </BNavbarNav>

    </BCollapse>
  </BNavbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'TeoPathNavBar',
  setup() {
    const { t, locale } = useI18n()

    function changeLanguage(lang: string) {
      locale.value = lang
    }

    function openCalendlyPopup() {
      console.log('Opening Calendly popup...');
      window.Calendly.initPopupWidget({ url: t('navBar.calendlyLink') })
    }

    return {
      changeLanguage,
      openCalendlyPopup,
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
</style>
<template>
  <BNavbar toggleable="lg" type="dark" variant="primary" class="px-4">
    <BNavbarBrand href="#">Teo Path</BNavbarBrand>

    <BNavbarToggle target="nav-collapse" />

    <BCollapse id="nav-collapse" isNav>
      <BNavbarNav>
        <BDropdown :text="t('about')" variant="primary" class="mx-2">
          <BDropdownItem to="/about/aboutMe">{{ t('aboutMe') }}</BDropdownItem>
          <BDropdownItem to="/about/studies">{{ t('studies') }}</BDropdownItem>
          <BDropdownItem to="/about/experiences">{{ t('experiences') }}</BDropdownItem>
        </BDropdown>

        <BNavItem to="/issues" class="mx-2">
          {{ t('issues') }}
        </BNavItem>

        <BNavItem to="/services" class="mx-2">
          {{ t('services') }}
        </BNavItem>

        <BNavItem to="/contacts" class="mx-2">
          {{ t('contacts') }}
        </BNavItem>
      </BNavbarNav>

      <BNavbarNav class="ms-auto">
        <BNavItem>
          <BButton variant="light" class="mx-2" @click="openCalendlyPopup">
            {{ t('booking') }}
          </BButton>
        </BNavItem>

        <BDropdown :text="t('language')" variant="light" class="mx-2">
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
      window.Calendly.initPopupWidget({ url: t('calendlyLink') })
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
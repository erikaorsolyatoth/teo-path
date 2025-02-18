<template>
  <TeoPathNavBar :scrolledPastCarousel="true"/>

  <div class="section-padding">
    <h2>{{ $t('sectionServices.servicesTitle') }}</h2>
    <h4>{{ $t('sectionServices.servicesDescription') }}</h4>

    <h5>{{ $t('sectionServices.service1Title') }}</h5>
    <ul>
      <li>{{ $t('sectionServices.service1Description1') }}</li>
      <li>{{ $t('sectionServices.service1Description2') }}</li>
    </ul>

    <h5>{{ $t('sectionServices.service2Title') }}</h5>
    <ul>
      <li>{{ $t('sectionServices.service2Description1') }}</li>
      <li>{{ $t('sectionServices.service2Description2') }}</li>
      <li>{{ $t('sectionServices.service2Description3') }}</li>
    </ul>

    <h5>{{ $t('sectionServices.service3Title') }}</h5>
    <ul>
      <li>{{ $t('sectionServices.service3Description1') }}</li>
      <li>{{ $t('sectionServices.service3Description2') }}</li>
      <li>{{ $t('sectionServices.service3Description3') }}</li>
    </ul>

    <h5>{{ $t('sectionServices.service4Title') }}</h5>
    <ul>
      <li>{{ $t('sectionServices.service4Description1') }}</li>
      <li>{{ $t('sectionServices.service4Description2') }}</li>
      <li>{{ $t('sectionServices.service4Description3') }}</li>
    </ul>

    <h5>{{ $t('sectionServices.service5title') }}</h5>
    <ul>
      <li>{{ $t('sectionServices.service5Description1') }}</li>
      <ul>
        <li>{{ $t('sectionServices.service5Description11') }}</li>
        <li>{{ $t('sectionServices.service5Description22') }}</li>
      </ul>
      <li>{{ $t('sectionServices.service5Description2') }}</li>
      <ul>
        <li>{{ $t('sectionServices.service5Description21') }}</li>
        <li>{{ $t('sectionServices.service5Description22') }}</li>
      </ul>
      <h5>{{ $t('sectionServices.service5Description3') }}</h5>
      <ul>
        <li>{{ $t('sectionServices.service5Description31') }}</li>
        <li>{{ $t('sectionServices.service5Description42') }}</li>
      </ul>
    </ul>

  </div>
</template>

<script setup lang="ts">
import TeoPathNavBar from "@/components/TeoPathNavBar.vue";
</script>
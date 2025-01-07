<template>
  <div class="section-padding">
    <h1>{{ $t('sectionAboutMe.aboutMeText') }}</h1>
    <LogoImageBackground/>
  </div>
</template>

<script setup lang="ts">
  import LogoImageBackground from "@/components/LogoImageBackground.vue";
</script>
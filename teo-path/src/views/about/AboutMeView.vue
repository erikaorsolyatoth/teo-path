<template>
  <div class="section-padding">
    <h1>{{ $t('sectionAboutMe.aboutMe') }}</h1>
    <div class="d-none d-md-flex">
      <div class="column">
        <h5>{{ $t('sectionAboutMe.slogen') }}</h5>
      </div>
      <div class="column second">
        <h5>{{ $t('sectionAboutMe.aboutMeText') }}</h5>
      </div>
    </div>

    <div class="d-flex flex-column d-md-none">
      <div class="text-just">
        <h6>{{ $t('sectionAboutMe.slogen') }}</h6>
      </div>
      <div class="text-just">
        <h6>{{ $t('sectionAboutMe.aboutMeText') }}</h6>
      </div>
    </div>
  </div>
  <LogoImageBackground/>
</template>

<script setup lang="ts">
  import LogoImageBackground from "@/components/LogoImageBackground.vue";
</script>

<style scoped>
.column {
  max-width: 50%;
  text-align: justify;
}

.second {
  padding-left: 20px;
}

.text-just {
  text-align: justify;
}
</style>/
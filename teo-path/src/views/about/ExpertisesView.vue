<template>
  <div class="section-padding">
    <h1>{{ $t('sectionExpertises.professionalExpertise') }}</h1>

    <div class="d-none d-md-flex">
      <div class="full-width">
        <h5>{{ $t('sectionExpertises.profExp1') }}</h5>
        <h5>{{ $t('sectionExpertises.profExp2') }}</h5>
      </div>
    </div>
    <div class="d-none d-md-flex">
      <div class="full-width">
        <ul>
          <li><h5>{{ $t('sectionExpertises.profExp21') }}</h5></li>
          <li><h5>{{ $t('sectionExpertises.profExp22') }}</h5></li>
        </ul>
      </div>
    </div>

    <div class="d-flex flex-column d-md-none">
      <div class="text-just">
        <h5>{{ $t('sectionExpertises.profExp1') }}</h5>
      </div>
      <div class="text-just">
        <h5>{{ $t('sectionExpertises.profExp2') }}</h5>
        <ul>
          <li><h5>{{ $t('sectionExpertises.profExp21') }}</h5></li>
          <li><h5>{{ $t('sectionExpertises.profExp22') }}</h5></li>
        </ul>
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

.full-width {
  width: 100%;
}
</style>/
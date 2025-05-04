<template>
  <div class="section-padding">
    <h1>{{ $t('sectionAffiliations.professionalAffiliations') }}</h1>
    <div class="d-none d-md-flex">
      <div class="full-width">
        <ul>
          <li><h5>{{ $t('sectionAffiliations.profAff1') }}</h5></li>
          <li><h5>{{ $t('sectionAffiliations.profAff2') }}</h5></li>
          <li><h5>{{ $t('sectionAffiliations.profAff3') }}</h5></li>
          <li><h5>{{ $t('sectionAffiliations.profAff4') }}</h5></li>
        </ul>
      </div>
    </div>

    <div class="d-flex flex-column d-md-none">
      <div class="text-just">
        <ul>
          <li><h5>{{ $t('sectionAffiliations.profAff1') }}</h5></li>
          <li><h5>{{ $t('sectionAffiliations.profAff2') }}</h5></li>
          <li><h5>{{ $t('sectionAffiliations.profAff3') }}</h5></li>
          <li><h5>{{ $t('sectionAffiliations.profAff4') }}</h5></li>
        </ul>
      </div>
    </div>
  </div>
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
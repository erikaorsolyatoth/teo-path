<template>
  <div class="section-padding">
    <h1>{{ $t('sectionStudies.studies') }}</h1>
    <h5 class="text-just">{{ $t('sectionStudies.studiesText') }}</h5>

    <div class="d-none d-md-flex">
      <div class="column">
        <h4>{{ $t('sectionStudies.bachelorsDegree') }}</h4>
        <h6>{{ $t('sectionStudies.university') }}</h6>
        <h5>{{ $t('sectionStudies.mainSubjects') }}</h5>
        <h6>{{ $t('sectionStudies.bachelorsMainSubjects') }}</h6>
        <hr/>
      </div>
      <div class="column second">
        <h4>{{ $t('sectionStudies.mastersDegree') }}</h4>
        <h6>{{ $t('sectionStudies.mastersDegreeText') }}</h6>
        <hr/>
      </div>
    </div>
    <div class="d-none d-md-flex">
      <div class="column">
        <h5>{{ $t('sectionStudies.additionalTrainings') }}</h5>
        <h6>{{ $t('sectionStudies.addTrain1') }}</h6>
        <h6>{{ $t('sectionStudies.addTrain2') }}</h6>
        <h5>{{ $t('sectionStudies.currentStudies') }}</h5>
        <h6>{{ $t('sectionStudies.currStudText') }}</h6>
      </div>
    </div>

    <div class="d-flex flex-column d-md-none">
      <div class="text-just">
        <h4>{{ $t('sectionStudies.bachelorsDegree') }}</h4>
        <h6>{{ $t('sectionStudies.university') }}</h6>
        <h5>{{ $t('sectionStudies.mainSubjects') }}</h5>
        <h6>{{ $t('sectionStudies.bachelorsMainSubjects') }}</h6>
        <hr/>
        <h4>{{ $t('sectionStudies.mastersDegree') }}</h4>
        <h6>{{ $t('sectionStudies.mastersDegreeText') }}</h6>
        <hr/>
        <h5>{{ $t('sectionStudies.additionalTrainings') }}</h5>
        <h6>{{ $t('sectionStudies.addTrain1') }}</h6>
        <h6>{{ $t('sectionStudies.addTrain2') }}</h6>
        <h5>{{ $t('sectionStudies.currentStudies') }}</h5>
        <h6>{{ $t('sectionStudies.currStudText') }}</h6>
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
<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <h1>{{ $t('welcome') }}</h1>
    <LogoImageBackground/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import LogoImageBackground from "@/components/LogoImageBackground.vue"; // @ is an alias to /src

@Options({
  components: {
    LogoImageBackground: LogoImageBackground,
  },
})
export default class HomeView extends Vue {}
</script>

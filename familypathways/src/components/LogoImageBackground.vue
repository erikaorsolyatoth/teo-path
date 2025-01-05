<template>
  <div>
    <b-img :src="require('/src/assets/logo-image-background.jpg')" fluid-grow alt="People in a seating image"></b-img>
  </div>
</template>

<script lang="ts">
  import { Vue } from 'vue-class-component';
  export default class HelloWorld extends Vue {}
</script>
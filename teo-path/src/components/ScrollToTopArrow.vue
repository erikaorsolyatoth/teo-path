<template>
  <div
      v-if="showArrow"
      class="scroll-to-top"
      @click="scrollToTop"
  >
    <span class="arrow-icon">↑</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'ScrollToTopArrow',
  setup() {
    const showArrow = ref(false);

    function handleScroll() {
      showArrow.value = window.scrollY > 300;
    }

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      showArrow,
      scrollToTop
    };
  },
});
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  left: 20px;

  width: 40px;
  height: 40px;
  background-color: #444;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.3s;
  box-shadow: 0 3px 6px rgba(0,0,0,0.2);
}

.scroll-to-top:hover {
  background-color: #666;
}

.arrow-icon {
  font-size: 20px;
  line-height: 1;
  transform: translateY(-1px); /* Kicsit optikailag középre */
}
</style>

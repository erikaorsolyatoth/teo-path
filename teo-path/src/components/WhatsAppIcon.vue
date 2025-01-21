<template>
  <a
      aria-label="Chat on WhatsApp"
      :href="whatsAppLink"
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-icon"
  >
    <img
        alt="Chat on WhatsApp"
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    />
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WhatsAppIcon',
  props: {
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  computed: {
    whatsAppLink(): string {
      return `https://wa.me/${this.phoneNumber}`;
    },
  },
});
</script>

<style scoped>
.whatsapp-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #25d366;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  line-height: 60px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.whatsapp-icon img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
}

.whatsapp-icon:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}
</style>

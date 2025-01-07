<template>
  <div>
    <button @click="openCalendlyPopup" class="calendly-button">
      {{ $t('book') }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";


export default defineComponent({
  name: "CalendlyPopup",
  props: {
    userName: {
      type: String,
      default: "",
    },
    userEmail: {
      type: String,
      default: "",
    },
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
  methods: {
    openCalendlyPopup() {
      const baseCalendlyUrl = this.t("navBar.calendlyLink");

      // Dinamikus URL paraméterekkel
      const url = `${baseCalendlyUrl}?name=${encodeURIComponent(
          this.userName
      )}&email=${encodeURIComponent(this.userEmail)}`;

      // Calendly popup inicializálása
      if (window.Calendly) {
        window.Calendly.initPopupWidget({ url });
      } else {
        console.error("Calendly widget script not loaded.");
      }
    },
  },
});
</script>

<style scoped>
.calendly-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.calendly-button:hover {
  background-color: #0056b3;
}
</style>

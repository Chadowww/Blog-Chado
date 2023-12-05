<script setup lang="ts">
import { defineProps } from "vue";
import WeatherCardComponent from "@/components/molecules/WeatherCardComponent.vue";

const props = defineProps({
  weathers: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <main class="grid grid-cols-4 gap-16 pt-40 px-40">
    <WeatherCardComponent
      v-for="weather in weathers"
      :key="weather.name"
      :weather="weather"
    />
  </main>
</template>

<style scoped></style>

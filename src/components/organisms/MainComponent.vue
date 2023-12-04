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
  <main class="flex justify-between p-40">
    <WeatherCardComponent
      v-for="weather in weathers"
      :key="weather.name"
      :weather="weather"
    />
  </main>
</template>

<style scoped></style>

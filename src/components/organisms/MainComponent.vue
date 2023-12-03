<script setup lang="ts">
import { onMounted, ref } from "vue";
import WeatherCardComponent from "@/components/molecules/WeatherCardComponent.vue";
import WeatherService from "@/services/WeatherService";

const weathers = ref([]);

onMounted(async () => {
  const locations = ["New York", "Paris", "Tokyo", "London"];

  for (const location of locations) {
    weathers.value.push(
      (await WeatherService.getWeatherByCity(location)) as never
    );
  }
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

<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import WeatherCardComponent from "@/components/molecules/WeatherCardComponent.vue";

const weathers = ref([]);

onMounted(async () => {
  try {
    const locations = ["New York", "Paris", "Tokyo", "London"];

    for (const location of locations) {
      const params = {
        appid: process.env.VUE_APP_API_KEY,
        q: location,
        units: "metric",
      };

      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params,
        }
      );

      weathers.value.push(response.data as never);
    }
  } catch (error) {
    console.log(error);
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

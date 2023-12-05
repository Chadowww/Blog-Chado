<script setup lang="ts">
import { defineProps } from "vue";
import WeatherCardComponent from "@/components/molecules/WeatherCardComponent.vue";
import WeatherBigCard from "@/components/molecules/WeatherBigCard.vue";

const props = defineProps({
  weathers: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <template v-if="weathers.length > 1">
    <main class="grid grid-cols-4 gap-16 pt-32 px-32">
      <WeatherCardComponent
        v-for="weather in weathers"
        :key="weather.name"
        :weather="weather"
      />
    </main>
  </template>
  <template v-else>
    <main class="m-auto grid grid-cols-1 gap-16 pt-32 px-32">
      <WeatherBigCard :weathers="weathers" />
    </main>
  </template>
</template>

<style scoped></style>

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
    <main
      class="grid grid-cols-1 md:grid-cols-2 xl:gap-8 xl:pt-10 xl:px-32 place-items-center"
    >
      <WeatherCardComponent
        v-for="weather in weathers"
        :key="weather.name"
        :weather="weather"
      />
    </main>
  </template>
  <template v-else>
    <main class="grid grid-cols-1 gap-8 pt-10 md:p-10 xl:px-32">
      <WeatherBigCard :weathers="weathers" />
    </main>
  </template>
</template>

<style scoped></style>

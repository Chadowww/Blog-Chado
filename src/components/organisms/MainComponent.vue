<script setup lang="ts">
import { defineProps, ref, watch } from "vue";
import WeatherCardComponent from "@/components/molecules/WeatherCardComponent.vue";
import WeatherBigCard from "@/components/molecules/WeatherBigCard.vue";

const props = defineProps({
  weathers: {
    type: Array,
    required: true,
  },
});

const showCards = ref<boolean>(true);
const showBigCard = ref<boolean>(false);

watch(
  () => props.weathers,
  () => {
    if (props.weathers.length > 1) {
      showCards.value = true;
      showBigCard.value = false;
    } else {
      showCards.value = false;
      showBigCard.value = true;
    }
  }
);
</script>

<template>
  <div>
    <transition name="Cards">
      <main
        class="Cards grid grid-cols-1 md:grid-cols-2 xl:gap-8 xl:pt-10 xl:px-32 place-items-center"
        v-show="showCards"
      >
        <WeatherCardComponent
          v-for="weather in weathers"
          :key="weather.name"
          :weather="weather"
        />
      </main>
    </transition>
    <transition name="BigCard">
      <main
        class="BigCard grid grid-cols-1 gap-8 pt-10 md:p-10 xl:px-32"
        v-show="showBigCard"
      >
        <WeatherBigCard :weathers="weathers" />
      </main>
    </transition>
  </div>
</template>

<style scoped>
.Cards-enter-active,
.Cards-leave-active {
  transition: opacity 0.5s ease;
}

.Cards-enter-from,
.Cards-leave-to {
  opacity: 0;
}

.BigCard-enter-active,
.BigCard-leave-active {
  transition: opacity 0.5s ease;
}

.BigCard-enter-from,
.BigCard-leave-to {
  opacity: 0;
}
</style>

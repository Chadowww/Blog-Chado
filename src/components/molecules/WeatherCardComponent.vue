<script lang="ts">
import { Prop } from "vue-property-decorator";
import { Options, Vue } from "vue-class-component";
import WeatherComponent from "../atoms/WeatherComponent.vue";

@Options({
  components: {
    WeatherComponent,
  },
})
export default class WeatherCardComponent extends Vue {
  @Prop({ required: true }) private weather!: object | any[];
}
</script>
<template>
  <div
    class="relative my-5 w-10/12 md:w-8/12 shadow-lg bg-[#24343D] rounded-3xl p-2"
  >
    <WeatherComponent :icon="weather.weather[0].icon" />
    <div>
      <div class="mb-5 mx-1 xl:mx-12 mt-8 xl:mt-32">
        <h2 class="text-white xl:text-3xl">{{ weather?.name }}</h2>
        <h3 class="text-white xl:text-3xl">
          temperature actuelle: {{ weather?.main?.temp }}°
        </h3>
        <h3 class="text-white xl:text-3xl">
          Min : {{ weather?.main?.temp_min }}° / Max :
          {{ weather?.main?.temp_max }}°
        </h3>
        <h3 class="text-white xl:text-3xl">
          wind speed : {{ weather?.wind?.speed }} km/h
        </h3>
        <h3 class="text-white xl:text-3xl">
          {{ weather.weather[0]?.description }}
        </h3>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

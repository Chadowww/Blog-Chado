<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WeatherCardComponent from "@/components/molecules/WeatherCardComponent.vue";
import LineChart from "@/components/atoms/LineChart.vue";
import WeatherService from "@/services/WeatherService";
@Options({
  name: "WeatherBigCard",
  components: { WeatherCardComponent, LineChart },
  props: {
    weathers: {
      type: Array,
      required: true,
    },
  },
})
export default class WeatherBigCard extends Vue {
  private weatherForcast: { list: Array<any> } | null = null;
  weathers: any;
  async mounted() {
    const wheather = await WeatherService.getWeatherForecastByCity(
      this.weathers[0].name
    );
    this.weatherForcast = wheather;
  }
}
</script>

<template>
  <div
    class="flex flex-col lg:flex-row justify-around items-center bg-[#24343D] rounded-3xl p-2"
  >
    <WeatherCardComponent
      v-for="weather in weathers"
      :key="weather.name"
      :weather="weather"
    />
    <LineChart v-if="weatherForcast" :previous="weatherForcast.list" />
  </div>
</template>

<style scoped></style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navbar from "@/components/organisms/Navbar.vue";
import TitleComponent from "@/components/atoms/TitleComponent.vue";
import FilterComponent from "@/components/molecules/FilterComponent.vue";
import MainComponent from "@/components/organisms/MainComponent.vue";
import WeatherService from "@/services/WeatherService";

@Options({
  components: {
    FilterComponent,
    TitleComponent,
    MainComponent,
    Navbar,
  },
})
export default class HomeView extends Vue {
  private weathers: any[] = [];

  async mounted() {
    const locations = ["New York", "Paris", "Tokyo", "Jakarta"];

    if (this.weathers.length === 0) {
      for (const location of locations) {
        const weather = await WeatherService.getWeatherByCity(location);
        this.weathers.push(weather);
      }
      return;
    }

    const weather = await WeatherService.getWeatherByCity(this.weathers[0]);
    this.weathers.push(weather);
  }
  async onFilterChanged(filter: string) {
    console.log(filter);
    this.weathers = [await WeatherService.getWeatherByCity(filter)];
    console.log(this.weathers);
  }
}
</script>

<template>
  <Navbar />
  <div class="home">
    <TitleComponent />
    <FilterComponent @filter-changed="onFilterChanged" />
    <MainComponent :weathers="weathers" />
  </div>
</template>

<style>
body {
  background-image: url("../assets/background.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #1b262c;
  min-height: 100vh;
}
</style>

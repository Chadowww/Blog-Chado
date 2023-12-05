<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navbar from "@/components/organisms/Navbar.vue";
import TitleComponent from "@/components/atoms/TitleComponent.vue";
import FilterComponent from "@/components/molecules/FilterComponent.vue";
import MainComponent from "@/components/organisms/MainComponent.vue";
import WeatherService from "@/services/WeatherService";
import WeatherCardComponent from "@/components/molecules/WeatherCardComponent.vue";

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
  [index: string]: any;
}

@Options({
  components: {
    WeatherCardComponent,
    FilterComponent,
    TitleComponent,
    MainComponent,
    Navbar,
  },
})
export default class HomeView extends Vue {
  private weathers: Weather[] = [];
  private locations: string[] = ["New York", "Paris", "Tokyo", "Jakarta"];

  async mounted() {
    for (const location of this.locations) {
      const weather = await WeatherService.getWeatherByCity(location);
      this.weathers.push(weather);
    }
  }
  async onFilterChanged(filter: string) {
    if (filter !== "") {
      this.weathers = [await WeatherService.getWeatherByCity(filter)];
    } else {
      this.weathers = [];
      for (const location of this.locations) {
        const weather = await WeatherService.getWeatherByCity(location);
        this.weathers.push(weather);
      }
    }
  }
}
</script>

<template>
  <Navbar />
  <div class="home">
    <TitleComponent />
    <FilterComponent @filter-changed="onFilterChanged" />
    <MainComponent v-if="weathers.length > 0" :weathers="weathers" />
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

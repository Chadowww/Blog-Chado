<script lang="ts">
import Navbar from "@/components/organisms/Navbar.vue";
import { Options, Vue } from "vue-class-component";
import TitleComponent from "@/components/atoms/TitleComponent.vue";
import FilterComponent from "@/components/molecules/FilterComponent.vue";
import MainComponent from "@/components/organisms/MainComponent.vue";

let apiKey = process.env.VUE_APP_API_KEY;
console.log(apiKey);

@Options({
  components: {
    FilterComponent,
    TitleComponent,
    MainComponent,
    Navbar,
  },
})
export default class HomeView extends Vue {}
</script>

<template>
  <Navbar />
  <div class="home">
    <TitleComponent />
    <FilterComponent />
    <MainComponent />
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

<script lang="ts">
import { Prop } from "vue-property-decorator";
import { Options, Vue } from "vue-class-component";

export default class WeatherCardComponent extends Vue {
  @Prop({ required: true }) private icon!: string;
}
</script>

<template>
  <img
    :src="`https://openweathermap.org/img/wn/${this.icon}@2x.png`"
    alt="weather icon"
  />
</template>

<style scoped>
img {
  position: absolute;
  width: 70%;
  top: -50%;
  right: -20%;
}
@media screen and (max-width: 400px) {
  img {
    width: 50%;
    top: 0;
    right: 0;
  }
}
@media screen and (max-width: 840px) {
  position: absolute;
  width: 70%;
  top: -50%;
  right: -20%;
}
</style>

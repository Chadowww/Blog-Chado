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
  width: 100%;
  top: -35%;
  right: -35%;
}
</style>

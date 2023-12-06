<script setup lang="ts">
import { defineComponent } from "vue";

defineComponent({
  name: "TitleComponent",
});
</script>

<template>
  <h1
    class="w-8/12 my-8 mx-auto text-white text-center text-2xl md:text-4xl lg:text-6xl font-extrabold"
  >
    Seeing the weather of the whole world with <span>Dark Weather!</span>
  </h1>
</template>

<style scoped>
span {
  background: linear-gradient(91deg, #caecff 39.76%, #78cfff 86.12%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-style: normal;
  line-height: 65px;
}
</style>

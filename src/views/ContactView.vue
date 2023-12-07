<script setup lang="ts">
import NavBarComponent from "@/components/organisms/NavbarComponent.vue";
import FooterComponent from "@/components/organisms/FooterComponent.vue";
import FormContactComponent from "@/components/organisms/FormContactComponent.vue";
</script>

<template>
  <section class="h-screen flex flex-col justify-between">
    <NavBarComponent />
    <FormContactComponent />
    <FooterComponent />
  </section>
</template>

<style scoped></style>

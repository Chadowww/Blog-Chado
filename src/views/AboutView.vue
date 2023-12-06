<script setup lang="ts">
import NavBar from "@/components/organisms/Navbar.vue";
import FooterComponent from "@/components/organisms/FooterComponent.vue";
</script>

<template>
  <section class="h-screen flex flex-col">
    <NavBar />
    <div class="flex-grow flex flex-col justify-around text-white">
      <div class="w-6/12 m-auto">
        <h1 class="text-center text-6xl mb-5">
          À propos de Nous <span class="text-8xl font-extrabold">?</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          dignissimos dolore facere iusto minima modi nostrum quaerat recusandae
          sed? Accusantium amet facere labore libero, minus nemo neque suscipit
          temporibus voluptates. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Alias dignissimos dolore facere iusto minima modi
          nostrum quaerat recusandae sed? Accusantium amet facere labore libero,
          minus nemo neque suscipit temporibus voluptates. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Alias dignissimos dolore facere
          iusto minima modi nostrum quaerat recusandae sed? Accusantium amet
          facere labore libero, minus nemo neque suscipit temporibus voluptates.
        </p>
      </div>
      <div class="w-6/12 m-auto">
        <h3 class="text-center text-5xl mb-5">Les données ?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          dignissimos dolore facere iusto minima modi nostrum quaerat recusandae
          sed? Accusantium amet facere labore libero, minus nemo neque suscipit
          temporibus voluptates. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Alias dignissimos dolore facere iusto minima modi
          nostrum quaerat recusandae sed? Accusantium amet facere labore libero,
          minus nemo neque suscipit temporibus voluptates. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Alias dignissimos dolore facere
          iusto minima modi nostrum quaerat recusandae sed? Accusantium amet
          facere labore libero, minus nemo neque suscipit temporibus voluptates.
        </p>
      </div>
    </div>
  </section>
  <FooterComponent />
</template>

<style scoped></style>

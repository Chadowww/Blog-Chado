<script setup lang="ts">
import { ref, provide } from "vue";
import { User } from "@/types/User";

const user = ref<User>();
const updateUser = (newUser: User) => {
  user.value = newUser;
};

provide("user", user);
provide("updateUser", ref(updateUser));
</script>

<template>
  <router-view />
</template>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>

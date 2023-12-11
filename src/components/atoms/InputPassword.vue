<script setup lang="ts">
import { errors, verifPassword } from "@/utils/formValidations";
import { defineProps, defineEmits, reactive } from "vue";

const props = defineProps({
  password: String,
});

const data = reactive({
  password: "",
});

const emit = defineEmits(["update:password"]);
</script>

<template>
  <label
    for="password"
    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
    Password
  </label>
  <input
    v-model="data.password"
    @input="
      verifPassword(data.password);
      emit('update:password', data.password);
    "
    type="password"
    name="password"
    id="password"
    placeholder="••••••••"
    class="shadow-sm bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none"
    :class="{
      'border-2 border-red-500': errors.password,
      'border-2 border-green-300': errors.password === null,
    }"
    required=""
  />
  <div
    v-if="errors.password"
    class="border-red-600 border-2 rounded-lg p-2 mt-2 text-red-600 dark:text-red-400 dark:border-red-400"
  >
    {{ errors.password }}
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { errors, verifEmail } from "@/utils/formValidations";
import { defineProps, defineEmits, reactive, ref } from "vue";

const props = defineProps({
  email: String,
  emailError: String,
});

const data = reactive({
  email: "",
});

const emit = defineEmits(["update:email"]);
</script>

<template>
  <label
    for="email"
    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
    Your email
  </label>
  <input
    @input="
      verifEmail(data.email);
      emit('update:email', data.email);
    "
    v-model="data.email"
    type="email"
    name="email"
    id="email"
    class="shadow-sm bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none"
    :class="{
      'border-2 border-red-500': errors.email || emailError,
      'border-2 border-green-300': errors.email === null,
    }"
    placeholder="name@company.com"
    required=""
  />
  <div
    v-if="errors.email || emailError"
    class="border-red-600 border-2 rounded-lg p-2 mt-2 text-red-600 dark:text-red-400 dark:border-red-400"
  >
    {{ errors.email || emailError }}
  </div>
</template>

<style scoped></style>

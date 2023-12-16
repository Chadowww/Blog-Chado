<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";
import { errors, verifConfirmPassword } from "@/utils/formValidations";
import axios from "axios";
import InputEmail from "@/components/atoms/InputEmail.vue";
import InputPassword from "@/components/atoms/InputPassword.vue";
import { RegisterForm } from "@/types/DataForm";

const props = defineProps({
  toggleLogin: Boolean,
  toggleRegister: Boolean,
});

const emit = defineEmits(["update:toggleLogin", "update:toggleRegister"]);

const data: RegisterForm = {
  email: "",
  password: "",
  confirmPassword: "",
};

const emailError = ref<string | null>(null);

const register = async () => {
  try {
    const response = await axios.post(
      "https://127.0.0.1:8000/register",
      {
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 201) {
      emit("update:toggleRegister", false);
    }
  } catch (error: any) {
    emailError.value = error.response.data[0].message;
  }
};
</script>

<template>
  <div
    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#1B262B] dark:border-gray-700"
  >
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1
        class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
      >
        Create and account
      </h1>
      <form class="space-y-4 md:space-y-6" @submit.prevent="register">
        <div>
          <InputEmail v-model:email="data.email" :email-error="emailError" />
        </div>
        <div>
          <InputPassword v-model:password="data.password" />
        </div>
        <div>
          <label
            for="confirm-password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </label>
          <input
            @input="verifConfirmPassword(data.password, data.confirmPassword)"
            v-model="data.confirmPassword"
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="••••••••"
            class="shadow-sm bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none"
            :class="{
              'border-2 border-red-500': errors.confirmPassword,
              'border-2 border-green-300': errors.confirmPassword === null,
            }"
            required=""
          />
          <div
            v-if="errors.confirmPassword"
            class="border-red-600 border-2 rounded-lg p-2 mt-2 text-red-600 dark:text-red-400 dark:border-red-400"
          >
            {{ errors.confirmPassword }}
          </div>
        </div>
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input
              id="terms"
              aria-describedby="terms"
              type="checkbox"
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              required=""
            />
          </div>
          <div class="ml-3 text-sm">
            <label
              for="terms"
              class="font-light text-gray-500 dark:text-gray-300"
            >
              I accept the
              <a
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                href="#"
              >
                Terms and Conditions
              </a>
            </label>
          </div>
        </div>
        <button
          type="submit"
          class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          :disabled="!Object.values(errors).every((value) => value === null)"
        >
          Create an account
        </button>
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account?
          <a
            href="#"
            @click="
              emit('update:toggleRegister', false);
              emit('update:toggleLogin', true);
            "
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Login here
          </a>
        </p>
      </form>
    </div>
  </div>
</template>

<style scoped></style>

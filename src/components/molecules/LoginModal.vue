<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import InputPassword from "@/components/atoms/InputPassword.vue";
import InputEmail from "@/components/atoms/InputEmail.vue";
import axios from "axios";
import { LoginForm } from "@/types/DataForm";

const props = defineProps({
  toggleLogin: Boolean,
  toggleRegister: Boolean,
});

const emit = defineEmits(["update:toggleLogin", "update:toggleRegister"]);

const data: LoginForm = {
  email: "",
  password: "",
};

let requestError: string | null;
const login = async () => {
  try {
    const response = await axios.post(
      "https://127.0.0.1:8000/api/login",
      {
        email: data.email,
        password: data.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      setTimeout(() => {
        localStorage.removeItem("token");
      }, 3600000);
      emit("update:toggleLogin", false);
    }
  } catch (error: any) {
    requestError = error.response.data.message;
    console.log(error);
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
        Sign in to your account
      </h1>
      <div
        v-if="requestError"
        class="border-red-600 border-2 rounded-lg p-2 mt-2 text-red-600 dark:text-red-400 dark:border-red-400"
      >
        <p>{{ requestError }}</p>
      </div>
      <form class="space-y-4 md:space-y-6" @submit.prevent="login">
        <div>
          <input-email v-model:email="data.email" />
        </div>
        <div>
          <input-password v-model:password="data.password" />
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              />
            </div>
            <div class="ml-3 text-sm">
              <label for="remember" class="text-gray-500 dark:text-gray-300">
                Remember me
              </label>
            </div>
          </div>
          <a
            href="#"
            class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Sign in
        </button>
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet?
          <a
            href="#"
            @click="
              emit('update:toggleLogin', false);
              emit('update:toggleRegister', true);
            "
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Sign up
          </a>
        </p>
      </form>
    </div>
  </div>
</template>

<style scoped></style>

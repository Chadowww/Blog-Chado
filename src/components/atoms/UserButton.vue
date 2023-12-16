<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import { User } from "@/types/User";

const user = ref<User>({
  id: undefined,
  email: "",
  password: "",
  roles: [],
});

const getUser = () => {
  console.log(localStorage.getItem("token"));
  axios
    .get("https://127.0.0.1:8000/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      user.value = response.data;
    })
    .catch((error) => {
      console.error(error);
      localStorage.removeItem("token");
    });
};

onMounted(() => {
  getUser();
});
</script>

<template>
  <div>
    <a
      class="text-4xl text-white hover:font-bold hover:text-gray-500"
      href="/about"
    >
      {{ user.email }}
    </a>
  </div>
</template>

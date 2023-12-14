<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";

type UserType = {
  email: string;
  role: Array<string>;
};

const user = ref<UserType>({ email: "", role: [] });

const getUser = () => {
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
    });
};

onMounted(() => {
  getUser();
});
</script>

<template>
  <div>hello {{ user.email }}</div>
</template>

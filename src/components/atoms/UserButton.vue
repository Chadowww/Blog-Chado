<script setup lang="ts">
import axios from "axios";
import { onMounted, Ref, inject } from "vue";
import { User } from "@/types/User";

const user = inject<Ref<User | undefined>>("user")!;
const updateUser = inject<Ref<(newUser: User) => void>>("updateUser")!;

const getUser = async () => {
  try {
    const response = await axios.get<User>("https://127.0.0.1:8000/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(response);
    updateUser.value(JSON.parse(response.data.user));
  } catch (error) {
    console.error(error);
    localStorage.removeItem("token");
  }
};

onMounted(() => {
  getUser();
});
</script>

<template>
  <div>
    <a
      v-if="user"
      class="text-4xl text-white hover:font-bold hover:text-gray-500"
      href="/about"
    >
      {{ user.email }}
    </a>
  </div>
</template>

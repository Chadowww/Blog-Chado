<script setup lang="ts">
import { ref, defineEmits } from "vue";

const emit = defineEmits(["filter-changed"]);

const searchQuery = ref("");

const onFilterChanged = () => {
  emit("filter-changed", searchQuery.value);
};
</script>

<template>
  <div class="w-8/12 md:w-10/12 mx-auto flex justify-between">
    <div class="w-2/6">
      <input
        type="search"
        v-model="searchQuery"
        name="search"
        id="search"
        placeholder="Search Here"
        class="bg-[#24343D] w-full p-8 text-4xl rounded-xl"
        @change="onFilterChanged"
      />
    </div>
    <div
      class="bg-[#24343D] w-3/6 p-4 flex justify-around items-center rounded-xl"
    >
      <h4 class="text-2xl font-extrabold text-white">Filter :</h4>
      <div class="bg-[#24343D] border border-gray-500 rounded">
        <select
          name="select"
          id="select"
          class="bg-[#24343D] text-2xl p-4 text-white rounded"
        >
          <option value="option">Option</option>
          <option value="option">Option</option>
          <option value="option">Option</option>
          <option value="option">Option</option>
        </select>
      </div>
      <div class="bg-[#24343D] border border-gray-500 rounded">
        <select
          name="select"
          id="select"
          class="bg-[#24343D] text-2xl p-4 text-white rounded"
        >
          <option value="option">Option</option>
          <option value="option">Option</option>
          <option value="option">Option</option>
          <option value="option">Option</option>
        </select>
      </div>
      <div class="bg-[#24343D] border border-gray-500 rounded">
        <select
          name="select"
          id="select"
          class="bg-[#24343D] text-2xl p-4 text-white rounded"
        >
          <option value="option">Option</option>
          <option value="option">Option</option>
          <option value="option">Option</option>
          <option value="option">Option</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

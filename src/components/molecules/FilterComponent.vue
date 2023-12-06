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
    <div class="w-full md:w-2/6">
      <input
        type="search"
        v-model="searchQuery"
        name="search"
        id="search"
        placeholder="Search Here"
        class="bg-[#24343D] w-full p-2 md:p-2 lg::p-8 text-2xl md:text-3xl rounded-xl text-white"
        @change="onFilterChanged"
      />
    </div>
    <div
      class="bg-[#24343D] hidden md:flex w-7/12 lg:w-3/6 p-2 lg:p-4 justify-around items-center rounded-xl"
    >
      <h4 class="text-2xl font-bold text-white whitespace-nowrap">Filter :</h4>
      <div class="bg-[#24343D] border border-gray-500 rounded">
        <select
          name="select"
          id="select"
          class="bg-[#24343D] md:text-xl lg:text-2xl md:p-1 lg:p-4 text-white rounded"
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
          class="bg-[#24343D] md:text-xl lg:text-2xl md:p-1 lg:p-4 text-white rounded"
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
          class="bg-[#24343D] md:text-xl lg:text-2xl md:p-1 lg:p-4 text-white rounded"
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

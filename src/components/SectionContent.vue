<template>
  <div class="divide-y divide-dark-800">
    <p class="pb-4 text-2xl font-bold">{{ title }}</p>
    <div class="pt-4 text-gray-300">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  openable: {
    type: Boolean,
    default: false,
  },
});
</script>

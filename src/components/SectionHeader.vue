<template>
  <div class="py-4 px-8 lg:py-8">
    <div
      class="mx-auto flex max-w-6xl items-center justify-center rounded-lg border border-dark-800 py-8"
    >
      <p class="font-center text-4xl font-bold">{{ title }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

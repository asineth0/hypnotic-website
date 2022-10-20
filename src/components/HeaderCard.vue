<template>
  <div class="relative h-64 text-5xl md:h-96 lg:h-96 lg:text-6xl">
    <img :src="image" class="h-full w-full object-cover object-center" />
    <div
      class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 px-6"
    >
      <p
        class="text-center font-bold text-white"
        style="
          text-shadow: 0 15px 30px rgba(0, 0, 0, 0.11),
            0 5px 15px rgba(0, 0, 0, 0.08);
        "
      >
        {{ title }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});
</script>

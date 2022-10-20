<template>
  <div class="flex min-h-screen flex-col">
    <HeaderBar />
    <div class="flex-1">
      <router-view />
    </div>
    <FooterBar />
  </div>
</template>

<script setup>
import HeaderBar from "./components/HeaderBar.vue";
import FooterBar from "./components/FooterBar.vue";
</script>

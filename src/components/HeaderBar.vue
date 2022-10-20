<template>
  <div v-if="menu" class="fixed inset-0 z-10 bg-black bg-opacity-75"></div>
  <div class="sticky top-0 z-10">
    <div
      class="flex h-16 items-center justify-between bg-dark-800 px-4 shadow-md"
    >
      <router-link
        class="flex items-center space-x-4 text-lg font-bold text-white"
        to="/"
      >
        <ServerStackIcon
          class="h-10 w-10 rounded-full bg-dark-400 p-2 text-gray-400"
        />
        <p>Hypnotic Servers</p>
      </router-link>
      <Bars3Icon
        class="h-6 w-6 text-gray-500 transition hover:text-white"
        @click="menu = !menu"
      />
    </div>
    <div v-if="menu" class="absolute w-full p-3">
      <div
        class="rounded-md border border-gray-600 border-opacity-25 bg-dark-800 bg-opacity-75 p-2 shadow-lg backdrop-blur-2xl"
      >
        <router-link class="flex items-center justify-between p-3" to="/">
          <p
            :class="{
              'font-bold text-white': route.path === '/',
              'text-gray-200': route.path !== '/',
            }"
          >
            Home
          </p>
          <ChevronLeftIcon v-if="route.path === '/'" class="h-5 w-5" />
        </router-link>
        <router-link class="flex items-center justify-between p-3" to="/docs">
          <p
            :class="{
              'font-bold text-white': route.path === '/docs',
              'text-gray-200': route.path !== '/docs',
            }"
          >
            Rules & Laws
          </p>
          <ChevronLeftIcon v-if="route.path === '/docs'" class="h-5 w-5" />
        </router-link>
        <router-link class="flex items-center justify-between p-3" to="/guides">
          <p
            :class="{
              'font-bold text-white': route.path === '/guides',
              'text-gray-200': route.path !== '/guides',
            }"
          >
            Guides
          </p>
          <ChevronLeftIcon v-if="route.path === '/guides'" class="h-5 w-5" />
        </router-link>
        <router-link class="flex items-center justify-between p-3" to="/mods">
          <p
            :class="{
              'font-bold text-white': route.path === '/mods',
              'text-gray-200': route.path !== '/mods',
            }"
          >
            Mod List
          </p>
          <ChevronLeftIcon v-if="route.path === '/mods'" class="h-5 w-5" />
        </router-link>
        <a
          class="flex items-center justify-between p-3 text-gray-200"
          href="https://store.hypnorp.net"
        >
          <p>Store - Life RP</p>
        </a>
        <a
          class="flex items-center justify-between p-3 text-gray-200"
          href="https://hypnotic-semi-rp.tebex.io/"
        >
          <p>Store - Semi RP</p>
        </a>
        <a
          class="flex items-center justify-between p-3 text-gray-200"
          href="https://discord.gg/hypnorp"
        >
          <p>Discord - Life RP</p>
        </a>
        <a
          class="flex items-center justify-between p-3 text-gray-200"
          href="https://discord.gg/shdmtb2nmF"
        >
          <p>Discord - Semi RP</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Bars3Icon } from "@heroicons/vue/24/solid";
import { ChevronLeftIcon } from "@heroicons/vue/20/solid";
import { ServerStackIcon } from "@heroicons/vue/24/outline";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const menu = ref(false);

watch(
  () => route.path,
  () => {
    menu.value = false;
  }
);
</script>

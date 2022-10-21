<template>
  <HeaderCard :image="BackdropImage" title="Welcome to Hypnotic" />
  <div class="space-y-8 py-16">
    <div
      class="space-y-4 px-8 lg:mx-auto lg:flex lg:max-w-6xl lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4"
    >
      <div class="divide-y divide-dark-800 lg:max-w-lg">
        <p class="pb-4 text-2xl font-bold">What is Hypnotic RP?</p>
        <p class="pt-4 text-gray-300">
          Hypnotic RP is a network of Unturned RP servers created to provide the
          best experience to our players with custom content, new ideas, and a
          vibrant community. Join us on Discord, where community suggestions and
          feedback are welcomed and encouraged.
        </p>
      </div>
      <div
        class="aspect-video rounded-md bg-gray-900 p-4 lg:flex lg:w-full lg:max-w-lg lg:items-center"
      >
        <div class="relative mx-auto h-48 w-48">
          <img
            src="../assets/images/icon-liferp.png"
            class="absolute h-32 rounded-full"
          />
          <img
            src="../assets/images/icon-semirp.webp"
            class="absolute top-16 left-16 h-32 rounded-full"
          />
        </div>
      </div>
    </div>
    <SectionHeader title="Our Servers" />
    <div
      class="space-y-4 px-8 lg:mx-auto lg:flex lg:max-w-6xl lg:flex-row-reverse lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4"
    >
      <div class="divide-y divide-dark-800 lg:max-w-lg">
        <p class="pb-4 text-2xl font-bold">Hypnotic: Life RP</p>
        <div class="space-y-4 pt-4 text-gray-300">
          <p>
            You can be a farmer, police officer, drug lord, businessman, the
            possibilites are simply endless. Hypnotic: Life RP provides a unique
            and well-balanced RP experience to the Unturned community that's
            unmatched anywhere else.
          </p>
          <div>
            <div class="flex items-center space-x-2">
              <p class="font-bold text-white">Server IP:</p>
              <p>hypnorp.net</p>
            </div>
            <div class="flex items-center space-x-2">
              <p class="font-bold text-white">Server Port:</p>
              <p>27015</p>
            </div>
            <div class="flex items-center space-x-2">
              <p class="font-bold text-white">Discord:</p>
              <a href="https://discord.gg/hypnorp">discord.gg/hypnorp</a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="aspect-video overflow-hidden rounded-md bg-gray-900 lg:flex lg:w-full lg:max-w-lg lg:items-center"
      >
        <img
          src="../assets/images/preview-liferp.png"
          class="h-full w-full object-cover object-center"
        />
      </div>
    </div>
    <div
      class="space-y-4 px-8 lg:mx-auto lg:flex lg:max-w-6xl lg:flex-row-reverse lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4"
    >
      <div class="w-full divide-y divide-dark-800 lg:max-w-lg">
        <p class="pb-4 text-2xl font-bold">Hypnotic: Semi RP</p>
        <div class="space-y-4 pt-4 text-gray-300">
          <p>
            Get ready for the classic semi-RP experience, taken to a new level
            at Hypnotic: Semi RP. With lots of custom content, and a brand new
            thoughtfully-designed map, Hypnotic has done it again. Join our
            Discord for development updates.
          </p>
          <div>
            <div class="font bold text-red-500">COMING SOON</div>
            <div class="flex items-center space-x-2">
              <p class="font-bold text-white">Server IP:</p>
              <!-- <p>hypnorp.net</p> -->
              <p>N/A</p>
            </div>
            <div class="flex items-center space-x-2">
              <p class="font-bold text-white">Server Port:</p>
              <!-- <p>27021</p> -->
              <p>N/A</p>
            </div>
            <div class="flex items-center space-x-2">
              <p class="font-bold text-white">Discord:</p>
              <a href="https://discord.gg/shdmtb2nmF">discord.gg/shdmtb2nmF</a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="aspect-video overflow-hidden rounded-md bg-gray-900 lg:flex lg:w-full lg:max-w-lg lg:items-center"
      >
        <img
          src="../assets/images/preview-semirp.png"
          class="h-full w-full object-cover object-center"
        />
      </div>
    </div>
    <SectionHeader title="Our Team" />
    <div
      class="space-y-8 px-8 lg:mx-auto lg:flex lg:max-w-6xl lg:justify-center lg:space-x-8 lg:space-y-0"
    >
      <div
        class="flex items-center space-x-4 lg:h-64 lg:w-56 lg:flex-col lg:justify-center lg:space-x-0 lg:space-y-4 lg:rounded-md lg:bg-gray-900 lg:text-center"
      >
        <img
          src="../assets/images/user-rageless5.png"
          class="h-20 w-20 rounded-full"
        />
        <div class="lg:space-y-1">
          <p class="text-2xl font-bold">RageLess5</p>
          <p class="text-gray-400">Owner</p>
        </div>
      </div>
      <div
        class="flex items-center space-x-4 lg:h-64 lg:w-56 lg:flex-col lg:justify-center lg:space-x-0 lg:space-y-4 lg:rounded-md lg:bg-gray-900 lg:text-center"
      >
        <img
          src="../assets/images/user-asineth.png"
          class="h-20 w-20 rounded-full"
        />
        <div class="lg:space-y-1">
          <p class="text-2xl font-bold">Asineth</p>
          <p class="text-gray-400">Developer</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderCard from "../components/HeaderCard.vue";
import BackdropImage from "../assets/images/backdrop-home.jpg";
import SectionHeader from "../components/SectionHeader.vue";
</script>

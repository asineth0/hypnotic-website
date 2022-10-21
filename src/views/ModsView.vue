<template>
  <HeaderCard :image="BackdropImage" title="Mod List" />
  <div class="mx-auto max-w-4xl space-y-8 py-16 px-8">
    <SectionContent title="Life RP - Mods">
      <iframe
        src="https://docs.google.com/document/d/1SBt7NvInoRVy8qGPigvv5nmm7wk1NJ8btkKbijEWNqM/edit"
        class="mx-auto h-96 w-full rounded-md lg:aspect-video lg:h-auto"
      />
    </SectionContent>
    <SectionContent title="Semi RP - Mods">
      <iframe
        src="https://docs.google.com/document/d/12hL6NvLqxuV8AtUfBRpZW2-8Lbi2WnbR_uALoSXQMG4/edit"
        class="mx-auto h-96 w-full rounded-md lg:aspect-video lg:h-auto"
      />
    </SectionContent>
  </div>
</template>

<script setup>
import HeaderCard from "../components/HeaderCard.vue";
import BackdropImage from "../assets/images/backdrop-mods.png";
import SectionContent from "../components/SectionContent.vue";
</script>

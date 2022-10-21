<template>
  <HeaderCard :image="BackdropImage" title="Rules & Laws" />
  <div class="mx-auto max-w-4xl space-y-8 py-16 px-8">
    <SectionContent title="Life RP - Rules">
      <iframe
        src="https://docs.google.com/document/d/1aITjHXdLSABFVMOi974Qm3QRXfhUiIDywIikmxTQG7I/edit#"
        class="mx-auto h-96 w-full rounded-md lg:aspect-video lg:h-auto"
      ></iframe>
    </SectionContent>
    <SectionContent title="Life RP - Laws">
      <iframe
        src="https://docs.google.com/document/d/1EejzsUhCW1na-tkQf_XG2kwGCjmTwH4_KZodqlr9lZc/edit"
        class="mx-auto h-96 w-full rounded-md lg:aspect-video lg:h-auto"
      ></iframe>
    </SectionContent>
  </div>
</template>

<script setup>
import HeaderCard from "../components/HeaderCard.vue";
import BackdropImage from "../assets/images/backdrop-docs.png";
import SectionContent from "../components/SectionContent.vue";
</script>

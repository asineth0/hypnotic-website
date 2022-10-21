<template>
  <div>
    <HeaderCard :image="BackdropImage" title="Guides" />
    <div class="mx-auto max-w-4xl space-y-8 py-16">
      <SectionContent title="Life RP - Crypto Guide">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xPebSN54h1o"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="mx-auto rounded-md"
        />
      </SectionContent>
      <SectionContent title="Life RP - Drugs Guide">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/LkFBmFAL0jI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="mx-auto rounded-md"
        />
      </SectionContent>
      <SectionContent title="Life RP - Getting Started (by Kerembit)">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ek3Eh0za6y8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="mx-auto rounded-md"
        />
      </SectionContent>
      <SectionContent title="Life RP - Buying Vehicles (by Kerembit)">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/sDeEB6dK8n8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="mx-auto rounded-md"
        />
      </SectionContent>
    </div>
  </div>
</template>

<script setup>
import HeaderCard from "../components/HeaderCard.vue";
import BackdropImage from "../assets/images/backdrop-guides.png";
import SectionContent from "../components/SectionContent.vue";
</script>

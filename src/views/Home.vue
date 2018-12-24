<template>
  <v-app class="home">
    <v-parallax
      absolute
      alt="Background image"
      src="../assets/bkg-img.jpg"
    ></v-parallax>
    <MainCard class="pb-5"></MainCard>
  </v-app>
</template>

<script>
import MainCard from "@/components/MainCard";

export default {
  name: "home",
  components: { MainCard }
};
</script>

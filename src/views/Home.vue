<template>
  <v-app class="home">
    <v-parallax alt="Background image" src="../assets/bkg-img.jpg">
      <v-container fill-width class="overlay"></v-container>
    </v-parallax>
    <MainCard class="pb-5 mb-4"></MainCard>
    <SocialCard class="pb-5 mb-4"></SocialCard>
  </v-app>
</template>

<script>
import MainCard from "@/components/MainCard";
import SocialCard from "@/components/SocialCard";

export default {
  name: "home",
  components: { SocialCard, MainCard }
};
</script>

<style>
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>

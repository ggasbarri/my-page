<template>
  <v-container fluid class="ma-0 pa-0">
    <!-- Cards -->
    <v-layout
      style="margin-top: -520px;"
      class="mb-5 home-anim"
      justify-center
      row
      wrap
    >
      <v-flex xs12 sm10 lg4>
        <MainCard style="width: 100%" class="pb-5 mb-4"></MainCard>
      </v-flex>
      <v-flex xs12 sm10 offset-xs0 lg4 :class="socialLeftMargin">
        <SocialCard style="width: 100%" class="pb-5 mb-4"></SocialCard>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MainCard from "@/components/MainCard";
import SocialCard from "@/components/SocialCard";

export default {
  name: "home",
  components: { SocialCard, MainCard },
  computed: {
    socialLeftMargin() {
      return this.$vuetify.breakpoint.lgAndUp ? "ml-5" : "";
    }
  }
};
</script>

<style>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 20%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.home-anim {
  animation-name: fadeInUp;
  animation-duration: 0.5s;
}
</style>

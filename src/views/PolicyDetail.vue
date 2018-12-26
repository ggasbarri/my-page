<template>
  <v-container fluid class="ma-0 pa-0">
    <!-- Card -->
    <v-layout
      style="margin-top: -420px;"
      class="mb-5 home-anim"
      justify-center
      row
      wrap
    >
      <v-flex xs10 md8 lg4>
        <PolicyDetailCard
          style="width: 100%"
          class="pb-5 mb-4"
        ></PolicyDetailCard> </v-flex
    ></v-layout>
  </v-container>
</template>

<script>
import PolicyDetailCard from "@/components/PolicyDetailCard";
export default {
  name: "PolicyDetail",
  components: { PolicyDetailCard }
};
</script>

<style scoped></style>

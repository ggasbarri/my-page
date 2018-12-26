<template>
  <v-container fluid class="ma-0 pa-0">
    <v-layout
      style="margin-top: -420px;"
      class="mb-5 home-anim"
      justify-center
      row
      wrap
    >
      <v-flex xs10 md8 lg4>
        <PoliciesCard
          style="width: 100%"
          class="pb-5 mb-4"
        ></PoliciesCard> </v-flex
    ></v-layout>
  </v-container>
</template>

<script>
import PoliciesCard from "@/components/PoliciesCard";
export default {
  name: "Policies",
  components: { PoliciesCard }
};
</script>

<style scoped></style>

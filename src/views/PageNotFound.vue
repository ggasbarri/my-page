<template>
  <v-container fluid class="ma-0 pa-0">
    <!-- Cards -->
    <v-layout
      style="margin-top: -420px;"
      class="mb-5 home-anim"
      justify-center
      align-center
      align-content-center
      row
      wrap
    >
      <v-flex xs3 style="color: white;" class="display-4 mr-4"> 404 </v-flex>

      <v-flex xs3>
        <v-img src="../assets/death-star.png" width="100%"></v-img>
      </v-flex>

      <v-flex xs12 style="color: white;" class="display-1 mt-4">
        The page you are looking for<br />
        is not on this galaxy
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "PageNotFound"
};
</script>

<style scoped></style>

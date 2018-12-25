<template>
  <div>
    <a
      v-if="!disabled && !loading"
      v-bind:href="this.$store.state.mediumData.url"
      style="text-decoration: none;"
      target="_blank"
      class="appear"
    >
      <v-container
        class="black--text headline text-xs-left font-weight-bold ml-3"
        >{{ this.$store.state.mediumData.title }}</v-container
      >
      <v-layout align-center row wrap>
        <v-flex xs12 class="px-5 py-3">
          <v-img
            :src="this.$store.state.mediumData.imgUrl"
            aspect-ratio="2"
            cover
          ></v-img>
        </v-flex>
        <v-flex
          xs12
          class="grey--text body-2 text-xs-center text-md-left px-5"
          >{{ this.$store.state.mediumData.subtitle }}</v-flex
        >
      </v-layout>
    </a>
    <div class="pt-4" v-else-if="loading">
      <v-progress-circular
        :indeterminate="true"
        :size="60"
        color="primary"
        style="margin-top: 170px; margin-bottom: 170px;"
      ></v-progress-circular>
    </div>

    <div class="pt-4 appear" v-else-if="disabled">
      <v-icon :size="60">mdi-cloud-off-outline</v-icon>
      <v-container class="body-2 mt-2"
        >Could not connect to Medium API</v-container
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "LastMediumPub",

  mounted() {
    this.$store.dispatch("getMediumLatestPost");
  },
  computed: {
    loading() {
      return this.$store.state.loadingMediumPost;
    },
    disabled() {
      return (
        !this.$store.state.loadingMediumPost &&
        this.$store.state.mediumData === undefined
      );
    }
  }
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
.appear {
  animation-name: fadeIn;
  animation-duration: 0.4s;
}
</style>

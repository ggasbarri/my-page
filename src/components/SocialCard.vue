<template>
  <div>
    <div
      v-show="this.$vuetify.breakpoint.lgAndUp"
      style="margin-top: 120px;"
    ></div>
    <v-layout class="social-card">
      <v-flex>
        <v-card>
          <!-- Social Networks -->
          <v-card-title class="display-1">
            <v-container fill-width>My Networks</v-container>
            <CircleList
              class="pb-2 pt-3"
              :is-clickable="true"
              :has-titles="false"
              v-bind:items="networks"
            />
          </v-card-title>

          <!-- Latest Medium Pub -->
          <div class="display-1 text-xs-center">Last Post</div>
          <LastMediumPub class="pb-5"></LastMediumPub>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import CircleList from "@/components/CircleList";
import LastMediumPub from "@/components/LastMediumPub";
export default {
  name: "SocialCard",
  components: { LastMediumPub, CircleList },
  data() {
    return {
      networks: [
        {
          icon: "mdi-facebook",
          color: "#3b5998",
          url: "https://www.facebook.com/Gianfranco-Gasbarri-532082293977532"
        },
        {
          icon: "mdi-twitter",
          color: "#00b2ff",
          url: "https://twitter.com/ggasba"
        },
        {
          icon: "mdi-github-circle",
          color: "#333333",
          url: "https://github.com/gincos"
        },
        {
          icon: "mdi-linkedin",
          color: "#0077b5",
          url: "https://www.linkedin.com/in/gianfranco-gasbarri/"
        },
        {
          icon: "mdi-medium",
          color: "#292929",
          url: "https://medium.com/@gincos"
        }
      ]
    };
  }
};
</script>

<style scoped>
.social-card {
  margin-top: -20px;
}
</style>

<template>
  <div>
    <v-layout>
      <v-flex xs12 sm10 md8 lg4 offset-sm1 offset-md2 offset-lg4>
        <v-card>
          <v-card-title class="display-1">
            <v-container fill-width>My Networks</v-container>
            <CircleList :has-titles="false" v-bind:items="networks"/>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import CircleList from "@/components/CircleList";
export default {
  name: "SocialCard",
  components: {CircleList},
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
          url: "https://twitter.com/gifrgas"
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
          url: "https://medium.com/@gifrgas"
        }
      ]
    }
  }
};
</script>

<style scoped></style>

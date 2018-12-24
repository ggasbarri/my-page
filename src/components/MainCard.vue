<template>
  <div>
    <!-- Avatar -->
    <v-avatar size="200px" class="avatar elevation-10">
      <img alt="Avatar" src="../assets/myphoto.jpg" />
    </v-avatar>

    <!-- Card -->
    <v-layout class="main-card">
      <v-flex xs12 sm10 md8 lg4 offset-sm1 offset-md2 offset-lg4>
        <v-card>
          <v-card-title center class="main-title display-2 pb-0" primary-title>
            <v-container fill-width>Hey, I'm Gianfranco!</v-container>
          </v-card-title>
          <v-container fill-width class="title grey--text text-capitalize">
            Mobile Developer &<br />
            Machine Learning Enthusiast
          </v-container>

          <v-card-text class="subheading mt-4 pl-4 pr-4">
            Venezuelan student who found love for programming and software
            engineering. Expertise on Mobile Development and related UI/UX
            Design. Writer at Medium. Cinephile. Philanthropist. Love Dan
            Brown's books.<br /><br />"The philosopher asks. The scientist
            answers. The engineer builds it."
          </v-card-text>

          <v-container fill-width class="title mt-4">Skills</v-container>

          <CircleList v-bind:items="skills" :has-titles="true"></CircleList>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import CircleList from "@/components/CircleList";
export default {
  name: "MainCard",
  components: { CircleList },
  data() {
    return {
      skills: [
        {
          title: "Android",
          icon: "mdi-android-head",
          color: "primary"
        },
        {
          title: "VueJS",
          icon: "mdi-vuejs",
          color: "primary"
        },
        {
          title: "Django",
          icon: "mdi-language-python",
          color: "primary"
        },
        {
          title: "UI / UX",
          icon: "mdi-material-design",
          color: "primary"
        }
      ]
    };
  }
};
</script>

<style scoped>
.avatar {
  margin-top: -580px;
  z-index: 1;
}
.main-card {
  margin-top: -300px;
  z-index: -2;
}
.main-title {
  padding-top: 110px;
}
</style>

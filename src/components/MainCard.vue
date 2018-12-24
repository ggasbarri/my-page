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

          <v-layout class="pb-5 pl-4 pr-4">
            <v-container v-for="(skill, index) in skills" xs3 :key="index">
              <v-avatar color="primary">
                <v-icon dark>{{ skill.icon }}</v-icon>
              </v-avatar>
              <div>{{ skill.title }}</div>
            </v-container>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "MainCard",
  data() {
    return {
      skills: [
        {
          title: "Android",
          icon: "mdi-android-head"
        },
        {
          title: "VueJS",
          icon: "mdi-vuejs"
        },
        {
          title: "Django",
          icon: "mdi-language-python"
        },
        {
          title: "UI/UX",
          icon: "mdi-material-design"
        }
      ]
    };
  }
};
</script>

<style scoped>
.avatar {
  margin-top: -400px;
  z-index: 1;
}
.main-card {
  margin-top: -200px;
  z-index: -2;
}
.main-title {
  padding-top: 110px;
}
</style>

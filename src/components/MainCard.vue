<template>
  <div>
    <!-- Avatar -->
    <v-avatar size="200px" color="white" class="avatar elevation-10">
      <img alt="Avatar" src="../assets/myphoto.jpg" />
    </v-avatar>

    <!-- Card -->
    <v-layout class="main-card">
      <v-flex>
        <v-card>
          <v-card-title center class="main-title display-2 pb-0" primary-title>
            <v-container fill-width>Hey, I'm Gianfranco!</v-container>
          </v-card-title>
          <v-container fill-width class="title grey--text text-capitalize">
            Mobile Developer &<br />
            Machine Learning Enthusiast
          </v-container>
            
          <img src="https://badges.devskiller.com/badges/2SY4ToTvXJsdLIUm4doP07.png" 
          style="margin: auto; width: 120px; cursor: pointer;" class="pb-2"
          @click="openInNewTab('https://devskiller.com/hr-certification/2SY4ToTvXJsdLIUm4doP07')"/>

          <v-card-text class="subheading mt-2 pl-4 pr-4">
            Venezuelan student who found love for programming and software
            engineering. Expertise on Mobile Development and related UI/UX
            Design. Writer at Medium. Cinephile. Philanthropist. Love Dan
            Brown's books.<br /><br />"The philosopher asks. The scientist
            answers. The engineer builds it."
          </v-card-text>

          <v-container fill-width class="title mt-4">Skills</v-container>

          <CircleList
            class="pb-5 pt-3"
            v-bind:items="skills"
            :has-titles="true"
          ></CircleList>
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
          title: "Python",
          icon: "mdi-language-python",
          color: "primary"
        },
        {
          title: "UI / UX",
          icon: "mdi-material-design",
          color: "primary"
        },
        {
          title: "AI",
          icon: "mdi-brain",
          color: "primary"
        }
      ]
    };
  },
  methods: {
    openInNewTab(url){
      window.open(url, '_blank')
    }
  },
};
</script>

<style scoped>
.avatar {
  z-index: 1;
}
.main-card {
  margin-top: -100px;
  z-index: -2;
}
.main-title {
  padding-top: 110px;
}
</style>

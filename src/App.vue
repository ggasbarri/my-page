<template>
  <div id="app">
    <v-app>
      <!-- Bkg Image -->
      <v-parallax
        alt="Background image"
        height="600"
        src="./assets/bkg-img.jpg"
      >
        <div style="width: 100%; position: absolute" class="overlay"></div>

        <!-- Navigation -->
        <v-layout justify-start class="nav pt-3">
          <nav style="width: 100%;" class="text-xs-right">
            <router-link to="/" class="mr-4 title" style="color: white;"
              >Home</router-link
            >
            <router-link
              to="/policies"
              class="mr-4 title"
              style="color: white;"
              >Policies</router-link
            >
          </nav>
        </v-layout>
      </v-parallax>
      <v-content class="ma-0 pa-0"> <router-view></router-view> </v-content>

      <!-- Footer -->
      <v-footer height="auto" app absolute color="secondary" dark class="py-3">
        <div style="width: 100%;" class="text-xs-center white--text">
          &copy;2018 — <strong>Gianfranco Gasbarri</strong>
        </div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import WebFontLoader from "webfontloader";

export default {
  mounted() {
    WebFontLoader.load({
      google: {
        families: ["Roboto:100,300,400,500,700,900"]
      },
      active: this.setFontLoaded
    });
  },
  methods: {
    setFontLoaded() {
      this.$emit("font-loaded");
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  width: 100%;
  background-color: transparent;
  z-index: 10;

  a {
    font-weight: bold;
  }
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>

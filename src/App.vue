<template>
  <div id="app">
    <v-app>
      <v-content> <router-view></router-view> </v-content>
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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadingMediumPost: false,
    mediumData: undefined
  },

  mutations: {
    updateMediumData(state, latestPost) {
      state.mediumData = {
        title: latestPost.title,
        subtitle: latestPost.virtuals.subtitle,
        imgUrl:
          "https://cdn-images-1.medium.com/max/800/" +
          latestPost.virtuals.previewImage.imageId,
        url: "https://medium.com/@gincos/" + latestPost.uniqueSlug
      };

      state.loadingMediumPost = false;
    }
  },

  actions: {
    async getMediumLatestPost({ commit, state }) {
      state.loadingMediumPost = true;
      try {
        const data = await fetch(
          "https://medium-post-fetcher.herokuapp.com/@gincos/latest"
        );
        const jsonData = await data.json();
        console.log(jsonData);
        commit("updateMediumData", jsonData.response[0]);
      } catch (e) {
        console.log(e);
        state.loadingMediumPost = false;
      }
    }
  }
});

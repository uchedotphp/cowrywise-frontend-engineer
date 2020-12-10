import Vue from "vue";
import Vuex from "vuex";
import Services from "./../resources/services";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    randomPhotos: [],
  },

  mutations: {
    FETCH_RANDOM_PHOTOS(state, payload) {
      state.randomPhotos = payload;
    },
  },

  actions: {
    setRandomPhotos({ commit }) {
      Services.fetchRandomPhotos()
        .then(({ data }) => {
          commit("FETCH_RANDOM_PHOTOS", data);
        })
        .catch(function(error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    },
  },

  getters: {
      getRandomPhotos: state => state.randomPhotos
  },
});

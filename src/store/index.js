import Vue from "vue";
import Vuex from "vuex";
import Services from "./../resources/services";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photos: [],
  },

  mutations: {
    SET_RANDOM_PHOTOS(state, payload) {
      state.photos = payload;
    },
    SET_PHOTO_SEARCH(state, payload) {
      state.photos = payload;
    },
  },

  actions: {
    getRandomPhotos({ commit }) {
      Services.fetchRandomPhotos()
        .then(({ data }) => {
          commit("SET_RANDOM_PHOTOS", data);
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

    photoSearchResult({ commit }, payload) {
      return Services.searchPhotos(payload)
        .then(({ data }) => {
          commit("SET_PHOTO_SEARCH", data.results);
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

    // eslint-disable-next-line no-empty-pattern
    photoDownload({}, payload) {
      return Services.downloadPhoto(payload)
        .then((response) => {
          console.log("from downloading", response);
          return response.data.url;
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
    getRandomPhotos: (state) => state.randomPhotos,
  },
});
import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import Services from "./../resources/services";

Vue.use(Vuex);
Vue.use(VueRouter);

export default new Vuex.Store({
  state: {
    photos: [],
    search: [],
    networkError: false
  },

  mutations: {
    SET_RANDOM_PHOTOS(state, payload) {
      state.photos = payload;
    },
    SET_PHOTO_SEARCH(state, payload) {
      state.search = payload;
    },
    SET_NETWORK_ERROR(state, payload) {
      state.networkError = payload;
    }
  },

  actions: {
    getRandomPhotos({ commit }) {
      return Services.fetchRandomPhotos()
        .then(({ data }) => {
          commit("SET_RANDOM_PHOTOS", data);
        })
        .catch(function(error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("one", error.response.data);
            console.log("two", error.response.status);
            console.log("three", error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log("four", error.request);
            commit("SET_NETWORK_ERROR", true);
          } else {
            // Something happened in setting up the request that triggered an Error
            commit("SET_NETWORK_ERROR", true);
          }
          console.log("six", error.config);
        });
    },

    photoSearchResult({ commit }, payload) {
      return Services.searchPhotos(payload)
        .then((response) => {
          if (response.data.total) {
            commit("SET_PHOTO_SEARCH", response.data.results);
          } else {
            return "Not Found";
          }
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
            commit("SET_NETWORK_ERROR", true);
          }
          console.log(error.config);
        });
    },

    // eslint-disable-next-line no-empty-pattern
    photoDownload({}, payload) {
      return Services.downloadPhoto(payload)
        .then((response) => {
          console.log("from downloading", response);
          return response.data;
      // const blob = new Blob([response.data], { type: "image/*" });
      // const href = URL.createObjectURL(blob);
          // return response.data.url;
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
    }
  },

  getters: {
    getRandomPhotos: state => state.photos,
    searchedPhotos: state => state.search,
    networkStatus: state => state.networkError
  }
});

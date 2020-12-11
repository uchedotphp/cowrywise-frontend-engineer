import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://api.unsplash.com`,
  // timeout: 9000,
  //   withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  // auth:{
  //   // Authorization: Client-ID process.env.VUE_APP_ACCESS_KEY
  //   Client-ID: process.env.VUE_APP_ACCESS_KEY
  // }
});

// apiClient.defaults.headers.common["Authorization"] =
//   process.env.VUE_APP_ACCESS_KEY;

export default {
  fetchRandomPhotos() {
    return apiClient.get(
      `/photos/?client_id=${process.env.VUE_APP_ACCESS_KEY}`
    );
  },

  searchPhotos(param) {
    return apiClient.get(
      `/search/photos?client_id=${process.env.VUE_APP_ACCESS_KEY}&query=${param}`
    );
  },

  downloadPhoto(photoId) {
    return apiClient.get(
      `/photos/${photoId}/download?client_id=${process.env.VUE_APP_ACCESS_KEY}`
    );
  },
};

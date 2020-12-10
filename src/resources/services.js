import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://api.unsplash.com`,
  // timeout: 9000,
  //   withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

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
  }
};

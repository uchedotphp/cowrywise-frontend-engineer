import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://api.unsplash.com`,
  timeout: 10000,
  //   withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

//Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // check if there is an internet connection before every request
    if (!navigator.onLine) {
      console.log("no internet");
      return "no luck";
    } else {
      return config;
    }
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("the response from axios", response);
    return response;
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

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

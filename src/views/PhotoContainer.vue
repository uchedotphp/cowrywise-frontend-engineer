<template>
  <transition-group
    name="slide-fade"
    tag="main"
    class="photo-crib-container"
    mode="out-in"
  >
    <PhotoCard v-for="photo in photos" :key="photo.id" :photoDetails="photo" />
  </transition-group>
</template>

<script>
import PhotoCard from "@/components/PhotoCard.vue";

export default {
  name: "PhotoContainer",
  components: {
    PhotoCard,
  },
  data() {
    return {
      networkStatus: false,
    };
  },
  created() {
    this.$store
      .dispatch("getRandomPhotos")
      .then(() => {
        this.networkStatus = this.$store.state.networkError;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {
    networkStatus(newValue) {
      if (newValue) {
        this.$router.push({
          name: "NetworkError",
        });
      }
    },
  },
  computed: {
    photos() {
      return this.$store.getters.getRandomPhotos;
    },
  },
};
</script>

<style lang="scss" scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 768px) {
  .photo-crib-container {
    display: grid;
    grid-row-gap: 3.5714em;
    margin-bottom: 2em;
  }
}

/* Medium devices and desktops (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .photo-crib-container {
    display: grid;
    grid-auto-flow: dense;
    grid-column-gap: 5em;
    grid-row-gap: 2.8571em;
    grid-template-columns: repeat(auto-fit, 28.5em);
    padding-bottom: 2em;
  }
}
</style>
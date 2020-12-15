<template>
  <transition-group
    v-if="photos"
    name="slide-fade"
    tag="main"
    class="photo-crib-container"
    mode="out-in"
  >
    <PhotoCard v-for="photo in photos" :key="photo.id" :photoDetails="photo" />
  </transition-group>

  <transition-group
    v-else
    tag="main"
    name="slide-fade"
    class="photo-crib-container"
    mode="out-in"
  >
    <LoadingShimmer v-for="n in 10" :key="n" />
  </transition-group>
</template>

<script>
import PhotoCard from "@/components/PhotoCard.vue";
import LoadingShimmer from "@/components/LoadingShimmer.vue";

export default {
  name: "SearchPage",
  components: {
    PhotoCard,
    LoadingShimmer,
  },
  data() {
    return {
      //   networkStatus: false,
    };
  },
  computed: {
    photos() {
      return this.$store.getters.searchedPhotos;
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
@media only screen and (min-width: 769px) {
  .photo-crib-container {
    display: grid;
    grid-auto-flow: dense;
    grid-column-gap: 5em;
    grid-row-gap: 2.8571em;
    grid-template-columns: repeat(auto-fit, 27em);
    // grid-template-columns: repeat(3, 28.5em);
    padding-bottom: 2em;
  }
}
</style>
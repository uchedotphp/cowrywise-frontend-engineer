<template>
  <main class="photo-crib-container">
    <PhotoCard v-for="photo in photos" :key="photo.id" :photoDetails="photo" />
  </main>
</template>

<script>
import PhotoCard from "@/components/PhotoCard.vue";

export default {
  name: "PhotoContainer",
  components: {
    PhotoCard
  },
  created() {
    this.$store.dispatch("getRandomPhotos");
  },
  computed: {
    photos() {
      return this.$store.getters.getRandomPhotos;
    }
  }
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
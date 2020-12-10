<template>
  <main class="photo-crib-container">
    <PhotoCards :searchedParam="searchedParam"/>
  </main>
</template>

<script>
import PhotoCards from "@/components/PhotoCards.vue";

export default {
  name: "CardContainer",
  components: {
    PhotoCards,
  },
  props: {
    searchedParam: String
  }
};
</script>

<style lang="scss" scoped>
</style>
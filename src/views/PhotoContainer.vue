<template>
  <main class="photo-crib-container">
    <PhotoCards />
  </main>
</template>

<script>
import PhotoCards from "@/components/PhotoCards.vue";

export default {
  name: "CardContainer",
  components: {
    PhotoCards,
  },
};
</script>

<style lang="scss" scoped>
</style>
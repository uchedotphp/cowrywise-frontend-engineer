<template>
  <div>
    <SearchBar />
    <PhotoContainer />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import PhotoContainer from "@/views/PhotoContainer.vue";
export default {
  name: "Home",
  components: {
    SearchBar,
    PhotoContainer
  }
};
</script>

<style lang="scss" scoped>
</style>
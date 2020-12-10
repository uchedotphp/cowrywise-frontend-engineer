<template>
  <div id="app">
    <SearchBar />
    <PhotoContainer />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import PhotoContainer from "@/views/PhotoContainer.vue";
export default {
  components: {
    SearchBar,
    PhotoContainer
  }
};
</script>
<style lang="scss">
</style>

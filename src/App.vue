<template>
  <div id="app">
    <SearchBar />
    <CardContainer />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import CardContainer from "@/views/CardContainer.vue";
export default {
  components: {
    SearchBar,
    CardContainer
  }
};
</script>
<style lang="scss">
</style>

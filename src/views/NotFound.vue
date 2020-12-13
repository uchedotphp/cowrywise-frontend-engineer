<template>
  <div>
    <SearchBar />
    <Error />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import Error from "@/components/Error";
export default {
  name: "NotFound",
  components: {
    Error,
    SearchBar
  }
};
</script>

<style lang="scss" scoped>
</style>
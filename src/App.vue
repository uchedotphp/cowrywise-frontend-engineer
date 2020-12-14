<template>
  <div id="app">
    <Header />
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header
  },
};
</script>
<style lang="scss">
</style>

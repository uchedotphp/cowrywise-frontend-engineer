<template>
  <main class="container">
    <!-- <div class="box"> -->
      <PhotoCards />
    <!-- </div> -->
  </main>
</template>

<script>
import PhotoCards from "@/components/PhotoCards.vue";

export default {
  name: "CardContainer",
  components: {
    PhotoCards
  },
  data() {
    return {
      // photoDetails: [],
    };
  },
  mounted() {
    // console.log("the data from store state", this.randomPhotos);
  },
};
</script>

<style lang="scss" scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 768px) {
  .container {
    // .box {
    //   display: grid;
    //   grid-row-gap: 50px;
    // }
  }
}

/* Medium devices and desktops (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .container {
    padding-bottom: 2em;
    // .box {
    //   display: grid;
    //   // grid-template-columns: auto auto auto;
    //   grid-template-columns: 400px 400px 400px;
    //   grid-gap: 40px 80px;
    //   justify-content: space-between;
    // }
  }
}
</style>
<template>
  <main class="container">
    <div class="box">
      <PhotoCards v-for="n in 1" :key="n" />
    </div>
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
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 768px) {
  .container {
    .box {
      display: grid;
      grid-row-gap: 50px;
    }
  }
}

/* Medium devices and desktops (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .container {
    .box {
      display: grid;
      // grid-template-columns: auto auto auto;
      grid-template-columns: 400px 400px 400px;
      grid-gap: 40px 80px;
      justify-content: space-between;
    }
  }
}
</style>
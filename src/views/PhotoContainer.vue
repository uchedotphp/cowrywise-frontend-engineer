<template>
  <main v-if="photos" class="photo-crib-container">
    <!-- columns -->
    <div class="grid-col grid-col--1"></div>
    <div class="grid-col grid-col--2"></div>
    <div class="grid-col grid-col--3"></div>
    <transition-group name="slide-fade" mode="out-in">
      <PhotoCard
        v-for="photo in photos"
        :key="photo.id"
        :photoDetails="photo"
        :class="['grid-item']"
      />
    </transition-group>
  </main>

  <main v-else class="photo-crib-container">
    <!-- columns -->
    <div class="grid-col grid-col--1"></div>
    <div class="grid-col grid-col--2"></div>
    <div class="grid-col grid-col--3"></div>
    <transition-group name="slide-fade" mode="out-in">
      <LoadingShimmer
        v-for="n in 10"
        :key="n"
        :class="['grid-item']"
        style="margin-bottom: 2em"
      />
    </transition-group>
  </main>
</template>

<script>
import PhotoCard from "@/components/PhotoCard.vue";
import LoadingShimmer from "@/components/LoadingShimmer.vue";

export default {
  name: "PhotoContainer",
  components: {
    PhotoCard,
    LoadingShimmer,
  },
  data() {
    return {
      networkStatus: false,
    };
  },
  created() {
    this.$store
      .dispatch("getRandomPhotos")
      .then(() => {
        this.networkStatus = this.$store.state.networkError;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  mounted() {
    this.$colcade.create({
      name: "myGridName", // name of colcade instance -> will be used as a reference for grid instance
      el: ".photo-crib-container", // element that hosts the grid -> as mentioned in Colcade config
      config: {
        // native Colcade configuration -> as mentioned in Colcade config
        columns: ".grid-col",
        items: ".grid-item",
      },
    });
  },
  updated() {
    this.$colcade.update("myGridName");
  },
  destroyed() {
    this.$colcade.destroy("myGridName");
  },
  watch: {
    networkStatus(newValue) {
      if (newValue) {
        this.$router.push({
          name: "NetworkError",
        });
      }
    },
  },
  computed: {
    photos() {
      return this.$store.getters.getRandomPhotos;
    },
  },
};
</script>

<style lang="scss" scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 768px) {
  .photo-crib-container {
    display: grid;
    // grid-row-gap: 3.5714em;
    // margin-bottom: 2em;

    .grid-item {
      padding-bottom: 3.5714em;
    }
  }
}

/* Medium devices and desktops (landscape tablets, 768px and up) */
@media only screen and (min-width: 769px) {
  .photo-crib-container {
    // display: grid;
    // grid-auto-flow: dense;
    // grid-column-gap: 5em;
    grid-column-gap: 3em;
    // grid-row-gap: 2.8571em;
    // grid-template-columns: repeat(auto-fit, 27em);
    // // grid-template-columns: repeat(3, 28.5em);
    // padding-bottom: 2em;

    display: flex;
    .grid-col {
      flex: 1;
      padding: 2em 0em;
    }

    .grid-item {
      padding-bottom: 2em;
    }
  }
}

.back-to-top {
  line-height: 3rem;
  text-align: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #d6e3f0;
  padding: 0.25em;
  position: fixed;
  // position: absolute;
  bottom: 0;

  &:focus {
    outline: none;
  }
}
</style>
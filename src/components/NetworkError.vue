<template>
  <div class="error">
    <h1>
      Uh-oh!
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon"
        viewBox="0 0 512 512"
      >
        <title>Cellular</title>
        <rect
          x="416"
          y="96"
          width="64"
          height="320"
          rx="8"
          ry="8"
          fill="none"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="32"
        />
        <rect
          x="288"
          y="176"
          width="64"
          height="240"
          rx="8"
          ry="8"
          fill="none"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="32"
        />
        <rect
          x="160"
          y="240"
          width="64"
          height="176"
          rx="8"
          ry="8"
          fill="none"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="32"
        />
        <rect
          x="32"
          y="304"
          width="64"
          height="112"
          rx="8"
          ry="8"
          fill="none"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="32"
        />
      </svg>
    </h1>
    <h3>Seems you are experiencing some network issues</h3>
    <button @click="fetchPhotos">Retry</button>
  </div>
</template>

<script>
export default {
  name: "NetworkErrorComponent",
  methods: {
    fetchPhotos() {
      this.$router.push({
        name: "Home"
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  margin-top: 2em;
  height: 50vh;
  display: grid;
  justify-content: center;
  align-content: center;

  h1 {
    svg {
      height: 0.8em;
    }
  }

  h3 {
    margin: 0.5em 0;
    font-weight: bold;
  }

  button {
    padding: 1em 0;
    border-radius: 1em;
    border: 1px solid #6e7074;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
}
</style>
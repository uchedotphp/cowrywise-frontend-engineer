<template>
  <div class="box-wrap">
    <div class="box-in"></div>
    <div class="box-in2"></div>
  </div>
</template>

<script>
export default {
  name: "LoadingShimmerComponent",
};
</script>

<style lang="scss" scoped>
.box-wrap {
  height: 31em;
  padding: 1.4286em;
  border: 1px solid #ddd;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .box-in {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: skeletonshimmer;
    animation-timing-function: linear;
    width: 50%;
    height: 10px;
    position: relative;
    background: #d8d8d8;
    background-image: linear-gradient(
      to right,
      #d8d8d8 0%,
      #bdbdbd 20%,
      #d8d8d8 40%,
      #d8d8d8 100%
    );
    background-repeat: no-repeat;
  }

  .box-in2 {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: skeletonshimmer;
    animation-timing-function: linear;
    width: 30%;
    margin-top: 1em;
    height: 10px;
    position: relative;
    background: #d8d8d8;
    background-image: linear-gradient(
      to right,
      #d8d8d8 0%,
      #bdbdbd 20%,
      #d8d8d8 40%,
      #d8d8d8 100%
    );
    background-repeat: no-repeat;
  }

  @keyframes skeletonshimmer {
    0% {
      background-position: -33.4286em 0;
    }
    100% {
      background-position: 33.4286em 0;
    }
  }
}
</style>
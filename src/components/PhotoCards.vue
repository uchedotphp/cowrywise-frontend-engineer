<template>
  <a href="#" class="photo-container">
    <img src="./../assets/images/babe.jpg" alt="" srcset="" />
    <div class="overlay">
      <div class="author">
        <p>Nwulu Uchechukwu</p>
        <small>Lagos, Nigeria</small>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "PhotoCardsComponent",
};
</script>

<style lang="scss" scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 768px) {
  .photo-container {
    overflow: hidden;
    position: relative;
    color: #fff;
    cursor: zoom-in;

    img {
      max-width: 100%;
      height: auto;
    }
    .overlay {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 7.8571em;
      padding: 2.5em;
      background: -webkit-gradient(
        linear,
        left bottom,
        left top,
        from(rgba(0, 0, 0, 0.9)),
        to(transparent)
      );
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.9) 0%,
        transparent 100%
      );

      .author {
        text-transform: capitalize;
        p {
          font-size: 1.5em;
          cursor: pointer;
        }

        small {
          font-size: 0.9em;
          cursor: pointer;
        }
      }
    }
  }
}

/* Medium devices and desktops (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .photo-container {
    overflow: hidden;
    position: relative;
    border-radius: 1em;
    color: #fff;
    cursor: zoom-in;
    max-width: 28.5714;

    img {
      width: 100%;
      height: auto;
    }
    .overlay {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 7.8571em;
      padding: 2.5em;
      background: -webkit-gradient(
        linear,
        left bottom,
        left top,
        from(rgba(0, 0, 0, 0.9)),
        to(transparent)
      );
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.9) 0%,
        transparent 100%
      );

      .author {
        text-transform: capitalize;
        p {
          font-size: 1.5em;
          cursor: pointer;
        }

        small {
          font-size: 0.9em;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
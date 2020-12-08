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
  <!-- <div class="card">
    <div class="profilePic"></div>
    <div class="comment animate"></div>
    <div class="comment animate w80"></div>
  </div> -->
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

// Loading styles
.w80 {
  width: 80%;
}

.card {
  border: 2px solid #fff;
  box-shadow: 0px 0px 10px 0 #a9a9a9;
  padding: 1em 4em;
  min-height: 25em;
  border-radius: 1em;
  // width: 50px;
  // width: 80%;
  // margin: 50px auto;
  background: #fff;
}

.profilePic {
  height: 65px;
  width: 65px;
  border-radius: 50%;
}

.comment {
  height: 10px;
  background: #777;
  margin-top: 20px;
}

// .wrapper {
//   width: 0px;
//   animation: fullView 0.5s forwards linear;
// }

@keyframes fullView {
  100% {
    width: 100%;
  }
}

.animate {
  animation: shimmer 2s infinite;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;
}

@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}
</style>
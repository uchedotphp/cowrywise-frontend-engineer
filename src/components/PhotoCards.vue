<template>
  <div>
    <div class="box">
      <span
        v-for="photo in randomPhotos"
        :key="photo.id"
        @click="openModal(photo)"
        class="photo-container"
      >
        <img :src="photo.urls.regular" :alt="photo.alt_description" srcset="" />
        <div class="overlay">
          <div class="author">
            <p>{{ photo.user.first_name }} {{ photo.user.last_name }}</p>
            <small>{{
              photo.user.location ? photo.user.location : "Unknown Location"
            }}</small>
          </div>
        </div>
      </span>
    </div>

    <!-- modal -->
    <div v-show="modal" class="modal">
      <!-- Modal content -->
      <span class="modal-content">
        <span @click="closeModal" class="close">&times;</span>

        <img
          :src="zoomedPhoto.urls ? zoomedPhoto.urls.regular : ''"
          alt=""
          srcset=""
        />
        <span class="modal-author">
          <p>
            {{ zoomedPhoto.user ? zoomedPhoto.user.first_name : "" }}
            {{ zoomedPhoto.user ? zoomedPhoto.user.last_name : "" }}
          </p>
          <small>{{
            zoomedPhoto.user && zoomedPhoto.user.location
              ? zoomedPhoto.user.location
              : "Unknown Location"
          }}</small>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "PhotoCardsComponent",
  data() {
    return {
      modal: false,
      zoomedPhoto: {
        user: null,
        last_name: null,
        urls: null,
      },
    };
  },
  created() {
    this.$store.dispatch("setRandomPhotos");
  },
  computed: {
    ...mapGetters(["getRandomPhotos"]),
    ...mapState(["randomPhotos"]),
  },
  mounted() {
    console.log("the resul", this.randomPhotos);
  },
  methods: {
    openModal(photo) {
      this.modal = true;
      this.zoomedPhoto = photo;
    },

    closeModal() {
      this.modal = false;
    },
  },
};
</script>

<style lang="scss" scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 768px) {
  .box {
    display: grid;
    grid-row-gap: 50px;
  }

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

  // modal
  /* The Modal (background) */
  .modal {
    display: flex;
    position: fixed;
    z-index: 1;
    padding: 2% 1em;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    // overflow: auto;
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

    /* Modal Content */
    .modal-content {
      position: relative;
      background-color: #fff;
      margin: auto;
      padding: 0;
      border-radius: 1em;
      max-width: 1536px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      -webkit-animation-name: animatetop;
      -webkit-animation-duration: 0.4s;
      animation-name: animatetop;
      animation-duration: 0.4s;

      img {
        height: auto;
        width: 85vw;
        // object-fit: contain;
        display: block;
        border-radius: 1em 1em 0 0;
      }

      /* The Close Button */
      .close {
        position: absolute;
        right: -1em;
        top: -1em;
        color: white;
        font-size: 2em;
        font-weight: bold;
      }

      .close:hover,
      .close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
      }

      .modal-author {
        display: block;
        border-radius: 0 0 1em 1em;
        text-transform: capitalize;
        padding: 3em;
        p {
          font-size: 1.5em;
          cursor: pointer;
          padding-bottom: 0.5em;
        }

        small {
          font-size: 0.9em;
          color: rgb(85, 81, 81);
          cursor: pointer;
        }
      }
    }
  }

  /* Add Animation */
  @-webkit-keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }

  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
}

/* Medium devices and desktops (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .box {
    display: grid;
    // grid-template-columns: repeat(3, auto);
    grid-template-columns: repeat(3, 28.5714em);
    // grid-gap: 2.5571em 5.1429em;
    grid-gap: 40px 80px;
    justify-content: space-between;
  }

  .photo-container {
    overflow: hidden;
    position: relative;
    display: inline-table; //check
    border-radius: 1em;
    color: #fff;
    cursor: zoom-in;
    // max-width: 28.5714;
    height: auto;

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

  // modal
  /* The Modal (background) */
  .modal {
    display: flex;
    position: fixed;
    z-index: 1;
    padding-top: 2%;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

    /* Modal Content */
    .modal-content {
      position: relative;
      background-color: #fff;
      margin: auto;
      padding: 0;
      border-radius: 1em;
      max-width: 1536px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      -webkit-animation-name: animatetop;
      -webkit-animation-duration: 0.4s;
      animation-name: animatetop;
      animation-duration: 0.4s;

      img {
        height: 65vh;
        object-fit: contain;
        background: red;
        display: block;
        border-radius: 1em 1em 0 0;
      }

      /* The Close Button */
      .close {
        position: absolute;
        right: -2em;
        top: -1em;
        color: white;
        font-size: 2em;
        font-weight: bold;
      }

      .close:hover,
      .close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
      }
      .modal-author {
        display: block;
        border-radius: 0 0 1em 1em;
        text-transform: capitalize;
        background: #fff;
        padding: 3em;
        p {
          font-size: 1.5em;
          cursor: pointer;
          padding-bottom: 0.5em;
        }

        small {
          font-size: 0.9em;
          color: rgb(85, 81, 81);
          cursor: pointer;
        }
      }
    }
  }

  /* Add Animation */
  @-webkit-keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }

  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
}
</style>
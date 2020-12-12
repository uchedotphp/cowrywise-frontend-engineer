<template>
  <div>
    <div class="box">
      <template v-if="photos.length > 0">
        <span
          v-for="(photo, index) in photos"
          :key="photo.id"
          @click="openModal(photo)"
          :class="['photo-container', 'item-' + index]"
        >
          <img
            :src="photo.urls ? photo.urls.regular : ''"
            :alt="photo.alt_description"
            srcset=""
          />
          <div class="overlay">
            <div class="author">
              <p>
                {{ photo.user ? photo.user.first_name : "" }}
                {{ photo.user ? photo.user.last_name : "" }}
              </p>
              <small>{{
                photo.user && photo.user.location ? photo.user.location : ""
              }}</small>
            </div>
          </div>
        </span>
      </template>

      <!-- shimmer -->
      <template v-else>
        <div class="box-wrap" v-for="n in 10" :key="n">
          <div class="box-in"></div>
          <div class="box-in2"></div>
        </div>
      </template>
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
          <div>
            <p>
              {{ zoomedPhoto.user ? zoomedPhoto.user.first_name : "" }}
              {{ zoomedPhoto.user ? zoomedPhoto.user.last_name : "" }}
            </p>
            <small>{{
              zoomedPhoto.user && zoomedPhoto.user.location
                ? zoomedPhoto.user.location
                : ""
            }}</small>
          </div>
          <a
            href="https://unsplash.com/photos/51WKrfz6tLo/download"
            @click.prevent
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Arrow Down</title>
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                d="M112 268l144 144 144-144M256 392V100"
              />
            </svg>
          </a>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
    this.$store.dispatch("getRandomPhotos");
  },
  mounted() {
    // console.log("what came in", this.photos);
  },
  computed: {
    ...mapState(["photos"]),
  },
  methods: {
    openModal(photo) {
      this.modal = true;
      this.zoomedPhoto = photo;
    },

    closeModal() {
      this.modal = false;
    },

    download(link) {
      console.log("the link", link);
      return `${link.links.download}?force=true`;
      // return this.$store.dispatch("photoDownload", link.id).then((response) => {
      //   console.log("response on photocard side", response);
      //   return response
      // });
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
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
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

        a {
          background: hsla(0, 0%, 100%, 0.9);
          padding: 0.5em 0.7em;
          border-radius: 0.3em;
          border: 1px solid green;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
          &:hover {
            cursor: pointer;
          }
          svg {
            height: 1.5em;
            color: #767676;
            &:hover {
              color: green;
            }
          }
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
  .box-wrap {
    border-radius: 1em;
  }

  .box {
    display: grid;
    grid-auto-flow: dense;
    // grid-template-columns: repeat(3, auto);
    // grid-template-columns: repeat(3, 28.5714em);
    // grid-gap: 2.5571em 5.1429em;
    // grid-gap: 40px 80px;
    // justify-content: space-between;

    grid-column-gap: 70px;
    grid-row-gap: 40px;
    grid-template-columns: repeat(auto-fit, 28.5em);
    // grid-template-columns: repeat(3, 1fr);
    // padding: 25px;
  }

  .photo-container {
    overflow: hidden;
    position: relative;
    display: inline-table; //check
    // display: block;
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
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
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

        a {
          background: hsla(0, 0%, 100%, 0.9);
          padding: 0.5em 0.7em;
          border-radius: 0.3em;
          border: 1px solid green;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
          &:hover {
            cursor: pointer;
          }
          svg {
            height: 1.5em;
            color: #767676;
            &:hover {
              color: green;
            }
          }
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

// shimmer styles
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
<template>
  <div>
    <transition name="fade" mode="out-in">
      <div class="box-input" v-show="searchStatus == 'empty'">
        <input
          type="text"
          v-model="searchInput"
          v-on:keyup.enter="searcher"
          :placeholder="placeHolder"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <title>Search</title>
          <path
            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-width="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="32"
            d="M338.29 338.29L448 448"
          />
        </svg>
      </div>
    </transition>

    <!-- Searching Results -->
    <transition name="fade" mode="out-in">
      <div class="searching" v-show="searchStatus == 'fetching'">
        <p>
          Searching for <span>"{{ searchInput }}"</span>
        </p>
      </div>
    </transition>
    <!-- end of Searchin Result -->

    <!-- Searched Result -->
    <transition name="fade" mode="out-in">
      <div class="searched-result" v-show="searchStatus == 'completed'">
        <p>
          Search Results for
          <span>"{{ searchInput }}"</span>
        </p>
        <button @click="resetSearch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Clear search</title>
            <path
              d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M320 320L192 192M192 320l128-128"
            />
          </svg>
        </button>
      </div>
    </transition>
    <!-- end of Searched Result -->
  </div>
</template>

<script>
export default {
  name: "SearchBarComponent",
  props: {
    placeHolder: {
      type: String,
      default: "Search for photo"
    }
  },
  data() {
    return {
      searchStatus: "empty",
      searchInput: ""
    };
  },
  methods: {
    searcher() {
      if (this.searchInput.length < 1) {
        alert("Abeg input something");
      } else {
        this.searchStatus = "fetching";
        this.$store
          .dispatch("photoSearchResult", this.searchInput)
          .then((response) => {
            this.searchStatus = "completed";
            if (response == "Not Found") {
              this.$router.push({
                name: "404",
                params: {
                  resource: "photo",
                }
              });
            } else {
              this.$router.push({
                name: "Search",
                params: {
                  collection: this.searchInput,
                }
              });
            }
          });
      }
    },

    resetSearch() {
      this.searchStatus = "empty";
      this.searchInput = "";
      this.$router.push({
        name: "Home"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 768px) {
  .box-input {
    margin: auto;
    position: relative;
    max-width: 1536px;

    input {
      width: 100%;
      padding: 1em 3em;
      font-size: 1.5em;
      border-radius: 0.5em;
      border: none;
      box-shadow: 0 0 5px #bbb8b8;
    }

    input:focus {
      outline: none;
    }

    ::placeholder {
      color: #6e7074;
    }

    svg {
      position: absolute;
      color: #6e7074;
      top: 1.7em;
      left: 2em;
      height: 1.5em;
    }
  }

  // searching
  .searching {
    margin: auto;
    max-width: 1536px;
    font-size: 2em;

    p {
      color: #293b5b;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      span {
        color: #6d7b91;
      }
    }
  }

  // searched-result
  .searched-result {
    margin: auto;
    max-width: 1536px;
    // background: red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2em;

    p {
      color: #293b5b;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      span {
        color: #6d7b91;
      }
    }
    button {
      border: none;
      background: transparent;

      &:focus {
        outline: none;
      }
      svg {
        height: 2em;
      }
    }
  }
}

/* Medium devices and desktops (landscape tablets, 768px and up) */
@media only screen and (min-width: 769px) {
  .box-input {
    margin: auto;
    position: relative;
    max-width: 1536px;

    input {
      width: 100%;
      padding: 1.2em 4.5em;
      font-size: 1.5em;
      border-radius: 0.5em;
      border: none;
      box-shadow: 0 0 5px #bbb8b8;
    }

    input:focus {
      outline: none;
    }

    ::placeholder {
      color: #6e7074;
    }

    svg {
      color: #6e7074;
      position: absolute;
      top: 1.9em;
      left: 2em;
      height: 1.5em;
    }
  }
  // searching
  .searching {
    margin: auto;
    max-width: 1536px;
    font-size: 2em;

    p {
      color: #293b5b;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      span {
        color: #6d7b91;
      }
    }
  }

  // searched-result
  .searched-result {
    margin: auto;
    max-width: 1536px;
    // background: red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2em;

    p {
      color: #293b5b;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      span {
        color: #6d7b91;
      }
    }
    button {
      border: none;
      background: transparent;

      &:focus {
        outline: none;
      }
      svg {
        height: 2em;
      }
    }
  }
}
</style>
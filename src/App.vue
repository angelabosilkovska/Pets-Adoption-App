<template>
  <div id="app">
    <div id="nav">
      <nav class="container navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand">
          <img src="../src/assets/logo1.png" alt="" height="=50" width="50" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav mr-auto">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/dogs">Dogs</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/cats">Cats</router-link>
              </li>
            </ul>
          </div>
            <button class="btn btn-outline-success" @click="AddPet()">
              Add New Pet +
            </button>
        </div>
      </nav>
    </div>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {

  },
  methods: {
    AddPet() {
      this.$router.push("/newPet");
    }
  }
})
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: whitesmoke;
      background: #31afb4;
      border-radius: 0.1rem;
      padding: 7px;
    }
  }
  li {
    padding: 5px;
  }
}
#btn1 {
  margin-right: 10px;
}
</style>

<template>
  <div>
    <b-jumbotron bg-variant="info" text-variant="white" class="d-flex pb-0">
      <div style="flex:2">
        <div>
          <b-nav>
            <b-nav-item>Dogs</b-nav-item>
            <b-nav-item>Cats</b-nav-item>
            <b-nav-item>Other Pets</b-nav-item>
          </b-nav>
        </div>
        <br />
        <div>
          <b-form-input
            class="w-75 p-3 mb-10"
            v-model="search"
            placeholder="Search dogos"
          ></b-form-input>
        </div>
        <br />
        <div class="w-75">
          <!-- <p>Age</p> -->
          <b-row class="mt-3 ">
            <b-col class=""
              ><b-form-select
                v-model="selectedAge"
                :options="optionsAge"
              ></b-form-select
            ></b-col>
            <b-col
              ><b-form-select
                v-model="selectedGender"
                :options="options"
              ></b-form-select
            ></b-col>
          </b-row>
        </div>
        <br />
        <b-button
          variant="success"
          @click="searchDogs()"
          href="#"
          class="w-75 p-3 mb-1"
          >Search</b-button
        >
      </div>
      <img
        style="flex:0"
        src="https://res.cloudinary.com/dvwqurs8h/image/upload/v1634744059/Pets/PngItem_2429375_u1egn4.png"
        class="w-25"
        alt=""
      />
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "PetSearch",
  props: {
    searchFunc: Function
  },
  data() {
    return {
      selectedAge: null,
      selectedGender: null,
      search: null,
      optionsAge: [
        { value: null, text: "Age" },
        { value: "Puppy", text: "Puppy" },
        { value: "Young", text: "Young" },
        { value: "Adult", text: "Adult" },
        { value: "Senior", text: "Senior" }
      ],
      options: []
    };
  },
  methods: {
    searchDogs() {
      if (this.selectedAge) {
        this.searchFunc("age", this.selectedAge);
      }
      if (this.search) {
        this.searchFunc("name", this.search);
      }
    }
  }
};
</script>

<style scoped>
img {
  float: right;
}
.jumbotron {
  padding: 3rem 2rem;
}
.nav-link {
  color: white;
}
</style>

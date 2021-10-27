<template>
  <div class="home">
    <div>
      <h2>Adopt a new best friend</h2>
      <h5>from shelters and rescues all around the world</h5>
    </div>
    <br />
    <div>
      <PetSearch :searchFunc="filterDogos" />
    </div>
    <div>
      <h3>Featured Pets</h3>
    </div>
    <b-container>
      <b-row>
        <b-col v-for="card in filteredDogs" :key="card.id" lg="4">
          <div
            v-bind:name="card.name"
            v-bind:gender="card.gender"
            v-bind:age="card.age"
            v-bind:location="card.location"
            v-bind:imageUrl="card.imageUrl"
          >
            <PetCards :data="card" />
            <br />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import PetCards from "../components/PetCards.vue";
import PetSearch from "../components/PetSearch.vue";
import { mapState } from "vuex";

export default {
  name: "home",
  name: "",
  gender: "",
  age: "",
  location: "",
  imageUrl: "",
  components: {
    PetCards,
    PetSearch
  },
  computed: {
    ...mapState(["dogs"])
  },
  data() {
    return {
      filteredDogs: [],
      allDogs: []
    };
  },
  mounted() {
    console.log(this.dogs);
    this.allDogs = this.dogs;
    this.filteredDogs = this.allDogs;
    this.filterDogos()
  },
  methods: {
    filterDogos(filterBy, params) {
      console.log(params);
      this.filteredDogs = this.allDogs;
      if (filterBy == "age" && params) {
        this.filteredDogs = this.filteredDogs.filter(el => {
          return el.age == params;
        });
      }
      if (filterBy == "gender" && params) {
        this.filteredDogs = this.filteredDogs.filter(el => {
          return el.gender == params;
        });
      }
      if (filterBy == "name" && params) {
        this.filteredDogs = this.filteredDogs.filter(el => {
          console.log(el);
          return params
            .toLowerCase()
            .split(" ")
            .every(v => el.name.toLowerCase().includes(v));
        });
      }
      console.log("newarr", this.filteredDogs);
    }
  }
};
</script>

<style scoped>
h2 {
  font-weight: bold;
}
h3 {
  font-family: Tahoma (sans-serif);
  margin-bottom: 25px;
}
.card-deck {
  display: initial;
}
</style>

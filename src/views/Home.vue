<template>
  <div class="home">
    <div>
      <h1>Adopt a new best friend!</h1>
    </div>
    <b-container>
      <b-row>
        <b-col v-for="card in cards" :key="card.id" lg="4">
          <div
            v-bind:Petname="card.Petname"
            v-bind:Petgender="card.Petgender"
            v-bind:Petage="card.Petage"
            v-bind:Petlocation="card.Petlocation"
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

export default {
  name: "home",
  Petname: "",
  Petgender: "",
  Petage: "",
  Petlocation: "",
  imageUrl: "",
  components: {
    PetCards
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          imageUrl: '/img/leksi.fe3930bc.jpeg',
          Petname: "Lexy",
          Petgender: "Female",
          Petage: "Adult",
          Petlocation: "Bitola"
        },
        {
          id: 2,
          Petname: "Buddy",
          Petgender: "Male",
          Petage: "Puppy",
          Petlocation: "Skopje"
        },
        {
          id: 3,
          Petname: "Max",
          Petgender: "Male",
          Petage: "Adult",
          Petlocation: "Bitola"
        },
        {
          id: 4,
          Petname: "Bella",
          Petgender: "Female",
          Petage: "Young",
          Petlocation: "Skopje"
        },
        {
          id: 5,
          Petname: "Cooper",
          Petgender: "Male",
          Petage: "Senor",
          Petlocation: "Kichevo"
        },
        {
          id: 6,
          Petname: "Lucy",
          Petgender: "Female",
          Petage: "Young",
          Petlocation: "Ohrid"
        },
        {
          id: 7,
          Petname: "Luna",
          Petgender: "Female",
          Petage: "Young",
          Petlocation: "Bitola"
        },
        {
          id: 8,
          Petname: "Coda",
          Petgender: "Male",
          Petage: "Puppy",
          Petlocation: "Skope"
        }
      ]
    };
  }
};
</script>

<style>
h1 {
  margin-bottom: 25px;
}
.card-deck {
  display: initial;
}
</style>

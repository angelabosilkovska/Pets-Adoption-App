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
import PetSearch from "../components/PetSearch.vue";

export default {
  name: "home",
  Petname: "",
  Petgender: "",
  Petage: "",
  Petlocation: "",
  imageUrl: "",
  components: {
    PetCards,
    PetSearch
  },
  data() {
    return {
      filteredDogs: [],
      allDogs: [
        {
          id: 1,
          imageUrl:
            "https://res.cloudinary.com/dvwqurs8h/image/upload/v1634730162/Pets/leksi_2_xa4oe0.jpg",
          Petname: "Lexy",
          Petgender: "Female",
          Petage: "Adult",
          Petlocation: "Bitola"
        },
        {
          id: 2,
          imageUrl:
            "https://res.cloudinary.com/dvwqurs8h/image/upload/v1634730164/Pets/photo-1617895153857-82fe79adfcd4_evqdop_2_qfurni.jpg",
          Petname: "Buddy",
          Petgender: "Male",
          Petage: "Puppy",
          Petlocation: "Skopje"
        },
        {
          id: 3,
          imageUrl:
            "https://res.cloudinary.com/dvwqurs8h/image/upload/v1634730161/Pets/Boxer_Feature-Image_mj94s9_3_coymfp.jpg",
          Petname: "Max",
          Petgender: "Male",
          Petage: "Adult",
          Petlocation: "Bitola"
        },
        {
          id: 4,
          imageUrl:
            "https://res.cloudinary.com/dvwqurs8h/image/upload/v1634732788/Pets/white-dog-thinkstockphotos-177514586-590sm6415_2_r6v5fl.jpg",
          Petname: "Bella",
          Petgender: "Female",
          Petage: "Young",
          Petlocation: "Skopje"
        },
        {
          id: 5,
          imageUrl:
            "https://res.cloudinary.com/dvwqurs8h/image/upload/v1634732786/Pets/r23z48cpy8821_k12g3k.jpg",
          Petname: "Cooper",
          Petgender: "Male",
          Petage: "Puppy",
          Petlocation: "Kichevo"
        },
        {
          id: 6,
          imageUrl:
            "https://res.cloudinary.com/dvwqurs8h/image/upload/v1634732785/Pets/photo-1606149257644-a1f04b76c111_z8hpsa.jpg",
          Petname: "Lucy",
          Petgender: "Female",
          Petage: "Young",
          Petlocation: "Ohrid"
        },
        {
          id: 7,
          imageUrl:
            "https://res.cloudinary.com/dvwqurs8h/image/upload/v1634735402/Pets/photo-1572197876411-8a8e0faa2535_pqr5dz.jpg",
          Petname: "Luna",
          Petgender: "Female",
          Petage: "Senior",
          Petlocation: "Bitola"
        },
        {
          id: 8,
          imageUrl:
            "https://res.cloudinary.com/dvwqurs8h/image/upload/v1634735403/Pets/yorkshire-terrier-i2-sz6_2_i5th02.jpg",
          Petname: "Coda",
          Petgender: "Male",
          Petage: "Puppy",
          Petlocation: "Skope"
        },
        {
          id: 9,
          imageUrl:
            "https://res.cloudinary.com/dvwqurs8h/image/upload/v1634735403/Pets/IMG_2057-scaled_bpk28v.jpg",
          Petname: "Rex",
          Petgender: "Male",
          Petage: "Adult",
          Petlocation: "Skope"
        }
      ]
    };
  },
  mounted() {
    this.filteredDogs = this.allDogs;
    this.filterDogos()
  },
  methods: {
    filterDogos(filterBy, params) {
      console.log(params);
      this.filteredDogs = this.allDogs;
      if (filterBy == "age" && params) {
        this.filteredDogs = this.filteredDogs.filter(el => {
          return el.Petage == params;
        });
      }
      if (filterBy == "gender" && params) {
        this.filteredDogs = this.filteredDogs.filter(el => {
          return el.Petgender == params;
        });
      }
      if (filterBy == "name" && params) {
        this.filteredDogs = this.filteredDogs.filter(el => {
          console.log(el);
          return params
            .toLowerCase()
            .split(" ")
            .every(v => el.Petname.toLowerCase().includes(v));
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

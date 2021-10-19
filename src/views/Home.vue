<template>
<div class="home">
  <div>
    <h1>Adopt a new best friend!</h1>
  </div>
  <b-card-group deck
  v-for="card in cards"
  :key="card.id"
  v-bind:Petname="card.Petname"
  >
    <PetCards :data="card" />
</b-card-group>
</div>
</template>

<script>
import PetCards from '../components/PetCards.vue'

export default {
  name: 'home',
  Petname: '',
  components: {
    PetCards
  },
  data () {
     return {
       cards: [
         { id: 1, Petname: 'Lexy' },
         { id: 2, Petname: 'Buddy' },
         { id: 3, Petname: 'Max' },
         { id: 4, Petname: 'Bella' },
         { id: 5, Petname: 'Cooper' },
         { id: 6, Petname: 'Lucy' },
         { id: 7, Petname: 'Luna' },
         { id: 8, Petname: 'Coda' },
         { id: 9, Petname: 'DogName' }
       ]
     }
  }
}
</script>

<style>
h1 {
  margin-bottom: 10px;
}
.card-deck {
    display: initial;
}
</style>

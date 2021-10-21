<template>
  <div class="card">
    <div class="shadow bg-white rounded">
    <img :src="data.imageUrl"  class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{data.Petname}}</h5>
      <p class="card-text">{{data.Petgender}}, {{data.Petage}}</p>
      <p class="card-text">{{data.Petlocation}}</p>
      <br>
      <b-button @click="goToPets()" variant="primary">See More</b-button>
    </div>
    </div>
    </div>
</template>

<script>

export default {
    name: 'PetCards',
    props: {
        data: Object
    },
    methods: {
      goToPets(){
      router.push({ name: '/pets' });
    }
  }
}
</script>

<style>
.card {
 text-align:left;
}
p {
  margin-bottom: 0;
}
</style>

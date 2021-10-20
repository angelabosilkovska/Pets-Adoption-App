<template>
  <div class="card">
    <div class="shadow bg-white rounded">
    <img :src="data.imageUrl"  class="card-img-top" >
    <!-- <img src="@/assets/leksi.jpeg" class="card-img-top" alt=""> -->
    <div class="card-body">
      <h5 class="card-title">{{data.Petname}}</h5>
      <p class="card-text">{{data.Petgender}}, {{data.Petage}}</p>
      <p class="card-text">{{data.Petlocation}}</p>
      <br>
      <b-button variant="primary">See More</b-button>
    </div>
    </div>
    </div>
</template>

<script>
import image from "../assets/leksi.jpeg"
export default {
    name: 'PetCards',
    props: {
        data: Object
    },
    data(){
      return{
        image:image
      }
    },
    mounted(){
      console.log(JSON.stringify(this.data.imageUrl));
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

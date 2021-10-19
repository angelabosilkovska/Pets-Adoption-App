<template>
  <div class="card">
    <img src="" class="card-img-top" >
    <div class="card-body">
      <h5 class="card-title">{{data.Petname}}</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <b-button variant="primary">See More</b-button>
    </div>
    </div>
</template>

<script>
export default {
    name: 'PetCards',
    props: {
        data: Object
    }
}
</script>

<style>
.card{
 box-sizing:border-box;
 text-align:left;
}
</style>

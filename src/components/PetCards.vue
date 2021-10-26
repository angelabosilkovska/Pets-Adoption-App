<template>
  <div class="card">
    <div class="shadow bg-white rounded">
      <img :src="data.imageUrl" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ data.Petname }}</h5>
        <p class="card-text">{{ data.Petgender }}, {{ data.Petage }}</p>
        <p class="card-text">{{ data.Petlocation }}</p>
        <br />
        <b-button @click="seePet()" variant="primary">See More</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PetCards",
  props: {
    data: Object
  },
  methods: {
    seePet() {
      console.log(this.data);
      this.$router.push(`/pets/dogs/${this.data.Petname}`);
    }
  }
};
</script>

<style>
.card {
  text-align: left;
}
p {
  margin-bottom: 0;
}
</style>

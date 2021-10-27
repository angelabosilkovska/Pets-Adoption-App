<template>
  <div class="card">
    <div class="shadow bg-white rounded">
      <img :src="data.imageUrl" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ data.name }}</h5>
        <p class="card-text">{{ data.gender }}, {{ data.age }}</p>
        <p class="card-text">{{ data.location }}</p>
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
      this.$router.push(`/pets/dogs/${this.data.name}`);
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

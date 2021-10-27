<template>
  <div>
    <h1>{{ animal.name }} ({{ $route.params.species }})</h1>
    <img :src="animal.imageUrl" height="230px" width="200px" />
    <p>Age: {{ animal.age }}</p>
    <p>Breed: {{ animal.breed }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      animal: {}
    };
  },
  created() {},
  computed: {
    ...mapState(["cats", "dogs"])
  },
  mounted() {
    const animal = this[this.$route.params.species][this.$route.params.id];
    this.animal = animal;
  }
};
</script>

<style></style>

<template>
  <div>
    <b-media no-body>
      <b-media-aside vertical-align="center">
        <b-img :src="animal.imageUrl" height="240px" width="200px" alt="placeholder"></b-img>
      </b-media-aside>

      <b-media-body>
        <h3 class="mt-0">{{ animal.name }} ({{ $route.params.species }})</h3>
        <p>
         Age: {{ animal.age }}
         <br>
         Gender: {{ animal.gender }}
         <br>
         Breed: {{ animal.breed }}
         <br>
         Color: {{ animal.color }}
         <br>
         Location: {{ animal. location}}
         <br>
         Weight: {{ animal.weight }}
        </p>
        <p class="mb-0">
          <b>About {{animal.name}}:</b>
      <br>
      {{animal.notes}}
        </p>
        </b-media-body>
        </b-media>
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

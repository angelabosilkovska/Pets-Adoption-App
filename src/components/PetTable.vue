<template>
  <div>
    <h1>
      {{ species.charAt(0).toUpperCase() + species.slice(1) }} for Adoption
    </h1>
    <b-table striped hover :fields="fields" :items="pets">
      <template #cell(name)="data">
        <router-link :to="`/pets/${species}/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    species: String,
    pets: Array
  },
  data() {
    return {
      fields: [
        "name",
        "age",
        "gender",
        "breed",
        "color",
        "location",
        "weight",
        "notes"
      ]
    };
  }
};
</script>

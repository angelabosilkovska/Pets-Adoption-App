<template>
  <div>
    <h1>Dogs for Adoption</h1>
    <b-table striped hover :fields="fields" :items="dogs">
      <template #cell(name)="data">
        <router-link :to="`/pets/dogs/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
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
      ],
      dogID: ""
    };
  },
  computed: {
    ...mapState(["dogs"])
  }
};
</script>

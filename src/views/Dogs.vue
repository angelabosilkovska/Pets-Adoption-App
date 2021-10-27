<template>
  <div>
    <h1>Dogs for Adoption</h1>
    <b-table striped hover :items="dogs">
      <template #cell(Petname)="data">
        <router-link :to="`/pets/dogs/${data.value}`">
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
    return {};
  },
  computed: {
    ...mapState(["dogs"])
  }
};
</script>

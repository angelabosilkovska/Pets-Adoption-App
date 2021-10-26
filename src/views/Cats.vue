<template>
  <div>
    <h1>Cats for Adoption</h1>
    <b-table striped hover :items="cats">
      <template #cell(name)="data">
        <router-link :to="`/pets/cat/${data.value}`">
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
  created() {},
  computed: {
    ...mapState(["cats"])
  }
};
</script>

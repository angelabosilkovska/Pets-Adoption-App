<template>
  <div>
  <b-jumbotron>
    <h3>Find Your Pet!</h3>
    <br>
    <div>
        <b-form-select v-model="selected" :options="options" class="w-25 p-3 mb-1"></b-form-select>
        <b-form-select v-model="selected" :options="options" class="w-25 p-3 mb-1"></b-form-select>
    </div>
    <br>
    <b-button variant="success" href="#" class="w-50 p-3 mb-1">Search</b-button>
  </b-jumbotron>
</div>
</template>

<script>
export default {
    name: 'PetSearch',

    data () {
      return {
        selected: null,
        options: [
          { value: null, text: 'Age' },
          { value: 'a', text: 'Puppy' },
          { value: 'b', text: 'Young' },
          { value: 'b', text: 'Adult' },
          { value: 'd', text: 'Senior' }
        ]
    }
}
}
</script>

<style>
</style>

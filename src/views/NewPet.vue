<template>
<div class= "center">
    <h4>Insert Pet Information Below</h4>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="input-group-2" label="Pet Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.age"
          placeholder="Puppy / Young / Adult / Senior"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet Gender:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.gender"
          placeholder="Male / Female"
          required
        ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-2" label="Pet Breed:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.breed"
          placeholder="Golden Retriver"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet Color:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.color"
          placeholder="White"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet Loacation:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.location"
          placeholder="Bitola"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet Weight:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.weight"
          placeholder="20"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
      label="Notes about pet:"
      label-for="textarea-formatter"
      class="mb-0"
    >
      <b-form-textarea
        id="textarea-formatter"
        class="mb-2"
        v-model="form.notes"
        placeholder="Enter your text"
        :formatter="formatter"
      ></b-form-textarea>
    </b-form-group>

       <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.species"
          :options="['cats', 'dogs' , 'other']"
          placeholder="Choose Species"
          required
        ></b-form-select>
      </b-form-group>

        <div class="row justify-content-center">
         <b-button type="submit" variant="primary">Submit</b-button>
        </div>

    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'newPet',

    data() {
      return {
        form: {
        name: '',
        age: '',
        gender: '',
        breed: '',
        color: '',
        location: '',
        weight: '',
        notes: '',
        species: null,
        checked: []
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
    }
  }
</script>

<style scoped>
.center {
margin: auto;
width: 60%;
padding: 10px;
}
h4 {
    margin-bottom: 20px;
    text-align: center;
}
</style>
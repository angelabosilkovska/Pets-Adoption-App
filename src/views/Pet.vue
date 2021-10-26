<template>
  <div>
      <h1>Pets</h1>
  </div>
</template>

<script>
export default {
    name: "pets",

    data() {
        return {
            destinationID:this.$route.params.id
        }
    }
}
</script>

<style>

</style>
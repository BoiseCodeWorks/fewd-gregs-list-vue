<template>
   <div class="car-form container-fluid">
      <div class="row">
          <div class="col-12 text-center">
              <h1>Post a Car</h1>
              <router-link :to="{name: 'cars'}">Return to Cars</router-link>
          </div>
      </div>
      <div class="row">
          <div class="col-10 offset-1">
              <form @submit.prevent="postCar">
                  <input required type="text" v-model="newCar.make" placeholder="make">
                  <input required type="text" v-model="newCar.model" placeholder="model">
                  <input required type="number" v-model="newCar.price" placeholder="price">
                  <input required type="number" v-model="newCar.year" placeholder="year">
                  <input required type="text" v-model="newCar.imgUrl" placeholder="image">
                  <textarea v-model="newCar.description" placeholder="description" cols="30" rows="10"></textarea>
                  <button type="submit" class="btn btn-info">Submit</button>
              </form>
          </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "car-form",
   props: [],
   data() {
      return {
          newCar: {
              make: '',
              model: '',
              price: NaN,
              year: NaN,
              imgUrl: '',
              description: ''
          }
      }
   },
   computed: {},
   methods: {
       postCar() {
           this.$store.dispatch('postCar', this.newCar)
       }
   },
   components: {}
}
</script>

<style>
form {
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 5px black;
    background: var(--light);
}
</style>

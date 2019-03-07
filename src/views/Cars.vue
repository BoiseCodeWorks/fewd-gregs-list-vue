<template>
   <div class="cars container-fluid">
      <div class="row">
          <div class="col text-center">
                <h1>Greg's List</h1>
                <router-link class="mx-2" :to="{name: 'car-form'}">Post a Car</router-link>
                <router-link class="mx-2" :to="{name: 'houses'}">View Houses</router-link>
                <router-link class="mx-2" :to="{name: 'jobs'}">View Jobs</router-link>
          </div>
      </div>
      <div class="row">
          <car-card v-for="car in cars" :carData="car" :key="car._id"/>
      </div>
   </div>
</template>

<script>
import CarCard from '@/components/CarCard.vue'
export default {
   name: "cars",
   mounted(){
       if(!this.cars.length) this.$store.dispatch('getCars')  
   },
   props: [],
   data() {
      return {}
   },
   computed: {//computed's are observers that watch when a value changes and cause a redraw at that time
    cars() {
       return this.$store.state.cars.reverse() 
    }
   },
   methods: {},
   components: {
       CarCard
   }
}
</script>
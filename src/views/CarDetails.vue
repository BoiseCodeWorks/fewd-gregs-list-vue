<template>
   <div class="car-details container-fluid">
       <navigation />
      {{car}}
   </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
export default {
   name: "car-details",
   props: [],
   data() {
      return {}
   },
   computed: {
       car() {
           let id = this.$route.params.carId
           return this.$store.state.cars.find(car => car._id == id)
       }
   },
   methods: {},
   components: {
       Navigation
   }
}
</script>
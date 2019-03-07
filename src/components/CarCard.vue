<template>
   <div class="car-card col-4">
      <div class="card m-2">
         <img :src="carData.imgUrl" alt="car img" class="card-img-top">
         <div class="card-body">
            <router-link :to="{name: 'car-details', params: {carId: carData._id} }"><h5 class="text-center">View Details</h5></router-link>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "car-card",
   props: ["carData"],
   data() {
      return {}
   },
   computed: {},
   methods: {},
   components: {}
}
</script>
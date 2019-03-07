<template>
   <div class="navigation row">
      <div class="col-12 d-flex justify-content-center">
          <router-link class="mx-2" :to="{name: 'cars'}">Back to Cars</router-link> |
          <router-link class="mx-2" :to="{name: 'car-form'}">Post a Car</router-link>
      </div>
   </div>
</template>

<script>
export default {
   name: "navigation",
   props: [],
   data() {
      return {}
   },
   computed: {},
   methods: {},
   components: {}
}
</script>
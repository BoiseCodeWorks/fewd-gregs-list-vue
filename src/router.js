import Vue from 'vue'
import Router from 'vue-router'
import Cars from './views/Cars.vue'
import Houses from './views/Houses.vue'
import Jobs from './views/Jobs.vue'
import CarDetails from './views/CarDetails.vue'
import CarForm from './views/CarForm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'cars'
    },
    {
      path: '/cars',
      name: 'cars',
      component: Cars
    },
    {
      path: '/houses',
      name: 'houses',
      component: Houses
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs
    },
    {
      path: '/cars/:carId',
      name: 'car-details',
      component: CarDetails
    },
    {
      path: '/post-a-car',
      name: 'car-form',
      component: CarForm
    }
  ]
})

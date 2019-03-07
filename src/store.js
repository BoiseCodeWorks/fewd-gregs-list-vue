import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router';

Vue.use(Vuex)

let _api = Axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api'
})

export default new Vuex.Store({
  state: {//our single source of truth a.k.a. accurate data in our client side application
    cars: []
  },
  mutations: {//referenced by commit | update the state
    setCars(state, cars) {
      state.cars = cars
    }
  },
  actions: {//referenced by dispatch | handle http requests and other logic
    getCars({commit, dispatch}){
      _api.get('cars')
        .then(res => {
          console.log(res)
          commit('setCars', res.data.data)
        })
        .catch(e => console.error(e))
    },
    postCar({commit, dispatch}, payload) {
      _api.post('cars', payload)
        .then(res => {
          console.log(res)
          router.push({name: 'cars'})
          dispatch('getCars')
        })
    }
  }
})

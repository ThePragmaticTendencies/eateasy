import Vue from 'vue'
import App from './App.vue'

import './registerServiceWorker'
import router from './router'

// import { dbRef } from '@/firebase/index'
//
// import IngredientRepository from '@/repository/ingredientRepository'
// let ingredientRepository = new IngredientRepository(dbRef, 'AdamB')
// Vue.config.productionTip = false
//
// let ingredients = [
//   { id: 'szpinak', name: 'szpinak', fodmap: 0 },
//   { id: 'tofu_wedzone', name: 'tofu wędzone', fodmap: 0 },
//   { id: 'cieciorka', name: 'szpinak', fodmap: 1 }]
//
// ingredients.forEach(ingredient => {
//   ingredientRepository.addIngredient(ingredient)
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

<template>
<div>
  <Ingredient v-for="item in ingredients" :ingredient="item" :key="item.id" />
</div>
</template>

<script>
import {
  dbRef
} from '@/firebase/index'
import Ingredient from '@/components/Ingredient'
import IngredientRepository from '@/repository/ingredientRepository'

export default {
  name: 'Shelf',
  props: [],
  data: function() {
    return {
      ingredients: []
    }
  },
  mounted: function() {
    let ingredientRepository = new IngredientRepository(dbRef, 'AdamB')

    ingredientRepository.subscribeForIngredients((snap) => {
      let ingredient = snap.val()
      console.log(ingredient)
      this.ingredients.push(snap.val())
    })
  },
  components: {
    Ingredient
  }

}
</script>

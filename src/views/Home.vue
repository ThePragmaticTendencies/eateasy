<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Recipe />
  </div>
</template>

<script>
// @ is an alias to /src
import Recipe from '@/components/Recipe.vue'

export default {
  name: 'home',
  components: {
    Recipe
  }
}
</script>

<template>
<div>
  <span>{{ingredient.name}}</span>
</div>
</template>

<script>
export default {
  name: 'Ingredient',
  props: ['ingredient', 'action']
}
</script>

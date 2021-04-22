<template>
  <div>
    <NuxtLink to="/" class="text-purple-600 cursor-pointer">
      На главную
    </NuxtLink>
    <h1>Привет, это страничка пользователя</h1>
    <ul>
      <li v-for="item in currentTodo" :key="item.id">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    currentTodo () {
      return this.$store.getters['api/GET_TODO']
    }
  },
  beforeMount () {
    this.$store.dispatch('api/GET_CURRENT_TODO', this.$router.currentRoute.params.id)
  }
}

</script>

<style lang="scss" scoped>

</style>

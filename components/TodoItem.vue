<template>
  <div>
    <ul class="ml-8 mr-8 flex-column">
      <h2 class="text-4xl my-8 block">
        Список задач
      </h2>
      <div v-if="!todos.length">
        <li v-for="item in todos" :key="item.id" class="border-solid border-2 border-colors.coolGray-500 max-w-md  p-1 cursor-pointer mr-8 block">
          <NuxtLink :to="`user/${item.userId}`">
            {{ item.title }}
          </NuxtLink>
        </li>
      </div>
      <div v-else>
        <li v-for="item in currentTodos" :key="item.id" class="border-solid border-2 border-colors.coolGray-500 max-w-md  p-1 cursor-pointer mr-8 block">
          <NuxtLink :to="`user/${item.userId}`">
            {{ item.title }}
          </NuxtLink>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    todos () {
      return this.$store.getters['api/GET_TODOS']
    },
    currentTodos () {
      return this.$store.getters['api/GET_SORTED_TODOS']
    }
  },
  beforeMount () {
    this.$store.dispatch('api/GET_TODOS_FROM_API')
  }
}
</script>

<style lang="scss" scoped>

</style>

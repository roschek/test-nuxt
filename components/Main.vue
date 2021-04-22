<template>
  <div>
    <h1 class="text-4xl my-8 text-center">
      Приложение для поиска задач и выборки по пользователям
    </h1>
    <div class="flex flex-row flex-nowrap">
      <UsersList />
      <TodoItem />
    </div>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
import UsersList from '@/components/UsersList'

export default {
  components: { TodoItem, UsersList },
  data () {
    return {
      currentUser: ''
    }
  },
  computed: {
    todos () {
      return this.$store.getters['api/GET_TODOS']
    }
  },
  beforeMount () {
    this.$store.dispatch('api/GET_TODOS_FROM_API')
  }
}

</script>

<style lang='scss' scoped>
</style>

<template>
  <div>
    <h1 class="text-4xl my-8 text-center">
      Приложение для поиска задач и выборки по пользователям
    </h1>
    <div class="flex flex-row flex-nowrap">
      <ul class="ml-8 mr-8 flex-column">
        <h2 class="text-4xl my-8">
          Список Участников
        </h2>
        <li v-for="item in users" :key="item.id" class="border-solid border-2 border-colors.coolGray-500 max-w-md p-1 cursor-pointer mr-8">
          <p :id="`${item.id}`" class="cursor-pointer" @click="sortTasks(id)">
            {{ item.name }}
          </p>
        </li>
      </ul>
      <TodoItem :current-user="currentUser" />
    </div>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'

export default {
  components: { TodoItem },
  data () {
    return {
      currentUser: ''
    }
  },
  computed: {
    todos () {
      return this.$store.getters['api/GET_TODOS']
    },
    users () {
      return this.$store.getters['api/GET_USERS']
    }
  },
  beforeMount () {
    this.$store.dispatch('api/GET_TODOS_FROM_API')
    this.$store.dispatch('api/GET_USERS_FROM_API')
  },
  methods: {
    sortTasks (id) {
      this.currentUser = id
      console.log(this.currentUser)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>

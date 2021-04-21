<template>
  <div>
    <h1 class="text-4xl my-8 text-center">
      Приложение для поиска задач и выборки по пользователям
    </h1>
    <ul>
      <li :v-for="item in GET_TODOS" :key="item.userId">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'GET_TODOS'
    ])
  },
  created () {
    this.GET_TODOS_FROM_API()
  },
  methods: {
    ...mapActions([
      'GET_TODOS_FROM_API'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <div>
    <ul class="ml-8 mr-8 flex-column">
      <h2 class="text-4xl my-8">
        Список Участников
      </h2>
      <li v-for="item in users" :key="item.id" class="border-solid border-2 border-colors.coolGray-500 max-w-md p-1 cursor-pointer mr-8">
        <p :id="`${item.id}`" class="cursor-pointer" @click="sortTasks(item.id)">
          {{ item.name }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    users () {
      return this.$store.getters['api/GET_USERS']
    },
    todos () {
      return this.$store.getters['api/GET_TODOS']
    }
  },
  beforeMount () {
    this.$store.dispatch('api/GET_USERS_FROM_API')
  },
  methods: {
    sortTasks (id) {
      this.$store.dispatch('api/SORTED_TODOS', id)
    }
  }
}

</script>

<style lang="scss" scoped>

</style>

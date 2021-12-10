<template>
<nav class="bg-darkMedium h-screen flex flex-col justify-between">
  <div>
    <div class="mb-4 mt-4 text-xl flex justify-center ">
      <h1>Expenses</h1>
    </div>
    <div class="w-64 navigationMenu text-white">
      <router-link
        :key="i"
        class="mb-2 mt-2 p-2 pl-4 flex items-center hover:bg-featured hover:text-dark"
        v-for="(router, i) in routerLinks"
        :to="{ name: router.name }"
        exact-active-class="text-featured"
      >
        <i class="fa mr-2" :class="`fa-${router.meta.icon}`"></i>
        {{ router.meta.title }}
      </router-link>
      <hr class="border-darkLow mt-4 mb-4 m-1">
    </div>
    <new-expense></new-expense>
  </div>
  <logout></logout>
</nav>
</template>

<script>
import Logout from './Logout'
import NewExpense from './NewExpense'

export default {
  components: {
    Logout,
    NewExpense
  },
  computed: {
    routerLinks () {
      return this.$router.options.routes.filter(route => route.name !== 'login')
    }
  }
}
</script>

<style lang="sass" scoped>
</style>

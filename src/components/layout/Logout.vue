<template>
  <button @click="handleLogout()" class="w-full text-center text-white hover:text-featured p-4 pb-2.5">
    <i class="fa fa-sign-out-alt mr-1"></i>
    Sign-out
  </button>
</template>

<script>
import { getAuth, signOut } from 'firebase/auth'

export default {
  methods: {
    async handleLogout () {
      this.$root.$emit('Spinner::show')

      const auth = getAuth()

      await signOut(auth)

      this.$router.push({ name: 'login' })

      setTimeout(() => {
        this.$root.$emit('Spinner::hide')
      }, 300)
    }
  }
}
</script>

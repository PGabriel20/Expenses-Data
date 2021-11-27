<template>
  <div id="app" class="bg-darker min-h-screen text-light">
    <base-spinner></base-spinner>
    <router-view/>
  </div>
</template>

<script>
import BaseSpinner from './components/global/BaseSpinner'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default {
  components: {
    BaseSpinner
  },
  mounted () {
    const auth = getAuth()

    onAuthStateChanged(auth, (user) => {
      window.uid = user ? user.uid : null

      if (!window.uid) {
        this.$router.push({
          name: 'login'
        })
      } else {
        this.$router.push({
          name: 'home'
        })
      }

      setTimeout(() => {
        this.$root.$emit('Spinner::hide')
      }, 300)
    })
  }
}
</script>

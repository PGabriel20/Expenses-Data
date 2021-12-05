<template>
  <div id="app" class="bg-darker min-h-screen flex w-full text-light">
    <navigation v-if="isLoggedIn"/>
    <div class="w-full bg-black">
      <router-view/>
    </div>
    <base-spinner></base-spinner>
  </div>
</template>

<script>
import BaseSpinner from './components/global/BaseSpinner'
import Navigation from './components/layout/Navigation'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default {
  components: {
    BaseSpinner,
    Navigation
  },
  data () {
    return {
      isLoggedIn: false
    }
  },
  mounted () {
    const auth = getAuth()

    onAuthStateChanged(auth, (user) => {
      window.uid = user ? user.uid : null

      this.isLoggedIn = !!user

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

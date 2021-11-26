<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="w-full max-w-xs">
      <form @submit.prevent="handleLogin" class="bg-light shadow-md rounded px-8 pt-6 pb-6 mb-4">
        <h1 class="text-gray-700 font-bold mb-6 text-xl text-center">Expenses</h1>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input v-model="password" class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*********">
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex flex-col">
          <button class="bg-featured hover:bg-featuredDark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Sign In
          </button>
          <a class="text-center inline-block align-baseline font-bold text-sm text-darkMedium hover:text-darker mt-4" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default {

  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async handleLogin () {
      const { email, password } = this
      const auth = getAuth()

      try {
        const request = await signInWithEmailAndPassword(auth, email, password)
        console.log(request)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>

</style>

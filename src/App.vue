<template>
  <div id="app" class="bg-darker min-h-screen text-light">
    <base-spinner></base-spinner>
    <router-view/>
  </div>
</template>

<script>
import BaseSpinner from './components/global/BaseSpinner'

export default {
  methods: {

  },
  components: {
    BaseSpinner
  },
  mounted () {

  }
}
</script>

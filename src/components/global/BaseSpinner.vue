<template>
  <div
    v-if="visible"
    class="fa-3x z-100 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center w-screen h-screen bg-darkMedium text-featured"
  >
    <i class="fas fa-circle-notch fa-spin"></i>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  created () {
    this.$root.$on('Spinner::show', () => {
      this.visible = true
    })

    this.$root.$on('Spinner::hide', () => {
      this.visible = false
    })
  }
}
</script>

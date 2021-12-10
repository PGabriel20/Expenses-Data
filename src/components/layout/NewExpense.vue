<template>
<div class="w-full flex justify-center mt-4">
  <button @click="toggleModal" class="border border-featured pb-2 pt-2 p-6 text-featured hover:bg-featured hover:text-dark">
    New expense
  </button>
  <modal v-show="isModalOpen" :title="'Add new Expense'" @close="toggleModal">
   <form action="" slot="body" class="w-full flex justify-center gap-4">
    <div class="flex flex-col w-full">
      <label for="description">Description:</label>
      <input v-model="email" class="shadow appearance-none border rounded w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Payment description">
    </div>
    <div class="flex flex-col w-2/4">
      <label for="value">Value (USD):</label>
      <input v-model="email" class=" shadow appearance-none border rounded w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="value" type="text" placeholder="Value">
    </div>
   </form>
  </modal>
</div>
</template>

<script>
import Modal from '../global/Modal.vue'

export default {
  components: {
    Modal
  },
  data () {
    return {
      isModalOpen: false
    }
  },
  methods: {
    toggleModal () {
      this.isModalOpen = !this.isModalOpen
    }
  }
}
</script>

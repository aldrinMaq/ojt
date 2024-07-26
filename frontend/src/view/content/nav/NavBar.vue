<script setup lang="ts">
import Logo from '@/assets/image/kuan-logo.png'
import {ref} from "vue";

const showMenu = ref(false)


</script>

<template>
  <div  class="grid grid-nogutter col-8 col-offset-2 flex justify-content-between align-items-center py-3 fixed top-0 bg-white">
    <div class="flex align-items-center">
      <img :src="Logo" alt="logo" class="w-4rem">
      <div class="ml-2 text-3xl font-bold">KUAN</div>
    </div>
    <div class="flex gap-3">
      <div class="cursor-pointer font-semibold hover:bg-black-alpha-10 py-2 px-4 border-round">HOME</div>

      <div @mouseover="showMenu = true" @mouseleave="showMenu = false">
        <div class="cursor-pointer font-semibold hover:bg-black-alpha-10 py-2 px-4 border-round">
          SOLUTIONS
        </div>
        <div v-if="showMenu" class="absolute flex flex-wrap bg-white flex-column gap-2 shadow-4 mb-2 cursor-pointer">
          <div class="flex w-full hover:bg-green-100 px-4 py-3">Point of Sale</div>
          <div class="flex w-full hover:bg-green-100 px-4 py-3">Inventory</div>
          <div class="flex w-full hover:bg-green-100 px-4 py-3">Analytics</div>
          <div class="flex w-full hover:bg-green-100 px-4 py-3">Purchasing</div>
          <div class="flex w-full hover:bg-green-100 px-4 py-3">Hardware</div>
          <div class="flex w-full hover:bg-green-100 px-4 py-3">Staff Management</div>
        </div>
      </div>
<!--      <div class="cursor-pointer font-semibold">SUPPORT</div>-->
      <div class="cursor-pointer font-semibold hover:bg-black-alpha-10 py-2 px-4 border-round">ABOUT US</div>
      <div class="cursor-pointer font-semibold hover:bg-black-alpha-10 py-2 px-4 border-round">CONTACT US</div>
    </div>

  </div>
</template>

<style scoped>

.dropdown-item {
  flex: 1 1 200px;
  margin: 10px;
}
</style>
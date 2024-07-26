<script setup lang="ts">
import Logo from '@/assets/image/kuan-logo.png'
</script>

<template>
  <div  class="grid grid-nogutter col-8 col-offset-2 flex justify-content-between align-items-center py-4 fixed top-0 bg-white">
    <div class="flex align-items-center">
      <img :src="Logo" alt="logo" class="w-4rem">
      <div class="ml-2 text-3xl font-bold">KUAN</div>
    </div>
    <div class="flex gap-5">
      <div class="cursor-pointer font-bold">HOME</div>
      <div class="cursor-pointer font-bold">SOLUTION</div>
<!--      <div class="cursor-pointer font-bold">SUPPORT</div>-->
      <div class="cursor-pointer font-bold">ABOUT US</div>
      <div class="cursor-pointer font-bold">CONTACT US</div>
    </div>

  </div>
</template>

<style scoped>

</style>
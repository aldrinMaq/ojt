<script setup lang="ts">
import Logo from '@/assets/image/kuan-logo.png'
import {onMounted, onUnmounted, ref} from "vue";

const showMenu = ref(false)

const getScreenSize = () => {
  const width = window.innerWidth;
  if (width >= 1200) {
    return 'xl';
  } else if (width >= 992) {
    return 'lg';
  } else if (width >= 768) {
    return 'md';
  } else {
    return 'sm';
  }
};

// Reactive property to hold the current screen size
const screenSize = ref(getScreenSize());

// Function to update the screen size
const updateScreenSize = () => {
  screenSize.value = getScreenSize();
};

// Setup event listener for window resize
onMounted(() => {
  window.addEventListener('resize', updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
});


</script>

<template>
  <div  class="grid grid-nogutter col-12 xl:col-8 xl:col-offset-2 flex justify-content-between align-items-center py-3 fixed top-0 bg-white z-1">
    <div class="flex align-items-center">
      <img :src="Logo" alt="logo" class="w-4rem">
      <div class="ml-2 text-3xl font-bold">KUAN</div>
    </div>
    <div class="flex gap-3" v-if="screenSize === 'xl'">
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

    <div v-else class="text-sm font-bold">Not done with NAV mobile view</div>
  </div>
</template>

<style scoped>

</style>
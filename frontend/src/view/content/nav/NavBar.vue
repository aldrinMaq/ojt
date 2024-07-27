<script setup lang="ts">
import Logo from '@/assets/image/kuan-logo.png'
import {onMounted, onUnmounted, ref} from "vue";
import {screenSize, updateScreenSize} from "@/util/GetScreenSizeUtil";
import {useToast} from "primevue/usetoast";

const showMenu = ref(false)
const emit = defineEmits(['scrollToInquiry'])
const toast = useToast();



// Setup event listener for window resize
onMounted(() => {
  window.addEventListener('resize', updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
});

const handleScrollToInquiry = () => {
  emit('scrollToInquiry');
};
const showInfo = () => {
  toast.add({ severity: 'info', summary: 'Info!', detail: 'Coming soon...', life: 3000 });
};
</script>

<template>
  <div  class="grid grid-nogutter col-12 xl:col-8 xl:col-offset-2 flex justify-content-between align-items-center py-3 fixed top-0 bg-white z-1">
    <div class="flex align-items-center">
      <img :src="Logo" alt="logo" class="w-4rem">
      <div class="ml-2 text-3xl font-bold">KUAN</div>
    </div>
    <div class="flex gap-3" v-if="screenSize === 'xl' || screenSize === 'lg' || screenSize === 'md'">
      <div class="cursor-pointer font-semibold hover:bg-black-alpha-10 py-2 px-4 border-round">HOME</div>

      <div @mouseover="showMenu = true" @mouseleave="showMenu = false">
        <div class="cursor-pointer font-semibold hover:bg-black-alpha-10 py-2 px-4 border-round">
          SOLUTIONS
        </div>
        <div v-if="showMenu" class="absolute flex flex-wrap bg-white flex-column gap-2 shadow-4 mb-2 cursor-pointer">
          <div @click="showInfo" class="flex w-full hover:bg-green-100 px-4 py-3">Point of Sale</div>
          <div @click="showInfo" class="flex w-full hover:bg-green-100 px-4 py-3">Inventory</div>
          <div @click="showInfo" class="flex w-full hover:bg-green-100 px-4 py-3">Analytics</div>
          <div @click="showInfo" class="flex w-full hover:bg-green-100 px-4 py-3">Purchasing</div>
          <div @click="showInfo" class="flex w-full hover:bg-green-100 px-4 py-3">Hardware</div>
          <div @click="showInfo" class="flex w-full hover:bg-green-100 px-4 py-3">Staff Management</div>
        </div>
      </div>
<!--      <div class="cursor-pointer font-semibold">SUPPORT</div>-->
      <div class="cursor-pointer font-semibold hover:bg-black-alpha-10 py-2 px-4 border-round">ABOUT US</div>
      <div class="cursor-pointer font-semibold hover:bg-black-alpha-10 py-2 px-4 border-round"
           @click="handleScrollToInquiry"
      >CONTACT US</div>
    </div>

    <div v-else class="text-sm font-bold">Not done with NAV mobile view</div>
  </div>
</template>

<style scoped>

</style>
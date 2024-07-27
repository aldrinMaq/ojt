<script setup lang="ts">
import NavBar from "@/view/content/nav/NavBar.vue";
import Section1 from "@/view/content/section/Section1.vue";
import Section2 from "@/view/content/section/Section2.vue";
import {onMounted} from "vue";
import {screenSize} from "@/util/GetScreenSizeUtil";

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
</script>

<template>
  <NavBar/>
  <div :class="[screenSize === 'xl' ? 'h-6rem' : 'h-3rem']"></div>
  <Section1/>
  <Section2/>
  <div class="h-8rem text-center flex align-items-center justify-content-center">
    <span class="w-full bg-red-500 text-white">
      Site under construction...
    </span>
  </div>
</template>

<style scoped>

</style>
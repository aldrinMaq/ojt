<script setup lang="ts">
import NavBar from "@/view/content/nav/NavBar.vue";
import Section1 from "@/view/content/section/Section1.vue";
import Section2 from "@/view/content/section/Section2.vue";
import {onMounted, ref} from "vue";
import {screenSize} from "@/util/GetScreenSizeUtil";
import Inquiry from "@/view/content/Inquiry.vue";

const inquiryRef = ref<HTMLElement | null>(null);

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const scrollToInquiry = () => {
  if (inquiryRef.value) {
    inquiryRef.value.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <NavBar @scrollToInquiry="scrollToInquiry"/>
  <div :class="[screenSize === 'xl' ? 'h-6rem' : 'h-3rem']"></div>
  <Section1 @scrollToInquiry="scrollToInquiry"/>
  <Section2/>

  <div ref="inquiryRef">
    <Inquiry/>
  </div>

<!--  <div class="h-8rem text-center flex align-items-center justify-content-center">-->
<!--    <span class="w-full bg-red-500 text-white">-->
<!--      Site under construction...-->
<!--    </span>-->
<!--  </div>-->

</template>

<style scoped>

</style>
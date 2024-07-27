<script setup lang="ts">
import HomePageBanner from "@/assets/image/homepage-banner.png";


const emit = defineEmits(['scrollToInquiry'])

const handleScrollToInquiry = () => {
  emit('scrollToInquiry');
};


</script>
<template>
  <section>
    <div class="mt-7 grid grid-nogutter col-10 col-offset-1 xl:col-8 xl:col-offset-2 flex align-content-end">
      <div class="grid col-12 grid-nogutter">
        <div class="col-12 xl:col-5">
          <div class="font-semibold text-5xl">
            Empowering Your
            <span class="font-bold text-green-500">Business</span> with Seamless
            <span class="font-bold text-green-500">POS</span> Solutions.
          </div>
          <div>
            <div class="font-semibold">
              More than just a POS, KUAN enables you to manage every aspect of your business on a single platform,
              helping you maximize profits at every opportunity.
            </div>
            <div class="my-4 flex gap-2">

              <Button>Book a demo</Button>
              <Button @click="handleScrollToInquiry" class="bg-white text-black-alpha-90 hover:bg-black-alpha-10 border-black-alpha-20">Contact Us</Button>
<!--              <Button class="w-14rem">Coming soon...</Button>-->
            </div>
          </div>
        </div>
        <div class="col-12 xl:col-7">
          <img :src="HomePageBanner" alt="image" class="w-full"/>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
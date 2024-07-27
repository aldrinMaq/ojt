<script setup lang="ts">

import NoFee from "@/assets/image/section2/No Hidden Fees.png";
import Support from "@/assets/image/section2/Industry-Leading Support.png";
import Compliant from "@/assets/image/section2/Compliant.png";
</script>

<template>
  <section>
    <div class="mt-7 grid grid-nogutter col-10 col-offset-1 xl:col-8 xl:col-offset-2 flex align-content-end">
      <div class="grid col-12 grid-nogutter">
        <div class="col-12 flex justify-content-center text-center font-semibold text-4xl">
          Why Small Businesses Choose KUAN Solutions
        </div>
        <div class="grid col-12 grid-nogutter">
          <div class="col-12 xl:col-4">
            <div class="m-1 py-7 shadow-3">
              <div class="text-center">
                <img :src="NoFee" alt="icon"/>
              </div>
              <div class="text-center text-3xl font-semibold">
                Transparent Pricing
              </div>
              <div class="text-center flex justify-content-center px-5">
                Support and product updates are included in the subscription.
              </div>
            </div>
          </div>
          <div class="col-12 xl:col-4">
            <div class="m-1 py-7 shadow-3">
              <div class="text-center">
                <img :src="Support" alt="icon"/>
              </div>
              <div class="text-center text-3xl font-semibold">
                Exceptional Support
              </div>
              <div class="text-center flex justify-content-center px-5">
                Our dedicated team is always available to help you succeed.
              </div>
            </div>
          </div>
          <div class="col-12 xl:col-4">
            <div class="m-1 py-7 shadow-3">
              <div class="text-center">
                <img :src="Compliant" alt="icon"/>
              </div>
              <div class="text-center text-3xl font-semibold">
                Compliant
              </div>
              <div class="text-center flex justify-content-center px-5">
                Certified by relevant regulatory bodies and major retail networks.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
<script setup lang="ts">

import {computed, ref} from "vue";
import {useToast} from "primevue/usetoast";

const toast = useToast();

const name = ref('');
const email = ref('');
const country = ref('');
const phone = ref('');
const content = ref('');

const checkNotEmpty = computed(() => {
  return name.value &&
      email.value &&
      country.value &&
      phone.value&&
      content.value ;
});

const showInfo = () => {
  toast.add({ severity: 'success', summary: 'Success!', detail: 'Your inquiry has been sent successfully.', life: 5000 });
  clearField();
};

const clearField = () => {
  name.value = null;
  email.value = null;
  country.value = null;
  phone.value = null;
  content.value = null;

}
</script>

<template>
  <Toast />

  <section>
    <div class="mt-7 grid grid-nogutter col-10 col-offset-1 xl:col-8 xl:col-offset-2 flex align-content-end">
      <div class="grid col-12 grid-nogutter">
        <div class="col-12 flex justify-content-center text-center font-semibold text-4xl">
          Get in Touch With Us
        </div>
        <div class="mt-6 grid col-12  grid-nogutter">
          <div class="col-6 flex gap-5 flex-column pr-3">
            <FloatLabel>
              <InputText v-model="name" size="large" class="w-full"/>
              <label for="name">Name</label>
            </FloatLabel>

            <FloatLabel>
              <InputText v-model="country" size="large" class="w-full"/>
              <label for="name">Country</label>
            </FloatLabel>
          </div>
          <div class="col-6 flex gap-5 flex-column pl-3">
            <FloatLabel>
              <InputText v-model="email" size="large" class="w-full"/>
              <label for="name">Email</label>
            </FloatLabel>
            <FloatLabel>
              <InputText v-model="phone" size="large" class="w-full"/>
              <label for="name">Phone</label>
            </FloatLabel>
          </div>
          <div class="col-12 mt-6">
            <FloatLabel>
              <Textarea v-model="content" rows="5" class="col-12"/>
              <label>Content</label>
              </FloatLabel>
          </div>
          <Divider/>
          <div class="flex justify-content-center w-full">
            <Button :disabled="!checkNotEmpty" @click="showInfo" class="w-15rem">SEND INQUIRY</Button>
          </div>
          <Divider/>
          <div class="mb-8"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
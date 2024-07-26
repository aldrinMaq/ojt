<script setup lang="ts">
import NavBar from "@/view/content/nav/NavBar.vue";
import Section1 from "@/view/content/content/Section1.vue";
import Section2 from "@/view/content/content/Section2.vue";

</script>

<template>
  <NavBar/>
  <div class="h-8rem"></div>

  <Section1/>
  <Section2/>

</template>

<style scoped>
.image-width {
  width: 80vh;
  height: 100%;
}
</style>
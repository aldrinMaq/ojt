<template>
  <div class="dropdown" @mouseover="showMenu = true" @mouseleave="showMenu = false">
    <button class="dropdown-button">
      Solutions <span v-if="showMenu">▲</span><span v-else>▼</span>
    </button>
    <div v-if="showMenu" class="dropdown-content">
      <div class="dropdown-item">Point of Sale</div>
      <div class="dropdown-item">Inventory</div>
      <div class="dropdown-item">Analytics</div>
      <div class="dropdown-item">Purchasing</div>
      <div class="dropdown-item">Hardware</div>
      <div class="dropdown-item">Staff Management</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showMenu = ref(false)
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-button {
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.dropdown-content {
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  padding: 20px;
  border-radius: 4px;
}

.dropdown-item {
  flex: 1 1 200px;
  margin: 10px;
}
</style>

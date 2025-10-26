<script setup lang="ts">
import { ref } from 'vue';
import Sidebar from './Sidebar.vue';
import maindash from '../maindash.vue';

const isOpen = ref(false);

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};
</script>
<template>
  <div :class="['App', { 'with-sidebar': isOpen }]">
    <div class="AppGlass scrollable-container">
      <Sidebar :is-open="isOpen" @toggle-sidebar="toggleSidebar" />
      <!-- Main dashboard content -->
      <maindash></maindash>
    </div>
  </div>
</template>

<style scoped>
.AppGlass {
  display: grid;
  grid-template-columns: 220px 1fr;
  height: 100vh;
  box-sizing: border-box;
  overflow-y: auto; /* Enable vertical scrolling */
  overflow-x: auto;
  background-color: #f9f9f9;
}

.scrollable-container::-webkit-scrollbar {
  width: 20px;
}

.scrollable-container::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

@media (max-width: 768px) {
  .App.with-sidebar .AppGlass {
    grid-template-columns: 220px 1fr; /* Sidebar width remains */
    grid-template-rows: auto auto;
  }

  .AppGlass {
    grid-template-columns: 50px 1fr;
    grid-template-rows: auto auto;
  }
}
</style>
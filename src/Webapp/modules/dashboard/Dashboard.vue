<script setup lang="ts">
import HeaderButtons from './component/HeaderButtons.vue';
import Header from './component/Header.vue';

import MyTicket from './component/MyTicket.vue';
</script>




<template>
  <div class="bigcontent">
   <Header></Header>
   <header-buttons></header-buttons>
   <MyTicket></MyTicket>
  </div>
</template>
<style scoped>
.bigcontent{
  padding: 1rem;
}
</style>


<script setup lang="ts">
import HeaderButtons from './component/HeaderButtons.vue';
import Header from './component/Header.vue';
import Events from './component/Events.vue';

</script>




<template>
  <div class="bigcontent">
   <Header></Header>
   <header-buttons></header-buttons>
   <Events></Events>
  </div>
</template>
<style scoped>
.bigcontent{
  padding: 1rem;
}
</style>


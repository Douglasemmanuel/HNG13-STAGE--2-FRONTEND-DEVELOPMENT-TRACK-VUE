<script setup lang="ts">
import loginform from '../modules/auth/components/loginform.vue';
import Footer from '../../website/component/Footer.vue';
import Header from '../../website/component/Header.vue';
</script>
<template>
    <div>
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
          <Header></Header>
          <div className="mt-4"></div>
       <loginform></loginform>
      </main>
        <Footer></Footer>
    </div>
  </div>
   
</template>
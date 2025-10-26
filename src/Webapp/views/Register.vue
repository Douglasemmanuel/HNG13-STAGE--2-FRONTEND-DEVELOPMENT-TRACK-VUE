<script setup lang="ts">
import Header from '../../website/component/Header.vue';
import Footer from '../../website/component/Footer.vue';
import Registerform from '../modules/auth/components/Registerform.vue';
</script>
<template>
    <div>
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
          <Header></Header>
          <div className="mt-4"></div>
       <Registerform></Registerform>
      </main>
        <Footer></Footer>
    </div>
  </div>
   
</template>
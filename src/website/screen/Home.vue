<script setup lang="ts">
import Header from '../component/Header.vue';
import Footer from '../component/Footer.vue';
import Content from '../component/Content.vue';
import Main from '../component/Main.vue';

</script>

<template>
  <div>
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
          <Header></Header>
          <div className="mt-4"></div>
      <Main></Main>
      <Content/>
      </main>
        <Footer></Footer>
    </div>
  </div>
</template>

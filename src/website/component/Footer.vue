<script setup lang="ts">
import { Twitter, Facebook, Instagram } from '@iconoir/vue';
// Import each icon individually
// import Twitter from "vue-bootstrap-icons/icons/Twitter.vue";
// import Facebook from "vue-bootstrap-icons/icons/Facebook.vue";
// import Instagram from "vue-bootstrap-icons/icons/Instagram.vue";
</script>


<template>
  <footer class="bg-light py-5">
    <b-container class="text-center">
      <!-- Links Row -->
      <b-row class=" d-flex justify-content-center mb-4 gap-3" >
        <b-col cols="6" md="auto" class="mb-2">
          <a class="text-secondary text-decoration-none" href="#">About Us</a>
        </b-col>
        <b-col cols="6" md="auto" class="mb-2">
          <a class="text-secondary text-decoration-none" href="#">Contact</a>
        </b-col>
        <b-col cols="6" md="auto" class="mb-2">
          <a class="text-secondary text-decoration-none" href="#">Privacy Policy</a>
        </b-col>
        <b-col cols="6" md="auto" class="mb-2">
          <a class="text-secondary text-decoration-none" href="#">Terms of Service</a>
        </b-col>
      </b-row>

      <!-- Social Icons -->
      <div class="d-flex justify-content-center gap-3">
        <a href="#" class="text-secondary">
          <Twitter width="24" height="24" />
        </a>
        <a href="#" class="text-secondary">
          <Facebook width="24" height="24" />
        </a>
        <a href="#" class="text-secondary">
          <Instagram width="24" height="24" />
        </a>
      </div>

      <!-- Copyright -->
      <p class="mb-0 mt-4 text-muted">
        © {{ new Date().getFullYear() }} TicketHub. All rights reserved.
      </p>
    </b-container>
  </footer>
</template>

<style scoped>
.text-decoration-none {
  text-decoration: none;
}
</style>

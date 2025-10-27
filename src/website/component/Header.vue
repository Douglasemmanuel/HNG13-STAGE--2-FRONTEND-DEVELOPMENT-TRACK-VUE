<script setup lang="ts">
import { ref , onMounted , onUnmounted } from 'vue';
import logo from '../../images/logo2.jpeg'; // Make sure path is correct
import { useRouter } from 'vue-router';
// This is like React's useState(false)
const isOpen = ref(false);
const isMobile = ref(window.innerWidth < 768);
// Function to toggle the mobile menu
// const toggleMenu = () => {
//   isOpen.value = !isOpen.value;
// };

const router = useRouter();
function navigateTo(route: string) {
  router.push(route);
}
const handleResize = () => {
  isMobile.value = window.innerWidth < 768;
  if (!isMobile.value) isOpen.value = false; 
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <div class="custom-mx">
    <b-navbar
    toggleable="md"
    type="light"
    variant="white"
    fixed="top"
    class="shadow-sm border-bottom py-3 pt-5  "
    
  >
    <b-container class="d-flex justify-content-between align-items-center">

      <!-- LOGO -->
       <router-link to="/" style="text-decoration: none;">
      <b-navbar-brand class="d-flex align-items-center" style="cursor: pointer">
        <!-- <b-img :src="LOGO" height="32" class="me-2" alt="Logo" /> -->
         <!-- <img :src="logo" height="32" class="me-2" alt="Logo" /> -->
          <img 
        :src="logo" 
        alt="Ticket Icon" 
        class="image-style"
      />
        <span class="fw-medium text-dark">TicketHub</span>
      </b-navbar-brand>
      </router-link>
      <!-- DESKTOP NAV LINKS -->
      <b-nav class="mx-auto d-none d-md-flex align-items-center">
        <b-nav-item href="#" class="text-dark px-3 py-2 rounded hover-bg">Home</b-nav-item>
        <b-nav-item href="#" class="text-dark px-3 py-2 rounded hover-bg">Events</b-nav-item>
        <b-nav-item href="#" class="text-dark px-3 py-2 rounded hover-bg">Orders</b-nav-item>
        <b-nav-item href="#" class="text-dark px-3 py-2 rounded hover-bg">More</b-nav-item>
      </b-nav>

      <!-- DESKTOP BUTTONS -->
      <div v-if="!isMobile"  class="d-none d-md-flex align-items-center mt-2  mr-4 md:mr-6 lg:mr-8">
        <b-nav class="d-flex gap-2">
          <b-button variant="outline-primary" class="login-btn px-4 py-2 fw-semibold"   @click="navigateTo('/login')">
            Login
          </b-button>
          <b-button variant="primary" class="get-started-btn px-4 py-2 fw-semibold"   @click="navigateTo('/register')">
            Get Started
          </b-button>
        </b-nav>
      </div>

      <!-- MOBILE HAMBURGER ICON -->
      <b-button
      v-if="isMobile" 
        variant="outline-secondary"
        class="d-md-none p-1"
        
        style="font-size: 1.2rem; line-height: 1; height: 36px; width: 36px; cursor: pointer;"
        @click="isOpen = !isOpen"
        >
        <span v-if="isOpen" style="font-size: 1.5rem">✕</span>
        <span v-else style="font-size: 1.5rem">☰</span>
      </b-button>
    </b-container>

    <!-- MOBILE COLLAPSE MENU -->
    <b-collapse v-if="isOpen"  id="nav-collapse" v-model="isOpen" class="d-md-none bg-white border-top py-3">
      <b-nav class="d-flex flex-column px-3 gap-2">
  <b-nav-item href="#" class="text-dark px-3 py-2 rounded hover-bg">Home</b-nav-item>
  <b-nav-item href="#" class="text-dark px-3 py-2 rounded hover-bg">Events</b-nav-item>
  <b-nav-item href="#" class="text-dark px-3 py-2 rounded hover-bg">Orders</b-nav-item>
  <b-nav-item href="#" class="text-dark px-3 py-2 rounded hover-bg">More</b-nav-item>

  <!-- MOBILE BUTTONS -->
  <div class="d-flex flex-column gap-2 mr-5 ">
    <b-button variant="outline-primary" class="login-btn px-4 py-2 fw-semibold w-100"   @click="navigateTo('/login')">
      Login
    </b-button>
    <b-button variant="primary" class="get-started-btn px-4 py-2 fw-semibold w-100"   @click="navigateTo('/register')">
      Get Started
    </b-button>
  </div>
</b-nav>

    </b-collapse>
  </b-navbar>
  </div>
</template>

<style scoped>
.custom-mx {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.hover-bg:hover {
  background-color: #f8f9fa;
}

/* Button styles */
.login-btn,
.get-started-btn {
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
   padding: 6px 10px; 
  /* padding: 2rem; */
  margin-right: 2rem;
  
}

/* Login button */
.login-btn {
  border: 2px solid #0d6efd;
  color: #0d6efd;
  background-color: transparent;
}
.login-btn:hover {
  background-color: #0d6efd;
  color: #fff;
}

/* Get Started button */
.get-started-btn {
  color: white;
  border: none;
  background: linear-gradient(90deg, #0d6efd, #007bff);
  box-shadow: 0 2px 6px rgba(13, 110, 253, 0.3);
}
.get-started-btn:hover {
  background: linear-gradient(90deg, #007bff, #0a58ca);
  transform: translateY(-1px);
}
.image-style {
  width: 60px;           
  height: auto;    
  margin-left: 1rem;       

}
</style>

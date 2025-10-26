<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount , onUnmounted , watch } from 'vue';
import { useRouter } from 'vue-router';
import Douglas from '../../../../images/logo2.jpeg'
import { Icon } from '@iconify/vue'
const dashboardIcon = 'lucide:layout-dashboard'
const logoutIcon = 'ion:log-out-outline'
const menuIcon = 'feather:menu'
interface SidebarProps {
  isOpen: boolean
  toggleSidebar: () => void
}
const props = defineProps<SidebarProps>()
const isDesktop = ref(window.innerWidth >= 1024)
const router = useRouter()
const logout = () => {
  // example logout
  console.log('Logged out')
  router.push('/login')
}

// Responsive detection
const handleResize = () => {
  isDesktop.value = window.innerWidth >= 1024
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

// Navigation
const goToDashboard = () => router.push('/dashboard')
</script>

<template>
  <nav
    :class="['sidebar', { open: props.isOpen }]"
    style="overflow-y:auto; max-height:100vh; scroll-behavior:smooth; position:relative; z-index:1000;"
  >
    <!-- Hamburger -->
    <div
      :class="['hamburger', { 'hamburger-right': props.isOpen }]"
      @click="props.toggleSidebar"
      style="cursor:pointer; z-index:1100;"
    >
      <Icon :icon="menuIcon" width="24" height="24" class="icon" />
    </div>

    <h2 class="sidebar-title">LOGO</h2>

    <!-- User Info -->
    <div v-if="props.isOpen || isDesktop" class="user-info">
      <img :src="Douglas" alt="User Avatar" class="user-avatar" />
      <p class="user-name">
        douglas emmanuel
        <!-- {{ currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : '' }} -->
      </p>
    </div>

    <!-- Navigation -->
    <ul class="sidebar-nav">
      <li  v-if="props.isOpen">
        <div class="nav-item" @click="goToDashboard">
          <Icon
            :icon="dashboardIcon"
            :class="['icon', { spaced: props.isOpen }]"
            width="28"
            height="28"
          />
          <span  v-if="props.isOpen || isDesktop" class="label">Dashboard</span>
        </div>
      </li>
    </ul>

    <!-- Logout -->
    <div class="logout-container" @click="logout">
      <Icon 
      :icon="logoutIcon" 
      width="24" height="24" 
      class="logout-icon" />
      <span v-if="props.isOpen || isDesktop" class="logout-label">Logout</span>
    </div>
  </nav>
</template>

<style scoped>
.sidebar {
  position: fixed;
  width: 230px;
  height: 100vh;
  background-color: whitesmoke;
  color: black;
  padding: 20px;
  transition: width 0.3s ease;
  top: 0;
  bottom: 0;
  left: 0;
  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;
}

.sidebar::-webkit-scrollbar {
  width: 2rem;
}

.sidebar::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 4px;
}

.sidebar::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar.open {
  height: 160vh;
}

.sidebar-title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 30px;
}

.sidebar-nav {
  list-style: none;
  padding: 0;
  flex-grow: 1;
  overflow-y: auto;
}

.sidebar-nav li {
  margin-bottom: 20px;
}

.nav-item {
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
  font-size: 16px;
  transition: 0.2s;
  cursor: pointer;
  gap: 1rem;
}

.nav-item.activate {
  justify-content: space-between;
}

.icon:hover,
.label:hover,
.icon-spaced:hover {
  color: #007bff;
}

.icon-spaced {
  font-size: 2rem;
}

.nav-item .label {
  display: inline-block;
}

.label {
  padding-left: 18px;
}

.hamburger-inside {
  cursor: pointer;
  color: black;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  top: 5px;
  left: 30px;
  transition: left 0.3s ease;
}

.logout-container {
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: sticky;
  bottom: 0;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
  z-index: 10;
}

.logout-container:hover {
  color: #007bff;
}

/* Responsive */
@media screen and (max-width: 768px) {
  .sidebar {
    width: 60px;
  }
  .sidebar.open {
    width: 220px;
  }
  .sidebar-title {
    display: none;
  }
  .nav-item .label {
    display: none;
  }
  .sidebar.open .nav-item .label {
    display: inline-block;
  }
  .hamburger {
    display: block;
    cursor: pointer;
  }
}
</style>
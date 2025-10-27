<script setup lang="ts">
import { computed } from 'vue';
import { useCurrentUser } from '../../auth/hooks/user_hooks' ;



// Get current user and logout function
const { currentUser, logout } = useCurrentUser();

// Handle logout

const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      logout();
    }
  };

// Optional: full name for display
const displayName = computed(() => {
    return 'Emmanuel'
  // return  `${currentUser.value?.lastName} ${currentUser.value?.lastName}` 
});
</script>

<template>
  <div class="d-flex  justify-content-between align-items-center w-100">
  
    <div>
      <h1 class="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
      <p class="text-gray-600">Welcome, {{ displayName }} 👋</p>
    </div>

  <!-- v-if="currentUser" -->
    <div >
      <button
       
        @click="handleLogout"
         class="btn btn-danger fw-semibold px-4 py-2 rounded-3"
      >
        Logout
      </button>
    </div>
  </div>
</template>


<style scoped>

</style>

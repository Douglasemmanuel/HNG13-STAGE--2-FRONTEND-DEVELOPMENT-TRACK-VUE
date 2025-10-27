<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
import { Icon } from '@iconify/vue'

function navigateTo(route: string) {
  router.push(route);
}
const plusIcon = 'fa:plus'
const ticketIcon = "fa-solid:ticket-alt"
const clockIcon = 'fa-regular:clock'
</script>
<template>
<div>
    <h3>Quick Actions</h3>
    <div class="cards-container">
      <!-- Add New Card -->
      <div class="card" @click="navigateTo('/create-ticket')">
        <div class="card-icon">
          <Icon :icon="plusIcon" width="32" height="32" color="blue" />
        </div>
        <div class="card-content">
          <h3 class="card-title">Add New</h3>
          <p class="card-subtitle">Create something new</p>
        </div>
      </div>

      <!-- Tickets Card -->
      <div class="card" @click="navigateTo('all-tickets')">
        <div class="card-icon">
          <Icon :icon="ticketIcon" width="32" height="32" color="green" />
        </div>
        <div class="card-content">
          <h3 class="card-title">Tickets</h3>
          <p class="card-subtitle">View your tickets</p>
        </div>
      </div>

      <!-- Active Tickets Card -->
      <div class="card" @click="navigateTo('active-tickets')">
        <div class="card-icon">
          <Icon :icon="clockIcon" width="32" height="32" color="orange" />
        </div>
        <div class="card-content">
          <h3 class="card-title">Active Tickets</h3>
          <p class="card-subtitle">Tickets that are still in progress</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.cards-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.card {
  background-color: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  padding: 1.5rem 12px;
  cursor: pointer;
  transition: 0.3s;
  width: 330px;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
.card-title {
    margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
}
.card-subtitle {
  margin: 4px 0;
  font-size: 1rem;
  color: #666;
}
</style>
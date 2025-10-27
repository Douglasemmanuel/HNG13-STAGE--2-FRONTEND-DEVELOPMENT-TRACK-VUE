<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import { useTicketStore } from '../store/ticketstore'
interface CardProps {
  label: string
  value: number | string
  icon: string
  iconColor?: string
  iconBackgroundColor?: string
}
const ticketStore = useTicketStore();

// Compute ticket counts
const openCount = computed(() => ticketStore.tickets.filter(ticket => ticket.status === "Open").length);
const resolvedCount = computed(() => ticketStore.tickets.filter(ticket => ticket.status === "In Progress").length);
const closedCount = computed(() => ticketStore.tickets.filter(ticket => ticket.status === "Closed").length);
const total = computed(() => ticketStore.tickets.length)
// Card data array must be defined **before the template**
const cardData: CardProps[] = [
  {
    label: 'Total ',
    value: total.value,
    icon: "fa-solid:ticket-alt",
    iconColor: '#6c757d',
    iconBackgroundColor: '#e9ecef'
  },
  {
    label: 'Open ',
    value: openCount.value,
    icon: "material-symbols:pending-actions",
    iconColor: '#28a745',
    iconBackgroundColor: '#d4edda'
  },
  {
    label: 'In Progress',
    value: resolvedCount.value,
    icon: "fa-solid:spinner",
    iconColor: '#ffc107',
    iconBackgroundColor: '#fff8e1'
  },
  {
    label: 'Resolved Tickets',
    value: closedCount.value,
    icon: "mdi:check-circle-outline",
    iconColor: '#6c757d',
    iconBackgroundColor: '#e9ecef'
  },
  
]
</script>

<template>
  <div class="cards-container">
    <div
      v-for="card in cardData"
      :key="card.label"
      class="card"
      :style="{ borderColor: card.iconColor }"
    >
      <div class="card-text">
        <p class="card-label">{{ card.label }}</p>
        <p class="card-value" :style="{ color: card.iconColor }">{{ card.value }}</p>
      </div>
      <div
        class="card-icon"
        :style="{ borderColor: card.iconColor, backgroundColor: card.iconBackgroundColor }"
      >
        <Icon :icon="card.icon" width="25" height="25" :color="card.iconColor" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.card {
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  align-items: center;
  border: none;
  border-radius: 8px;
  padding: 10px;
  width: 250px;
  text-align: left;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin: 14px 0;
  cursor: pointer;
}

.card-text {
  display: flex;
  flex-direction: column;
 
}

.card-label {
  margin: 0;
  font-weight: bold;
}

.card-value {
  margin: 0;
  font-size: 1.2rem;
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 12px;
}
</style>

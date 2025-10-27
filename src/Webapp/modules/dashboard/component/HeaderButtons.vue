<script setup lang="ts">
import { Icon } from '@iconify/vue'
interface CardProps {
  label: string
  value: number | string
  icon: string
  iconColor?: string
  iconBackgroundColor?: string
}

// Card data array must be defined **before the template**
const cardData: CardProps[] = [
  {
    label: 'Total Tickets',
    value: 100,
    icon: "fa-solid:ticket-alt",
    iconColor: '#6c757d',
    iconBackgroundColor: '#e9ecef'
  },
  {
    label: 'Open Tickets',
    value: 55,
    icon: "material-symbols:pending-actions",
    iconColor: '#28a745',
    iconBackgroundColor: '#d4edda'
  },
  {
    label: 'Resolved Tickets',
    value: 30,
    icon: "mdi:check-circle-outline",
    iconColor: '#6c757d',
    iconBackgroundColor: '#e9ecef'
  },
  {
    label: 'Escalated Tickets',
    value: 15,
    icon: "fa-solid:spinner",
    iconColor: '#ffc107',
    iconBackgroundColor: '#fff8e1'
  }
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
    <div class="big-container">
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
  </div>
</template>

<style scoped>
.big-container{
    display: flex;
    gap:1rem;
    flex-wrap: wrap;
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  border: none;
  border-radius: 8px;
  padding: 10px;
  width: 250px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin: 16px 0;
  cursor: pointer;
}

.card-text {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
}
</style>

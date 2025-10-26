<script setup lang="ts">
import { ref, computed } from 'vue';
// import EventTicketModal from './createEvents.vue';
// import EditTicket from './EditTickets.vue';
// import TicketDetailsModal from './UserTickets.vue';
import { eventsData } from '../../../data/event';
import useTicketStore from '../../../../store/ticketStore';
import type { Ticket } from  '../../../../store/ticketStore'

interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  venue: string;
  tickets: {
    type: 'Regular' | 'VIP' | 'Student';
    price: number;
  }[];
  ticketPrices: Record<'Regular' | 'VIP' | 'Student', number>;
}

// Get tickets from store
const tickets = useTicketStore().tickets;

// UpcomingEvents modal state
const showEventModal = ref(false);
const selectedEvent = ref<Event | null>(null);

const handleShowEvent = (event: Event) => {
  selectedEvent.value = event;
  showEventModal.value = true;
};

const handleCloseEvent = () => {
  showEventModal.value = false;
  selectedEvent.value = null;
};

// Compute ticketPrices for events
const eventsWithTicketPrices = computed(() =>
  eventsData.map((e) => {
    const ticketPrices = e.tickets.reduce((acc, t) => {
      acc[t.type as 'Regular' | 'VIP' | 'Student'] = t.price;
      return acc;
    }, {} as Record<'Regular' | 'VIP' | 'Student', number>);

    const typedTickets = e.tickets.map((t) => ({ ...t, type: t.type as 'Regular' | 'VIP' | 'Student' }));

    return {
      ...e,
      tickets: typedTickets,
      ticketPrices,
    };
  })
);

// MyEvent modal states
const selectedTicket = ref<Ticket | null>(null);
const showEdit = ref(false);
const showDetails = ref(false);

const handleShowEdit = (ticket: Ticket) => {
  selectedTicket.value = ticket;
  showEdit.value = true;
};

const handleCloseEdit = () => {
  showEdit.value = false;
  selectedTicket.value = null;
};

const handleShowDetails = (ticket: Ticket) => {
  selectedTicket.value = ticket;
  showDetails.value = true;
};

const handleCloseDetails = () => {
  showDetails.value = false;
  selectedTicket.value = null;
};

const handleDelete = (ticket: Ticket) => {
  if (confirm(`Are you sure you want to delete ticket for ${ticket.eventName}?`)) {
    useTicketStore().deleteTicket(ticket.id);
    alert('Ticket deleted successfully!');
  }
};
</script>

<template>
  <div class="events-container">
    <!-- Upcoming Events -->
    <section>
      <h3>Upcoming Events</h3>
      <div class="events-grid">
        <div v-for="event in eventsWithTicketPrices" :key="event.id" class="event-card">
          <div class="event-img-wrapper">
            <img :src="event.image" alt="" class="event-img" />
          </div>
          <div class="event-body">
            <h4>{{ event.title }}</h4>
            <p>{{ event.description }}</p>
            <button class="btn btn-primary w-100 py-2"  @click="handleShowEvent(event)">Create Tickets</button>
          </div>
        </div>
      </div>
      <EventTicketModal v-if="selectedEvent && showEventModal" :event="selectedEvent" @close="handleCloseEvent" />
    </section>

    <!-- My Tickets -->
    <section v-if="tickets.length > 0">
      <h3>My Tickets</h3>
      <div class="tickets-grid">
        <div v-for="ticket in tickets" :key="ticket.id" class="ticket-card">
          <div class="ticket-header">
            <h4>{{ ticket.eventName }}</h4>
            <span>{{ ticket.eventDate }}</span>
          </div>
          <div class="ticket-body">
            <p><strong>Venue:</strong> {{ ticket.venue }}</p>
            <p><strong>Seat:</strong> 21A</p>
            <p><strong>Ticket Type:</strong> {{ ticket.ticketType }}</p>
          </div>
          <div class="ticket-footer">
            <p>Order ID: {{ ticket.id }}</p>
          </div>
          <div class="ticket-actions">
            <button @click="handleShowDetails(ticket)">Details</button>
            <button @click="handleShowEdit(ticket)">Edit</button>
            <button @click="handleDelete(ticket)">Delete</button>
          </div>
        </div>
      </div>

      <!-- <EditTicket v-if="selectedTicket && showEdit" :ticketToEdit="selectedTicket" @close="handleCloseEdit" /> -->
      <!-- <TicketDetailsModal v-if="selectedTicket && showDetails" :ticket="selectedTicket" @close="handleCloseDetails" /> -->
    </section>
  </div>
</template>

<style scoped>
.events-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.events-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.event-card {
  width: 18rem;
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.event-img-wrapper {
  height: 180px;
  overflow: hidden;
}

.event-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.event-body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-grow: 1;
}

.tickets-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.ticket-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.ticket-actions button {
  margin-right: 0.5rem;
}
</style>

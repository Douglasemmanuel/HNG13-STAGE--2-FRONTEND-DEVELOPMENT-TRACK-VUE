<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import {useTicketStore} from '../dashboard/store/ticketstore';

const router = useRouter();
const ticketStore = useTicketStore();
const tickets = ticketStore.tickets;

const activeTickets = computed(() =>
 tickets.filter(ticket => ticket.status !== 'Closed')
);

const goBack = () => {
  router.back();
};


</script>

<template>
  <div class="container mt-5">
    <!-- Header -->
    <div class="d-flex align-items-center justify-content-center position-relative mb-4">
      <button type="button" class="btn btn-primary btn-sm position-absolute start-0" @click="goBack">
        Back
      </button>
      <h2 class="mb-0">Active Tickets</h2>
    </div>

    <!-- Ticket Table or Empty Message -->
    <div v-if="activeTickets.length === 0" class="text-center">
      No tickets available.
    </div>

    <div v-else class="table-responsive">
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Assignee</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ticket in activeTickets" :key="ticket.id">
            <td>{{ ticket.id }}</td>
            <td>{{ ticket.title.length > 12 ? ticket.title.slice(0, 12) + '...' : ticket.title }}</td>
            <td>{{ ticket.description.length > 12 ? ticket.description.slice(0, 12) + '...' : ticket.description }}</td>
            <td>{{ ticket.assignee }}</td>
            <td>{{ ticket.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

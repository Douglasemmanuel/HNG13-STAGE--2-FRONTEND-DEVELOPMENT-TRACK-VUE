<script lang="ts" setup>
import { useRouter } from 'vue-router';
import {useTicketStore} from '../dashboard/store/ticketstore';


const router = useRouter();
const ticketStore = useTicketStore();
const tickets = ticketStore.tickets;
// ✅ Use tickets directly from the store

// ✅ Delete using store method
const handleDelete = (id: number) => {
  const confirmed = window.confirm('Are you sure you want to delete this ticket?');
  if (!confirmed) return;

  ticketStore.deleteTicket(id);
  console.log('Deleted ticket with id:', id);
};

// ✅ Edit navigation
const editTicket = (id: number) => {
  router.push(`/edit-ticket/${id}`);
};

// ✅ Go back navigation
const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="container mt-5">
    <div class="d-flex align-items-center justify-content-center position-relative mb-4">
      <button type="button" class="btn btn-primary btn-sm position-absolute start-0" @click="goBack">
        Back
      </button>
      <h2 class="mb-0">All Tickets</h2>
    </div>

    <div v-if="tickets.length === 0" class="text-center">
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
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ticket in tickets" :key="ticket.id">
            <td>{{ ticket.id }}</td>
            <td>{{ ticket.title.length > 12 ? ticket.title.slice(0, 12) + '...' : ticket.title }}</td>
            <td>{{ ticket.description.length > 12 ? ticket.description.slice(0, 12) + '...' : ticket.description }}</td>
            <td>{{ ticket.assignee }}</td>
            <td>{{ ticket.status }}</td>
            <td>
              <button class="btn btn-warning btn-sm me-2" @click="editTicket(ticket.id)">Edit</button>
            </td>
            <td>
              <button class="btn btn-danger btn-sm" @click="handleDelete(ticket.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>



<style scoped>
</style>
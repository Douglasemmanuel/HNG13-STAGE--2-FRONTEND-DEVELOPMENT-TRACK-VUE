<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

interface Ticket {
  id: number;
  title: string;
  description: string;
  assignee: string;
  status: string;
}

const router = useRouter();

const tickets = ref<Ticket[]>([
  { id: 1, title: 'Fix login bug', description: 'Users cannot login with Google', assignee: 'John', status: 'Open' },
  { id: 2, title: 'Update dashboard', description: 'Add chart for active users', assignee: 'Jane', status: 'In Progress' },
  { id: 3, title: 'Email notifications', description: 'Send notifications for new tickets', assignee: 'Bob', status: 'Closed' },
]);

// Filter out closed tickets
const activeTickets = computed(() => tickets.value.filter(ticket => ticket.status !== 'Closed'));


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

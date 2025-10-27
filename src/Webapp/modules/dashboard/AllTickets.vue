<script lang="ts" setup>
import { ref } from 'vue';
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

const handleDelete = (id: number) => {
  const confirmed = window.confirm('Are you sure you want to delete this ticket?');
  if (!confirmed) return; // Stop if the user clicks "Cancel"

  tickets.value = tickets.value.filter(ticket => ticket.id !== id);
  console.log('Deleted ticket with id:', id);
};


const goBack = () => {
  router.back();
};

const editTicket = (id: number) => {
  router.push(`/edit-ticket/${id}`);
};
</script>

<template>
  <div class="container mt-5">
    <!-- Header -->
    <div class="d-flex align-items-center justify-content-center position-relative mb-4">
      <button type="button" class="btn btn-primary btn-sm position-absolute start-0" @click="goBack">
        Back
      </button>
      <h2 class="mb-0">All Tickets</h2>
    </div>

    <!-- Ticket Table or Empty Message -->
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
              <button
                type="button"
                class="btn btn-warning btn-sm me-2"
                @click="editTicket(ticket.id)"
              >
                Edit
              </button>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-danger btn-sm"
                @click="handleDelete(ticket.id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<style scoped>
</style>
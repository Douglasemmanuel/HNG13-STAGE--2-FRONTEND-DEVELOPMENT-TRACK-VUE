<script lang="ts" setup>
import { ref, onMounted ,reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTicketStore } from '../dashboard/store/ticketstore';
import { toast, type ToastOptions } from 'vue3-toastify';

interface TicketErrors {
  title?: string;
  description?: string;
  assignee?: string;
  status?: string;
}


const route = useRoute();
const router = useRouter();
const ticketStore = useTicketStore();

// Get ticket ID from route
const ticketId = Number(route.params.id);
const errors = reactive<TicketErrors>({});
// Form fields
const title = ref('');
const description = ref('');
const assignee = ref('');
const status = ref<'Open' | 'In Progress' | 'Closed'>('Open');

// Load the ticket on mount
onMounted(() => {
  const ticket = ticketStore.getTicket(ticketId);
  if (!ticket) {
    alert('Ticket not found!');
    router.back();
    return;
  }

  title.value = ticket.title;
  description.value = ticket.description;
  assignee.value = ticket.assignee;
  status.value = ticket.status;
});

// Update ticket
const onSubmit = (e: Event) => {
  e.preventDefault();
  errors.title = '';
  errors.description = '';
  errors.assignee = '';
  errors.status = '';

  let valid = true;

if (!title.value.trim()) {
  errors.title = 'Title is required';
  valid = false;
} else if (title.value.length < 6 || title.value.length === 1) {
  errors.title = 'Title is too short';
  valid = false;
}

if (!description.value.trim()) {
  errors.description = 'Description is required';
  valid = false;
} else if (description.value.length < 6 || description.value.length === 1) {
  errors.description = 'Description is too short';
  valid = false;
}

if (!assignee.value.trim()) {
  errors.assignee = 'Assignee is required';
  valid = false;
}


  if (!valid) return;   
  ticketStore.updateTicket(ticketId, {
    title: title.value,
    description: description.value,
    assignee: assignee.value,
    status: status.value,
  });
  toast("Ticket Updated successfully!", {
    autoClose: 1000,
    position: toast.POSITION.TOP_RIGHT,
  } as ToastOptions);
  router.push('/dashboard');
};
</script>

<template>
  <div class="container mt-5">
    <!-- Header -->
    <div class="d-flex align-items-center justify-content-center position-relative mb-4">
      <button type="button" class="btn btn-primary btn-sm position-absolute start-0 cusor-pointer" @click="router.back()">
        Back
      </button>
      <h2 class="mb-0">Edit Ticket</h2>
    </div>

    <!-- Form -->
    <form class="mt-4" @submit="onSubmit">
      <div class="row">
        <!-- Title -->
        <div class="col-12 mb-3">
          <label for="title" class="form-label">Title</label>
          <input type="text" id="title" class="form-control" placeholder="Enter title" v-model="title" />
        </div>

        <!-- Description -->
        <div class="col-12 mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea id="description" class="form-control" rows="4" placeholder="Enter description" v-model="description"></textarea>
        </div>

        <!-- Assignee -->
        <div class="col-12 mb-3">
          <label for="assignee" class="form-label">Assignee</label>
          <input type="text" id="assignee" class="form-control" placeholder="Enter assignee name" v-model="assignee" />
        </div>

        <!-- Status -->
        <div class="col-12 mb-3">
          <label for="status" class="form-label">Status</label>
          <select id="status" class="form-select" v-model="status">
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        <!-- Submit -->
        <div class="col-12 mt-3">
          <button type="submit" class="btn btn-primary w-100" style="cursor: pointer;">
            Save Changes
          </button>
        </div>
      </div>
    </form>
  </div>
</template>


<style scoped>
/* Optional custom styles */
</style>

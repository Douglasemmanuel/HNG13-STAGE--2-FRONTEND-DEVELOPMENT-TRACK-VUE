<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import useTicketStore from '../../../store/ticketStore';
import { storeToRefs } from 'pinia';
interface TicketErrors {
  title?: string;
  description?: string;
  assignee?: string;
  status?: string;
}
const router = useRouter();
const ticketStore = useTicketStore(); // call store function, not a ref
// const { tickets } = storeToRefs(ticketStore);

// Form fields
const title = ref('');
const description = ref('');
const assignee = ref('');
const status = ref<'Open' | 'In Progress' | 'Closed'>('Open'); // default Open

// Error state

const errors = reactive<TicketErrors>({});

// Form submission

const onSubmit = (e: Event) => {
  e.preventDefault();

  // Validate fields
  if (!title.value.trim() || !description.value.trim() || !assignee.value.trim() || !status.value.trim()) {
    console.error("All fields are required");
    return;
  }

  // Add ticket
//   ticketStore.addTicket({
//     title: title.value,
//     description: description.value,
//     assignee: assignee.value,
//     status: status.value,
//   });

  router.push('/dashboard');
};


</script>



<template>
  <div class="container mt-5">
    <!-- Header -->
    <div class="d-flex align-items-center justify-content-center position-relative mb-4">
      <button type="button" class="btn btn-primary btn-sm position-absolute start-0 cusor-pointer" @click="$router.go(-1)">
        Back
      </button>
      <h2 class="mb-0">Create Ticket</h2>
    </div>

    <!-- Form -->
    <form class="mt-4">
      <div class="row">
        <!-- Title -->
        <div class="col-12 mb-3">
          <label for="title" class="form-label">Title</label>
          <input type="text" id="title" class="form-control" placeholder="Enter title" />
        </div>

        <!-- Description -->
        <div class="col-12 mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea id="description" class="form-control" rows="4" placeholder="Enter description"></textarea>
        </div>

        <!-- Assignee -->
        <div class="col-12 mb-3">
          <label for="assignee" class="form-label">Assignee</label>
          <input type="text" id="assignee" class="form-control" placeholder="Enter assignee name" />
        </div>

        <!-- Status -->
        <div class="col-12 mb-3">
          <label for="status" class="form-label">Status</label>
          <select id="status" class="form-select">
            <option value="Open">Open</option>
            <!-- <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option> -->
          </select>
        </div>

        <!-- Submit -->
        <div class="col-12 mt-3">
          <button type="submit" class="btn btn-primary w-100" style="cursor: pointer;">
            Create Ticket
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Optional custom styles */
</style>

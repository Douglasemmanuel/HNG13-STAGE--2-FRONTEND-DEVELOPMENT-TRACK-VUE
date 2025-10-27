<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import {useTicketStore} from '../dashboard/store/ticketstore'
import { toast, type ToastOptions } from 'vue3-toastify';
interface TicketErrors {
  title?: string;
  description?: string;
  assignee?: string;
  status?: string;
}
const ticketStore = useTicketStore();
const router = useRouter();
const title = ref('');
const description = ref('');
const assignee = ref('');
const status = ref<'Open' >('Open')
const errors = reactive<TicketErrors>({});

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
  
  ticketStore.addTicket({
    title: title.value,
    description: description.value,
    assignee: assignee.value,
    status: status.value,
  });
    toast("Ticket Created successfully!", {
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
      <button type="button" class="btn btn-primary btn-sm position-absolute start-0 cusor-pointer" @click="$router.go(-1)">
        Back
      </button>
      <h2 class="mb-0">Create Ticket</h2>
    </div>

  <form class="mt-4" @submit.prevent="onSubmit">
  <div class="row">
    <!-- Title -->
    <div class="col-12 mb-3">
      <label for="title" class="form-label">Title</label>
      <input
        type="text"
        id="title"
        v-model="title"
        class="form-control"
        placeholder="Enter title"
      />
      <small v-if="errors.title" class="text-danger">{{ errors.title }}</small>
    </div>

    <!-- Description -->
    <div class="col-12 mb-3">
      <label for="description" class="form-label">Description</label>
      <textarea
        id="description"
        v-model="description"
        class="form-control"
        rows="4"
        placeholder="Enter description"
      ></textarea>
      <small v-if="errors.description" class="text-danger">{{ errors.description }}</small>
    </div>

    <!-- Assignee -->
    <div class="col-12 mb-3">
      <label for="assignee" class="form-label">Assignee</label>
      <input
        type="text"
        id="assignee"
        v-model="assignee"
        class="form-control"
        placeholder="Enter assignee name"
      />
      <small v-if="errors.assignee" class="text-danger">{{ errors.assignee }}</small>
    </div>

    <!-- Status -->
    <div class="col-12 mb-3">
      <label for="status" class="form-label">Status</label>
      <select id="status" v-model="status" class="form-select">
        <option value="Open">Open</option>
        <!-- <option value="In Progress">In Progress</option>
        <option value="Closed">Closed</option> -->
      </select>
      <small v-if="errors.status" class="text-danger">{{ errors.status }}</small>
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



<style scoped>
/* Optional custom styles */
</style>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { toast, type ToastOptions } from 'vue3-toastify';
import { useSignup , type SignupData  } from '../hooks/register_hook';
const router = useRouter();
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const firstName = ref('');
const lastName = ref('');
const { signup } = useSignup();
const errors = reactive<{ [key: string]: string | undefined }>({});

const handleSubmit = async () => {
  // Clear previous errors
  errors.email = undefined;
  errors.password = undefined;
  errors.confirmPassword = undefined;
  errors.firstName = undefined;
  errors.lastName = undefined;

  // Validate fields
  if (!firstName.value.trim()) {
    errors.firstName = 'First Name is required';
    return;
  }
  if (!lastName.value.trim()) {
    errors.lastName = 'Last Name is required';
    return;
  }
  if (!email.value.trim()) {
    errors.email = 'Email is required';
    return;
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
    errors.email = 'Invalid email format';
    return;
  }
  if (!password.value.trim()) {
    errors.password = 'Password is required';
    return;
  }else if(password.value.length < 6){
    errors.password = 'Password is too Short';
  }
  if (password.value !== confirmPassword.value) {
    errors.confirmPassword = 'Passwords do not match';
    return;
  }
 const existingUsers = localStorage.getItem('users');
  const users: SignupData[] = existingUsers ? JSON.parse(existingUsers) : [];
  const userExists = users.some(user => user.email === email.value);

  if (userExists) {
    errors.email = 'Email is already registered';
    toast("User with this Email exists", {
      autoClose: 5000,
      position: toast.POSITION.TOP_RIGHT,
    } as ToastOptions);
    return;
  }
  const data:SignupData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  };

  const result = signup(data);

  if (result.success) {
    toast("Registration successful!", {
      autoClose: 5000,
      position: toast.POSITION.TOP_RIGHT,
    } as ToastOptions);
    router.push('/dashboard');
  } else {
    errors.email = result.message;
     errors.firstName = result.message;
      errors.lastName = result.message;
       errors.password = result.message;
        errors.confirmPassword = result.message;
  }
  
};
</script>

<template>
  <div class="container mt-5">
    <h1 class="text-center">Get Started</h1>

    <div class="row justify-content-center mt-4">
      <div class="col-12 col-sm-10 col-md-6 col-lg-4">
        <form @submit.prevent="handleSubmit">
          <div class="row mb-3">
            <div class="col-12 col-sm-6 mb-2 mb-sm-0">
              <label for="firstName" class="form-label">First Name</label>
              <input
                id="firstName"
                type="text"
                class="form-control"
                placeholder="First Name"
                v-model="firstName"
              />
                          <small v-if="errors.firstName" class="text-danger">{{ errors.firstName }}</small>
            </div>
            <div class="col-12 col-sm-6">
              <label for="lastName" class="form-label">Last Name</label>
              <input
                id="lastName"
                type="text"
                class="form-control"
                placeholder="Last Name"
                v-model="lastName"
              />
                          <small v-if="errors.lastName" class="text-danger">{{ errors.lastName }}</small>
            </div>
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input
              id="email"
              type="email"
              class="form-control"
              placeholder="Enter email"
              v-model="email"
            />
                        <small v-if="errors.email" class="text-danger">{{ errors.email }}</small>
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              id="password"
              type="password"
              class="form-control"
              placeholder="Enter password"
              v-model="password"
            />
                        <small v-if="errors.password" class="text-danger">{{ errors.password}}</small>
          </div>

          <div class="mb-3">
            <label for="confirmPassword" class="form-label">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              class="form-control"
              placeholder="Confirm password"
              v-model="confirmPassword"
            />
             <small v-if="errors.confirmPassword" class="text-danger">{{ errors.confirmPassword}}</small>
          </div>

          <button type="submit" class="btn btn-primary w-100 py-2">
            Get Started
          </button>
        </form>

        <p class="text-center mt-3">
          Already have an account?
          <router-link
            to="/login"
            class="fw-bold text-decoration-none"
          >
            Login
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* Optional: adjust input width further if needed */
</style>

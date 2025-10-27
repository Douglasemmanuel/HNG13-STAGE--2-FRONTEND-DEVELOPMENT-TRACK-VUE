<script setup lang="ts">
import { reactive ,ref} from 'vue';
import { useRouter } from 'vue-router';
import { toast, type ToastOptions } from 'vue3-toastify';
import { useLogin, type LoginData, type LoginResult } from '../hooks/login_hooks';

const router = useRouter();
const email = ref('');
const password = ref('');
const errors = reactive<{ email?: string; password?: string }>({});

const handleSubmit = async () => {
  errors.email = undefined;
   errors.password = undefined;

  // Validate email
  if (!email.value.trim()) {
    errors.email = 'Email is required';
    return;
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
    errors.email = 'Invalid email format';
    return;
  }

  // Validate password
  if (!password.value.trim()) {
    errors.password = 'Password is required';
    return;
  }

  const data: LoginData = {
    email: email.value,
    password: password.value,
  };

  const result: LoginResult = useLogin(data);

  if (result.success) {
    toast("Login successfully!", {
      autoClose: 5000,
      position: toast.POSITION.TOP_RIGHT,
    } as ToastOptions);
    router.push('/dashboard');
  } else {
    errors.email = result.message;
    // errors.password = result.message;
  }
};
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-10 col-md-6 col-lg-4">
        <form @submit.prevent="handleSubmit">
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
            <small v-if="errors.password" class="text-danger">{{ errors.password }}</small>
          </div>

          <button type="submit" class="btn btn-primary w-100 py-2">
            Login
          </button>
        </form>

        <p class="text-center mt-3">
          Don't have an account?
          <router-link to="/register" class="fw-bold text-decoration-none">
            Sign Up
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

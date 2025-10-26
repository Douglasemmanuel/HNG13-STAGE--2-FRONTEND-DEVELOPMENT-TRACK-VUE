<script setup lang="ts">
// No script logic needed
import { useRoute , useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
function navigateTo(route: string) {
  router.push(route);
}
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-10 col-md-6 col-lg-4">
        <form>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input
              id="email"
              type="email"
              class="form-control"
              placeholder="Enter email"
            />
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              id="password"
              type="password"
              class="form-control"
              placeholder="Enter password"
            />
          </div>

          <button type="submit" class="btn btn-primary w-100 py-2"  @click="navigateTo('/dashboard')" >
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


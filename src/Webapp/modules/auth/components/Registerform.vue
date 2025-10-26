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
    <h1 class="text-center">Get Started</h1>

    <div class="row justify-content-center mt-4">
      <div class="col-12 col-sm-10 col-md-6 col-lg-4">
        <form>
          <div class="row mb-3">
            <div class="col-12 col-sm-6 mb-2 mb-sm-0">
              <label for="firstName" class="form-label">First Name</label>
              <input
                id="firstName"
                type="text"
                class="form-control"
                placeholder="First Name"
              />
            </div>
            <div class="col-12 col-sm-6">
              <label for="lastName" class="form-label">Last Name</label>
              <input
                id="lastName"
                type="text"
                class="form-control"
                placeholder="Last Name"
              />
            </div>
          </div>

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

          <div class="mb-3">
            <label for="confirmPassword" class="form-label">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              class="form-control"
              placeholder="Confirm password"
            />
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

<script setup lang="ts">
// import { ref } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import Davido from '../../images/davido.jpg';
</script>

<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10">
            <b-breadcrumb class="mb-4">
        <b-breadcrumb-item href="#">Concerts |</b-breadcrumb-item>
        <b-breadcrumb-item active> Davido</b-breadcrumb-item>
    </b-breadcrumb>
        <!-- Image Card -->
        <div class="card mb-4">
          <img
            class="card-img-top"
            :src="Davido"
            alt="Davido 5ive alive Tour"
            style="object-fit: cover; height: 300px; border-radius: 0.5rem;"
          />
        </div>

        <!-- Event Title -->
        <h2 class="mb-3">Davido | 5ive Alive Tour</h2>

        <!-- Event Details -->
        <p class="mb-3">
          Sun, Oct 26 · 7:00 PM · Godswill Akpabio's Stadium, Uyo, Akwa Ibom
        </p>

        <!-- Event Description -->
        <p class="mb-4">
          From Afrobeat hits to global superstardom, Davido has electrified audiences worldwide
          with his infectious rhythms and charismatic performances. This concert celebrates his
          dynamic discography, promising a night of high-energy music, unforgettable hits, and
          moments fans will cherish.
        </p>

        <!-- Ticket Information -->
        <h4 class="mb-3">Ticket Information</h4>
        <p class="mb-4">
          Ticket prices range from ₦5,000 to ₦5,000,000 depending on seating location. VIP packages
          are available for an enhanced experience.
        </p>

        <!-- Buy Button -->
        <button class="btn btn-primary btn-lg">
          Create Tickets
        </button>

      </div>
    </div>
  </div>
</template>

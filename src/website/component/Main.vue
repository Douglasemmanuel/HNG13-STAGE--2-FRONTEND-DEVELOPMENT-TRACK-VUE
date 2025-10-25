<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css';
// import Davido from "../../images/davido.jpg";
</script>

<template>
  <div class="main-wrapper">

    <!-- Hero Section -->
    <main class="hero-section position-relative text-center text-white">
      
      <!-- Wavy SVG Background -->
      <div class="wave-bg">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            fill="#007bff"
            fill-opacity="1"
            d="M0,224L48,197.3C96,171,192,117,288,112C384,107,480,149,576,176C672,203,768,213,864,213.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <!-- Decorative Circle -->
      <div class="decorative-circle"></div>

      <!-- Hero Content -->
      <div class="container hero-content" fluid>
        <h1 class="fw-bold display-4 mb-2">🎟️ TicketHub</h1>
        <p class="fs-5 mb-4">
          Discover, book, and enjoy your favorite live experiences effortlessly.
        </p>
        <div class="d-flex flex-wrap justify-content-center gap-3">
          <button class="btn btn-primary btn-lg fw-semibold">
            Get Started
          </button>
        </div>
      </div>
    </main>

    <!-- Feature Boxes Section -->
    <section class="features-section py-5">
      <div class="container" fluid>
        <div class="row g-4 justify-content-center align-items-stretch">

          <div class="col-12 col-sm-6 col-md-4 d-flex">
            <div class="card feature-card shadow-sm p-4 text-center flex-fill">
              <h5 class="fw-bold mb-2">🎤 Live Concerts</h5>
              <p>Experience top artists performing live near you.</p>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-4 d-flex">
            <div class="card feature-card shadow-sm p-4 text-center flex-fill">
              <h5 class="fw-bold mb-2">🏟️ Sports Events</h5>
              <p>Catch thrilling matches and support your favorite teams.</p>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-4 d-flex">
            <div class="card feature-card shadow-sm p-4 text-center flex-fill">
              <h5 class="fw-bold mb-2">🎭 Theatre & Arts</h5>
              <p>Enjoy captivating performances and cultural events.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>
<style scoped>
/* Center everything and limit width */
.main-wrapper {
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;
}

/* Hero Section */
.hero-section {
  position: relative;
  background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.6)
    ),
    url("../../images/davido.jpg") center/cover no-repeat;
  min-height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Wavy SVG Background */
.wave-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  line-height: 0;
  overflow: hidden;
  transform: translateY(1px);
}

.wave-bg svg {
  display: block;
  width: 100%;
  height: 100px;
}

/* Decorative Circle */
.decorative-circle {
  position: absolute;
  top: 10%;
  right: 15%;
  width: 120px;
  height: 120px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  filter: blur(2px);
}

/* Hero Content */
.hero-content {
  position: relative;
  z-index: 2;
}

/* Feature Boxes */
.features-section {
  background: #f9fafc;
}

.feature-card {
  border-radius: 16px;
  background: white;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

/* Footer */
.footer {
  background: #f1f3f6;
  border-top: 1px solid #e2e2e2;
}

.feature-card {
  border-radius: 16px;
  background: white;
  transition: all 0.3s ease;
  height: 100%; /* ensures equal height when flex-fill is used */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Responsive Tweaks */
@media (max-width: 768px) {
  .decorative-circle {
    width: 80px;
    height: 80px;
    top: 5%;
    right: 10%;
  }

  .hero-section {
    min-height: 420px;
    background-position: top center;
  }

  .feature-card {
    padding: 2rem 1rem;
  }
}
</style>
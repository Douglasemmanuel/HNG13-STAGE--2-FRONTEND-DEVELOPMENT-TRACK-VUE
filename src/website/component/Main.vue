<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo2.jpeg'
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToLogin = () => {
  router.push('/login')
}

const navigateToSignup = () => {
  router.push('/register')
}
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
      <div className=" container hero-content " fluid >
  <div  class="d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center gap-3">
          <img 
        :src="logo" 
        alt="Ticket Icon" 
        class="image-style"
      />

    <h1 className="fw-bold display-4 mb-2">TicketHub</h1>
  </div>
          <p className="fs-5 mb-4 mt-4">
            Track, prioritize, and complete your work effortlessly—turn chaos into clarity and make progress every step of the way.
          </p>
        <div class="d-flex flex-wrap justify-content-center gap-3">
        <div class="d-flex gap-3">
    <!-- Login Button -->
    <b-button
      variant="primary"
      size="lg"
      class="fw-semibold custom-btn"
      @click="navigateToLogin"
    >
      Login
    </b-button>

    <!-- Get Started Button -->
    <b-button
      variant="outline-primary"
      size="lg"
      class="fw-semibold custom-outline-btn"
      @click="navigateToSignup"
    >
      Get Started
    </b-button>
  </div>
        </div>
  </div>
            <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>

    
      <!-- <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f3f4f6"
          fillOpacity="1"
          d="M0,224L48,202.7C96,181,192,139,288,133.3C384,128,480,160,576,186.7C672,213,768,235,864,240C960,245,1056,235,1152,218.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg> -->
      </div>
    </main>

    <!-- Feature Boxes Section -->
    <section class="features-section py-5">
      <div class="container" fluid>
        <div class="row g-4 justify-content-center align-items-stretch">

          <div class="col-12 col-sm-6 col-md-4 d-flex">
            <div class="card feature-card shadow-sm p-4 text-center flex-fill">
              <h5 className="fw-bold mb-2">Create Tickets</h5>
          <p>submit new tickets with validation and automatic tracking.</p>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-4 d-flex">
            <div class="card feature-card shadow-sm p-4 text-center flex-fill">
            <h5 className="fw-bold mb-2">View and Mange</h5>
          <p>see open , in-progress and closed tickets all in the dahboard.</p>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-4 d-flex">
            <div class="card feature-card shadow-sm p-4 text-center flex-fill">
            <h5 className="fw-bold mb-2">Secure and Safe</h5>
          <p>All your ticket data is safely stored .</p>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>
<style scoped>

.image-style {
  width: 60px;           
  height: auto;           
  border-radius: 2rem;   
  box-shadow: 0 4px 8px rgba(0,0,0,0.2); 
  transition: transform 0.3s ease; 
}
.custom-outline-btn {
  border: 2px solid white; 
  color: white; 
}
.custom-btn,
.custom-outline-btn {
  padding: 1rem 2.5rem; 
  font-size: 1.25rem;    
  border-radius: 12px;   
  transition: all 0.3s ease;
  cursor: pointer;
}
.custom-outline-btn:hover {
  background-color: white;
  color: #000dff;
  border-color: white;
}

.custom-btn {
  background-color: white;   
  color: #0d6efd;           
  border: 2px solid #0d6efd; 
}

.custom-btn:hover {
  background-color: #0d6efd; 
  color: white;              
  border-color: #0d6efd;
}
.image-style:hover {
  transform: scale(1.05); /* Slight zoom on hover */
}
.main-wrapper {
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;
}

/* Hero Section */
.hero-section {
  position: relative;
  background-color: blue;
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

.hero {
  position: relative;
  height: 80vh;
  background: linear-gradient(135deg, #6b73ff, #000dff);
  color: white;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-align: center;
}

.hero-content {
  z-index: 2;
}

/* Decorative Circles */
.circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  z-index: 1;
}

.circle-1 {
  width: 150px;
  height: 150px;
  top: 50px;
  left: 20%;
}

.circle-2 {
  width: 200px;
  height: 200px;
  bottom: 50px;
  right: 10%;
}

/* Wavy SVG */
.wave {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
   display: block;
  margin: 0 auto;
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
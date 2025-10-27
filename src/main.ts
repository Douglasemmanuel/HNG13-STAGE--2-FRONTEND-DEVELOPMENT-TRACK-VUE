import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Register from './Webapp/views/Register.vue';
import Home from './website/screen/Home.vue';
import Login from './Webapp/views/Login.vue';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Dashboard from './Webapp/modules/dashboard/Dashboard.vue';
import CreateTickets from './Webapp/modules/dashboard/CreateTickets.vue';
import EditTickets from './Webapp/modules/dashboard/EditTickets.vue';
import Activetickets from './Webapp/modules/dashboard/Activetickets.vue';
import AllTickets from './Webapp/modules/dashboard/AllTickets.vue';
import { createPinia } from 'pinia';
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

// Correctly type your routes
const routes: RouteRecordRaw[] = [
    { path: '/', component: Home },        
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/dashboard', component: Dashboard},
    { path: '/all-tickets', component: AllTickets },
    { path: '/active-tickets', component: Activetickets },
    { path: '/create-ticket', component: CreateTickets},
     { path: '/edit-ticket/:id', component: EditTickets , props:true},
];

const router = createRouter({
    history: createWebHistory(),
    routes,  
});

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(
    Vue3Toastify,
  {
    autoClose: 3000,
    // ...
  } as ToastContainerOptions,
);
// app.use(BootstrapVue3);
app.mount('#app');

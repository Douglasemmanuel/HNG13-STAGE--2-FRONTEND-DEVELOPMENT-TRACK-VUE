import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Register from './Webapp/views/Register.vue';
import Home from './website/screen/Home.vue';
import Login from './Webapp/views/Login.vue';
import Dashboard from './Webapp/modules/dashboard/component/Dashboard.vue';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Correctly type your routes
const routes: RouteRecordRaw[] = [
    { path: '/', component: Home },        
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/dashboard', component: Dashboard},
];

const router = createRouter({
    history: createWebHistory(),
    routes,  
});

const app = createApp(App);
app.use(router);
// app.use(BootstrapVue3);
app.mount('#app');

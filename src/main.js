import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import MainPage from './pages/MainPage.vue';
import ProjectPage from './pages/ProjectPage.vue';
import AboutPage from './pages/AboutPage.vue';
import ContactPage from './pages/ContactPage.vue';
import './main.css';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MainPage },
        { path: '/projects', component: ProjectPage },
        { path: '/about', component: AboutPage },
        { path: '/contact', component: ContactPage },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
        if (savedPosition) { return savedPosition }
        return { top: 0 }
    }
});

const app = createApp(App)

app.use(router);

app.mount('#app')

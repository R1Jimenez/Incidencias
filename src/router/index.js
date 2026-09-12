import {createRouter, createWebHistory} from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'landing',
            component: LandingPage,
            meta: { titulo: 'Incidencias de Ecosat' }
        },
        {
            path: '/reportar',
            name: 'ReportarIncidencia',
            component: () => import('../views/ReportarIncidencia.vue'),
            meta: { titulo: 'Reportar Incidencia' }
        },
        {
            path: '/incidencias',
            name: 'Incidencias',
            component: () => import('../views/Incidencias.vue'),
            meta: { titulo: 'Incidencias' }
        }
    ]
})

export default router
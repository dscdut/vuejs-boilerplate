import { useAuthStore } from '@/stores/auth'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/home/index.vue'),
            meta: {
                layout: 'landing-page'
            }
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/home/index.vue')
        },
        {
            name: 'Login',
            path: '/login',
            component: () => import('../views/login/index.vue'),
            meta: {
                title: 'Đăng nhập',
                layout: 'auth',
                auth: false
            }
        },
        {
            name: 'Register',
            path: '/register',
            component: () => import('../views/register/index.vue'),
            meta: {
                title: 'Đăng ký',
                layout: 'auth',
                auth: false
            }
        }
    ]
})

router.beforeEach(async (to) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login', '/register', '/']
    const authRequired = !publicPages.includes(to.path)
    const authStore = useAuthStore()

    if (authRequired && !authStore?.isLoggedIn) {
        authStore.returnUrl = to.fullPath
        return '/login'
    }
})

export default router

import { useAuthStore } from '@/stores/auth'
import { createRouter, createWebHistory } from 'vue-router'

export enum RoutePath {
    Home = '/',
    About = '/about',
    Login = '/login',
    Register = '/register',
    NotFound = '/404'
}

export const PUBLIC_ROUTE_PATHS: string[] = [
    RoutePath.Login,
    RoutePath.Register,
    RoutePath.Home,
    RoutePath.About,
    RoutePath.NotFound
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: RoutePath.Home,
            name: 'home',
            component: () => import('../views/home/index.vue'),
            meta: {
                layout: 'landing-page'
            }
        },
        {
            path: RoutePath.About,
            name: 'About',
            component: () => import('../views/home/index.vue')
        },
        {
            path: RoutePath.Login,
            name: 'Login',
            component: () => import('../views/login/index.vue'),
            meta: {
                title: 'Đăng nhập',
                layout: 'auth',
                auth: false
            }
        },
        {
            path: RoutePath.Register,
            name: 'Register',
            component: () => import('../views/register/index.vue'),
            meta: {
                title: 'Đăng ký',
                layout: 'auth',
                auth: false
            }
        },
        {
            path: RoutePath.NotFound,
            name: '404',
            component: () => import('../views/404/index.vue'),
            meta: {
                title: '404'
            }
        }
    ]
})

router.beforeEach(async (to) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const existingPages = router.getRoutes().map((route) => route.path)

    if (!existingPages.includes(to.path)) {
        return RoutePath.NotFound
    }

    const toAuthRequiredRoutes = !PUBLIC_ROUTE_PATHS.includes(to.path)
    const authStore = useAuthStore()

    if (toAuthRequiredRoutes && !authStore.isLoggedIn) {
        authStore.returnUrl = to.fullPath
        return RoutePath.Login
    }
})

export default router

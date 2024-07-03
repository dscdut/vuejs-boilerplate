import { useAuthStore } from '@/stores/auth'
import { createRouter, createWebHistory } from 'vue-router'

export enum RoutePrefix {
    Auth = '/auth',
    Admin = '/admin',
    Default = ''
}

export enum RoutePath {
    Home = RoutePrefix.Default + '/',
    About = RoutePrefix.Default + '/about',
    NotFound = RoutePrefix.Default + '/404',
    /*******/
    Login = RoutePrefix.Auth + '/login',
    Register = RoutePrefix.Auth + '/register',
    /*******/
    AdminTab1Sub1 = RoutePrefix.Admin + '/tab1/sub1',
    AdminTab1Sub2 = RoutePrefix.Admin + '/tab1/sub2',
    AdminTab2 = RoutePrefix.Admin + '/tab2',
    AdminTab3 = RoutePrefix.Admin + '/tab3'
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
            path: RoutePrefix.Default,
            children: [
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
                    component: () => import('../views/home/index.vue'),
                    meta: {
                        layout: 'landing-page'
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
        },
        {
            path: RoutePrefix.Auth,
            meta: {
                layout: 'auth'
            },
            children: [
                {
                    path: RoutePath.Login,
                    name: 'Login',
                    component: () => import('../views/login/index.vue'),
                    meta: {
                        title: 'Đăng nhập'
                    }
                },
                {
                    path: RoutePath.Register,
                    name: 'Register',
                    component: () => import('../views/register/index.vue'),
                    meta: {
                        title: 'Đăng ký'
                    }
                }
            ]
        },
        {
            path: RoutePrefix.Admin,
            meta: {
                layout: 'admin'
            },
            redirect: RoutePath.AdminTab1Sub1,
            children: [
                {
                    path: RoutePath.AdminTab1Sub1,
                    name: 'AdminTab1Sub1',
                    component: () => import('../views/admin/tab1/sub1/index.vue'),
                    meta: {
                        title: 'Tab 1 Sub 1'
                    }
                },
                {
                    path: RoutePath.AdminTab1Sub2,
                    name: 'AdminTab1Sub2',
                    component: () => import('../views/admin/tab1/sub2/index.vue'),
                    meta: {
                        title: 'Tab 1 Sub 2'
                    }
                },
                {
                    path: RoutePath.AdminTab2,
                    name: 'AdminTab2',
                    component: () => import('../views/admin/tab2/index.vue'),
                    meta: {
                        title: 'Tab 2'
                    }
                },
                {
                    path: RoutePath.AdminTab3,
                    name: 'AdminTab3',
                    component: () => import('../views/admin/tab3/index.vue'),
                    meta: {
                        title: 'Tab 3'
                    }
                }
            ]
        }
    ]
})

router.beforeEach(async (to) => {
    // redirect to login page if not logged in and trying to access a restricted page
    console.info(':::Router -> Enter', to.path)
    const existingPages = router.getRoutes().map((route) => route.path)

    if (!existingPages.includes(to.path)) {
        console.info(`:::Router -> '${to.path}' not found, redirect to 404 page`)
        return RoutePath.NotFound
    }

    const toAuthRequiredRoutes = !PUBLIC_ROUTE_PATHS.includes(to.path)
    const authStore = useAuthStore()

    if (toAuthRequiredRoutes && !authStore.isLoggedIn) {
        console.info(`:::Router -> '${to.path}' requires authentication, redirect to login page`)
        authStore.returnUrl = to.fullPath
        return RoutePath.Login
    }
})

export default router

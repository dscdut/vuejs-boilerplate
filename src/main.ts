import './assets/styles/index.less'

import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import Curtain from './components/Curtain.vue'
import i18n from './i18n'
import router from './router'
import { useAuthStore } from './stores/auth'

startApp()

async function startApp() {
    const app = createApp(App)
    const initializingApp = createApp(Curtain, { show: true, spinner: true })

    app.use(createPinia())
    app.use(VueQueryPlugin)
    app.use(i18n)
    app.use(router)

    try {
        initializingApp.mount('#app')
        console.info(
            ':::startApp -> Attempting to auto refresh token before startup, also persisting auth data into store'
        )
        const authStore = useAuthStore()
        await authStore.doPersistAuthData()
        console.info(':::startApp -> Persisted auth data into store')
    } catch {
        // TODO: catch error to start app on success or failure
    } finally {
        initializingApp.unmount()
    }

    app.mount('#app')
}

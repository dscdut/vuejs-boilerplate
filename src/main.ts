import './assets/styles/index.less'

import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import i18n from './i18n'
import router from './router'
import { useAuthStore } from './stores/auth'

startApp()

async function startApp() {
    const app = createApp(App)

    app.use(createPinia())
    app.use(router)
    app.use(VueQueryPlugin)
    app.use(i18n)

    // attempt to auto refresh token before startup
    try {
        const authStore = useAuthStore()
        await authStore.doPersistAuthData()
        await authStore.doRefreshToken()
    } catch {
        // TODO: catch error to start app on success or failure
    }

    app.mount('#app')
}

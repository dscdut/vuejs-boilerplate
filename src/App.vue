<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { ConfigProvider } from 'ant-design-vue'
import { theme } from '@/theme'

import AuthLayout from '@/layouts/auth/index.vue'
import DefaultLayout from '@/layouts/empty/index.vue'
import LandingLayout from '@/layouts/landing-page/index.vue'
import { markRaw, ref, watch } from 'vue'
import Curtain from './components/Curtain.vue'

const layouts: Record<string, typeof DefaultLayout> = {
    default: DefaultLayout,
    auth: AuthLayout,
    'landing-page': LandingLayout
}

const route = useRoute()

const layout = ref()

watch(
    () => route.meta.layout as string | undefined,
    (layoutName: string | undefined) => {
        if (layoutName === '404') {
            layout.value = undefined
            return
        }
        try {
            layout.value = markRaw(layouts[layoutName || 'default'])
        } catch (err) {
            layout.value = markRaw(layouts['default'])
        }
    },
    { immediate: true }
)
</script>

<template>
    <ConfigProvider :theme="theme">
        <Curtain />
        <Transition>
            <component :is="layout">
                <RouterView />
            </component>
        </Transition>
    </ConfigProvider>
</template>

<style scoped>
/*
    Enter and leave animations can use different
    durations and timing functions.
*/
.fade-enter-active {
    transition: all 0.3s ease;
}

.fade-leave-active {
    transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>

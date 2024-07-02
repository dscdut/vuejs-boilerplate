<template>
    <slot></slot>
    <contextHolder />
</template>

<script setup lang="ts">
import { notification } from 'ant-design-vue'
import { v4 as uuid } from 'uuid'
import { onMounted, onUnmounted } from 'vue'
const [api, contextHolder] = notification.useNotification()

/**
 * This component is used to catch unhandled promise rejections
 * and show a notification to the user using Ant Design Vue's notification
 *
 * Let open console and try to run a promise reject to see the example:
 *
 * ```ts
 * Promise.reject(new Error('Hello world, i am an error message'))
 * ```
 */

onMounted(() => {
    window.addEventListener('unhandledrejection', (event) => {
        event.promise.catch((error) => {
            delete error.stack

            const errorMessage = error?.response?.data?.error ?? error?.message

            if (!errorMessage) {
                api.error({
                    message: 'Something went wrong',
                    key: uuid()
                })
                return
            }

            api.error({
                message: errorMessage,
                key: uuid()
            })
        })
    })
})

onUnmounted(() => {
    window.removeEventListener('unhandledrejection', () => {})
})
</script>

<template>
    <slot></slot>
    <contextHolder />
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue'
import { v4 as uuid } from 'uuid'
import { notification } from 'ant-design-vue'
import { onMounted } from 'vue'
const [api, contextHolder] = notification.useNotification()

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

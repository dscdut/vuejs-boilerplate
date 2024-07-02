<script setup lang="ts">
import Curtain from '@/components/Curtain.vue'
import router, { RoutePath } from '@/router'
import { sleep } from '@/utils/common'
import { useQuery } from '@tanstack/vue-query'
import { watch } from 'vue'
import AdminSidebar from './AdminSidebar.vue'

const { data: canAccess, isLoading: isValidatingCanAccess } = useQuery({
    queryKey: ['check-admin-page-accessible'],
    queryFn: async () => {
        // Simulate calling the 'i-am-admin' route, or call an RBAC checking route,... whatever you want
        await sleep(1000) // Simulate the server response time
        const response = {
            data: {
                canAccess: true
            }
        }

        return response.data.canAccess
    }
})

watch(canAccess, (value) => {
    if (!value) {
        // Redirect to home page
        router.push(RoutePath.Home)
    }
})
</script>

<template>
    <Curtain :show="isValidatingCanAccess" />
    <div class="__admin-layout__ flex h-screen overflow-hidden">
        <AdminSidebar />
        <div class="flex-1 min-h-screen p-4 overflow-y-scroll relative">
            <div class="w-full h-full bg-white border p-4 rounded-lg flex flex-col drop-shadow">
                <span class="title font-bold text-2xl">
                    {{ $route.meta.title }}
                </span>
                <slot />
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped></style>

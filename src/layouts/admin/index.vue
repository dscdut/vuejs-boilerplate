<script setup lang="ts">
import { apiIAmAdmin } from '@/api'
import Curtain from '@/components/Curtain.vue'
import router, { RoutePath } from '@/router'
import { useQuery } from '@tanstack/vue-query'
import { watch } from 'vue'
import AdminSidebar from './AdminSidebar.vue'

const { data: canAccess, isLoading: isValidatingCanAccess } = useQuery({
    queryKey: ['check-admin-page-accessible'],
    queryFn: async () => {
        const { isAdmin } = await apiIAmAdmin()
        console.log('Is admin', isAdmin)
        return isAdmin
    }
})

watch(canAccess, (value) => {
    if (!value) {
        console.info(':::::Admin -> Not admin, redirecting to home page')
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

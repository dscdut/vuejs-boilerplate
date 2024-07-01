<script setup lang="ts">
import AdminSidebar from './AdminSidebar.vue'
</script>

<template>
    <div class="__admin__ flex h-screen overflow-hidden">
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

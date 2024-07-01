<script setup lang="ts">
import { RoutePath } from '@/router'
import { Icon } from '@iconify/vue'
</script>

<template>
    <RouterLink
        :to="RoutePath.Register"
        class="h-10 font-bold w-full max-w-[336px] bg-white border-black border-2 flex justify-center items-center text-[16px] cursor-pointer hover:text-primary hover:border-primary transition-all duration-300 group rounded-lg"
    >
        <span class="transition-all translate-x-2 group-hover:-translate-x-2">
            {{ $t('login.to_register') }}
        </span>
        <Icon
            icon="ph:arrow-right-bold"
            class="opacity-0 -translate-x-6 group-hover:-translate-x-1 group-hover:opacity-100 transition-all"
        />
    </RouterLink>
</template>

<style lang="less" scoped></style>

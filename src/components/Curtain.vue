<script setup lang="ts">
/**
 * Show a curtain to prevent user interaction while waiting for some async tasks, like checking user's role, fetching initial data, loading styles, etc.
 */

import { clsx } from '@/utils/clsx'
defineProps({
    show: {
        type: Boolean,
        required: false,
        default: false
    }
})
</script>

<template>
    <div
        :class="
            clsx(
                '__curtain bg-white text-primary w-screen h-screen flex justify-center items-center fixed z-[999] transition-all ease-in-out duration-[450ms]',
                show ? 'top-0' : '-top-[150%]'
            )
        "
    >
        <img src="/vue.svg" alt="logo" class="w-[10vw]" />
    </div>
</template>

<style lang="less" scoped></style>

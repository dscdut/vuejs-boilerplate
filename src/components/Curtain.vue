<script setup lang="ts">
import { clsx } from '@/utils/clsx'
import { ref } from 'vue'

const isLoadingLayout = ref(true)

setTimeout(() => {
    isLoadingLayout.value = false
}, 500)
</script>

<template>
    <div
        :class="
            clsx(
                '__loading-curtain bg-white text-primary w-screen h-screen flex justify-center items-center fixed z-[999] transition-all ease-in-out duration-[450ms]',
                isLoadingLayout ? 'top-0' : '-top-[150%]'
            )
        "
    >
        <img src="/vue.svg" alt="logo" class="w-[10vw]" />
    </div>
</template>

<style lang="less" scoped></style>

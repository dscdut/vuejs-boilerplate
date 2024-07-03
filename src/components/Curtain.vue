<script setup lang="ts">
/**
 * Show a curtain to prevent user interaction while waiting for some async tasks, like checking user's role, fetching initial data, loading styles, etc.
 */

import { clsx } from '@/utils'
import { LoadingOutlined } from '@ant-design/icons-vue'
import { Spin } from 'ant-design-vue'
import { h } from 'vue'
defineProps({
    show: {
        type: Boolean,
        required: false,
        default: false
    },
    spinner: {
        type: Boolean,
        required: false,
        default: false
    }
})

const spinIndicator = h(LoadingOutlined, {
    style: {
        fontSize: '36px'
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
        <Spin
            v-if="spinner"
            :indicator="spinIndicator"
            class="absolute bottom-24 left-1/2 -translate-x-1/2"
        />
    </div>
</template>

<style lang="less" scoped></style>

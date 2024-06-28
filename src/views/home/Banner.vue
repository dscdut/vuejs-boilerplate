<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
    <div
        class="bg-gradient-to-r from-[#42d392] to-[#647eff] p-8 md:px-20 md:py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center"
    >
        <h2 class="text-white font-semibold text-4xl md:text-6xl tracking-tight">Lorem Ipsum!!!</h2>
        <p class="text-gray-200 mt-6 text-lg md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nisi eum doloremque
            libero? Suscipit velit porro ea facere consectetur sequi.
        </p>
        <div class="flex mt-5">
            <a
                href="https://vuejs.org/#"
                rel="noopener"
                class="flex gap-1 items-center justify-center rounded text-center transition focus-visible:ring-2 ring-offset-2 bg-white border-2 border-transparent text-black px-5 py-2.5"
                target="_blank"
            >
                Get Started
                <Icon icon="ph:arrow-up-right" />
            </a>
        </div>
    </div>
</template>

<style lang="less" scoped></style>

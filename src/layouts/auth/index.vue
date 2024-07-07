<script setup lang="ts">
import Curtain from '@/components/Curtain.vue'
import LanguageChanger from '@/components/LanguageChanger.vue'
import { ref } from 'vue'

const showCurtain = ref(true)

setTimeout(() => {
    showCurtain.value = false // Show only 500ms for "đẹp" purpose
}, 500)
</script>

<template>
    <Curtain :show="showCurtain" />
    <div class="__auth-layout__">
        <div class="flex flex-col justify-start left p-8 w-[400px]">
            <RouterLink to="/" class="cursor-pointer">
                <!-- <img src="/granny-smith-logo.svg" alt="logo" class="h-[60px]" /> -->
                <div class="text-4xl font-black">LOGO</div>
            </RouterLink>
            <slot />
            <LanguageChanger block />
        </div>
        <div class="right p-8 hidden lg:block flex-1">
            <div class="rounded-xl overflow-hidden w-full h-full">
                <div class="bg-image w-full h-full">
                    <div
                        class="w-full h-full bg-black bg-opacity-25 text-white text-[4vw] leading-none font-bold p-[4vw] flex items-end"
                    >
                        One more step <br />
                        to have more <br />
                        comfortable steps
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.__auth-layout__ {
    @apply flex w-screen h-screen justify-center;
}
.bg-image {
    background-color: #dda267;
    background-image: url(/images/auth-layout-img.jpg);
    background-position: center;
    background-size: cover;
}
</style>

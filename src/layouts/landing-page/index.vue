<script setup lang="ts">
import Curtain from '@/components/Curtain.vue'
import LandingPageNavbar from './LandingPageNavbar.vue'

import { ref } from 'vue'

const showCurtain = ref(true)

setTimeout(() => {
    showCurtain.value = false // Show only 500ms for "đẹp" purpose
}, 500)
</script>

<template>
    <Curtain :show="showCurtain" />
    <div>
        <LandingPageNavbar />
        <slot />
    </div>
</template>

<style lang="less" scoped></style>

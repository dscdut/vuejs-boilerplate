<script setup lang="ts">
import { ref } from 'vue'

const showCurtain = ref(true)

setTimeout(() => {
    showCurtain.value = false // Show only 500ms for "đẹp" purpose
}, 500)
</script>

<template>
    <Curtain :show="showCurtain" />
    <div class="__blank__">
        <slot />
    </div>
</template>

<style lang="less" scoped></style>

<script setup lang="ts">
import { clsx, type ClassValue } from '@/utils'

defineProps({
    className: {
        type: Array as () => ClassValue[],
        default: () => []
    }
})
</script>
<template>
    <div :class="clsx('max-w-screen-xl mx-auto px-5', ...className)">
        <slot />
    </div>
</template>

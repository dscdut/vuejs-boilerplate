<script setup lang="ts">
import Container from '@/components/Container.vue'
import Banner from './Banner.vue'
import Cta from './Cta.vue'
import Features from './Features.vue'
import Hero from './Hero.vue'
</script>

<template>
    <Container>
        <Hero />
        <Features />
        <Banner />
        <Cta />
    </Container>
</template>

<style lang="less" scoped></style>

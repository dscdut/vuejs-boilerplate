<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
</script>

<template>
    <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
        <div class="py-6 md:order-1 hidden md:block">
            <img class="w-full" src="/images/hero.png" alt="Astronaut in the air" loading="eager" />
        </div>
        <div>
            <h1
                class="text-vue text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter"
            >
                Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p class="text-lg mt-4 text-slate-600 max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero labore ipsam quo,
                accusamus possimus omnis aspernatur consectetur qui deserunt magnam.
                <wbr /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, illo!
                Nihil illo ipsa placeat provident voluptate earum officia harum sunt.
            </p>
            <div class="mt-6 flex flex-col sm:flex-row gap-3">
                <RouterLink
                    to="login"
                    class="flex gap-1 items-center justify-center rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 bg-vue text-white hover:bg-vue-shade border-2 border-transparent px-5 py-2.5"
                    rel="noopener"
                >
                    Start now
                    <Icon icon="ph:arrow-up-right" />
                </RouterLink>
                <a
                    size="lg"
                    rel="noopener"
                    class="flex gap-1 items-center justify-center rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 bg-white border-2 border-vue hover:bg-gray-100 text-vue px-5 py-2.5"
                    target="_blank"
                    href="#"
                >
                    About
                    <Icon icon="ph:arrow-up-right" />
                </a>
            </div>
        </div>
    </main>
</template>

<style></style>

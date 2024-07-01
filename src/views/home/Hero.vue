<script setup lang="ts">
import { RoutePath } from '@/router'
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
                {{ $t('home.hero.welcome') }}
            </h1>
            <p class="text-lg mt-4 text-slate-600 max-w-xl">
                {{ $t('home.hero.secondary') }}
            </p>
            <div class="mt-6 flex flex-col sm:flex-row gap-3">
                <RouterLink
                    :to="RoutePath.Login"
                    class="flex gap-1 items-center justify-center rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 bg-vue text-white hover:bg-vue-shade border-2 border-transparent px-5 py-2.5"
                    rel="noopener"
                >
                    {{ $t('home.hero.start_now') }}
                    <Icon icon="ph:arrow-up-right" />
                </RouterLink>
                <a
                    size="lg"
                    rel="noopener"
                    class="flex gap-1 items-center justify-center rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 bg-white border-2 border-vue hover:bg-gray-100 text-vue px-5 py-2.5"
                    target="_blank"
                    href="#"
                >
                    {{ $t('home.hero.learn_more') }}
                    <Icon icon="ph:arrow-up-right" />
                </a>
            </div>
        </div>
    </main>
</template>

<style></style>

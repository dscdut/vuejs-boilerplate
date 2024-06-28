<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useAuthStore } from '@/stores/auth'
import { RouterLink } from 'vue-router'

const auth = useAuthStore()
</script>

<template>
    <div class="max-w-screen-xl mx-auto px-5">
        <header class="flex flex-col lg:flex-row justify-between items-center my-5">
            <div class="flex w-full lg:w-auto items-center justify-between">
                <a href="/" class="text-lg"
                    ><span class="font-bold text-slate-800">VUE</span
                    ><span class="text-slate-500">3</span>
                </a>
                <div class="block lg:hidden">
                    <button aria-label="Toggle Menu">
                        <title>Toggle Menu</title>
                        <Icon icon="ph:list-bold" />
                    </button>
                </div>
            </div>
            <nav class="hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0">
                <ul class="flex flex-col lg:flex-row lg:gap-3">
                    <li>
                        <a
                            href="/#"
                            class="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"
                        >
                            <span> Jacob</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/#"
                            class="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"
                        >
                            <span> Jesus</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/#"
                            class="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"
                        >
                            <span> Muhammad</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"
                        >
                            <span> Sakyamuni</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"
                        >
                            <span> Zarathustra</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"
                        >
                            <span> Martin Luther</span>
                            <span
                                class="ml-1 px-2 py-0.5 text-[10px] animate-pulse font-semibold uppercase text-white bg-indigo-600 rounded-full"
                            >
                                New
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div>
                <div v-if="!auth.isLoggedIn" class="hidden lg:flex items-center gap-4">
                    <RouterLink to="/login">Log in</RouterLink>
                    <RouterLink
                        to="/register"
                        class="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2 bg-vue text-white hover:bg-vue-shade border-2 border-transparent"
                        >Sign up
                    </RouterLink>
                </div>
                <div v-else class="hidden lg:flex items-center gap-4">
                    <!-- <RouterLink to="/dashboard">Dashboard</RouterLink> -->
                    <button @click="auth.logout">Logout</button>
                </div>
            </div>
        </header>
    </div>
</template>

<style lang="less" scoped></style>

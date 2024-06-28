<template>
    <div class="mt-16 md:mt-0">
        <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, molestiae.
        </h2>
        <p class="text-lg mt-4 text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, eveniet corporis? Minima
            veritatis, maxime temporibus impedit possimus vitae magni culpa nostrum officia
            quibusdam unde saepe sequi tempora a voluptates laudantium.
        </p>
    </div>

    <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
        <div v-for="item in features" :key="item.title" class="flex gap-4 items-start">
            <div class="mt-1 bg-vue rounded-full p-2 w-8 h-8 shrink-0">
                <Icon class="text-white" :icon="item.icon" />
            </div>
            <div>
                <h3 class="font-semibold text-lg">{{ item.title }}</h3>
                <p class="text-slate-500 mt-2 leading-relaxed">{{ item.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Icon } from '@iconify/vue'

const features = reactive([
    {
        title: 'Lorem Ipsum Dolor Sit Amet',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        icon: 'ph:asterisk-bold'
    },
    {
        title: 'Lorem Ipsum',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        icon: 'ph:star-four'
    },
    {
        title: 'Lorem Ipsum Dolor',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo..',
        icon: 'ph:moon'
    },
    {
        title: 'Lorem Ipsum Dolor Sit Amet',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        icon: 'ph:sparkle'
    },
    {
        title: 'Lorem',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        icon: 'ph:shooting-star'
    },
    {
        title: 'Lorem Ipsum',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        icon: 'ph:heart'
    }
])
</script>

<style>
/* Add your styles here */
</style>

<template>
    <div class="mt-16 md:mt-0">
        <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
            Be sure to know which side you're on
        </h2>
        <p class="text-lg mt-4 text-slate-600">
            It started with bad dreams which became nightmares. I was foolish, I wanted answers, I
            painted the symbols, I said the words: when gravity falls and the earth becomes sky fear
            the beast with just one eye.
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
        title: 'Bill Cipher! Triangle!',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        icon: 'ph:asterisk-bold'
    },
    {
        title: 'Is Black Magic',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        icon: 'ph:star-four'
    },
    {
        title: 'Black & White',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo..',
        icon: 'ph:moon'
    },
    {
        title: 'Search for the...',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        icon: 'ph:sparkle'
    },
    {
        title: 'Flag',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        icon: 'ph:shooting-star'
    },
    {
        title: 'Watch out!',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        icon: 'ph:heart'
    }
])
</script>

<style>
/* Add your styles here */
</style>

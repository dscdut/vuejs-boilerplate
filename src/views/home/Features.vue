<template>
    <div class="mt-16 md:mt-0">
        <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
            {{ $t('home.features.title') }}
        </h2>
        <p class="text-lg mt-4 text-slate-600">
            {{ $t('home.features.secondary') }}
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
import { Icon } from '@iconify/vue'
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const features = reactive([
    {
        title: t('home.features.feature1.title'),
        description: t('home.features.feature1.description'),
        icon: 'ph:asterisk-bold'
    },
    {
        title: t('home.features.feature2.title'),
        description: t('home.features.feature2.description'),
        icon: 'ph:star-four'
    },
    {
        title: t('home.features.feature3.title'),
        description: t('home.features.feature3.description'),
        icon: 'ph:moon'
    },
    {
        title: t('home.features.feature4.title'),
        description: t('home.features.feature4.description'),
        icon: 'ph:sparkle'
    },
    {
        title: t('home.features.feature5.title'),
        description: t('home.features.feature5.description'),
        icon: 'ph:shooting-star'
    },
    {
        title: t('home.features.feature6.title'),
        description: t('home.features.feature6.description'),
        icon: 'ph:heart'
    }
])
</script>

<style>
/* Add your styles here */
</style>

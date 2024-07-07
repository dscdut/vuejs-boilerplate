<script setup lang="ts">
import { LANGUAGE_NAME } from '@/i18n/locales'
import { clsx } from '@/utils'
import { Icon } from '@iconify/vue/dist/iconify.js'
import { Select } from 'ant-design-vue'
import { type SizeType } from 'ant-design-vue/es/config-provider'
import { Option } from 'ant-design-vue/es/vc-select'
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

defineProps({
    size: {
        type: String as () => SizeType,
        required: false,
        default: undefined
    },
    block: {
        type: Boolean,
        required: false,
        default: false
    },
    className: {
        type: String,
        required: false,
        default: ''
    }
})

const { locale } = useI18n()
watch(locale, (newLocale) => {
    localStorage.setItem('locale', newLocale)
})
</script>

<template>
    <Select
        :size="size"
        :default-value="$i18n.locale"
        v-model:value="$i18n.locale"
        :class="clsx([block ? 'w-full text-center' : 'w-36', className])"
    >
        <Option
            v-for="locale in $i18n.availableLocales"
            :key="`locale-${locale}`"
            :value="locale"
            >{{ LANGUAGE_NAME[locale] ?? locale }}</Option
        >
        <template #suffixIcon><Icon icon="ph:globe" /></template>
    </Select>
</template>

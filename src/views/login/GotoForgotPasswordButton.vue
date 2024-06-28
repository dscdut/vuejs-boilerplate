<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Modal } from 'ant-design-vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const showComingSoon = () => {
    Modal.info({
        title: t('common.oops'),
        content: t('common.feature_coming_soon')
    })
}
</script>

<template>
    <!-- TODO: When reset password is ready, enable router link and disable `@click="showComingSoon"` -->
    <!-- <RouterLink :to="{ name: 'Reset Password' }" class="inline-flex items-center justify-end group gap-0 -mr-3"> -->
    <div
        class="inline-flex items-center justify-end group gap-0 -mr-3 cursor-pointer hover:text-primary"
        @click="showComingSoon"
    >
        <span class="transition-all group-hover:-translate-x-2">
            {{ $t('login.forgot_password') }}
        </span>
        <Icon
            icon="ph:arrow-right-bold"
            class="opacity-0 -translate-x-6 group-hover:-translate-x-1 group-hover:opacity-100 transition-all"
        />
    </div>
    <!-- </RouterLink> -->
</template>

<style lang="less" scoped></style>

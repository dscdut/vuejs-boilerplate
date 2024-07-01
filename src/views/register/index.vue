<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import { Modal } from 'ant-design-vue'
import type { RegisterRequest } from '@/api/auth/auth.dto'
import { omit } from 'lodash'
import { Form, FormItem, Input, Button } from 'ant-design-vue'
import { apiRegister } from '@/api/auth/auth.api'
import { useMutation } from '@tanstack/vue-query'
import { RoutePath } from '@/router'
import { useI18n } from 'vue-i18n'
import GotoLoginPageButton from './GotoLoginPageButton.vue'

const { t } = useI18n()

defineProps<{}>()
const auth = useAuthStore()
const router = useRouter()
if (auth?.isLoggedIn) {
    router.push(RoutePath.Home)
}

const registerForm = reactive<
    RegisterRequest & {
        passwordAgain: string
    }
>({
    name: '',
    email: '',
    password: '',
    passwordAgain: ''
})

const { mutate, isPending } = useMutation({
    mutationKey: ['register'],
    mutationFn: async () => {
        await apiRegister(omit(registerForm, 'passwordAgain'))
        Modal.success({
            title: t('register.alert.register_success'),
            content: t('register.alert.click_ok_to_direct_to_login_page')
        })
        router.push(RoutePath.Login)
    }
})

const onFinishFailed = (errInfo: any) => {
    // * Error will be handled by the AsyncErrorBoundary}
    // Modal.error({
    //     title: 'Đăng ký thất bại',
    //     content: errInfo
    // })
}
</script>

<template>
    <div id="register" class="my-auto">
        <!-- Title -->
        <h1 class="register__title font-black text-5xl mb-16">
            {{ $t('register.big_title') }}
        </h1>

        <!-- Register form -->
        <Form
            class="register__form"
            :model="registerForm"
            layout="vertical"
            @finish="mutate"
            @finishFailed="onFinishFailed"
        >
            <FormItem
                name="name"
                :rules="[{ required: true, message: $t('common.this_field_is_required') }]"
            >
                <Input
                    type="text"
                    size="large"
                    v-model:value="registerForm.name"
                    :placeholder="$t('register.form.name')"
                >
                    <template #prefix> <Icon icon="ph:user-bold" /> </template
                ></Input>
            </FormItem>
            <FormItem
                name="email"
                :rules="[{ required: true, message: $t('common.this_field_is_required') }]"
            >
                <Input
                    type="text"
                    size="large"
                    v-model:value="registerForm.email"
                    :placeholder="$t('register.form.email')"
                >
                    <template #prefix> <Icon icon="ph:envelope-simple-bold" /> </template
                ></Input>
            </FormItem>
            <FormItem
                name="password"
                :rules="[{ required: true, message: $t('common.this_field_is_required') }]"
            >
                <Input
                    type="password"
                    size="large"
                    v-model:value="registerForm.password"
                    :placeholder="$t('register.form.password')"
                >
                    <template #prefix> <Icon icon="ph:lock-simple-bold" /> </template
                ></Input>
            </FormItem>
            <FormItem
                name="passwordAgain"
                :rules="[{ required: true, message: $t('common.this_field_is_required') }]"
            >
                <Input
                    type="password"
                    size="large"
                    v-model:value="registerForm.passwordAgain"
                    :placeholder="$t('register.form.confirm_password')"
                >
                    <template #prefix> <Icon icon="ph:lock-simple-bold" /> </template
                ></Input>
            </FormItem>
            <FormItem>
                <Button
                    :loading="isPending"
                    size="large"
                    class="font-bold"
                    type="primary"
                    html-type="submit"
                    block
                >
                    {{ $t('register.form.submit_btn') }}
                </Button>
            </FormItem>
        </Form>

        <div class="flex flex-col mt-20">
            <span class="text-center text-[16px] mb-2 cursor-default">{{
                $t('register.login_reminder')
            }}</span>
            <GotoLoginPageButton />
        </div>
    </div>
</template>

<style lang="less" scoped></style>

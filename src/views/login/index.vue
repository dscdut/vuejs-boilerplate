<script setup lang="ts">
import type { LoginRequest } from '@/api/auth/auth.dto.ts'
import router, { RoutePath } from '@/router'
import { useAuthStore } from '@/stores/auth'
import { Icon } from '@iconify/vue'
import { useMutation } from '@tanstack/vue-query'
import { Button, Form, FormItem, Input } from 'ant-design-vue'
import { reactive } from 'vue'
import GotoForgotPasswordButton from './GotoForgotPasswordButton.vue'
import GotoRegisterPageButton from './GotoRegisterPageButton.vue'
import SSOButtons from './SSOButtons.vue'

const auth = useAuthStore()

const loginFormState = reactive<LoginRequest>({
    email: '',
    password: ''
})

if (auth.isLoggedIn) router.push(RoutePath.Home)

const { mutate, isPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: async () => {
        await auth.login(loginFormState)
        router.push(auth.returnUrl || RoutePath.Home)
    },
    throwOnError: true
})

const handleLoginFailed = (errInfo: any) => {
    // * Error will be handled by the AsyncErrorBoundary}
}
</script>

<template>
    <div id="login" class="my-auto w-full">
        <!-- Title -->
        <h1 class="login__title font-black text-5xl mb-16">
            {{ $t('login.big_title') }}
        </h1>

        <!-- Login form -->
        <Form
            class="login__form"
            :model="loginFormState"
            layout="vertical"
            @finish="mutate"
            @finish-failed="handleLoginFailed"
        >
            <!-- ---- -->
            <FormItem
                name="email"
                :rules="[{ required: true, message: $t('login.form.validation.email.required') }]"
            >
                <Input
                    type="text"
                    size="large"
                    v-model:value="loginFormState.email"
                    :placeholder="$t('login.form.email')"
                    auto-complete="off"
                >
                    <template #prefix> <Icon icon="ph:envelope-simple-bold" /> </template
                ></Input>
            </FormItem>

            <FormItem
                name="password"
                :rules="[
                    { required: true, message: $t('login.form.validation.password.required') }
                ]"
            >
                <Input
                    type="password"
                    size="large"
                    v-model:value="loginFormState.password"
                    :placeholder="$t('login.form.password')"
                    auto-complete="off"
                >
                    <template #prefix> <Icon icon="ph:lock-simple-bold" /> </template
                ></Input>
            </FormItem>

            <!-- ---- -->
            <div class="forgot-password mb-2 flex justify-end">
                <GotoForgotPasswordButton />
            </div>
            <FormItem>
                <Button
                    :loading="isPending"
                    size="large"
                    class="font-bold"
                    type="primary"
                    html-type="submit"
                    block
                >
                    {{ $t('login.form.submit_btn') }}
                </Button>
            </FormItem>
        </Form>

        <div class="login__suggest-register flex flex-col mt-20">
            <span class="text-center text-[16px] mb-2 cursor-default">
                {{ $t('login.register_reminder') }}
            </span>
            <GotoRegisterPageButton />
        </div>

        <div class="login__sso">
            <SSOButtons />
        </div>
    </div>
</template>

<style lang="less" scoped></style>

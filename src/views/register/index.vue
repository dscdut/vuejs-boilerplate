<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import { Modal } from 'ant-design-vue'
import type { RegisterRequest } from '@/api/auth/auth.dto'
import { omit } from 'lodash'
import { Form, FormItem, Input, Button } from 'ant-design-vue'
import { apiRegister } from '@/api/auth'
import { useMutation } from '@tanstack/vue-query'

defineProps<{}>()
const auth = useAuthStore()
const router = useRouter()
if (auth?.isLoggedIn) {
    // push back to home "/"
    router.push('/')
}

//handle form
const registerForm = reactive<
    RegisterRequest & {
        passwordAgain: string
    }
>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    passwordAgain: ''
})

const { mutate, isPending } = useMutation({
    mutationKey: ['register'],
    mutationFn: async () => {
        await apiRegister(omit(registerForm, 'passwordAgain'))
        Modal.success({
            title: 'Đăng ký thành công',
            content: 'Nhấn OK để chuyển đến trang đăng nhập'
        })
        router.push('/login')
    }
})

const onFinishFailed = (errInfo: any) => {
    Modal.error({
        title: 'Đăng ký thất bại',
        content: errInfo
    })
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
                name="firstName"
                :rules="[{ required: true, message: $t('common.this_field_is_required') }]"
            >
                <Input
                    type="text"
                    size="large"
                    v-model:value="registerForm.firstName"
                    :placeholder="$t('register.form.firstName')"
                >
                    <template #prefix> <Icon icon="ph:user-bold" /> </template
                ></Input>
            </FormItem>
            <FormItem
                name="name"
                :rules="[{ required: true, message: $t('common.this_field_is_required') }]"
            >
                <Input
                    type="text"
                    size="large"
                    v-model:value="registerForm.lastName"
                    :placeholder="$t('register.form.lastName')"
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

        <!-- Suggest sign in -->
        <div class="login__suggest-register flex flex-col mt-20">
            <span class="text-center text-[16px] mb-2 cursor-default">{{
                $t('register.login_reminder')
            }}</span>

            <RouterLink
                to="/login"
                class="h-10 rounded-lg font-bold w-full max-w-[336px] bg-white border-black border-2 flex justify-center items-center text-[16px] cursor-pointer hover:text-primary hover:border-primary transition-all duration-300 group"
            >
                <span class="transition-all translate-x-2 group-hover:-translate-x-2">{{
                    $t('register.to_login_page')
                }}</span>
                <Icon
                    icon="ph:arrow-right-bold"
                    class="opacity-0 -translate-x-6 group-hover:-translate-x-1 group-hover:opacity-100 transition-all"
                />
            </RouterLink>
        </div>
    </div>
</template>

<style lang="less" scoped></style>

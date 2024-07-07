<script lang="ts" setup>
import LanguageChanger from '@/components/LanguageChanger.vue'
import router, { RoutePath } from '@/router'
import { useAuthStore } from '@/stores/auth'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import { Icon } from '@iconify/vue'
import { Button, Menu, MenuItem, Modal, SubMenu } from 'ant-design-vue'
import type { SelectInfo } from 'ant-design-vue/es/menu/src/interface'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const auth = useAuthStore()
const { t } = useI18n()

// selected if current route name is equal to key or parent route path is equal to key
const selectedKeys = ref<string[]>([
    router.currentRoute.value.name as string,
    ...router.currentRoute.value.matched.map((route) => route.path as string)
])
const collapsed = ref<boolean>(false)
const handleCollapse = () => {
    collapsed.value = !collapsed.value
}

const handleSelect = (event: SelectInfo) => {
    if (!event.key) return

    router.push(String(event.key))
}

const handleLogout = () => {
    Modal.confirm({
        title: t('admin.sidebar.logout.prompt'),
        centered: true,
        okText: t('admin.sidebar.logout.ok'),
        cancelText: t('admin.sidebar.logout.cancel'),
        onOk: async () => {
            await auth.logout()
            window.location.replace('/')
        }
    })
}
</script>
<template>
    <!-- ! MENU ITEM KEY MUST BE PATH -->
    <div class="gap-4 flex flex-col bg-white z-[666] border-r drop-shadow">
        <Button type="primary" block class="mb-4 rounded-none" @click="handleCollapse">
            <template #icon>
                <MenuUnfoldOutlined v-if="collapsed" />
                <MenuFoldOutlined v-else />
            </template>
        </Button>
        <div class="pl-6 mb-6">
            <LanguageChanger class-name="w-48" />
        </div>

        <div
            class="flex flex-col gap-3 mb-12"
            :class="{ 'pl-6': !collapsed, 'items-center': collapsed }"
        >
            <div
                class="avatar aspect-square overflow-hidden rounded-lg"
                :class="{ 'w-24': !collapsed, 'w-12': collapsed }"
            >
                <img
                    src="/images/admin-avatar-example.jpg"
                    class="w-full h-full object-cover"
                    alt="#"
                />
            </div>
            <div v-if="!collapsed">
                <div class="font-bold text-lg">Admin</div>
                <div class="text-gray-500">admin@example.tech</div>
            </div>
        </div>
        <Menu
            :style="{ width: collapsed ? '64px' : '256px' }"
            id="admin-side-menu"
            @select="handleSelect"
            v-model:selectedKeys="selectedKeys"
            theme="light"
            mode="inline"
            :inline-collapsed="collapsed"
        >
            <SubMenu key="tab1">
                <template #icon><Icon icon="ph:tag-duotone" /></template>
                <template #title>Tab 1</template>
                <MenuItem :key="RoutePath.AdminTab1Sub1"> Tab1.1 </MenuItem>
                <MenuItem :key="RoutePath.AdminTab1Sub2"> Tab1.2 </MenuItem>
            </SubMenu>
            <MenuItem :key="RoutePath.AdminTab2">
                <template #icon>
                    <Icon icon="ph:package-bold" />
                </template>
                Tab 2
            </MenuItem>
            <MenuItem :key="RoutePath.AdminTab3">
                <template #icon>
                    <Icon icon="ph:user-bold" />
                </template>
                Tab 3
            </MenuItem>
        </Menu>

        <Menu
            :style="{
                width: collapsed ? '64px' : '256px',
                marginTop: 'auto',
                marginBottom: '2rem'
            }"
            id="admin-side-logout"
            mode="inline"
            theme="light"
            :inline-collapsed="collapsed"
            :selected-keys="[]"
        >
            <MenuItem key="home" @click="$router.push(RoutePath.Home)">
                <template #icon> <Icon icon="ph:house" /> </template>
                {{ $t('admin.sidebar.back_home.title') }}
            </MenuItem>
            <MenuItem key="logout" @click="handleLogout">
                <template #icon> <Icon icon="ph:sign-out" /> </template>
                {{ $t('admin.sidebar.logout.title') }}
            </MenuItem>
        </Menu>
    </div>
</template>

<style lang="less" scoped>
* {
    transition: all ease 0.2s !important;
}
</style>

import { $post } from '@/api'
import {
    type LoginRequest,
    type LoginResponse,
    type RefreshTokenRequest,
    type RefreshTokenResponse,
    type RegisterRequest,
    type RegisterResponse
} from './auth.dto'

export async function apiLogin(payload: LoginRequest) {
    return await $post<LoginResponse>('/auth/login', payload).then((resp) => {
        return resp.data
    })
}

export async function apiLogout() {
    await $post('/auth/logout')
}

export async function apiRegister(payload: RegisterRequest) {
    await $post<RegisterResponse>('/auth/register', payload).then((resp) => {
        return resp.data
    })
}

export async function apiRefreshToken(payload: RefreshTokenRequest) {
    return await $post<RefreshTokenResponse>('/auth/refresh', payload).then((resp) => {
        return resp.data
    })
}

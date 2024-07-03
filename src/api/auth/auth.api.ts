import { $post } from '@/api'
import { mockApiIAmAdmin, mockApiLogin, mockApiRefreshToken } from '@/helpers/mockApi'
import {
    type LoginRequest,
    type RefreshTokenRequest,
    type RegisterRequest,
    type RegisterResponse
} from './auth.dto'

export async function apiLogin(payload: LoginRequest) {
    // TODO: Please uncomment the code below and remove the mockApiLogin function
    // return await $post<LoginResponse>('/auth/login/', payload).then((resp) => {
    //     return resp.data
    // })

    return await mockApiLogin(payload)
}

export async function apiLogout() {
    // TODO: Please uncomment the line below
    // await $post('/auth/logout/')
}

export async function apiRegister(payload: RegisterRequest) {
    await $post<RegisterResponse>('/auth/register/', payload).then((resp) => {
        return resp.data
    })
}

export async function apiRefreshToken(payload: RefreshTokenRequest) {
    // TODO: Please uncomment the code below and remove the mockApiRefreshToken function
    // return await $post<RefreshTokenResponse>('/auth/refresh/', payload).then((resp) => {
    //     return resp.data
    // })

    return await mockApiRefreshToken(payload)
}

export async function apiIAmAdmin() {
    // TODO: add api call to check if user is admin

    // Mock implementation
    const accessToken = localStorage.getItem('accessToken')
    if (!accessToken) {
        return Promise.reject({ message: 'Unauthorize' })
    }
    return await mockApiIAmAdmin(accessToken)
}

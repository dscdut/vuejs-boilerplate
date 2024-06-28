/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia'
import { type LoginRequest } from '@/api/auth/auth.dto'
import { jwtDecode } from 'jwt-decode'
import router from '@/router'
import { apiLogin, apiRefreshToken } from '@/api/auth'

interface AuthStoreState {
    accessToken?: string
    refreshToken?: string
    payload?: {
        exp: number // unix timestamp: 1633835614
        iat: number // unix timestamp: 1633832014
        user_id: number
        jti: string // jwt unique identifier: 1e7b7b7b-7b7b-4b7b-8b7b-7b7b7b7b7b7b
    }
    returnUrl?: string
    refreshTokenTimeout?: ReturnType<typeof setTimeout>
}

export const useAuthStore = defineStore({
    id: 'auth',
    state: (): AuthStoreState => ({
        accessToken: undefined,
        refreshToken: undefined,
        payload: undefined,
        returnUrl: undefined,
        refreshTokenTimeout: undefined
    }),
    getters: {
        isLoggedIn(state) {
            return !!state?.accessToken
        }
    },
    actions: {
        async login(payload: LoginRequest) {
            const loginResp = await apiLogin(payload)

            this.saveAuthData({
                accessToken: loginResp.accessToken,
                refreshToken: loginResp.refreshToken,
                payload: jwtDecode(loginResp.accessToken)
            })

            router.push(this.returnUrl || '/')
        },
        async logout() {
            // revoke token, stop refresh timer, and clear local storage
            // TODO: Call API to revoke token
            this.stopRefreshTokenTimer()
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            this.accessToken = undefined
            this.refreshToken = undefined
            this.payload = undefined
            router.push('/login')
        },
        //
        saveAuthData(data: { accessToken: string; refreshToken?: string; payload?: any }) {
            if (data.accessToken) {
                this.accessToken = data.accessToken
                this.startRefreshTokenTimer()
                localStorage.setItem('accessToken', data.accessToken)
            }
            if (data.refreshToken) {
                this.refreshToken = data.refreshToken
                localStorage.setItem('refreshToken', data.refreshToken)
            }

            if (data.payload) this.payload = data.payload

            this.startRefreshTokenTimer()
        },

        async doPersistAuthData() {
            const accessToken = localStorage.getItem('accessToken')
            const refreshToken = localStorage.getItem('refreshToken')

            if (!accessToken || !refreshToken) {
                return
            }

            this.saveAuthData({
                accessToken,
                refreshToken,
                payload: jwtDecode(accessToken)
            })
        },
        async doRefreshToken() {
            if (!this.refreshToken) {
                return
            }

            const respData = await apiRefreshToken({ refreshToken: this.refreshToken })
            if (!respData?.accessToken) {
                Promise.reject('Something went wrong')
            }

            this.saveAuthData({
                accessToken: respData.accessToken
            })
        },
        startRefreshTokenTimer() {
            if (!this.payload) {
                return
            }
            const expires = new Date(this.payload.exp * 1000)
            const timeout = expires.getTime() - Date.now() - 60 * 1000
            this.refreshTokenTimeout = setTimeout(this.doRefreshToken, timeout)
        },
        stopRefreshTokenTimer() {
            if (!this.refreshTokenTimeout) {
                return
            }
            clearTimeout(this.refreshTokenTimeout)
        }
    }
})

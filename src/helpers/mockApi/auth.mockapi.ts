import { sleep } from '@/utils'
import { createMockJwt } from './jwt.mockapi'

const ROLE = {
    ADMIN: 888,
    USER: 8
}

const USERS = [
    {
        id: 1,
        email: 'admin@example.com',
        password: 'very_strong_password_123A@',
        role: ROLE.ADMIN
    },
    {
        id: 2,
        email: 'user@example.com',
        password: 'very_strong_password_123A@',
        role: ROLE.USER
    }
]

interface MockApiLoginRequest {
    email: string
    password: string
}
interface MockApiRegisterRequest {
    email: string
    password: string
}
interface MockApiRefreshTokenRequest {
    refreshToken: string
}

export async function mockApiLogin(payload: MockApiLoginRequest) {
    await sleep(1000)
    const user = USERS.find((u) => u.email === payload.email && u.password === payload.password)
    if (!user) {
        return Promise.reject({ message: 'Invalid Credentials' })
    }

    const newAccessToken = createMockJwt({
        user_id: user.id,
        type: 'access'
    })

    const newRefreshToken = createMockJwt(
        {
            user_id: user.id,
            type: 'refresh'
        },
        3600 * 24 * 7
    )

    return {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken
    }
}

export async function mockApiRegister(payload: MockApiRegisterRequest) {
    await sleep(1000)
    const user = USERS.find((u) => u.email === payload.email)

    if (user) {
        return Promise.reject({ message: 'Email already exists' })
    }

    const newUser = {
        id: USERS.length + 1,
        email: payload.email,
        password: payload.password,
        role: ROLE.USER
    }

    USERS.push(newUser)

    return {
        id: newUser.id,
        email: newUser.email,
        role: newUser.role
    }
}

export async function mockApiRefreshToken(payload: MockApiRefreshTokenRequest) {
    try {
        await sleep(1000)
        // decode the refresh token and get the user_id
        const decodedPayload = JSON.parse(atob(payload.refreshToken.split('.')[1]))

        const { user_id } = decodedPayload

        return {
            accessToken: createMockJwt({
                user_id,
                type: 'access'
            })
        }
    } catch (err) {
        return Promise.reject({ message: 'Invalid refresh token' })
    }
}

export async function mockApiGetMe(accessToken: string) {
    try {
        await sleep(1000)
        const decodedPayload = JSON.parse(atob(accessToken.split('.')[1]))
        const user = USERS.find((u) => u.id === decodedPayload.user_id)

        if (!user) {
            return Promise.reject({ message: 'User not found' })
        }

        return {
            id: user.id,
            email: user.email,
            role: user.role
        }
    } catch (err) {
        return Promise.reject({ message: 'Invalid access token' })
    }
}

export async function mockApiLogout() {
    await sleep(1000)
}

export async function mockApiIAmAdmin(accessToken: string) {
    try {
        await sleep(1000)
        const decodedPayload = JSON.parse(atob(accessToken.split('.')[1]))
        console.log(':::mockApiIAmAdmin -> decodedPayload', decodedPayload)

        const user = USERS.find((u) => u.id === decodedPayload.user_id)

        if (!user) {
            return Promise.reject({ message: 'User not found' })
        }

        return {
            isAdmin: user.role === ROLE.ADMIN
        }
    } catch (err) {
        return Promise.reject({ message: 'Invalid access token' })
    }
}

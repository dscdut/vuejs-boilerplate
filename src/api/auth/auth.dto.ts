/** LOGIN */
export type LoginRequest = {
    email: string
    password: string
}

export type LoginResponse = {
    refreshToken: string
    accessToken: string
}

/** REFRESH TOKEN */

export type RefreshTokenRequest = {
    refreshToken: string
}

export type RefreshTokenResponse = {
    accessToken: string
}

/** REGISTER */

export type RegisterRequest = {
    email: string
    name: string
    password: string
}

export type RegisterResponse = {
    //
}

/** I AM ADMIN */

export type IAmAdminResponse = {
    isAdmin: boolean
}

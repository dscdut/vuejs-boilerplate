/** LOGIN */
export type LoginRequest = {
    email: string
    password: string
}

export type LoginResponse = {
    refresh: string
    access: string
}

/** REFRESH TOKEN */

export type RefreshTokenRequest = {
    refresh: string
}

export type RefreshTokenResponse = {
    access: string
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

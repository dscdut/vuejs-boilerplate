import { unix } from '@/utils'
import { v4 as uuidv4 } from 'uuid'

export const createMockJwt = (payload: Record<string, any>, expiredIn: number = 3600) => {
    payload['iat'] = unix()
    payload['exp'] = unix() + expiredIn
    payload['token_type'] = payload['token_type'] || 'access'
    payload['jti'] = uuidv4()

    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
    const encodedPayload = btoa(JSON.stringify(payload))
    const signature = `3lt937LDygVxQZD9_HrDwxroPABx_vPVLHYgF8iwtrQ`

    return `${header}.${encodedPayload}.${signature}`
}

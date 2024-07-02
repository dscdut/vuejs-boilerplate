import { sleep, unix } from '@/utils/common'
import { v4 as uuidv4 } from 'uuid'

export async function getMockJwt(params: { payload: Record<string, any>; expiredIn: number }) {
    const { expiredIn = 3600, payload } = params
    await sleep(1000)

    payload['iat'] = unix()
    payload['exp'] = unix() + expiredIn
    payload['token_type'] = payload['token_type'] || 'access'
    payload['jti'] = uuidv4()

    const header = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    const encodedPayload = btoa(JSON.stringify(params.payload))
    const signature = '7Avy5bYfGoUlcit8yUVOPIbEyx6wthdyRnQJdx6VHR4'

    return `${header}.${encodedPayload}.${signature}`
}

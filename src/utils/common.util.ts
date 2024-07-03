export async function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export function unix() {
    return Math.floor(Date.now() / 1000)
}

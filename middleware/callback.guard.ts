export default defineNuxtRouteMiddleware(async (_to, _from) => {
    if (import.meta.server) return

    const accessToken = _to.query.accessToken as string | undefined
    const refreshToken = _to.query.refreshToken as string | undefined

    console.log(`access: ${accessToken}`)
    console.log(`refresh: ${refreshToken}`)

    localStorage.setItem('access-token', accessToken ?? '')
    localStorage.setItem('refresh-token', refreshToken ?? '')

    return navigateTo('/profile')
})
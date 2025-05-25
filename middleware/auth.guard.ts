export default defineNuxtRouteMiddleware(async (_to, _from) => {
    if (import.meta.server) return

    const accessToken = localStorage.getItem('access-token')
    console.log('Loaded from localStorage access:', accessToken)
    const refreshToken = localStorage.getItem('refresh-token')
    console.log('Loaded from localStorage refresh:', refreshToken)

    const res = await confirmAccessToken(accessToken ?? '', refreshToken ?? '')
    console.log(`confirm result: ${JSON.stringify(res)}`)

    localStorage.setItem('access-token', res.accessToken)
    localStorage.setItem('refresh-token', res.refreshToken)

    if (res.ok) {
        // return navigateTo(_to.fullPath)
        return
    }

    return navigateTo('/auth/login') 
})
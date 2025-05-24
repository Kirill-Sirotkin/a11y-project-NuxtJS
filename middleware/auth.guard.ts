export default defineNuxtRouteMiddleware(async (_to, _from) => {
    
    if (import.meta.server) return
    if (import.meta.client) console.log('client')

    const storedValue = localStorage.getItem('access-token')
    console.log('Loaded from localStorage access:', storedValue)
    const storedValue2 = localStorage.getItem('refresh-token')
    console.log('Loaded from localStorage refresh:', storedValue2)

    if (!storedValue || !storedValue2) {
        console.log('No access or refresh token found')
        return navigateTo('/')
    }

    await new Promise((resolve) => {
        setTimeout(() => {
            console.log('Timeout finished')
            resolve(true)
        }, 2000)
    })
    return
})
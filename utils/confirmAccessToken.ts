/* eslint-disable @typescript-eslint/no-unused-vars */
import type { AccessTokenConfirmResult } from "~/models/AccessTokenConfirmResult";

export default async function (accessToken: string, refreshToken: string): Promise<AccessTokenConfirmResult> {
    try {
        const res = await $fetch('http://localhost:3001/auth/confirm-token', {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        })

        if (res !== 'true') {
            return { ok: false, accessToken: '', refreshToken: '' }
        }

        return { ok: true, accessToken, refreshToken}
    } catch (err) {
        try {
            const res: { accessToken: string, refreshToken: string } = await $fetch('http://localhost:3001/auth/refresh', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${refreshToken}`,
                }
            })
            return { ok: true, accessToken: res.accessToken, refreshToken: res.refreshToken}
        } catch (err) {
            return { ok: false, accessToken: '', refreshToken: '' }
        }
    }
}
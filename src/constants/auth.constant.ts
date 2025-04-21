const ACCESS_TOKEN = 'accessToken'
export const USER = 'user'

export const setAccessToken = (token: string) => {
    localStorage.setItem(ACCESS_TOKEN, token)
}

export const getAccessToken = () => {
    return localStorage.getItem(ACCESS_TOKEN)
}

export const removeAccessToken = () => {
    localStorage.removeItem(ACCESS_TOKEN)
}

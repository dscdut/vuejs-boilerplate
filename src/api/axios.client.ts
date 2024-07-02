/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios'

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

axiosClient.interceptors.request.use((config) => {
    config.headers['Content-Type'] = 'application/json'
    config.headers['Access-Control-Allow-Origin'] = '*'
    // X-CSRFToken: FGWp2aF83aGv8UNqTUzKom4RwMfsYo5kSqzdHahcsi495vgsyYnzBEgY9OohXcWr

    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
})

axiosClient.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        const resp = error.response as any
        const respErrorCode = resp?.status ?? 500
        if (respErrorCode === 401) {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            window.location.href = '/login'
        }
        const respErrorMessage = resp?.data?.error ?? resp?.data?.message ?? 'UNKNOWN_ERROR'

        throw new Error(respErrorMessage)
    }
)

function $post<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
): Promise<R> {
    try {
        return axiosClient.post<T, R>(url, data, config)
    } catch (error) {
        return Promise.reject(error)
    }
}

function $get<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
): Promise<R> {
    try {
        return axiosClient.get<T, R>(url, config)
    } catch (error) {
        return Promise.reject(error)
    }
}

function $put<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
): Promise<R> {
    try {
        return axiosClient.put<T, R>(url, data, config)
    } catch (error) {
        return Promise.reject(error)
    }
}

function $patch<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
): Promise<R> {
    try {
        return axiosClient.patch<T, R>(url, data, config)
    } catch (error) {
        return Promise.reject(error)
    }
}

function $delete<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
): Promise<R> {
    try {
        return axiosClient.delete<T, R>(url, config)
    } catch (error) {
        return Promise.reject(error)
    }
}

export { $delete, $get, $patch, $post, $put }

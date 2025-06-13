import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { store } from "@/store/store";
import { logout } from "@/store/features/auth/authSlice";
import { redirect } from "next/navigation";

const api: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const axiosAdmin: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Attach token
axiosAdmin.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const state = store.getState();
        const token: string | null = state.auth?.token;
        if (!token) {
            return Promise.reject(new Error("Unauthorized: No token found"));
        }
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => Promise.reject(error)
);

// Catch 401 and log out
axiosAdmin.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            localStorage.clear();
            redirect("/sign-in");
        }
        return Promise.reject(error);
    }
);

export default api;

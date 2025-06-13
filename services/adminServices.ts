import api, { axiosAdmin } from "@/lib/api";
import {
    setIsLoading,
    setProfileData,
} from "@/store/features/global/globalSlice";
import { AppDispatch } from "@/store/store";
import toast from "react-hot-toast";

// Types
type ApiMethod = 'get' | 'post' | 'put' | 'delete';
type ApiResponse<T = any> = {
    data?: T & { success?: boolean };
    status?: number;
};
type ErrorResponse = {
    message?: string;
    status?: number;
    response?: { data?: { detail?: string } };
};

// Generic API handler that centralizes common logic
const apiHandler = async <T = any>(
    dispatch: AppDispatch,
    method: ApiMethod,
    endpoint: string,
    options: {
        data?: any;
        params?: Record<string, string | undefined>;
        successMessage?: string;
        errorMessage?: string;
        onSuccess?: (data: T) => void;
        onError?: (error: ErrorResponse) => void;
        isFormData?: boolean;
    }
): Promise<T | null> => {
    const {
        data,
        params,
        successMessage,
        errorMessage = "Something went wrong",
        onSuccess,
        onError,
        isFormData = false,
    } = options;

    try {
        dispatch(setIsLoading(true));

        // Build URL with query parameters if needed
        let url = endpoint;
        if (params) {
            const queryParams = Object.entries(params)
                .filter(([_, value]) => value !== undefined)
                .map(([key, value]) => `${key}=${value}`)
                .join('&');

            url = queryParams ? `${endpoint}?${queryParams}` : endpoint;
        }

        // Configure request
        const config: any = {};
        if (isFormData) {
            config.headers = { "Content-Type": "multipart/form-data" };
        }

        // Make API call
        let response: ApiResponse<T>;

        switch (method) {
            case 'get':
                response = await axiosAdmin.get(url, config);
                break;
            case 'post':
                response = await axiosAdmin.post(url, data, config);
                break;
            case 'put':
                response = await axiosAdmin.put(url, data, config);
                break;
            case 'delete':
                response = await axiosAdmin.delete(url, config);
                break;
        }

        // Handle success
        if (response?.status === 200 || response?.data?.success || response?.status === 201) {
            if (successMessage) {
                toast.success(successMessage);
            }

            if (onSuccess && response.data) {
                onSuccess(response.data);
            }

            return response.data || null;
        }

        return null;
    } catch (error: any) {
        // Handle 404 differently in some cases
        if (error?.status === 404) {
            if (error?.response?.data?.detail) {
                toast.success(error.response.data.detail);
            }

            if (onError) {
                onError(error);
            }
        } if (error?.status === 409) {
            if (error?.response?.data?.detail) {
                toast.success(error.response.data.detail);
            }

            if (onError) {
                onError(error);
            }
        } else {
            // Handle other errors
            toast.error(error?.message || errorMessage);
            if (onError) {
                onError(error);
            }
        }

        return null;
    } finally {
        dispatch(setIsLoading(false));
    }
};

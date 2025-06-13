import toast from "react-hot-toast";
import { FormikValues } from "formik";
import { AppDispatch } from "@/store/store";
import api from "@/lib/api";
import { setIsLoading } from "@/store/features/global/globalSlice";
import { setUser } from "@/store/features/auth/authSlice";
import { SignUpFormValues, VerifyCodeAfterSignUpProps } from "@/utils/types";

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

        // console.log(url, data, method, config, "rdler");
        switch (method) {
            case 'get':
                response = await api.get(url, config);
                break;
            case 'post':
                response = await api.post(url, data, config);
                break;
            case 'put':
                response = await api.put(url, data, config);
                break;
            case 'delete':
                response = await api.delete(url, config);
                break;
        }
        console.log(response, "response api handler");
        // Handle success
        if (response?.status === 200 || response?.data?.success || response?.status === 201) {
            // @ts-ignore
            toast.success(response?.data?.message || successMessage);

            if (onSuccess && response.data) {
                onSuccess(response.data);
            }

            return response.data || null;
        }

        return null;
    } catch (error: any) {
        // Handle 404 differently in some cases
        if (error?.status === 404) {
            if (error?.response?.data?.message) {
                toast.error(error.response.data.message);
            }

            if (onError) {
                onError(error);
            }
        } if (error?.status === 409) {
            if (error?.response?.data?.message) {
                toast.error(error.response.data.message);
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

// ============= Auth Screens & Logout =============

export const handleSignUp = async (dispatch: AppDispatch, values?: SignUpFormValues) => {
    return apiHandler(dispatch, 'post', '/auth/signup', {
        data: values,
        successMessage: "User has signed up successfully!",
        onSuccess: (data) => {
            // localStorage.setItem("user", JSON.stringify(data));
            dispatch(setUser(data));
        },
        onError: () => dispatch(setUser(null))
    });
};

export const handleVerifyCode = async (dispatch: AppDispatch, values?: any) => {
    return apiHandler(dispatch, 'get', '/auth/verify', {
        params: values,
        onSuccess: (data) => {
            // localStorage.setItem("user", JSON.stringify(data));
            dispatch(setUser(data));
        },
        onError: () => dispatch(setUser(null))
    });
};

export const handleSignIn = async (dispatch: AppDispatch, values?: FormikValues) => {
    return apiHandler(dispatch, 'post', '/auth/login', {
        data: values,
        onSuccess: (data) => {
            // localStorage.setItem("user", JSON.stringify(data));
            dispatch(setUser(data))
        },
        onError: () => dispatch(setUser(null))
    });
};

export const logoutAPI = async (dispatch: AppDispatch) => {
    return apiHandler(dispatch, 'get', '/auth/logout', {
        onSuccess: () => {
            dispatch(setUser(null))
            localStorage.clear()
        }
    });
}

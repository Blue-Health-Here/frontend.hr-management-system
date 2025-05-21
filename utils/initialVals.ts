import { ForgotPasswordFormValues, SignInFormValues, SignUpFormValues } from "./types";

export const signInInitialVals: SignInFormValues = {
    email: "",
    password: "",
    rememberMe: false,
};

export const signUpInitialVals: SignUpFormValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
};

export const forgotPasswordInitialVals: ForgotPasswordFormValues = {
    email: "",
};

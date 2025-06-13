import { ForgotPasswordFormValues, SignInFormValues, SignUpFormValues } from "./types";

export const signInInitialVals: SignInFormValues = {
    userName: "",
    password: "",
    rememberMe: false,
};

export const signUpInitialVals: SignUpFormValues = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
};

export const forgotPasswordInitialVals: ForgotPasswordFormValues = {
    email: "",
};

"use client";
import { signInInitialVals } from "@/utils/initialVals";
import { SignInFormValues } from "@/utils/types";
import { signInValidationSchema } from "@/utils/validationSchema";
import { Form, Formik } from "formik";
import InputField from "../common/form/InputField";
import { Eye, EyeOff, Mail } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Button from "../common/Button";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { handleSignIn } from "@/services/authServices";

export default function SignInForm() {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleSubmit = async (values: SignInFormValues) => {
        const payload = { ...values };

        const response = await handleSignIn(dispatch, payload);
        if (response && response?.success) {
            if (response.result.role.code === "companyAdmin") router.push("/admin/dashboard");
            else if (response.result.role.code === "employee") router.push("/employee/dashboard");
        }
    };
    
    return (
        <>
            <Image src="/logo.png" alt="logo" width={150} height={60} className="pt-2 md:pt-6 lg:pt-10" />
            <div className="flex-grow flex flex-col justify-center items-center mx-auto w-full max-w-md space-y-8">
                <div className="text-center flex flex-col gap-4 items-center">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold ">
                        Sign In
                    </h1>
                    <p className="text-secondary-dark-gray text-sm md:text-base">
                        Please enter your details to sign in
                    </p>
                </div>
                <Formik
                    initialValues={signInInitialVals}
                    validationSchema={signInValidationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values, setFieldValue }) => (
                        <Form className="space-y-4 w-full">
                            <InputField
                                name="userName"
                                type="text"
                                label="Username"
                                icon={<Mail className="h-4 w-4 text-black" />}
                            />

                            <InputField
                                name="password"
                                type={showPassword ? "text" : "password"}
                                label="Password"
                                icon={
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="focus:outline-none"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4 text-quaternary-dark-gray" />
                                        ) : (
                                            <Eye className="h-4 w-4 text-quaternary-dark-gray" />
                                        )}
                                    </button>
                                }
                            />
                            <div className="flex items-start justify-between mb-6">
                                {/* <div className="flex items-center">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="rememberMe"
                                            name="rememberMe"
                                            type="checkbox"
                                            checked={values.rememberMe}
                                            onChange={(e) =>
                                                setFieldValue("rememberMe", e.target.checked)
                                            }
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                                        />
                                    </div>
                                    <label
                                        htmlFor="rememberMe"
                                        className="ms-2 text-xs md:text-sm font-normal"
                                    >
                                        Remember Me
                                    </label>
                                </div> */}
                                <Link
                                    href="/forgot-password"
                                    className="text-xs md:text-sm text-primary-navy-blue hover:underline"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <Button type="submit" label=" Sign In"></Button>
                        </Form>
                    )}
                </Formik>
                <p className="text-center text-xs md:text-sm text-primary-light-gray">
                    Don't have an account? <Link href="/sign-up" className="text-xs md:text-sm text-primary-navy-blue">Create Account</Link>
                </p>
                <div className="flex gap-2 md:gap-4 flex-wrap justify-center">
                    <button className="flex items-center justify-center w-20 md:w-24 lg:w-28 xl:w-32 h-14 bg-white rounded-lg border-theme">
                        <Image src="/google-icon.svg" alt="Google icon" width={24} height={24} />
                    </button>
                    <button className="flex items-center justify-center w-20 md:w-24 lg:w-28 xl:w-32 h-14 bg-white rounded-lg border-theme">
                        <Image src="/facebook-icon.svg" alt="Facebook icon" width={24} height={24} />
                    </button>
                    <button className="flex items-center justify-center w-20 md:w-24 lg:w-28 xl:w-32 h-14 bg-white rounded-lg border-theme">
                        <Image src="/apple-icon.svg" alt="Apple icon" width={24} height={24} />
                    </button>
                </div>
            </div>

        </>
    )
}
"use client";
import { signInInitialVals } from "@/utils/initialVals";
import { SignInFormValues } from "@/utils/types";
import { signInValidationSchema } from "@/utils/validationSchema";
import { Form, Formik } from "formik";
import InputField from "../common/form/InputField";
import { Mail, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Button from "../common/Button";

export default function SignInForm() {
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = (values: SignInFormValues) => {
        console.log("Form submitted:", values);
    };
    return (
        <>
            <h1 className="text-green-600 text-3xl font-bold">SmartHR</h1>

            <div className="flex-grow flex flex-col justify-center items-center w-full max-w-md mx-auto">
                <div className="mb-8 text-center flex flex-col items-center">
                    <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                        <div className="absolute w-20 h-12 bg-green-700 transform -rotate-45 translate-x-2 translate-y-4 z-0" />
                        <div className="absolute w-20 h-12 bg-green-500 transform -rotate-45 z-10" />
                    </div>
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary-black mb-1">
                        Sign In
                    </h1>
                    <p className="text-secondary-black text-sm md:text-base">
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
                                            <EyeOff className="h-4 w-4 text-black" />
                                        ) : (
                                            <Eye className="h-4 w-4 text-black" />
                                        )}
                                    </button>
                                }
                            />
                            {/* <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center">
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
                                        className="ms-2 text-sm text-gray-500"
                                    >
                                        Remember Me
                                    </label>
                                </div>
                                <Link
                                    href="/forgot-password"
                                    className="text-xs md:text-sm text-[#e70d0d] hover:underline"
                                >
                                    Forgot password?
                                </Link>
                            </div> */}
                            <Button type="submit" label=" Sign In"></Button>
                        </Form>
                    )}
                </Formik>
            </div>

            <p className="text-center text-gray-500">
                New on our platform? <Link href="/sign-up" className="text-black font-semibold">Register Account</Link>
            </p>
        </>
    )
}
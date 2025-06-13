"use client";
import { signUpInitialVals } from "@/utils/initialVals";
import { SignUpFormValues } from "@/utils/types";
import { signUpValidationSchema } from "@/utils/validationSchema";
import { Form, Formik } from "formik";
import { useState } from "react";
import InputField from "../common/form/InputField";
import { Eye, EyeOff, Mail, User } from "lucide-react";
import Link from "next/link";
import Button from "../common/Button";
import Image from "next/image";
import { handleSignUp } from "@/services/authServices";
import { useDispatch } from "react-redux";
import { redirect, useRouter } from "next/navigation";

export default function SignUpForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleSubmit = async (values: SignUpFormValues) => {
        const payload = { ...values };
        delete payload.confirmPassword;
        delete payload.agreeTerms;

        const response = await handleSignUp(dispatch, payload);
        if (response && response?.success) {
            router.push("/verify-code");
        }
    };

    return (
        <>
            <Image src="/logo.png" alt="logo" width={150} height={60} className="pt-10" />
            <div className="flex flex-col items-center w-full max-w-[650px] mx-auto flex-1 justify-center">
                <div className="mb-6 text-center flex flex-col items-center">
                    <h1 className="text-xl md:text-2xl font-semibold text-primary-black mb-1">
                        Create an account
                    </h1>
                    <p className="text-secondary-black text-sm md:text-base">
                        Please enter your details to sign up
                    </p>
                </div>

                <div className="w-full">
                    <Formik
                        initialValues={signUpInitialVals}
                        validationSchema={signUpValidationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values, setFieldValue }) => (
                            <Form className="space-y-3 w-full">
                                <div className="flex gap-4 items-center flex-wrap">
                                    <InputField
                                        name="firstName"
                                        label="First Name"
                                        icon={<User className="h-4 w-4 text-black" />}
                                        className="flex-1"
                                    />

                                    <InputField
                                        name="lastName"
                                        label="Last Name"
                                        icon={<User className="h-4 w-4 text-black" />}
                                        className="flex-1"
                                    />
                                </div>
                                <div className="flex gap-4 items-center flex-wrap">
                                    <InputField
                                        name="userName"
                                        label="Username"
                                        icon={<User className="h-4 w-4 text-black" />}
                                        className="flex-1"
                                    />

                                    <InputField
                                        name="email"
                                        type="email"
                                        label="Email Address"
                                        icon={<Mail className="h-4 w-4 text-black" />}
                                        className="flex-1"
                                    />
                                </div>
                                <div className="flex gap-4 items-center flex-wrap">
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
                                        className="flex-1"
                                    />

                                    <InputField
                                        name="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        label="Confirm Password"
                                        icon={
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowConfirmPassword(!showConfirmPassword)
                                                }
                                                className="focus:outline-none"
                                            >
                                                {showConfirmPassword ? (
                                                    <EyeOff className="h-4 w-4 text-black" />
                                                ) : (
                                                    <Eye className="h-4 w-4 text-black" />
                                                )}
                                            </button>
                                        }
                                        className="flex-1"
                                    />
                                </div>
                                {/* <div className="flex items-start mb-6">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="agreeTerms"
                                            name="agreeTerms"
                                            type="checkbox"
                                            checked={values.agreeTerms}
                                            onChange={(e) =>
                                                setFieldValue("agreeTerms", e.target.checked)
                                            }
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                                            required
                                        />
                                    </div>
                                    <label
                                        htmlFor="agreeTerms"
                                        className="ms-2 text-xs sm:text-sm text-gray-500"
                                    >
                                        Agree to{" "}
                                        <Link
                                            href="#"
                                            className="text-[#e70d0d] hover:underline"
                                        >
                                            Terms
                                        </Link>{" "}
                                        <span className="text-[#e70d0d]">and</span>{" "}
                                        <Link
                                            href="#"
                                            className="text-[#e70d0d] hover:underline"
                                        >
                                            Privacy
                                        </Link>
                                    </label>
                                </div> */}

                                <Button type="submit" label="Sign Up" className="mt-4" />
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>

            <p className="text-center text-gray-500">
                Already have an account? <Link href="/sign-in" className="text-black font-semibold">Sign in</Link>
            </p>
        </>
    )
}


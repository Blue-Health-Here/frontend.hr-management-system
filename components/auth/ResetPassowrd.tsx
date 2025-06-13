"use client";
import { ForgotPasswordValidationSchema } from "@/utils/validationSchema";
import { Form, Formik } from "formik";
import InputField from "../common/form/InputField";
import Button from "../common/Button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { ResetFormValues } from "@/utils/types";
import { handleResetPassword } from "@/services/authServices";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/store/store";


export default function ResetPassowrd() {
    const [showPassword, setShowPassword] = useState(false);
    const { user } = useSelector((state: RootState) => state.auth);
    const router = useRouter();
    const dispatch = useDispatch();
    console.log("User in Reset Password:", user);

    const handleSubmit = async (values: ResetFormValues) => {
        const code = localStorage.getItem("verifiedCode") || "";
        const payload = {
            userId: user.id,
            code: code,
            newPassword: values.newPassword,
        };
        console.log("Reset Password Payload:", payload);
        const response = await handleResetPassword(dispatch, payload);
        if (response && response?.success) {
            router.push("/sign-in");
        }
    };



    return (
        <>
            <h1 className="text-green-600 text-3xl font-bold">SmartHR</h1>
            <div className="flex flex-col items-center w-full max-w-md mx-auto flex-1 justify-center">
                <div className="space-y-14 w-full">
                    <div className="mb-8 text-center flex flex-col items-center">
                        <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                            <div className="absolute w-20 h-12 bg-green-700 transform -rotate-45 translate-x-2 translate-y-4 z-0" />
                            <div className="absolute w-20 h-12 bg-green-500 transform -rotate-45 z-10" />
                        </div>
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary-black mb-1">
                            Set a new password

                        </h1>
                        <p className="text-secondary-black text-sm md:text-base">
                            Create a new password. Ensure it differs from previous ones for security

                        </p>
                    </div>
                    <Formik
                        initialValues={{
                            newPassword: "",
                            code: localStorage.getItem("verifiedCode") || "",
                            userId: user?.id || "",
                        }} validationSchema={ForgotPasswordValidationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form className="space-y-4 w-full">
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
                            <InputField
                                name="confirmPassword"
                                type={showPassword ? "text" : "password"}
                                label="Confirm Password"
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

                            <Button type="submit" label="Update Password" className="mt-2" />
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}
"use client";
import { Form, Formik } from "formik";
import Button from "../common/Button";
import { useRef, useState } from "react";
import Link from "next/link";
import { OtpVerificationSchema } from "@/utils/validationSchema";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { handleVerifyCode } from "@/services/authServices";
import { useRouter } from "next/navigation";


export default function VerificationCode() {
    const [otpValues, setOtpValues] = useState<string[]>(["", "", "", "", "", ""]);
    const [isOtpIncorrect, setIsOtpIncorrect] = useState(false);
    const { user } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    const router = useRouter();

    const inputRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    const handleOtpChange = (index: number, value: string): void => {
        if (isOtpIncorrect) setIsOtpIncorrect(false);

        if (value.match(/^[0-9]$/) || value === "") {
            const newOtpValues = [...otpValues];
            newOtpValues[index] = value;
            setOtpValues(newOtpValues);

            if (value !== "" && index < 5) {
                inputRefs[index + 1].current?.focus();
            }
        }
    };

    const handleKeyDown = (
        index: number,
        e: React.KeyboardEvent<HTMLInputElement>
    ): void => {
        if (e.key === "Backspace" && !otpValues[index] && index > 0) {
            inputRefs[index - 1].current?.focus();
        }
    };

    const handleSubmit = async (values: any) => {
        console.log("Form submitted:", values);
        console.log("OTP Values:", otpValues.join(""));
        const isPasswordReset = localStorage.getItem("resetEmail");
        const paylod = {
            userId: user.id,
            code: otpValues.join(""),
            whichPurpose: isPasswordReset ? "forgotPassword" : "accountVerify"
        };
        const response = await handleVerifyCode(dispatch, paylod);
        if (response && response.success) {
            if (isPasswordReset) {
                localStorage.setItem("verifiedCode", otpValues.join(""));
                router.push("/reset-password");
            } else {
                router.push("/sign-in");
            }
        }
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
                        Check your email                            </h1>
                    <p className="text-secondary-black text-sm md:text-base">
                        Enter 6 digit code that mentioned in the email
                    </p>
                </div>
                <Formik
                    initialValues={{ otp: "" }}
                    validationSchema={OtpVerificationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ setFieldValue, submitForm, errors, touched }) => (
                        <Form className="space-y-4 w-full">
                            <div className="flex justify-center items-center gap-4">
                                {otpValues.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={inputRefs[index]}
                                        type="text"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                        className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-8 lg:h-8 xl:w-12 xl:h-12 text-center text-base text-gray-800 font-medium 
                                        border rounded-lg md:rounded-xl focus:outline-none py-2
                                        transition-colors duration-200
                                        ${isOtpIncorrect
                                                ? "border-[#FF2E37] text-[#FF2E37]"
                                                : "border-secondary-light-gray focus:border-green-600"
                                            }`}
                                    />
                                ))}
                            </div>
                            {errors.otp && touched.otp && (
                                <div className="text-red-500 text-xs text-center">{errors.otp}</div>
                            )}
                            <Button
                                type="submit"
                                label="Verify Code"
                                className="mt-2"
                                onClick={() => {
                                    const joinedOtp = otpValues.join("");
                                    setFieldValue("otp", joinedOtp);
                                    submitForm();
                                }} />
                        </Form>
                    )}
                </Formik>
            </div>

            <p className="text-center text-gray-500">
                Haven't got the Password yet? <Link href="/sign-up" className="text-black font-semibold underline">Resend email</Link>
            </p>
        </>
    )
}
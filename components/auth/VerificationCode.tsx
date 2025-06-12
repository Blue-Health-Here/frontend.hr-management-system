"use client";
import { forgotPasswordInitialVals } from "@/utils/initialVals";
import { ForgotPasswordValidationSchema } from "@/utils/validationSchema";
import { Form, Formik } from "formik";
import InputField from "../common/form/InputField";
import Button from "../common/Button";
import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";

export default function VerificationCode() {
    const [otpValues, setOtpValues] = useState<string[]>(["", "", "", "", "", ""]);
    const [isOtpIncorrect, setIsOtpIncorrect] = useState(false);


    const inputRefs = [
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

            if (value !== "" && index < 3) {
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

    const handleSubmit = (values: any) => {
        console.log("Form submitted:", values);
    };

    return (
        <>
            <div className="flex justify-end pr-10 pt-10">
                <Image src="/logo.png" alt="logo" width={150} height={60} />
            </div>            <div className="flex flex-col items-center w-full max-w-md mx-auto flex-1 justify-center">
                <div className="space-y-14 w-full">
                    <Button isArrowButton={true} />
                    <div className="flex flex-col gap-4">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold ">
                            Check your email
                        </h1>
                        <p className="text-secondary-dark-gray text-sm md:text-base">
                            Enter 6 digit code that mentioned in the email
                        </p>
                    </div>
                    <Formik
                        initialValues={forgotPasswordInitialVals}
                        validationSchema={ForgotPasswordValidationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form className="space-y-4 w-full">
                            <div className="flex justify-center sm:ustify-start items-center gap-4">
                                {otpValues.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={inputRefs[index]}
                                        type="text"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                        className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-8 lg:h-8 xl:w-12 xl:h-12 text-center text-base text-primary-dark-gray font-medium 
                                        border rounded-lg md:rounded-xl focus:outline-none py-2
                                        transition-colors duration-200
                                        ${isOtpIncorrect
                                                ? "border-[#FF2E37] text-[#FF2E37]"
                                                : "border-secondary-light-gray focus:border-primary-navy-blue"
                                            }`}
                                    />
                                ))}
                            </div>
                            <Button type="submit" label="Verify Code" className="mt-2" />
                        </Form>
                    </Formik>
                    <p className="text-center text-xs md:text-sm text-primary-light-gray">
                        Haven’t got the Password yet? {"  "}<Link href="/sign-up" className="text-xs md:text-sm text-primary-navy-blue font-semibold underline"> Resend email</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

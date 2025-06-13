"use client";
import Link from "next/link";
import Button from "../common/Button";
import Image from "next/image";
import { Check } from "lucide-react";

export default function PasswordSuccess() {

    return (
        <>
            <div className="flex justify-end pr-10 pt-10">
                <Image src="/logo.png" alt="logo" width={150} height={60} />
            </div>

            <div className="flex-grow flex flex-col justify-center items-center mx-auto w-full max-w-md space-y-8">
                <div className="relative inline-block animate-bounce">
                    <Image src="/success.svg" alt="success" width={95} height={95} className="" />
                    <Check
                        className="w-10 h-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        strokeWidth={3}
                    />
                </div>
                <div className="text-center flex flex-col gap-4 items-center">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold ">
                        Success
                    </h1>

                    <p className="text-secondary-dark-gray text-sm md:text-base">
                        Congratulations! Your password has <br></br>
                        been changed. Click continue to login
                    </p>
                </div>
                <Link href="/sign-in" className="w-full">
                    <Button type="button" label="Login" className="shadow-xs" bgColor="bg-[#E5EBFF]" borderColor="border-primary-navy-blue" textColor="text-primary-navy-blue" />
                </Link>
            </div>
        </>
    )
}
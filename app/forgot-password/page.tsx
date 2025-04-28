"use client";

import Image from "next/image";
import Link from "next/link";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "@/components/InputField";
import { Mail } from "lucide-react";

interface ForgotPasswordFormValues {
  email: string;
}

const ForgotPasswordInitialVals: ForgotPasswordFormValues = {
  email: "",
};

const ForgotPasswordValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const handleSubmit = (values: ForgotPasswordFormValues) => {
  console.log("Form submitted:", values);
};

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side Image */}
      <div
        className="w-full md:w-2/5 lg:w-2/5 relative hidden md:flex flex-col items-center justify-center min-h-screen"
        style={{
          background: "linear-gradient(to bottom, #fd7e14, #58151c)",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        {/* Text Above Image - moved down */}
        <div className="relative z-10">
          <div
            className="border border-white bg-white/22 backdrop-blur-lg shadow-lg rounded-xl px-12 py-8 flex flex-col items-center"
            style={{ marginTop: "60px" }}
          >
            <h1
              className="text-white text-4xl md:text-5xl mb-4 px-4 font-bold relative text-left"
              style={{
                fontSize: "40px",
                lineHeight: "1.2",
                top: "60px",
                left: "-20px",
              }}
            >
              <div>Empowering people</div>
              <div>through seamless HR</div>
              <div>management.</div>
            </h1>

            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <Image
                src="/img-1.png"
                alt="Main Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <p
              className="text-white text-center px-4 font-semibold relative"
              style={{
                fontSize: "20px",
                top: "-20px",
              }}
            >
              Efficiently manage your workforce, streamline <br />
              operations effortlessly.
            </p>
          </div>
        </div>

        {/* Bottom Left Image */}
        <div className="absolute bottom-0 left-12 w-24 h-16">
          <Image
            src="/left-image.png"
            alt="Left Decoration"
            fill
            className=""
          />
        </div>

        {/* Bottom Right Image */}
        <div className="absolute bottom-0 right-4 w-60 h-60">
          <Image
            src="/right-image.png"
            alt="Right Decoration"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-3/5 lg:w-3/5 flex flex-col justify-center items-center p-8 overflow-y-auto bg-[#f3ebe1] relative min-h-screen">
        <div className="w-full max-w-[480px] space-y-6">
          <div className="text-center">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Image
                  src="https://smarthr.dreamstechnologies.com/react/template/assets/img/logo.svg"
                  alt="SmartHR Logo"
                  width={150}
                  height={40}
                  className="h-10"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-10 text-center text-[#202c4b]">Forgot Password?</h2>

            <div className="text-sm text-gray-500 space-y-4">
              <p className="text-center pt-1">
                If you forgot your password, well, then we'll email you instructions to reset your password.
              </p>

              <Formik
                initialValues={ForgotPasswordInitialVals}
                validationSchema={ForgotPasswordValidationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="space-y-4">
                  <InputField
                    name="email"
                    type="email"
                    label="Email Address"
                    icon={<Mail className="h-4 w-4 text-black" />}
                  />

                  <button
                    type="submit"
                    className="w-full text-white py-3 rounded-md hover:opacity-90 transition font-bold"
                    style={{ backgroundColor: "rgb(243, 116, 56)" }}
                  >
                    Submit
                  </button>
                </Form>
              </Formik>

              <div className="space-y-6">
                <p className="text-center">
                  Return to{" "}
                  <Link
                    href="/sign-in"
                    className="text-[rgb(243,116,56)] hover:underline"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright text positioned at the very bottom */}
        <div className="absolute bottom-8 left-0 right-0 text-center text-sm">
          <p className="text-[#111827]">Copyright © 2025 - Smarthr</p>
        </div>
      </div>
    </div>
  );
}
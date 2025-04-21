"use client";

import Image from "next/image";
import Link from "next/link";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "@/components/InputField";
import { ChevronLeft } from "lucide-react";

interface SignUpFormValues {
  email: string;
}

const signUpInitialVals: SignUpFormValues = {
  email: "",
};

const signUpValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const handleSubmit = (values: SignUpFormValues) => {
  console.log("Form submitted:", values);
};

export default function SignupPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side Image */}
      <div className="w-full md:w-1/2 lg:w-2/3 relative hidden md:flex items-center justify-center bg-gray-100">
        <div className="relative w-[800px] h-[600px]">
          <Image
            src="/hrm.png"
            alt="Signup"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col p-8 overflow-y-auto">
        <div className="text-center pt-10"> 
          <h1 className="text-2xl font-bold">LOGO</h1>
        </div>

        <div className="flex flex-col justify-center items-center flex-grow">
          <div className="w-full max-w-sm space-y-6">
            <div>
              <h2 className="text-xl font-semibold ">Forgot Password? 🔑 </h2>

              <div className="text-xs sm:text-sm text-gray-500 space-y-4">
                <p>
                  Enter your email and we'll send you the link to reset your
                  password.
                </p>

                <Formik
                  initialValues={signUpInitialVals}
                  validationSchema={signUpValidationSchema}
                  onSubmit={handleSubmit}
                >
                  <Form className="space-y-4 mt-8">
                    <InputField
                      name="email"
                      type="email"
                      label="Email"
                      placeholder="Your email"
                    />

                    <button
                      type="submit"
                      className="w-full text-white py-3 rounded-lg hover:opacity-90 transition font-bold"
                      style={{ backgroundColor: "#1E3A8A" }}
                    >
                      Send reset link
                    </button>
                  </Form>
                </Formik>

                <div className="text-center mt-4 flex justify-center items-center gap-1">
                  <ChevronLeft size={18} className="text-black" />
                  <Link
                    href="/sign-in"
                    className="text-sm text-black "
                  >
                    Back to Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
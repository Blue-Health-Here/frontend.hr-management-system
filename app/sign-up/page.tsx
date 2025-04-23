"use client";

import Image from "next/image";
import Link from "next/link";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "@/components/InputField"; // 👈 Adjust path if needed

interface SignUpFormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const signUpInitialVals: SignUpFormValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const signUpValidationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
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
      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center p-8 overflow-y-auto">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold">LOGO</h1>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-10">Register Account 😍</h2>

            <div className="text-xs text-gray-500 space-y-4">
              <p>Register your account today.</p>

              <Formik
                initialValues={signUpInitialVals}
                validationSchema={signUpValidationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="space-y-4">
                  <InputField
                    name="fullName"
                    label="Full Name"
                    placeholder="Your Full Name"
                  />

                  <InputField
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Your Email"
                  />

                  <InputField
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Your Password"
                  />

                  <InputField
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    placeholder="Confirm Password"
                  />

                  <button
                    type="submit"
                    className="w-full text-white py-3 rounded-lg hover:opacity-90 transition font-bold"
                    style={{ backgroundColor: "#1E3A8A" }}
                  >
                    Sign Up
                  </button>
                </Form>
              </Formik>

              <p className="text-center mt-14">
                Already have an account?{" "}
                <Link href="/sign-in" className="text-blue-600 hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

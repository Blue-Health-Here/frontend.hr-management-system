"use client";
import Image from "next/image";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface SignInFormValues {
  email: string;
  password: string;
}

// Initial Values
const signInInitialVals: SignInFormValues = {
  email: "",
  password: "",
};

// Validation Schema
const signInValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const handleSubmit = (values: SignInFormValues) => {
  console.log("Form submitted:", values);
};

export default function LoginPage() {
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
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold mt-6 md:mt-[-90px]">LOGO</h1>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-20">
              Login to your account 🔥
            </h2>

            <div className="text-sm text-gray-500 space-y-4">
              <p>Welcome back! Please enter your details.</p>

              <Formik
                initialValues={signInInitialVals}
                validationSchema={signInValidationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="space-y-4">
                  <div>
                    <label className="block font-medium text-gray-500 mt-10">
                      Email
                    </label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Your email"
                      className="mt-1 block w-[94%] px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-500"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-gray-500">
                      Password
                    </label>
                    <Field
                      name="password"
                      type="password"
                      placeholder="Your password"
                      className="mt-1 block w-[94%] px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                    />
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="text-red-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-[94%] text-white py-3 rounded-lg hover:bg-blue-700 transition font-bold"
                    style={{ backgroundColor: "#1E3A8A" }}
                  >
                    Sign In
                  </button>
                  <div className="text-center mt-4 w-full underline">
                    <Link
                      href="/forgot-password"
                      className="text-sm text-black hover:underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </Form>
              </Formik>

              <p className="text-center mt-14">
                New on our platform?{" "}
                <Link href="/signup" className="text-black font-semibold hover:underline">
                  Register Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

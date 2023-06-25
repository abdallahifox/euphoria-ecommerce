"use client";
import React, { useState, useCallback } from "react";
import { Formik, Field, Form } from "formik";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { registertaionValidation } from "@/app/Schemas/validations";
import Link from "next/link";

const initFormData = {
  email: "",
  password: "",
};
function RegisterComponent() {
  const [passwordType, setPasswordType] = useState("password");

  const registerNewAccountHandler = useCallback(() => {
    console.log("submit");
  }, []);
  return (
    <Formik
      initialValues={initFormData}
      onSubmit={registerNewAccountHandler}
      validationSchema={registertaionValidation}
    >
      {({ errors, touched }) => (
        <Form className="mt-6">
          <>
            <div className="flex w-full flex-col items-start gap-y-2">
              <label htmlFor="email" className="text-md">
                Email Adress <span className="text-red-600">*</span>
              </label>
              <Field
                type="email"
                name="email"
                className={`${
                  errors.email && touched.email ? "invalid" : "input-style"
                }`}
                placeholder="euphoria@ecommerce.com"
              />
              {errors.email && touched.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>
            <div className="mt-4 flex w-full flex-col items-start gap-y-2">
              <div className="flex w-full items-center justify-between">
                <label htmlFor="password" className="text-md">
                  Password <span className="text-red-600">*</span>
                </label>
                <button>
                  {passwordType === "password" && (
                    <AiOutlineEye
                      size={20}
                      fill="#807D7E"
                      onClick={() => setPasswordType("text")}
                    />
                  )}
                  {passwordType === "text" && (
                    <AiOutlineEyeInvisible
                      size={20}
                      fill="#807D7E"
                      onClick={() => setPasswordType("password")}
                    />
                  )}
                </button>
              </div>
              <Field
                type={passwordType}
                name="password"
                className={`${
                  errors.password && touched.password
                    ? "invalid"
                    : "input-style"
                }`}
                placeholder="password"
              />

              <span
                className={`${
                  errors.password && touched.password
                    ? "text-red-600"
                    : "text-gray"
                } text-sm`}
              >
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </span>
            </div>
          </>
          <button
            type="submit"
            className="shodow-md mt-4 rounded bg-primary px-6 py-2 text-sm text-white transition hover:bg-purple-800"
          >
            Register
          </button>
          <br />
          <br />
          <span className="text-sm text-gray">
            Already have Account{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </span>
        </Form>
      )}
    </Formik>
  );
}

export default RegisterComponent;

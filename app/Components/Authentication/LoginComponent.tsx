'use client'
import React, { useState, useCallback } from "react";
import { Formik, Field, Form } from "formik";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";

const initFormData = {
  email: "",
  password: "",
};
function LoginComponent() {
  const [passwordType, setPasswordType] = useState("password");

  const loginHandler = useCallback(() => {
    console.log("Login");
  }, []);
  return (
    <Formik initialValues={initFormData} onSubmit={loginHandler}>
      {() => (
        <Form>
          <div className="flex w-full flex-col items-start gap-y-2">
            <label htmlFor="email" className="text-md">
              Email Adress <span className="text-red-600">*</span>
            </label>
            <Field
              type="email"
              name="email"
              className="input-style"
              placeholder="euphoria@ecommerce.com"
            />
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
              className="input-style"
              placeholder="password"
            />
            <Link href="/forget">
              <span className="text-gray text-sm underline">Forget Your Password ? </span>
            </Link>
          </div>

          <button
            type="submit"
            className="shodow-md mt-4 rounded bg-primary px-6 py-2 text-sm text-white transition hover:bg-purple-800"
          >
            Login
          </button>
          <br />
          <br />
          <span className="text-sm text-gray">
            Don't Have Account ?{" "}
            <Link href="/register" className="underline">
              Register
            </Link>
          </span>
        </Form>
      )}
    </Formik>
  );
}

export default LoginComponent;

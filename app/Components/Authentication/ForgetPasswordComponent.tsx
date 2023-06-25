"use client";
import React, { useState, useCallback } from "react";
import { Formik, Field, Form } from "formik";
import Link from "next/link";

const initFormData = {
  email: "",
};
function ForgetPasswordComponent() {
  const resetPasswordHandler = useCallback(() => {
    console.log("Login");
  }, []);
  return (
    <Formik initialValues={initFormData} onSubmit={resetPasswordHandler}>
      {() => (
        <Form className="mt-8">
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
            <span className="text-sm capitalize tracking-widest text-red-600">
              we can not find your email
            </span>
          </div>
          <button
            type="submit"
            className="shodow-md mt-4 rounded bg-primary px-6 py-2 text-sm text-white transition hover:bg-purple-800"
          >
            Send
          </button>
          <br />
          <br />
          <span className="text-sm text-gray">
            Back To{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </span>
        </Form>
      )}
    </Formik>
  );
}

export default ForgetPasswordComponent;

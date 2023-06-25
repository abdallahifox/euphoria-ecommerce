import { ForgetPasswordComponent } from '@/app/Components'
import React from 'react'

function ForgetPassword() {
  return (
    <div className="mt-8 grid h-[100vh] grid-cols-1 sm:grid-cols-2">
    <div className="hidden w-full bg-[url('/Forget.png')] bg-cover bg-center bg-no-repeat sm:flex " />
    <div className="mx-auto mt-6 w-full p-4 sm:w-1/2 sm:p-0">
      <h1 className="mb-4 text-3xl uppercase text-dark-gray">Reset Your Password</h1>
      <span className="text-md text-gray">
      Enter your email and we'll send you a link to reset your password.
      </span>
        <ForgetPasswordComponent/>
    </div>
  </div>
  )
}

export default ForgetPassword
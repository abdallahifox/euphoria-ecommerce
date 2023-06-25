import React from 'react'
import { LoginComponent } from '@/app/Components'

function LoginPage() {
  return (
    <div className="mt-8 grid h-[100vh] grid-cols-1 sm:grid-cols-2">
      <div className="hidden w-full bg-[url('/Login.png')] bg-cover bg-center bg-no-repeat sm:flex " />
      <div className="mx-auto mt-6 w-full p-4 sm:w-1/2 sm:p-0">
        <h1 className="mb-4 text-3xl uppercase text-dark-gray">Login</h1>
        <span className="text-md text-gray">
          Login Now And Choose Your Favorite Brand
        </span>
        <LoginComponent/>
      </div>
    </div>
  )
}

export default LoginPage
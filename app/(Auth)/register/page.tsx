import { RegisterComponent } from "@/app/Components";


function RegisterPage() {

  return (
    <div className="mt-8 grid h-[100vh] grid-cols-1 sm:grid-cols-2">
      <div className="hidden w-full bg-[url('/banner.png')] bg-cover bg-center bg-no-repeat sm:flex " />
      <div className="mx-auto mt-6 w-full p-4 sm:w-1/2 sm:p-0">
        <h1 className="mb-4 text-3xl uppercase text-dark-gray">Register</h1>
        <span className="text-md text-gray">
          Register for free to access to in any of our products
        </span>
        <RegisterComponent/>
      </div>
    </div>
  );
}

export default RegisterPage;

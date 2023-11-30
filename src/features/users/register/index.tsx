import { RegisterForm } from "./form";

export function RegisterUser() {
  return (
    <div className="mx-auto max-w-sm space-y-6 bg-white  shadow-2xl rounded-lg p-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Register</h1>
        <p className="text-zinc-500 ">
          Please fill out the form to create an account
        </p>
      </div>
      <RegisterForm />
      <div className="flex justify-center items-center mt-4">
        <a className="text-sm text-gray-500 " href="/login">
          Back to Login
        </a>
      </div>
    </div>
  );
}

import { Button, Input } from "../../ui";

export function RegisterUser() {
  return (
    <div className="mx-auto max-w-sm space-y-6 bg-white  shadow-2xl rounded-lg p-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Register</h1>
        <p className="text-zinc-500 ">
          Please fill out the form to create an account
        </p>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            id="first-name"
            label="First name"
            placeholder="John"
            required
          />
          <Input id="last-name" label="Last name" placeholder="Doe" required />
        </div>
        <Input
          id="email"
          label="Email"
          placeholder="Enter your Email"
          required
          type="email"
        />
        <div className="space-y-2 relative">
          <Input
            id="password"
            label="Password"
            placeholder=""
            required
            type="password"
          />
        </div>
        <Button label="Register" />
      </div>
      <div className="flex justify-center items-center mt-4">
        <a className="text-sm text-gray-500 " href="/login">
          Back to Login
        </a>
      </div>
    </div>
  );
}

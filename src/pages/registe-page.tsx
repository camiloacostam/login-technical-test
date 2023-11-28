export default function RegisterPage() {
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
          <div className="space-y-2">
            <label htmlFor="first-name">First name</label>
            <input id="first-name" placeholder="John" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="last-name">Last name</label>
            <input id="last-name" placeholder="Doe" required />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="johndoe@example.com"
            required
            type="email"
          />
        </div>
        <div className="space-y-2 relative">
          <label htmlFor="password">Password</label>
          <input id="password" required type="password" />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"></div>
        </div>
        <button className="w-full" type="submit">
          Register
        </button>
      </div>
    </div>
  );
}

import { Button, Input } from "../../ui";

export function Login() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-slate-50 p-10 rounded-lg shadow-2xl w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <div className="space-y-4">
          <Input
            id="username"
            label="Username"
            placeholder="Enter your Email"
            required
            type="email"
          />
          <Input
            id="password"
            label="Password"
            placeholder=""
            required
            type="password"
          />

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
                id="rememberMe"
              />
              <label
                htmlFor="rememberMe"
                className="ms-2 text-sm font-medium text-gray-900"
              >
                Remember Me
              </label>
            </div>

            <a className="text-sm underline" href="">
              Forgot your password?
            </a>
          </div>
          <Button label="Login" />
          <div className="flex justify-center items-center mt-4">
            <p className="text-sm mr-2">or</p>
            <a className="text-sm underline" href="/register">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-slate-50 p-10 rounded-lg shadow-2xl w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              placeholder="Enter your username"
              required
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password">Password</label>
            <input id="password" required type="password" />
          </div>
          <div className="flex justify-between items-center mt-4">
            <input type="checkbox" className="" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>

            <a className="text-sm underline" href="">
              Forgot your password?
            </a>
          </div>
          <button
            className=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  w-full"
            type="submit"
          >
            Login
          </button>
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

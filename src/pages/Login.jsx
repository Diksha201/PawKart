import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // You can replace this with real authentication logic
    console.log("Logging in with:", email, password);
    alert("Login submitted!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-yellow-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div className="text-center">
          <FaSignInAlt className="mx-auto text-pink-500 text-4xl" />
          <h2 className="text-2xl font-bold text-gray-800 mt-2">Login to Your Account</h2>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg font-semibold transition"
          >
            Login
          </button>
        </form>
        <div className="text-center text-sm text-gray-500">
          Don't have an account? <NavLink to="/" className="text-pink-500 hover:underline">Go Home</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
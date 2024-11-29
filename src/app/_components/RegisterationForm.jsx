"use client";
import React, { useContext } from "react";
import UserContext from "../_contexts/UserContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
const RegistrationForm = () => {
  const router = useRouter()
  const { handleUserChanges, registerUser } = useContext(UserContext);

  const handleSubmit = async(e) => {
    e.preventDefault(); // Prevent page reload
    const res = await registerUser(); // Call the context's register function
    if (res) {
      // If the registration is successful, redirect to the login page
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Register
        </h2>
        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              onChange={handleUserChanges}
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 text-black focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              onChange={handleUserChanges}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 text-black focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={handleUserChanges}
              name="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 text-black focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Contact */}
          <div>
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-gray-700"
            >
              Contact
            </label>
            <input
              type="text"
              id="contact"
              onChange={handleUserChanges}
              name="contactNo"
              placeholder="Enter your contact number"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 text-black focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Register
            </button>
          </div>
        </form>
        <h1 className="text-black m-3">
          Already have an account?
          <Link className="text-blue-300 m-4" href={"/login"}>
            Login
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default RegistrationForm;

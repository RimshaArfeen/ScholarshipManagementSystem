// Login.jsx
import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data, role) => {
    try {
      const finalData = { ...data, role };

      const result = await fetch(`http://localhost:3000/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      const responseData = await result.json();

      if (responseData.auth && responseData.user?.role === role) {
        localStorage.setItem("Applicants", JSON.stringify(responseData.user));
        localStorage.setItem("token", responseData.auth);
        console.log(responseData);

        if (role === "student") navigate("/home");
        else if (role === "admin") navigate("/adminDashboard");
      } else {
        alert("Invalid credentials or role mismatch");
      }
    } catch (error) {
      console.log("Login failed:", error.message);
    }
  };

  return (
    <div className=" w-full flex items-center justify-center px-4">
      <div className="w-full  rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Welcome Back
        </h2>
        
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: "Invalid email format",
                },
              })}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
            )}
          </div> */}

          {/* Buttons */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={handleSubmit((data) => onSubmit(data, "student"))}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Log In as Student
            </button>

            <button
              type="button"
              onClick={handleSubmit((data) => onSubmit(data, "admin"))}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-medium"
            >
              Log In as Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

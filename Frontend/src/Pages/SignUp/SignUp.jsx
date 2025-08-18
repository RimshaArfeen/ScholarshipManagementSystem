


import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Watch password to validate confirm password
  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      // Explicitly add the role here before sending to the server
      const finalData = { ...data, role: "student" };

      let result = await fetch(`http://localhost:3000/signup`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData)
      });
  
      result = await result.json();
      console.log("API Response:", result);

      if (result.result && result.auth) {
        localStorage.setItem("Applicants", JSON.stringify(result.result)); 
        localStorage.setItem("token", result.auth);
        console.log("Signed up successfully", result);
        navigate("/");
      } else {
        console.error("Invalid API response format:", result);
        // Using a modal instead of alert for a better user experience
        // alert("Invalid response from server. Check console for details.");
        Example: showModal("Invalid response from server. Check console for details.");
      }
    } catch (error) {
      console.log("Sign up error:", error);
      // Using a modal instead of alert
      // alert("Encountered an error while signing up: " + error.message);
      // Example: showModal("Encountered an error while signing up: " + error.message);
    }
  };
  
 return (
   <div className="min-h-screen w-full flex items-center justify-center px-4 py-24">
  <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
    {/* Heading */}
    <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
      Create an Account
    </h2>

    {/* Form */}
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          className="w-full px-4 py-2 border rounded-lg text-gray-700 
                     focus:ring-2 focus:ring-teal-500 focus:outline-none border-gray-300"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="w-full px-4 py-2 border rounded-lg text-gray-700 
                     focus:ring-2 focus:ring-teal-500 focus:outline-none border-gray-300"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
          className="w-full px-4 py-2 border rounded-lg text-gray-700 
                     focus:ring-2 focus:ring-teal-500 focus:outline-none border-gray-300"
        />
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          })}
          className="w-full px-4 py-2 border rounded-lg text-gray-700 
                     focus:ring-2 focus:ring-teal-500 focus:outline-none border-gray-300"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
        )}
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-teal-600 text-white py-2.5 rounded-lg font-medium 
                   hover:bg-teal-700 transition duration-200 shadow-sm"
      >
        Sign Up
      </button>
    {/* Footer */}
    <p className="text-center text-sm text-gray-600 mt-1">
      Already have an account?{" "}
      <a href="/" className="text-teal-600 hover:underline font-medium">
        Log In
      </a>
    </p>
    </form>

  </div>
</div>

  );
};

export default SignUp;


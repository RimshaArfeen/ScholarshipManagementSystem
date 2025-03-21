
import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
const Login = () => {
     const navigate = useNavigate()

     const {
          register,
          handleSubmit,
          watch,
          formState: { errors },
     } = useForm();

     const onSubmit = async (data) => {
          try {
               let result = await fetch("http://localhost:3000/login", {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
               });
               if (!result.ok) {
                    throw new Error("Network response was not ok");

               }
               // Convert the response to JSON
               const responseData = await result.json();

               if (responseData.auth) {
                    localStorage.setItem("Applicants", JSON.stringify(responseData.user));
                    localStorage.setItem("token",responseData.auth);
                    console.log("User Logged in successfully", responseData);
                    navigate("/")
               } else {
                    console.log(responseData.error || "Please enter correct details");
               }

          } catch (error) {
               console.log("Login failed:", error.message);

          }
     }
         



          // Watch password to validate confirm password
          const password = watch("password");

          return (
               <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md mt-20">
                         <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Log In</h2>
                         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                              {/* Name Field */}
                              {/* <div>
                              <label className="block text-custom">Name</label>
                              <input
                                   type="text"
                                   {...register("name", {
                                        required: "Name is required",
                                        minLength: {
                                             value: 4,
                                             message: "Minimum length is 4 characters",
                                        },
                                        maxLength: {
                                             value: 20,
                                             message: "Maximum length is 20 characters",
                                        },
                                   })}
                                   className="w-full px-4 py-2 border-customborder-indigo-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              />
                              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                         </div> */}

                              {/* Email Field */}
                              <div>
                                   <label className="block text-custom">Email</label>
                                   <input
                                        type="email"
                                        {...register("email", {
                                             required: "Email is required",
                                             minLength: {
                                                  value: 4,
                                                  message: "Minimum length is 4 characters",
                                             },
                                             pattern: {
                                                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                                                  message: "Invalid email format. Must contain '@' and domain",
                                             },
                                        })}
                                        className="w-full px-4 py-2 border-customborder-indigo-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                   />
                                   {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                              </div>

                              {/* Password Field */}
                              <div>
                                   <label className="block text-custom">Password</label>
                                   <input
                                        type="password"
                                        {...register("password", {
                                             required: "Password is required",
                                             minLength: {
                                                  value: 8,
                                                  message: "Password must be at least 8 characters long",
                                             },
                                             // pattern: {
                                             //      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                             //      message: "Password must include uppercase, lowercase, number, and special character",
                                             // },
                                        })}
                                        className="w-full px-4 py-2 border-customborder-indigo-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                   />
                                   {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                              </div>

                              {/* Confirm Password Field */}
                              <div>
                                   <label className="block text-custom">Confirm Password</label>
                                   <input
                                        type="password"
                                        {...register("confirmPassword", {
                                             required: "Please confirm your password",
                                             validate: (value) =>
                                                  value === password || "Passwords do not match",
                                        })}
                                        className="w-full px-4 py-2 border-customborder-indigo-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                   />
                                   {errors.confirmPassword && (
                                        <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                                   )}
                              </div>

                              {/* Submit Button */}
                              <button
                                   type="submit"
                                   className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition uppercase"
                              >
                                   Log In
                              </button>
                         </form>

                         <p className="text-center text-custom mt-4">
                              Don't have an account?{" "}
                              <a href="/signup" className="text-blue-600 hover:underline">
                                   sign Up
                              </a>
                         </p>
                    </div>
               </div>
          );
     };

     export default Login;

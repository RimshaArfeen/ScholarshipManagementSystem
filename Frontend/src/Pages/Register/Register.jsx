import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

const Register = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-gray-50 to-gray-100 px-5">
      <div className="w-full md:w-3/4 lg:w-1/2 rounded-2xl p-8 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              key="login"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Login />
              <p className="text-center text-gray-600 mt-4 text-sm">
                Don’t have an account?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Sign Up
                </button>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <SignUp />
              <p className="text-center text-gray-600 mt-4 text-sm">
                Already have an account?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Login
                </button>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Register;

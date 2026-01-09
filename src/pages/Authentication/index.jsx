import React, { useRef, useState } from "react";
import "./style.css";
import APP_CONSTANTS from "@/config/AppConstants";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Authentication() {
  const [isLogin, setIsLogin] = useState(true);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  /* SEPARATE FORMS */
  const loginForm = useForm();
  const registerForm = useForm();

  const startX = useRef(0);
  const navigate = useNavigate();
  const flipSound = useRef(new Audio("/assets/sound/flip.mp3"));

  const playSound = () => {
    flipSound.current.currentTime = 0;
    flipSound.current.play();
  };

  const toggle = (state) => {
    playSound();
    loginForm.reset();
    registerForm.reset();
    setIsLogin(state);
  };

  /* MOBILE SWIPE */
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - startX.current;
    if (diff < -80 && isLogin) toggle(false);
    if (diff > 80 && !isLogin) toggle(true);
  };

  const onLoginSubmit = (data) => {
    console.log("Login Data:", data);
    navigate("/dashboard");
  };

  const onRegisterSubmit = (data) => {
    console.log("Register Data:", data);
    navigate("/dashboard");
  };

  return (
    <div
      className="h-screen w-full flex overflow-hidden bg-gray-100"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* IMAGE PANEL */}
      <div
        className={`image-panel hidden md:block w-1/2 h-full ${
          isLogin ? "image-left" : "image-right"
        }`}
      >
        <img
          src={APP_CONSTANTS.Auth_img}
          alt="auth"
          className="w-full h-full object-cover"
        />
      </div>

      {/* PAPER SCENE */}
      <div className="scene w-full md:w-1/2 flex items-center justify-center">
        <div
          className={`paper w-full h-full rounded-xl shadow-2xl ${
            isLogin ? "login" : "register"
          }`}
        >
          {/* LOGIN */}
          <div className="page front flex items-center justify-center">
            <div className="w-[70%]">
              <form action="" onSubmit={loginForm.handleSubmit(onLoginSubmit)}>
                <h2 className="text-4xl font-bold mb-6">Welcome Back</h2>

                <input
                  type="text"
                  className={`w-full mb-4 p-3 border rounded-lg ring-0 focus:ring-2 focus:outline-none ${
                    loginForm.formState.errors.username
                      ? "border-red-500 focus:ring-red-400"
                      : "focus:ring-bg-primary"
                  }`}
                  placeholder="Username"
                  {...loginForm.register("username", {
                    required: "Username is required",
                  })}
                />
                {loginForm.formState.errors.username && (
                  <p className="text-red-500 text-sm mb-4">
                    {loginForm.formState.errors.username.message}
                  </p>
                )}
                <div className="relative mb-6">
                  <input
                    type={showLoginPassword ? "text" : "password"}
                    className={`w-full p-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 ${
                      loginForm.formState.errors.password
                        ? "border-red-500 focus:ring-red-400"
                        : "focus:ring-bg-primary"
                    }`}
                    placeholder="Password"
                    {...loginForm.register("password", {
                      required: "Password is required",
                    })}
                  />
                  {loginForm.formState.errors.password && (
                    <p className="text-red-500 text-sm mb-4">
                      {loginForm.formState.errors.password.message}
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowLoginPassword(!showLoginPassword);
                    }}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-text-primary"
                    aria-label={
                      showLoginPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showLoginPassword ? (
                      /* Eye Open */
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    ) : (
                      /* Eye Closed */
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.956 9.956 0 012.042-3.368m3.06-2.347A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.132 5.568M15 12a3 3 0 00-3-3m0 0a3 3 0 00-3 3m6 0a3 3 0 01-3 3m0 0a3 3 0 01-3-3m6 0l4.5 4.5M3 3l18 18"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full bg-bg-primary text-white py-3 rounded-lg"
                >
                  Login
                </button>
              </form>
              <p className="mt-6 text-gray-600">
                Don’t have an account?{" "}
                <button
                  onClick={() => toggle(false)}
                  className="text-text-primary font-semibold"
                >
                  Register
                </button>
              </p>
            </div>
          </div>

          {/* REGISTER */}
          <div className="page back flex items-center justify-center">
            <div className="w-[70%]">
              <form
                action=""
                onSubmit={registerForm.handleSubmit(onRegisterSubmit)}
              >
                <h2 className="text-4xl font-bold mb-6">Create Account</h2>

                <input
                  type="text"
                  className={`w-full mb-4 p-3 border rounded-lg ring-0 focus:ring-2 focus:outline-none ${
                    registerForm.formState.errors.username
                      ? "border-red-500 focus:ring-red-400"
                      : "focus:ring-bg-primary"
                  }`}
                  placeholder="User Name"
                  {...registerForm.register("username", {
                    required: "User Name is required",
                  })}
                />
                {registerForm.formState.errors.username && (
                  <p className="text-red-500 text-sm mb-4">
                    {registerForm.formState.errors.username.message}
                  </p>
                )}
                <input
                  type="email"
                  className={`w-full mb-4 p-3 border rounded-lg ring-0 focus:ring-2 focus:outline-none ${
                    registerForm.formState.errors.email
                      ? "border-red-500 focus:ring-red-400"
                      : "focus:ring-bg-primary"
                  }`}
                  {...registerForm.register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Enter a valid email address",
                    },
                  })}
                  placeholder="Email"
                />
                {registerForm.formState.errors.email && (
                  <p className="text-red-500 text-sm mb-4">
                    {registerForm.formState.errors.email.message}
                  </p>
                )}
                <div className="relative mb-6">
                  <input
                    type={showRegisterPassword ? "text" : "password"}
                    className={`w-full p-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 ${
                      registerForm.formState.errors.password
                        ? "border-red-500 focus:ring-red-400"
                        : "focus:ring-bg-primary"
                    }`}
                    placeholder="Password"
                    {...registerForm.register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 4,
                        message: "Minimum 4 characters",
                      },
                    })}
                  />
                  {registerForm.formState.errors.password && (
                    <p className="text-red-500 text-sm mb-4">
                      {registerForm.formState.errors.password.message}
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={() =>
                      setShowRegisterPassword(!showRegisterPassword)
                    }
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-text-primary"
                    aria-label={
                      showRegisterPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showRegisterPassword ? (
                      /* Eye Open */
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    ) : (
                      /* Eye Closed */
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.956 9.956 0 012.042-3.368m3.06-2.347A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.132 5.568M15 12a3 3 0 00-3-3m0 0a3 3 0 00-3 3m6 0a3 3 0 01-3 3m0 0a3 3 0 01-3-3m6 0l4.5 4.5M3 3l18 18"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <div className="relative mb-6">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className={`w-full p-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 ${
                      registerForm.formState.errors.confirmPassword
                        ? "border-red-500 focus:ring-red-400"
                        : "focus:ring-bg-primary"
                    }`}
                    placeholder="Confirm Password"
                    {...registerForm.register("confirmPassword", {
                      validate: (value) =>
                        value === registerForm.watch("password") ||
                        "Passwords do not match",
                    })}
                  />
                  {registerForm.formState.errors.confirmPassword && (
                    <p className="text-red-500 text-sm mb-4">
                      {registerForm.formState.errors.confirmPassword.message}
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-text-primary"
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showConfirmPassword ? (
                      /* Eye Open */
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    ) : (
                      /* Eye Closed */
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.956 9.956 0 012.042-3.368m3.06-2.347A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.132 5.568M15 12a3 3 0 00-3-3m0 0a3 3 0 00-3 3m6 0a3 3 0 01-3 3m0 0a3 3 0 01-3-3m6 0l4.5 4.5M3 3l18 18"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full bg-bg-primary text-white py-3 rounded-lg"
                >
                  Register
                </button>
              </form>
              <p className="mt-6 text-gray-600">
                Already have an account?{" "}
                <button
                  onClick={() => toggle(true)}
                  className="text-text-primary font-semibold"
                >
                  Login
                </button>
              </p>
            </div>
          </div>

          {/* SHADOW */}
          <div className="fold-shadow" />
        </div>
      </div>
    </div>
  );
}

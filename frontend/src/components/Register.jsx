import React from "react";
import { useForm } from "react-hook-form";
import { FaUserPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../shared/InputField";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/authSlice";
import Spinners from "../shared/Spinners";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const {
    register: formRegister,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const registerHandler = async (data) => {
    const res = await dispatch(registerUser(data));
    if (res.meta.requestStatus === "fulfilled") {
      reset();
      navigate("/login");
    }
  };

  return (
    <section className="flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-indigo-50 px-4 py-12">
      
      <form
        onSubmit={handleSubmit(registerHandler)}
        className="
          w-full max-w-md
          rounded-2xl bg-white
          p-8 shadow-xl
          border border-gray-100
        "
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
            <FaUserPlus className="text-2xl text-blue-600" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900">
            Create Account
          </h1>

          <p className="text-sm text-gray-500 text-center">
            Join the platform to rent or list equipment
          </p>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />

        {/* Inputs */}
        <div className="space-y-4">

          <InputField
            label="Email"
            required
            id="email"
            type="email"
            message="*Email is required"
            placeholder="Enter your email"
            register={formRegister}
            errors={errors}
          />

          <InputField
            label="Password"
            required
            id="password"
            min={6}
            type="password"
            message="*Password is required"
            placeholder="Create a strong password"
            register={formRegister}
            errors={errors}
          />
        </div>

        {/* Error */}
        {error && (
          <p className="mt-3 text-center text-sm text-red-500">
            {error}
          </p>
        )}

        {/* Button */}
        <button
          disabled={loading}
          type="submit"
          className="
            mt-6 w-full
            rounded-xl bg-linear-to-r
            from-blue-600 to-indigo-600
            py-2.5 text-sm font-semibold text-white
            transition-all duration-200
            hover:from-blue-700 hover:to-indigo-700
            hover:shadow-lg
            disabled:cursor-not-allowed
            disabled:opacity-70
            active:scale-[0.97]
          "
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <Spinners /> Creating account...
            </span>
          ) : (
            "Register"
          )}
        </button>

        {/* Footer text */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?
          <Link
            to="/login"
            className="ml-1 font-semibold text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Register;

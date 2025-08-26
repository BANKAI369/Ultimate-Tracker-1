import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user, token } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Call Redux action
    dispatch(
      signupUser({
        name: form.name,
        email: form.email,
        password: form.password,
      })
    );
  };

  // If user successfully signed up, navigate to dashboard
  useEffect(() => {
    if (token && user) {
      navigate("/dashboard");
    }
  }, [token, user, navigate]);

  return (
    <div className="bg-blue-100 min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        {/* Name */}
        <div className="mb-4 border-b-2 border-blue-500">
          <label htmlFor="name" className="block mb-1 font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-2 rounded border focus:outline-none"
          />
        </div>

        {/* Email */}
        <div className="mb-4 border-b-2 border-blue-500">
          <label htmlFor="email" className="block mb-1 font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-2 rounded border focus:outline-none"
          />
        </div>

        {/* Password */}
        <div className="mb-4 border-b-2 border-blue-500">
          <label htmlFor="password" className="block mb-1 font-medium">
            Password:
          </label>
          <input
            type="password"
            id="password"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full p-2 rounded border focus:outline-none"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4 border-b-2 border-blue-500">
          <label htmlFor="confirmPassword" className="block mb-1 font-medium">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            required
            value={form.confirmPassword}
            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
            className="w-full p-2 rounded border focus:outline-none"
          />
        </div>

        {/* Error */}
        {error && <div className="text-red-500 mb-2">{error}</div>}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600 transition"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;

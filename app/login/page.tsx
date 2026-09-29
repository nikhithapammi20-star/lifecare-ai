"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link
            href="/"
            className="text-2xl font-bold text-emerald-600"
          >
            LifeCare AI
          </Link>

          <Link
            href="/"
            className="font-medium hover:text-emerald-600"
          >
            Home
          </Link>

        </div>
      </nav>

      {/* Login Section */}
      <section className="flex min-h-[calc(100vh-73px)] items-center justify-center px-6 py-12">

        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">

          {/* Header */}
          <div className="text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl">
              ❤️
            </div>

            <h1 className="mt-5 text-3xl font-bold">
              Welcome Back
            </h1>

            <p className="mt-2 text-slate-600">
              Login to your LifeCare AI account
            </p>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            {/* Email */}
            <div>
              <label className="font-semibold">
                Email
              </label>

              <input
                type="email"
                required
                placeholder="Enter your email"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="font-semibold">
                Password
              </label>

              <input
                type="password"
                required
                placeholder="Enter your password"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <button
                type="button"
                className="text-sm font-medium text-emerald-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
            >
              Login
            </button>

          </form>

          {/* Success */}
          {submitted && (
            <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center text-emerald-700">
              ✅ Login form submitted successfully.
            </div>
          )}

          {/* Register */}
          <div className="mt-8 text-center text-slate-600">

            <p>
              Don't have an account?
            </p>

            <Link
              href="/register"
              className="mt-2 inline-block font-semibold text-emerald-600 hover:underline"
            >
              Create an account
            </Link>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-6 text-center text-sm text-slate-400">
        <p>
          © 2026 LifeCare AI. All rights reserved.
        </p>
      </footer>

    </main>
  );
}
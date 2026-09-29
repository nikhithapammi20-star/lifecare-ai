
"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
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

      {/* Register */}
      <section className="flex min-h-[calc(100vh-73px)] items-center justify-center px-6 py-12">

        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">

          {/* Header */}
          <div className="text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl">
              👤
            </div>

            <h1 className="mt-5 text-3xl font-bold">
              Create Account
            </h1>

            <p className="mt-2 text-slate-600">
              Join LifeCare AI today
            </p>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            {/* Name */}
            <div>
              <label className="font-semibold">
                Full Name
              </label>

              <input
                type="text"
                required
                placeholder="Enter your full name"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
              />
            </div>

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
                placeholder="Create a password"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="font-semibold">
                Confirm Password
              </label>

              <input
                type="password"
                required
                placeholder="Confirm your password"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
            >
              Create Account
            </button>

          </form>

          {/* Success */}
          {submitted && (
            <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center text-emerald-700">
              ✅ Registration form submitted successfully.
            </div>
          )}

          {/* Login */}
          <div className="mt-8 text-center text-slate-600">

            <p>
              Already have an account?
            </p>

            <Link
              href="/login"
              className="mt-2 inline-block font-semibold text-emerald-600 hover:underline"
            >
              Login here
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
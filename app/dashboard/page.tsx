
"use client";

import Link from "next/link";
import { useState } from "react";

export default function DashboardPage() {
  const [water, setWater] = useState(4);
  const [sleep, setSleep] = useState(7);
  const [steps, setSteps] = useState(6500);

  const waterGoal = 8;
  const stepGoal = 10000;

  const waterProgress = Math.min((water / waterGoal) * 100, 100);
  const stepProgress = Math.min((steps / stepGoal) * 100, 100);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">

      {/* Navbar */}
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link
            href="/"
            className="text-2xl font-bold text-blue-600"
          >
            LifeCare AI
          </Link>

          <div className="flex flex-wrap gap-4 text-sm font-medium">

            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/assistant"
              className="text-gray-600 hover:text-blue-600"
            >
              AI Assistant
            </Link>

            <Link
              href="/symptom-checker"
              className="text-gray-600 hover:text-blue-600"
            >
              Symptoms
            </Link>

            <Link
              href="/nutrition"
              className="text-gray-600 hover:text-green-600"
            >
              Nutrition
            </Link>

            <Link
              href="/mental-wellness"
              className="text-gray-600 hover:text-purple-600"
            >
              Wellness
            </Link>

            <Link
              href="/doctor-finder"
              className="text-gray-600 hover:text-blue-600"
            >
              Doctor Finder
            </Link>

            <Link
              href="/dashboard"
              className="font-bold text-blue-600"
            >
              Dashboard
            </Link>

            <Link
              href="/emergency"
              className="text-red-600 hover:text-red-700"
            >
              Emergency
            </Link>

          </div>
        </div>
      </nav>

      {/* Dashboard */}
      <section className="mx-auto max-w-7xl px-6 py-10">

        {/* Header */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white shadow-xl">

          <p className="text-blue-100">
            LifeCare AI
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Health Dashboard
          </h1>

          <p className="mt-3 max-w-2xl text-lg text-blue-50">
            Track your daily health activities and monitor your
            wellness progress in one place.
          </p>

        </div>

        {/* Health Cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* Water */}
          <div className="rounded-2xl bg-white p-6 shadow-lg">

            <div className="text-4xl">💧</div>

            <h2 className="mt-4 text-lg font-bold text-gray-800">
              Water Intake
            </h2>

            <p className="mt-2 text-3xl font-bold text-blue-600">
              {water}
            </p>

            <p className="text-sm text-gray-500">
              glasses recorded
            </p>

            <div className="mt-4 h-3 rounded-full bg-gray-200">
              <div
                className="h-3 rounded-full bg-blue-500"
                style={{ width: `${waterProgress}%` }}
              />
            </div>

            <button
              type="button"
              onClick={() => setWater((value) => Math.min(value + 1, 20))}
              className="mt-4 w-full rounded-xl bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700"
            >
              + Add Water
            </button>

          </div>

          {/* Sleep */}
          <div className="rounded-2xl bg-white p-6 shadow-lg">

            <div className="text-4xl">😴</div>

            <h2 className="mt-4 text-lg font-bold text-gray-800">
              Sleep
            </h2>

            <p className="mt-2 text-3xl font-bold text-purple-600">
              {sleep}h
            </p>

            <p className="text-sm text-gray-500">
              last recorded sleep
            </p>

            <button
              type="button"
              onClick={() => setSleep((value) => value + 1)}
              className="mt-4 w-full rounded-xl bg-purple-600 py-2 font-semibold text-white hover:bg-purple-700"
            >
              + Add 1 Hour
            </button>

          </div>

          {/* Steps */}
          <div className="rounded-2xl bg-white p-6 shadow-lg">

            <div className="text-4xl">🏃</div>

            <h2 className="mt-4 text-lg font-bold text-gray-800">
              Activity
            </h2>

            <p className="mt-2 text-3xl font-bold text-green-600">
              {steps.toLocaleString()}
            </p>

            <p className="text-sm text-gray-500">
              steps today
            </p>

            <div className="mt-4 h-3 rounded-full bg-gray-200">
              <div
                className="h-3 rounded-full bg-green-500"
                style={{ width: `${stepProgress}%` }}
              />
            </div>

            <button
              type="button"
              onClick={() => setSteps((value) => value + 500)}
              className="mt-4 w-full rounded-xl bg-green-600 py-2 font-semibold text-white hover:bg-green-700"
            >
              + Add 500 Steps
            </button>

          </div>

          {/* Weight */}
          <div className="rounded-2xl bg-white p-6 shadow-lg">

            <div className="text-4xl">⚖️</div>

            <h2 className="mt-4 text-lg font-bold text-gray-800">
              Weight
            </h2>

            <p className="mt-2 text-3xl font-bold text-orange-500">
              60 kg
            </p>

            <p className="text-sm text-gray-500">
              current recorded weight
            </p>

            <button
              type="button"
              className="mt-4 w-full rounded-xl bg-orange-500 py-2 font-semibold text-white hover:bg-orange-600"
            >
              Update Weight
            </button>

          </div>

        </div>

        {/* Progress Section */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          {/* Daily Goals */}
          <div className="rounded-2xl bg-white p-7 shadow-lg">

            <h2 className="text-2xl font-bold text-gray-800">
              🎯 Daily Goals
            </h2>

            <div className="mt-6 space-y-6">

              <div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">
                    Water
                  </span>

                  <span className="text-gray-500">
                    {water}/{waterGoal} glasses
                  </span>
                </div>

                <div className="mt-2 h-3 rounded-full bg-gray-200">
                  <div
                    className="h-3 rounded-full bg-blue-500"
                    style={{ width: `${waterProgress}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">
                    Steps
                  </span>

                  <span className="text-gray-500">
                    {steps.toLocaleString()}/{stepGoal}
                  </span>
                </div>

                <div className="mt-2 h-3 rounded-full bg-gray-200">
                  <div
                    className="h-3 rounded-full bg-green-500"
                    style={{ width: `${stepProgress}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">
                    Sleep
                  </span>

                  <span className="text-gray-500">
                    {sleep} hours
                  </span>
                </div>

                <div className="mt-2 h-3 rounded-full bg-gray-200">
                  <div
                    className="h-3 rounded-full bg-purple-500"
                    style={{
                      width: `${Math.min((sleep / 8) * 100, 100)}%`,
                    }}
                  />
                </div>
              </div>

            </div>

          </div>

          {/* Health Summary */}
          <div className="rounded-2xl bg-white p-7 shadow-lg">

            <h2 className="text-2xl font-bold text-gray-800">
              ❤️ Health Summary
            </h2>

            <div className="mt-6 space-y-4">

              <div className="rounded-xl bg-green-50 p-4">
                <p className="font-semibold text-green-700">
                  ✓ Daily Activity
                </p>

                <p className="mt-1 text-sm text-gray-600">
                  Keep moving throughout the day.
                </p>
              </div>

              <div className="rounded-xl bg-blue-50 p-4">
                <p className="font-semibold text-blue-700">
                  💧 Hydration
                </p>

                <p className="mt-1 text-sm text-gray-600">
                  Continue monitoring your fluid intake.
                </p>
              </div>

              <div className="rounded-xl bg-purple-50 p-4">
                <p className="font-semibold text-purple-700">
                  😴 Sleep
                </p>

                <p className="mt-1 text-sm text-gray-600">
                  Maintaining a consistent sleep schedule can support
                  overall wellbeing.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Quick Actions */}
        <div className="mt-8 rounded-2xl bg-white p-7 shadow-lg">

          <h2 className="text-2xl font-bold text-gray-800">
            ⚡ Quick Actions
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <Link
              href="/assistant"
              className="rounded-xl bg-blue-50 p-5 text-center font-semibold text-blue-700 hover:bg-blue-100"
            >
              🤖 Ask AI Assistant
            </Link>

            <Link
              href="/symptom-checker"
              className="rounded-xl bg-red-50 p-5 text-center font-semibold text-red-700 hover:bg-red-100"
            >
              🩺 Check Symptoms
            </Link>

            <Link
              href="/nutrition"
              className="rounded-xl bg-green-50 p-5 text-center font-semibold text-green-700 hover:bg-green-100"
            >
              🥗 Nutrition & Fitness
            </Link>

            <Link
              href="/doctor-finder"
              className="rounded-xl bg-purple-50 p-5 text-center font-semibold text-purple-700 hover:bg-purple-100"
            >
              👨‍⚕️ Find a Doctor
            </Link>

          </div>

        </div>

        {/* Safety Notice */}
        <div className="mt-8 rounded-2xl border border-yellow-300 bg-yellow-50 p-6">

          <h2 className="text-xl font-bold text-yellow-800">
            ⚠️ Important
          </h2>

          <p className="mt-3 leading-7 text-yellow-900">
            This dashboard is for wellness tracking and general
            health information. It does not diagnose medical conditions
            or replace advice from a qualified healthcare professional.
          </p>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-6 text-center text-sm text-gray-500">
        © 2026 LifeCare AI - Healthcare Information Platform
      </footer>

    </main>
  );
}
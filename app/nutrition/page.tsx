"use client";

import { useState } from "react";
import Link from "next/link";

export default function NutritionPage() {
  const [goal, setGoal] = useState("");
  const [age, setAge] = useState("");
  const [activity, setActivity] = useState("");
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const getNutritionAdvice = async () => {
    if (!goal || !age || !activity) {
      setResult("Please select your goal, enter your age, and select your activity level.");
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const prompt = `
You are LifeCare AI Nutrition and Fitness Assistant.

User information:
Age: ${age}
Health/fitness goal: ${goal}
Activity level: ${activity}
Additional question: ${question || "No additional question."}

Provide general educational nutrition and fitness guidance.

Use this format:

🎯 Goal
Explain the user's selected goal.

🥗 Nutrition Guidance
Give practical healthy eating suggestions.

🏃 Fitness Guidance
Give safe general physical activity suggestions.

💧 Hydration
Give general hydration guidance without making precise medical claims.

🍽️ Example Day
Give a simple example of meals for one day.

⚠️ Important
Explain that this is general information and not personalized medical advice.

Rules:
- Do not diagnose diseases.
- Do not prescribe medicines.
- Do not recommend supplements as treatment.
- Do not give extreme diets.
- Do not encourage dangerous weight-loss methods.
- Encourage professional advice when the user has medical conditions, is pregnant, has an eating disorder, or has other special health needs.
`;

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: prompt,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to generate nutrition advice."
        );
      }

      setResult(data.reply);
    } catch (error) {
      setResult(
        error instanceof Error
          ? error.message
          : "Unable to connect to the AI service."
      );
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setGoal("");
    setAge("");
    setActivity("");
    setQuestion("");
    setResult("");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">

      {/* NAVBAR */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link
            href="/"
            className="text-2xl font-bold text-blue-600"
          >
            LifeCare AI
          </Link>

          <div className="flex gap-5 text-sm font-medium">

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
              Symptom Checker
            </Link>

            <Link
              href="/nutrition"
              className="text-green-600"
            >
              Nutrition
            </Link>

          </div>
        </div>
      </header>

      {/* MAIN */}
      <section className="mx-auto max-w-5xl px-6 py-12">

        {/* TITLE */}
        <div className="text-center">

          <div className="text-6xl">
            🥗
          </div>

          <h1 className="mt-4 text-4xl font-bold text-gray-800">
            Nutrition & Fitness Assistant
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Get simple AI-powered guidance for healthy eating,
            physical activity, hydration, and everyday wellness.
          </p>

        </div>

        {/* NOTICE */}
        <div className="mt-8 rounded-2xl border border-yellow-200 bg-yellow-50 p-5">

          <h2 className="font-bold text-yellow-800">
            ⚠️ Important Health Notice
          </h2>

          <p className="mt-2 text-sm leading-6 text-yellow-700">
            This tool provides general educational information.
            It does not replace professional medical or nutritional
            advice.
          </p>

        </div>

        {/* FORM */}
        <div className="mt-6 rounded-2xl bg-white p-6 shadow-lg">

          <h2 className="text-2xl font-bold text-gray-800">
            Tell us about yourself
          </h2>

          {/* AGE */}
          <div className="mt-6">

            <label className="mb-2 block font-semibold text-gray-700">
              Age
            </label>

            <input
              type="number"
              min="1"
              max="120"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

          </div>

          {/* GOAL */}
          <div className="mt-5">

            <label className="mb-2 block font-semibold text-gray-700">
              Your Goal
            </label>

            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >

              <option value="">
                Select your goal
              </option>

              <option value="general healthy lifestyle">
                General Healthy Lifestyle
              </option>

              <option value="healthy weight management">
                Healthy Weight Management
              </option>

              <option value="muscle and strength">
                Muscle & Strength
              </option>

              <option value="better fitness">
                Better Fitness
              </option>

              <option value="better energy">
                Better Energy
              </option>

            </select>

          </div>

          {/* ACTIVITY */}
          <div className="mt-5">

            <label className="mb-2 block font-semibold text-gray-700">
              Activity Level
            </label>

            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >

              <option value="">
                Select activity level
              </option>

              <option value="mostly sedentary">
                Mostly Sedentary
              </option>

              <option value="lightly active">
                Lightly Active
              </option>

              <option value="moderately active">
                Moderately Active
              </option>

              <option value="very active">
                Very Active
              </option>

            </select>

          </div>

          {/* QUESTION */}
          <div className="mt-5">

            <label className="mb-2 block font-semibold text-gray-700">
              Additional Question
            </label>

            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Example: What are some healthy Indian breakfast options?"
              className="min-h-28 w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

          </div>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-wrap gap-3">

            <button
              onClick={getNutritionAdvice}
              disabled={loading}
              className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Generating Advice..."
                : "Get AI Guidance"}
            </button>

            <button
              onClick={clearForm}
              className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100"
            >
              Clear
            </button>

          </div>

        </div>

        {/* LOADING */}
        {loading && (
          <div className="mt-6 rounded-2xl bg-white p-6 text-center shadow">

            <div className="animate-pulse text-green-600">
              🧠 LifeCare AI is preparing your guidance...
            </div>

          </div>
        )}

        {/* RESULT */}
        {result && !loading && (
          <div className="mt-6 rounded-2xl bg-white p-6 shadow-lg">

            <h2 className="mb-5 text-2xl font-bold text-gray-800">
              🥗 Your AI Wellness Guidance
            </h2>

            <div className="whitespace-pre-wrap leading-7 text-gray-700">
              {result}
            </div>

          </div>
        )}

      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white py-6 text-center text-sm text-gray-500">
        © 2026 LifeCare AI — Healthy Living Companion
      </footer>

    </main>
  );
}
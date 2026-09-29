"use client";

import { useState } from "react";
import Link from "next/link";

export default function MentalWellness() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const getSupport = async () => {
    if (!message.trim()) {
      setResult("Please describe how you are feeling first.");
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `
You are LifeCare AI Mental Wellness Assistant.

The user says:
${message}

Provide supportive, general wellness information.

Please structure your response as:

💙 Understanding how you feel
- Acknowledge the user's feelings without diagnosing them.

🌿 Things you can try
- Give simple and safe wellness suggestions.

🧘 Relaxation technique
- Give one simple breathing, grounding, or relaxation exercise.

💬 When to talk to someone
- Explain when talking with a trusted person, counselor, psychologist,
  doctor, or other qualified professional may be helpful.

🚨 Urgent help
- If the user's message suggests immediate danger, self-harm,
  suicidal thoughts, or an immediate safety concern, encourage them
  to contact local emergency services or a crisis service and to stay
  with a trusted person if possible.

Important:
- Do not diagnose mental health conditions.
- Do not prescribe medication.
- Do not claim to replace a mental health professional.
- Do not make the user feel judged.
- Keep the language simple, calm, supportive, and respectful.
          `,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to connect to the AI service."
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

  const clearWellness = () => {
    setMessage("");
    setResult("");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Navbar */}
      <nav className="border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600"
          >
            LifeCare AI
          </Link>

          <div className="flex gap-6 text-sm font-medium">
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
              href="/mental-wellness"
              className="text-purple-600"
            >
              Wellness
            </Link>
          </div>
        </div>
      </nav>

      {/* Main */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-10 text-center">
          <div className="mb-4 text-6xl">🧘</div>

          <h1 className="text-4xl font-bold text-gray-800">
            Mental Wellness Assistant
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            A supportive space for general wellness, relaxation,
            stress management, and healthy daily habits.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mb-6 rounded-xl border border-purple-200 bg-purple-50 p-5">
          <h2 className="font-bold text-purple-800">
            💜 Important
          </h2>

          <p className="mt-2 text-sm text-purple-700">
            This assistant provides general wellness information.
            It does not diagnose mental health conditions or replace
            professional mental health care.
          </p>
        </div>

        {/* Quick Topics */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "I feel stressed",
            "I have trouble sleeping",
            "I feel overwhelmed",
            "Help me relax",
          ].map((topic) => (
            <button
              key={topic}
              onClick={() => setMessage(topic)}
              className="rounded-xl bg-white p-4 text-left font-medium text-gray-700 shadow transition hover:-translate-y-1 hover:shadow-md"
            >
              {topic}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <label
            htmlFor="wellness"
            className="mb-3 block text-lg font-semibold text-gray-800"
          >
            How are you feeling?
          </label>

          <textarea
            id="wellness"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Example: I have been feeling stressed because of exams..."
            className="min-h-40 w-full rounded-xl border border-gray-300 p-4 text-gray-800 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
          />

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              onClick={getSupport}
              disabled={loading}
              className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Thinking..." : "Get Wellness Support"}
            </button>

            <button
              onClick={clearWellness}
              className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="mt-6 rounded-2xl bg-white p-6 text-center shadow">
            <div className="animate-pulse text-purple-600">
              🧠 LifeCare AI is preparing supportive guidance...
            </div>
          </div>
        )}

        {/* Result */}
        {result && !loading && (
          <div className="mt-6 rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              💙 Wellness Support
            </h2>

            <div className="whitespace-pre-wrap leading-7 text-gray-700">
              {result}
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="mt-10 border-t bg-white py-6 text-center text-sm text-gray-500">
        © 2026 LifeCare AI — General wellness information only.
      </footer>
    </main>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";

export default function SymptomChecker() {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const checkSymptoms = async () => {
    if (!symptoms.trim()) {
      setResult("Please enter your symptoms first.");
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
You are the LifeCare AI Symptom Checker.

The user has entered these symptoms:
${symptoms}

Provide general health information only.

Please answer in this format:

Possible explanations:
- Give a few possible general explanations.

What the user can do:
- Give safe general self-care suggestions.

When to see a doctor:
- Explain when professional medical advice is appropriate.

Emergency warning:
- Mention important warning signs that require urgent medical attention.

Important:
- Do not diagnose the user.
- Do not prescribe medicines.
- Do not tell the user to stop prescribed medicines.
- Clearly state that this is general information and not a medical diagnosis.
          `,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to check symptoms.");
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

  const clearChecker = () => {
    setSymptoms("");
    setResult("");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
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
            <Link href="/" className="text-gray-600 hover:text-blue-600">
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
              className="text-blue-600"
            >
              Symptom Checker
            </Link>
          </div>
        </div>
      </nav>

      {/* Main */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-10 text-center">
          <div className="mb-4 text-6xl">🩺</div>

          <h1 className="text-4xl font-bold text-gray-800">
            AI Symptom Checker
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Enter your symptoms and LifeCare AI will provide general
            health information and guidance.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mb-6 rounded-xl border border-yellow-200 bg-yellow-50 p-5">
          <h2 className="font-bold text-yellow-800">
            ⚠️ Important
          </h2>

          <p className="mt-2 text-sm text-yellow-700">
            This tool provides general health information only. It does
            not provide a medical diagnosis or replace a qualified
            healthcare professional.
          </p>
        </div>

        {/* Input Card */}
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <label
            htmlFor="symptoms"
            className="mb-3 block text-lg font-semibold text-gray-800"
          >
            Describe your symptoms
          </label>

          <textarea
            id="symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder="Example: I have a headache, tiredness and mild fever since yesterday..."
            className="min-h-40 w-full rounded-xl border border-gray-300 p-4 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              onClick={checkSymptoms}
              disabled={loading}
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Checking..." : "Check Symptoms"}
            </button>

            <button
              onClick={clearChecker}
              className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="mt-6 rounded-2xl bg-white p-6 text-center shadow">
            <div className="animate-pulse text-blue-600">
              🧠 LifeCare AI is analyzing your symptoms...
            </div>
          </div>
        )}

        {/* Result */}
        {result && !loading && (
          <div className="mt-6 rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              🩺 Health Information
            </h2>

            <div className="whitespace-pre-wrap leading-7 text-gray-700">
              {result}
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="mt-10 border-t bg-white py-6 text-center text-sm text-gray-500">
        © 2026 LifeCare AI — General health information only.
      </footer>
    </main>
  );
}
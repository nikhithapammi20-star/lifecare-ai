"use client";

import { useState } from "react";
import Link from "next/link";

const symptomsList = [
  "Fever",
  "Headache",
  "Cough",
  "Cold",
  "Sore throat",
  "Stomach pain",
  "Vomiting",
  "Diarrhea",
  "Fatigue",
  "Body pain",
  "Dizziness",
  "Shortness of breath",
];

export default function SymptomsPage() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [result, setResult] = useState("");

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms((current) =>
      current.includes(symptom)
        ? current.filter((item) => item !== symptom)
        : [...current, symptom]
    );
  };

  const analyzeSymptoms = () => {
    if (selectedSymptoms.length === 0) {
      setResult("Please select at least one symptom.");
      return;
    }

    setResult(
      `You selected: ${selectedSymptoms.join(
        ", "
      )}. These symptoms can have many different causes. This tool provides general information only and cannot diagnose a medical condition. Please consult a qualified healthcare professional for proper evaluation.`
    );
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

          <Link
            href="/"
            className="text-2xl font-bold text-emerald-600"
          >
            LifeCare AI
          </Link>

          <Link
            href="/dashboard"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-100"
          >
            ← Dashboard
          </Link>

        </div>
      </header>

      {/* Page */}
      <section className="mx-auto max-w-4xl px-6 py-12">

        <div className="text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-4xl">
            🔍
          </div>

          <h1 className="mt-6 text-4xl font-bold">
            Symptom Checker
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Select the symptoms you are experiencing to receive general
            health information.
          </p>

        </div>

        {/* Symptoms */}
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">

          <h2 className="text-xl font-bold">
            Select Your Symptoms
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">

            {symptomsList.map((symptom) => {

              const selected = selectedSymptoms.includes(symptom);

              return (
                <button
                  key={symptom}
                  onClick={() => toggleSymptom(symptom)}
                  className={`rounded-xl border p-4 text-left font-medium transition ${
                    selected
                      ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                      : "border-slate-200 bg-white hover:border-emerald-300 hover:bg-emerald-50"
                  }`}
                >
                  <span className="mr-2">
                    {selected ? "✓" : "○"}
                  </span>

                  {symptom}
                </button>
              );

            })}

          </div>

          <button
            onClick={analyzeSymptoms}
            className="mt-8 w-full rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
          >
            Analyze Symptoms 🔍
          </button>

        </div>

        {/* Selected symptoms */}
        {selectedSymptoms.length > 0 && (
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">

            <h2 className="font-bold">
              Selected Symptoms
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">

              {selectedSymptoms.map((symptom) => (
                <span
                  key={symptom}
                  className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700"
                >
                  {symptom}
                </span>
              ))}

            </div>

          </div>
        )}

        {/* Result */}
        {result && (
          <div className="mt-6 rounded-3xl border border-emerald-100 bg-emerald-50 p-6">

            <div className="flex gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xl text-white">
                🤖
              </div>

              <div>

                <h2 className="text-lg font-bold text-emerald-800">
                  LifeCare AI Analysis
                </h2>

                <p className="mt-3 leading-7 text-emerald-900">
                  {result}
                </p>

              </div>

            </div>

          </div>
        )}

        {/* Emergency Notice */}
        <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-5 text-sm leading-6 text-red-800">

          <strong>🚨 Emergency Notice:</strong>{" "}
          If you experience severe difficulty breathing, chest pain,
          unconsciousness, severe bleeding, or another medical emergency,
          seek immediate emergency medical care rather than relying on this
          tool.

        </div>

        {/* Disclaimer */}
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-800">

          <strong>Important:</strong> This symptom checker is for general
          informational purposes only. It does not provide a medical
          diagnosis or replace advice from a qualified healthcare professional.

        </div>

      </section>

    </main>
  );
}
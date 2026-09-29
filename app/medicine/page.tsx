"use client";

import { useState } from "react";
import Link from "next/link";

const medicines = [
  {
    name: "Paracetamol",
    use: "Commonly used to reduce fever and relieve mild to moderate pain.",
    precaution:
      "Use only according to the label or advice from a healthcare professional. Avoid taking more than the recommended dose.",
  },
  {
    name: "Cetirizine",
    use: "Commonly used to relieve allergy symptoms such as sneezing, runny nose, and itching.",
    precaution:
      "May cause drowsiness in some people. Follow the recommended dosage and ask a healthcare professional if unsure.",
  },
  {
    name: "ORS",
    use: "Used to help replace fluids and electrolytes lost during dehydration.",
    precaution:
      "Prepare and use according to the instructions on the packet. Seek medical care for severe dehydration.",
  },
  {
    name: "Antacid",
    use: "Commonly used for temporary relief from acidity and heartburn.",
    precaution:
      "Do not use regularly without medical advice, especially if symptoms continue or become severe.",
  },
];

export default function MedicinePage() {
  const [search, setSearch] = useState("");
  const [selectedMedicine, setSelectedMedicine] = useState<
    (typeof medicines)[0] | null
  >(null);

  const searchMedicine = () => {
    const result = medicines.find(
      (medicine) =>
        medicine.name.toLowerCase() === search.trim().toLowerCase()
    );

    setSelectedMedicine(result || null);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-2xl font-bold text-emerald-600"
          >
            LifeCare AI
          </Link>

          <Link
            href="/dashboard"
            className="rounded-lg bg-emerald-600 px-5 py-2 font-medium text-white hover:bg-emerald-700"
          >
            Dashboard
          </Link>
        </div>
      </nav>

      {/* Main */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="text-center">
          <div className="text-5xl">💊</div>

          <h1 className="mt-4 text-4xl font-bold">
            Medicine Information
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Search for general information about commonly used medicines
            and healthcare products.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-10 flex max-w-2xl gap-3">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchMedicine();
              }
            }}
            placeholder="Enter medicine name..."
            className="flex-1 rounded-xl border border-slate-300 bg-white px-5 py-3 outline-none focus:border-emerald-500"
          />

          <button
            onClick={searchMedicine}
            className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
          >
            Search
          </button>
        </div>

        {/* Medicine Result */}
        {selectedMedicine && (
          <div className="mt-10 rounded-2xl border border-emerald-200 bg-white p-8 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-emerald-100 p-4 text-3xl">
                💊
              </div>

              <div>
                <h2 className="text-2xl font-bold text-emerald-700">
                  {selectedMedicine.name}
                </h2>

                <p className="text-sm text-slate-500">
                  General medicine information
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-bold">Common Use</h3>

              <p className="mt-2 leading-7 text-slate-600">
                {selectedMedicine.use}
              </p>
            </div>

            <div className="mt-6 rounded-xl bg-amber-50 p-5">
              <h3 className="font-bold text-amber-800">
                ⚠️ Precautions
              </h3>

              <p className="mt-2 leading-7 text-amber-900">
                {selectedMedicine.precaution}
              </p>
            </div>
          </div>
        )}

        {/* Not Found */}
        {search.trim() !== "" && !selectedMedicine && (
          <div className="mt-8 rounded-xl bg-white p-6 text-center shadow">
            <p className="text-slate-600">
              Medicine not found in the demo database.
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Try: Paracetamol, Cetirizine, ORS, or Antacid.
            </p>
          </div>
        )}

        {/* Available Medicines */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold">
            Common Medicines
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {medicines.map((medicine) => (
              <button
                key={medicine.name}
                onClick={() => {
                  setSearch(medicine.name);
                  setSelectedMedicine(medicine);
                }}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-3xl">💊</div>

                <h3 className="mt-3 text-xl font-bold">
                  {medicine.name}
                </h3>

                <p className="mt-2 text-slate-600">
                  {medicine.use}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 rounded-2xl border border-red-200 bg-red-50 p-6">
          <h3 className="font-bold text-red-700">
            Important Medical Disclaimer
          </h3>

          <p className="mt-2 leading-7 text-red-900">
            This page provides general educational information only.
            It does not provide a diagnosis or prescribe medicines.
            Always follow the medicine label and consult a qualified
            healthcare professional before starting, stopping, or
            changing medication.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 bg-slate-950 py-8 text-center text-slate-400">
        <p>© 2026 LifeCare AI. All rights reserved.</p>
      </footer>
    </main>
  );
}
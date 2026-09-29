"use client";

import { useState } from "react";
import Link from "next/link";

export default function HealthPage() {
  const [heartRate, setHeartRate] = useState("");
  const [weight, setWeight] = useState("");
  const [bloodPressure, setBloodPressure] = useState("");
  const [sleep, setSleep] = useState("");
  const [water, setWater] = useState("");
  const [steps, setSteps] = useState("");

  const [saved, setSaved] = useState(false);

  const saveHealthData = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
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
      <section className="mx-auto max-w-6xl px-6 py-12">
        {/* Heading */}
        <div className="text-center">
          <div className="text-5xl">📊</div>

          <h1 className="mt-4 text-4xl font-bold">
            Health Tracking
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Track important wellness information and monitor your
            daily health habits in one place.
          </p>
        </div>

        {/* Health Form */}
        <div className="mt-12 rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold">
            Enter Your Health Information
          </h2>

          <p className="mt-2 text-slate-500">
            Enter your latest health and wellness information.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Heart Rate */}
            <div>
              <label className="font-semibold">
                ❤️ Heart Rate
              </label>

              <div className="mt-2 flex">
                <input
                  type="number"
                  value={heartRate}
                  onChange={(e) => setHeartRate(e.target.value)}
                  placeholder="e.g. 72"
                  className="w-full rounded-l-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
                />

                <span className="flex items-center rounded-r-xl bg-slate-100 px-4 text-sm text-slate-500">
                  BPM
                </span>
              </div>
            </div>

            {/* Weight */}
            <div>
              <label className="font-semibold">
                ⚖️ Weight
              </label>

              <div className="mt-2 flex">
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="e.g. 60"
                  className="w-full rounded-l-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
                />

                <span className="flex items-center rounded-r-xl bg-slate-100 px-4 text-sm text-slate-500">
                  kg
                </span>
              </div>
            </div>

            {/* Blood Pressure */}
            <div>
              <label className="font-semibold">
                🩸 Blood Pressure
              </label>

              <div className="mt-2 flex">
                <input
                  type="text"
                  value={bloodPressure}
                  onChange={(e) => setBloodPressure(e.target.value)}
                  placeholder="e.g. 120/80"
                  className="w-full rounded-l-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
                />

                <span className="flex items-center rounded-r-xl bg-slate-100 px-4 text-sm text-slate-500">
                  mmHg
                </span>
              </div>
            </div>

            {/* Sleep */}
            <div>
              <label className="font-semibold">
                😴 Sleep
              </label>

              <div className="mt-2 flex">
                <input
                  type="number"
                  step="0.5"
                  value={sleep}
                  onChange={(e) => setSleep(e.target.value)}
                  placeholder="e.g. 7"
                  className="w-full rounded-l-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
                />

                <span className="flex items-center rounded-r-xl bg-slate-100 px-4 text-sm text-slate-500">
                  hours
                </span>
              </div>
            </div>

            {/* Water */}
            <div>
              <label className="font-semibold">
                💧 Water Intake
              </label>

              <div className="mt-2 flex">
                <input
                  type="number"
                  step="0.1"
                  value={water}
                  onChange={(e) => setWater(e.target.value)}
                  placeholder="e.g. 2"
                  className="w-full rounded-l-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
                />

                <span className="flex items-center rounded-r-xl bg-slate-100 px-4 text-sm text-slate-500">
                  liters
                </span>
              </div>
            </div>

            {/* Steps */}
            <div>
              <label className="font-semibold">
                🚶 Daily Steps
              </label>

              <div className="mt-2 flex">
                <input
                  type="number"
                  value={steps}
                  onChange={(e) => setSteps(e.target.value)}
                  placeholder="e.g. 5000"
                  className="w-full rounded-l-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
                />

                <span className="flex items-center rounded-r-xl bg-slate-100 px-4 text-sm text-slate-500">
                  steps
                </span>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={saveHealthData}
            className="mt-8 w-full rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
          >
            Save Health Data
          </button>

          {/* Success Message */}
          {saved && (
            <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center text-emerald-700">
              ✅ Health information saved successfully!
            </div>
          )}
        </div>

        {/* Current Information */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold">
            Current Health Information
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <HealthCard
              icon="❤️"
              title="Heart Rate"
              value={heartRate ? `${heartRate} BPM` : "--"}
            />

            <HealthCard
              icon="⚖️"
              title="Weight"
              value={weight ? `${weight} kg` : "--"}
            />

            <HealthCard
              icon="🩸"
              title="Blood Pressure"
              value={bloodPressure || "--"}
            />

            <HealthCard
              icon="😴"
              title="Sleep"
              value={sleep ? `${sleep} hours` : "--"}
            />

            <HealthCard
              icon="💧"
              title="Water"
              value={water ? `${water} L` : "--"}
            />

            <HealthCard
              icon="🚶"
              title="Steps"
              value={steps || "--"}
            />
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h3 className="font-bold text-amber-800">
            ⚠️ Important
          </h3>

          <p className="mt-2 leading-7 text-amber-900">
            Health tracking information is for wellness and
            informational purposes. It does not replace professional
            medical evaluation or diagnosis. If you have concerning
            symptoms or abnormal readings, contact a qualified
            healthcare professional.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 text-center text-slate-400">
        <p>© 2026 LifeCare AI. All rights reserved.</p>
      </footer>
    </main>
  );
}

function HealthCard({
  icon,
  title,
  value,
}: {
  icon: string;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-3xl">{icon}</div>

      <p className="mt-4 text-sm text-slate-500">
        {title}
      </p>

      <p className="mt-1 text-2xl font-bold text-emerald-600">
        {value}
      </p>
    </div>
  );
}
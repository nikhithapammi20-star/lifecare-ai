"use client";

import { useState } from "react";
import Link from "next/link";

const hospitals = [
  {
    name: "City General Hospital",
    type: "Hospital",
    location: "Ongole, Andhra Pradesh",
    phone: "9876543210",
  },
  {
    name: "LifeCare Medical Center",
    type: "Medical Center",
    location: "Ongole, Andhra Pradesh",
    phone: "9876512345",
  },
  {
    name: "Community Health Clinic",
    type: "Clinic",
    location: "Ongole, Andhra Pradesh",
    phone: "9988766554",
  },
  {
    name: "Apollo Healthcare",
    type: "Hospital",
    location: "Vijayawada, Andhra Pradesh",
    phone: "9123456789",
  },
];

export default function HospitalsPage() {
  const [search, setSearch] = useState("");

  const filteredHospitals = hospitals.filter((hospital) => {
    const text =
      hospital.name +
      " " +
      hospital.type +
      " " +
      hospital.location;

    return text.toLowerCase().includes(search.toLowerCase());
  });

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
            className="rounded-lg bg-emerald-600 px-5 py-2 font-medium text-white"
          >
            Dashboard
          </Link>

        </div>
      </nav>

      {/* Main */}
      <section className="mx-auto max-w-6xl px-6 py-12">

        {/* Title */}
        <div className="text-center">

          <div className="text-5xl">🏥</div>

          <h1 className="mt-4 text-4xl font-bold">
            Find Healthcare
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Find hospitals, clinics and healthcare centers.
          </p>

        </div>

        {/* Search */}
        <div className="mx-auto mt-10 max-w-2xl">

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search hospital or location..."
            className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 outline-none focus:border-emerald-500"
          />

        </div>

        {/* Emergency Box */}
        <div className="mt-10 rounded-2xl border border-red-200 bg-red-50 p-6">

          <h2 className="text-xl font-bold text-red-700">
            🚨 Medical Emergency?
          </h2>

          <p className="mt-2 leading-7 text-red-900">
            If someone has severe difficulty breathing, chest pain,
            unconsciousness, severe bleeding, or another
            life-threatening emergency, seek immediate emergency
            medical care or contact your local emergency service.
          </p>

        </div>

        {/* Hospitals */}
        <div className="mt-12">

          <h2 className="text-2xl font-bold">
            Healthcare Centers
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">

            {filteredHospitals.map((hospital) => (

              <div
                key={hospital.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >

                <div className="flex items-start gap-4">

                  <div className="rounded-xl bg-emerald-100 p-4 text-3xl">
                    🏥
                  </div>

                  <div>

                    <h3 className="text-xl font-bold">
                      {hospital.name}
                    </h3>

                    <p className="mt-1 text-emerald-600">
                      {hospital.type}
                    </p>

                  </div>

                </div>

                <div className="mt-6 space-y-3">

                  <p className="text-slate-600">
                    📍 {hospital.location}
                  </p>

                  <p className="text-slate-600">
                    📞 {hospital.phone}
                  </p>

                </div>

                <div className="mt-6 flex gap-3">

                  <a
                    href={`tel:${hospital.phone}`}
                    className="flex-1 rounded-xl bg-emerald-600 px-4 py-3 text-center font-semibold text-white"
                  >
                    📞 Call
                  </a>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      hospital.name + " " + hospital.location
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-xl border border-slate-300 px-4 py-3 text-center font-semibold"
                  >
                    📍 Map
                  </a>

                </div>

              </div>

            ))}

          </div>

          {filteredHospitals.length === 0 && (

            <div className="mt-6 rounded-2xl bg-white p-10 text-center">

              <div className="text-4xl">🔍</div>

              <h3 className="mt-4 text-xl font-bold">
                No healthcare center found
              </h3>

              <p className="mt-2 text-slate-500">
                Try searching for another location.
              </p>

            </div>

          )}

        </div>

        {/* Future Feature */}
        <div className="mt-12 rounded-2xl bg-emerald-600 p-8 text-center text-white">

          <div className="text-4xl">📍</div>

          <h2 className="mt-4 text-2xl font-bold">
            Nearby Healthcare
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-emerald-50">
            Later, we can connect LifeCare AI to a real maps and
            healthcare-location service to show nearby hospitals
            automatically.
          </p>

        </div>

        {/* Disclaimer */}
        <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6">

          <h3 className="font-bold text-amber-800">
            ⚠️ Important
          </h3>

          <p className="mt-2 leading-7 text-amber-900">
            The healthcare centers shown here are sample data for
            development and testing. Please verify real hospital
            details before using them.
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
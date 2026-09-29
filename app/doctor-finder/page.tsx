"use client";

import Link from "next/link";
import { useState } from "react";

const doctors = [
  {
    name: "Dr. Ananya Rao",
    specialty: "General Physician",
    hospital: "City Care Hospital",
    location: "Vijayawada",
  },
  {
    name: "Dr. Rahul Kumar",
    specialty: "Cardiologist",
    hospital: "Heart Care Clinic",
    location: "Vijayawada",
  },
  {
    name: "Dr. Priya Sharma",
    specialty: "Dermatologist",
    hospital: "Skin and Wellness Clinic",
    location: "Vijayawada",
  },
  {
    name: "Dr. Arjun Reddy",
    specialty: "Pediatrician",
    hospital: "Children Care Hospital",
    location: "Vijayawada",
  },
];

export default function DoctorFinderPage() {
  const [specialty, setSpecialty] = useState("");
  const [location, setLocation] = useState("");
  const [searched, setSearched] = useState(false);

  const filteredDoctors = doctors.filter((doctor) => {
    const specialtyMatch = doctor.specialty
      .toLowerCase()
      .includes(specialty.toLowerCase());

    const locationMatch = doctor.location
      .toLowerCase()
      .includes(location.toLowerCase());

    return specialtyMatch && locationMatch;
  });

  function handleSearch() {
    setSearched(true);
  }

  function handleClear() {
    setSpecialty("");
    setLocation("");
    setSearched(false);
  }

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
              className="font-bold text-blue-600"
            >
              Doctor Finder
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

      {/* Main */}
      <section className="mx-auto max-w-6xl px-6 py-12">

        {/* Hero */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-center text-white shadow-xl">

          <div className="text-6xl">👨‍⚕️</div>

          <h1 className="mt-4 text-4xl font-bold">
            Doctor Finder
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg">
            Find healthcare professionals based on specialty and location.
          </p>

        </div>

        {/* Search */}
        <div className="mt-8 rounded-2xl bg-white p-7 shadow-lg">

          <h2 className="text-2xl font-bold text-gray-800">
            🔎 Find a Doctor
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">

            <input
              type="text"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              placeholder="Search specialty e.g. Cardiologist"
              className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter city or location"
              className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />

          </div>

          <div className="mt-5 flex flex-wrap gap-3">

            <button
              type="button"
              onClick={handleSearch}
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700"
            >
              🔎 Search Doctors
            </button>

            <button
              type="button"
              onClick={handleClear}
              className="rounded-xl bg-gray-200 px-7 py-3 font-semibold text-gray-700 hover:bg-gray-300"
            >
              Clear
            </button>

          </div>

        </div>

        {/* Results */}
        <div className="mt-8">

          <h2 className="text-2xl font-bold text-gray-800">
            👩‍⚕️ Healthcare Professionals
          </h2>

          {searched && (
            <p className="mt-2 text-gray-600">
              {filteredDoctors.length} doctor(s) found.
            </p>
          )}

          <div className="mt-5 grid gap-6 md:grid-cols-2">

            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.name}
                className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex items-start gap-4">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl">
                    👨‍⚕️
                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-gray-800">
                      {doctor.name}
                    </h3>

                    <p className="mt-1 font-medium text-blue-600">
                      {doctor.specialty}
                    </p>

                    <p className="mt-2 text-gray-600">
                      🏥 {doctor.hospital}
                    </p>

                    <p className="mt-1 text-gray-600">
                      📍 {doctor.location}
                    </p>

                  </div>

                </div>

                <div className="mt-5 flex gap-3">

                  <a
                    href="tel:112"
                    className="rounded-xl bg-green-600 px-5 py-2 font-semibold text-white hover:bg-green-700"
                  >
                    📞 Contact
                  </a>

                  <button
                    type="button"
                    className="rounded-xl bg-blue-100 px-5 py-2 font-semibold text-blue-700 hover:bg-blue-200"
                  >
                    View Details
                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* No Results */}
          {searched && filteredDoctors.length === 0 && (
            <div className="mt-6 rounded-2xl bg-white p-8 text-center shadow-lg">

              <div className="text-5xl">🔍</div>

              <h3 className="mt-4 text-xl font-bold text-gray-800">
                No doctors found
              </h3>

              <p className="mt-2 text-gray-600">
                Try another specialty or location.
              </p>

            </div>
          )}

        </div>

        {/* Safety Notice */}
        <div className="mt-8 rounded-2xl border border-yellow-300 bg-yellow-50 p-6">

          <h2 className="text-xl font-bold text-yellow-800">
            ⚠️ Important
          </h2>

          <p className="mt-3 leading-7 text-yellow-900">
            The doctors displayed here are sample entries for the
            LifeCare AI project. Verify doctor information, availability,
            qualifications, and location before visiting.
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
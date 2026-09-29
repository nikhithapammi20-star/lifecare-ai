"use client";

import { useState } from "react";
import Link from "next/link";

type Alert = {
  id: number;
  title: string;
  time: string;
  type: string;
  enabled: boolean;
};

export default function AlertsPage() {
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: 1,
      title: "Drink Water",
      time: "10:00 AM",
      type: "Water",
      enabled: true,
    },
    {
      id: 2,
      title: "Take Medicine",
      time: "1:00 PM",
      type: "Medicine",
      enabled: true,
    },
    {
      id: 3,
      title: "Evening Walk",
      time: "6:00 PM",
      type: "Exercise",
      enabled: false,
    },
  ]);

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [type, setType] = useState("Medicine");

  const addAlert = () => {
    if (title.trim() === "" || time === "") {
      return;
    }

    const newAlert: Alert = {
      id: Date.now(),
      title: title,
      time: time,
      type: type,
      enabled: true,
    };

    setAlerts([...alerts, newAlert]);

    setTitle("");
    setTime("");
    setType("Medicine");
  };

  const toggleAlert = (id: number) => {
    setAlerts(
      alerts.map((alert) =>
        alert.id === id
          ? { ...alert, enabled: !alert.enabled }
          : alert
      )
    );
  };

  const deleteAlert = (id: number) => {
    setAlerts(alerts.filter((alert) => alert.id !== id));
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

        {/* Title */}
        <div className="text-center">

          <div className="text-5xl">🚨</div>

          <h1 className="mt-4 text-4xl font-bold">
            Health Alerts
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Create reminders for medicines, water intake,
            exercise, checkups, and other health activities.
          </p>

        </div>

        {/* Add Alert */}
        <div className="mt-12 rounded-3xl bg-white p-8 shadow-lg">

          <h2 className="text-2xl font-bold">
            Add New Reminder
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">

            {/* Title */}
            <div>
              <label className="font-semibold">
                Reminder
              </label>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Take Medicine"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
              />
            </div>

            {/* Time */}
            <div>
              <label className="font-semibold">
                Time
              </label>

              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
              />
            </div>

            {/* Type */}
            <div>
              <label className="font-semibold">
                Type
              </label>

              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-emerald-500"
              >
                <option>Medicine</option>
                <option>Water</option>
                <option>Exercise</option>
                <option>Checkup</option>
                <option>Other</option>
              </select>
            </div>

          </div>

          <button
            onClick={addAlert}
            className="mt-6 w-full rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
          >
            + Add Reminder
          </button>

        </div>

        {/* Alerts List */}
        <div className="mt-10">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              Your Reminders
            </h2>

            <span className="text-sm text-slate-500">
              {alerts.length} reminders
            </span>

          </div>

          <div className="mt-6 space-y-4">

            {alerts.map((alert) => (

              <div
                key={alert.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                  <div className="flex items-center gap-4">

                    <div className="rounded-xl bg-emerald-100 p-4 text-2xl">
                      {alert.type === "Medicine"
                        ? "💊"
                        : alert.type === "Water"
                        ? "💧"
                        : alert.type === "Exercise"
                        ? "🏃"
                        : alert.type === "Checkup"
                        ? "🩺"
                        : "🔔"}
                    </div>

                    <div>

                      <h3 className="text-lg font-bold">
                        {alert.title}
                      </h3>

                      <p className="mt-1 text-slate-500">
                        {alert.time} • {alert.type}
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-3">

                    <button
                      onClick={() => toggleAlert(alert.id)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold ${
                        alert.enabled
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {alert.enabled ? "ON" : "OFF"}
                    </button>

                    <button
                      onClick={() => deleteAlert(alert.id)}
                      className="rounded-xl bg-red-50 px-4 py-2 font-semibold text-red-600 hover:bg-red-100"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </div>

            ))}

            {alerts.length === 0 && (

              <div className="rounded-2xl bg-white p-10 text-center">

                <div className="text-4xl">🔔</div>

                <h3 className="mt-4 text-xl font-bold">
                  No reminders
                </h3>

                <p className="mt-2 text-slate-500">
                  Add your first health reminder above.
                </p>

              </div>

            )}

          </div>

        </div>

        {/* Information */}
        <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50 p-6">

          <h3 className="font-bold text-blue-800">
            🔔 Reminder Information
          </h3>

          <p className="mt-2 leading-7 text-blue-900">
            This version manages reminders within the website.
            Later, we can add browser notifications, email
            notifications, or mobile push notifications.
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
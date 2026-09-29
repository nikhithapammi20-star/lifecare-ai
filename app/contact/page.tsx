"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link
            href="/"
            className="text-2xl font-bold text-emerald-600"
          >
            LifeCare AI
          </Link>

          <div className="hidden gap-8 md:flex">

            <Link href="/" className="hover:text-emerald-600">
              Home
            </Link>

            <Link href="/features" className="hover:text-emerald-600">
              Features
            </Link>

            <Link href="/about" className="hover:text-emerald-600">
              About
            </Link>

            <Link
              href="/contact"
              className="font-semibold text-emerald-600"
            >
              Contact
            </Link>

          </div>

          <Link
            href="/dashboard"
            className="rounded-full bg-emerald-600 px-5 py-2.5 font-medium text-white hover:bg-emerald-700"
          >
            Dashboard
          </Link>

        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-16 text-center">

        <p className="font-semibold text-emerald-600">
          CONTACT LIFECARE AI
        </p>

        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          How Can We Help?
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Have a question, suggestion, or feedback about LifeCare AI?
          Send us a message.
        </p>

      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-6xl px-6 pb-20">

        <div className="grid gap-8 md:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-3xl bg-emerald-600 p-8 text-white">

            <h2 className="text-3xl font-bold">
              Get in Touch
            </h2>

            <p className="mt-4 leading-7 text-emerald-50">
              We welcome your questions, suggestions, and feedback
              about the LifeCare AI platform.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex gap-4">
                <div className="text-3xl">📧</div>

                <div>
                  <h3 className="font-bold">
                    Email
                  </h3>

                  <p className="mt-1 text-emerald-50">
                    support@lifecareai.example
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">📍</div>

                <div>
                  <h3 className="font-bold">
                    Location
                  </h3>

                  <p className="mt-1 text-emerald-50">
                    India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">💬</div>

                <div>
                  <h3 className="font-bold">
                    Feedback
                  </h3>

                  <p className="mt-1 text-emerald-50">
                    Your feedback helps improve LifeCare AI.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <h2 className="text-2xl font-bold">
              Send a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-5"
            >

              {/* Name */}
              <div>
                <label className="font-semibold">
                  Name
                </label>

                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="font-semibold">
                  Email
                </label>

                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="font-semibold">
                  Subject
                </label>

                <input
                  type="text"
                  required
                  placeholder="Enter subject"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="font-semibold">
                  Message
                </label>

                <textarea
                  required
                  rows={5}
                  placeholder="Write your message..."
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
              >
                Send Message
              </button>

            </form>

            {submitted && (
              <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center text-emerald-700">
                ✅ Thank you! Your message has been submitted.
              </div>
            )}

          </div>

        </div>

      </section>

      {/* Emergency Notice */}
      <section className="mx-auto max-w-6xl px-6 pb-16">

        <div className="rounded-2xl border border-red-200 bg-red-50 p-6">

          <h3 className="font-bold text-red-700">
            🚨 Medical Emergency
          </h3>

          <p className="mt-2 leading-7 text-red-900">
            Do not use this contact form for medical emergencies.
            If you are experiencing a life-threatening emergency,
            seek immediate emergency medical care or contact your
            local emergency service.
          </p>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 text-center text-slate-400">

        <p>
          © 2026 LifeCare AI. All rights reserved.
        </p>

        <p className="mt-2 text-sm">
          For informational purposes only. Not a substitute for
          professional medical advice.
        </p>

      </footer>

    </main>
  );
}
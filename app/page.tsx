"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-2xl text-white">
              ❤️
            </div>

            <div>
              <h1 className="text-xl font-bold text-blue-700">
                LifeCare AI
              </h1>
              <p className="text-xs text-slate-500">
                Your Intelligent Health Companion
              </p>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-7 md:flex">
            <a href="#home" className="font-medium hover:text-blue-600">
              Home
            </a>

            <a href="#services" className="font-medium hover:text-blue-600">
              Services
            </a>

            <a href="#features" className="font-medium hover:text-blue-600">
              Features
            </a>

            <a href="#about" className="font-medium hover:text-blue-600">
              About
            </a>

            <Link
              href="/symptom-checker"
              className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="text-2xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="border-t bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">

              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>

              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>

              <a
                href="#features"
                onClick={() => setMenuOpen(false)}
              >
                Features
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>

              <Link
                href="/symptom-checker"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg bg-blue-600 px-4 py-2 text-center text-white"
              >
                Get Started
              </Link>

            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="bg-gradient-to-br from-blue-50 via-white to-cyan-50"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">

          {/* HERO LEFT */}
          <div>

            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              🤖 AI-Powered Healthcare
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Smarter Care.
              <span className="block text-blue-600">
                Healthier Life.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              LifeCare AI helps you understand your health, track important
              wellness information, get personalized guidance, and connect
              with healthcare resources in one place.
            </p>

            {/* HERO BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">

              {/* AI ASSISTANT */}
              <Link
                href="/assistant"
                className="rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white shadow-lg hover:bg-blue-700"
              >
                🤖 Talk to AI Assistant
              </Link>

              {/* SYMPTOM CHECKER */}
              <Link
                href="/symptom-checker"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-bold hover:border-blue-500 hover:text-blue-600"
              >
                🩺 Check Symptoms
              </Link>

            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
              <span>✓ AI assistance</span>
              <span>✓ Health tracking</span>
              <span>✓ Easy to use</span>
            </div>

          </div>

          {/* HERO CARD */}
          <div className="relative">

            <div className="rounded-3xl bg-white p-7 shadow-2xl ring-1 ring-slate-200">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-slate-500">
                    Health Overview
                  </p>

                  <h3 className="text-2xl font-bold">
                    Welcome to LifeCare
                  </h3>
                </div>

                <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                  ● Healthy
                </div>

              </div>

              <div className="mt-7 grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-blue-50 p-5">
                  <p className="text-sm text-slate-500">
                    Heart Rate
                  </p>

                  <p className="mt-2 text-3xl font-bold text-blue-700">
                    72
                  </p>

                  <p className="text-sm text-slate-500">
                    BPM
                  </p>
                </div>

                <div className="rounded-2xl bg-green-50 p-5">
                  <p className="text-sm text-slate-500">
                    Daily Steps
                  </p>

                  <p className="mt-2 text-3xl font-bold text-green-700">
                    6,842
                  </p>

                  <p className="text-sm text-slate-500">
                    steps
                  </p>
                </div>

                <div className="rounded-2xl bg-purple-50 p-5">
                  <p className="text-sm text-slate-500">
                    Sleep
                  </p>

                  <p className="mt-2 text-3xl font-bold text-purple-700">
                    7.5
                  </p>

                  <p className="text-sm text-slate-500">
                    hours
                  </p>
                </div>

                <div className="rounded-2xl bg-orange-50 p-5">
                  <p className="text-sm text-slate-500">
                    Water
                  </p>

                  <p className="mt-2 text-3xl font-bold text-orange-600">
                    5
                  </p>

                  <p className="text-sm text-slate-500">
                    glasses
                  </p>
                </div>

              </div>

              {/* AI CARD */}
              <div className="mt-5 rounded-2xl bg-slate-900 p-5 text-white">

                <p className="text-sm text-slate-300">
                  AI Health Assistant
                </p>

                <p className="mt-2">
                  How can I help you today?
                </p>

                <Link
                  href="/assistant"
                  className="mt-4 inline-block rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900"
                >
                  Start Conversation →
                </Link>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-2xl text-center">

            <span className="font-semibold text-blue-600">
              OUR SERVICES
            </span>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Everything You Need for Better Health
            </h2>

            <p className="mt-4 text-slate-600">
              Access multiple health and wellness tools from a single platform.
            </p>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* AI ASSISTANT */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-4xl">🤖</div>

              <h3 className="mt-5 text-xl font-bold">
                AI Health Assistant
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Ask health-related questions and receive AI-powered guidance.
              </p>

              <Link
                href="/assistant"
                className="mt-5 inline-block font-semibold text-blue-600"
              >
                Explore →
              </Link>

            </div>

            {/* SYMPTOM CHECKER */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-4xl">🩺</div>

              <h3 className="mt-5 text-xl font-bold">
                Symptom Checker
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Understand possible causes of common symptoms and recommended
                next steps.
              </p>

              <Link
                href="/symptom-checker"
                className="mt-5 inline-block font-semibold text-blue-600"
              >
                Explore →
              </Link>

            </div>

            {/* MEDICINE */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-4xl">💊</div>

              <h3 className="mt-5 text-xl font-bold">
                Medicine Information
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Learn about medicines, uses, precautions and general information.
              </p>

              <Link
                href="/medicine"
                className="mt-5 inline-block font-semibold text-blue-600"
              >
                Explore →
              </Link>

            </div>

            {/* NUTRITION */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-4xl">🥗</div>

              <h3 className="mt-5 text-xl font-bold">
                Nutrition & Fitness
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Get useful guidance for nutrition, exercise and healthy habits.
              </p>

              <Link
                href="/nutrition"
                className="mt-5 inline-block font-semibold text-blue-600"
              >
                Explore →
              </Link>

            </div>

            {/* MENTAL WELLNESS */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-4xl">🧘</div>

              <h3 className="mt-5 text-xl font-bold">
                Mental Wellness
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Explore tools and resources that support everyday mental wellness.
              </p>

              <Link
                href="/mental-wellness"
                className="mt-5 inline-block font-semibold text-blue-600"
              >
                Explore →
              </Link>

            </div>

            {/* EMERGENCY */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-4xl">🚨</div>

              <h3 className="mt-5 text-xl font-bold">
                Emergency Help
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Quickly access emergency resources when urgent help is needed.
              </p>

              <Link
                href="/emergency"
                className="mt-5 inline-block font-semibold text-blue-600"
              >
                Explore →
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-slate-50 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-12 md:grid-cols-2">

            <div>

              <span className="font-semibold text-blue-600">
                WHY LIFECARE AI?
              </span>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Technology Designed Around People
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                LifeCare AI brings health information, wellness tools and
                intelligent assistance together in an easy-to-use platform.
              </p>

              <div className="mt-8 space-y-5">

                <div className="flex gap-4">

                  <div className="text-2xl">
                    🔒
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Privacy Focused
                    </h3>

                    <p className="text-sm text-slate-600">
                      Designed with responsible handling of health information
                      in mind.
                    </p>
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="text-2xl">
                    ⚡
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Fast & Simple
                    </h3>

                    <p className="text-sm text-slate-600">
                      Find useful health tools without complicated navigation.
                    </p>
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="text-2xl">
                    📱
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Mobile Friendly
                    </h3>

                    <p className="text-sm text-slate-600">
                      Designed to work across desktop, tablet and mobile screens.
                    </p>
                  </div>

                </div>

              </div>
            </div>

            {/* FEATURES CARD */}
            <div className="rounded-3xl bg-blue-600 p-8 text-white shadow-xl">

              <p className="text-blue-100">
                LifeCare AI
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                Your health journey, organized in one place.
              </h3>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-3xl font-bold">
                    24/7
                  </p>

                  <p className="mt-1 text-sm text-blue-100">
                    AI assistance
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-3xl font-bold">
                    1
                  </p>

                  <p className="mt-1 text-sm text-blue-100">
                    Health platform
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-3xl font-bold">
                    6+
                  </p>

                  <p className="mt-1 text-sm text-blue-100">
                    Health tools
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-3xl font-bold">
                    AI
                  </p>

                  <p className="mt-1 text-sm text-blue-100">
                    Powered
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white py-20">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <span className="font-semibold text-blue-600">
            ABOUT LIFECARE AI
          </span>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Making Healthcare Information Easier to Access
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            LifeCare AI is a human-focused digital healthcare platform that
            combines artificial intelligence with practical health and
            wellness tools. The goal is to help people better understand
            health information and make informed decisions while encouraging
            professional medical care whenever it is needed.
          </p>

          <div className="mt-8 rounded-2xl bg-yellow-50 p-5 text-left text-sm text-yellow-900">

            <strong>Important:</strong> LifeCare AI is intended for educational
            and informational purposes. AI-generated information should not
            replace diagnosis, treatment or advice from a qualified healthcare
            professional.

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16">

        <div className="mx-auto max-w-4xl px-6 text-center text-white">

          <h2 className="text-3xl font-bold md:text-4xl">
            Start Your Health Journey Today
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Explore LifeCare AI and discover a simpler way to organize your
            health and wellness information.
          </p>

          <Link
            href="/symptom-checker"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-3.5 font-bold text-blue-700 hover:bg-slate-100"
          >
            Get Started →
          </Link>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-10 text-slate-400">

        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 md:flex-row md:items-center md:justify-between">

          <div>

            <h3 className="text-lg font-bold text-white">
              ❤️ LifeCare AI
            </h3>

            <p className="mt-1 text-sm">
              Your Intelligent Health Companion
            </p>

          </div>

          <p className="text-sm">
            © 2026 LifeCare AI. All rights reserved.
          </p>

        </div>
      </footer>

    </main>
  );
}
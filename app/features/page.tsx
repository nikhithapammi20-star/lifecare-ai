import Link from "next/link";

const features = [
  {
    icon: "🤖",
    title: "AI Health Assistant",
    description:
      "Ask general health-related questions and receive easy-to-understand information.",
    link: "/assistant",
  },
  {
    icon: "🔍",
    title: "Symptom Analysis",
    description:
      "Select symptoms and receive general health information to help you understand them.",
    link: "/symptoms",
  },
  {
    icon: "💊",
    title: "Medicine Information",
    description:
      "Explore general information about commonly used medicines and healthcare products.",
    link: "/medicine",
  },
  {
    icon: "📊",
    title: "Health Tracking",
    description:
      "Record wellness information such as weight, sleep, water intake, steps, and more.",
    link: "/health",
  },
  {
    icon: "🏥",
    title: "Find Healthcare",
    description:
      "Explore healthcare centers and useful medical resources.",
    link: "/hospitals",
  },
  {
    icon: "🚨",
    title: "Health Alerts",
    description:
      "Create reminders for medicines, exercise, water intake, and health checkups.",
    link: "/alerts",
  },
];

export default function FeaturesPage() {
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

            <Link
              href="/features"
              className="font-semibold text-emerald-600"
            >
              Features
            </Link>

            <Link href="/about" className="hover:text-emerald-600">
              About
            </Link>

            <Link href="/contact" className="hover:text-emerald-600">
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
      <section className="px-6 py-20 text-center">

        <p className="font-semibold text-emerald-600">
          LIFECARE AI FEATURES
        </p>

        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          Healthcare Tools in One Place
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          LifeCare AI brings together useful digital healthcare
          tools to help users understand health information and
          manage everyday wellness activities.
        </p>

      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="text-5xl">
                {feature.icon}
              </div>

              <h2 className="mt-5 text-2xl font-bold">
                {feature.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {feature.description}
              </p>

              <Link
                href={feature.link}
                className="mt-6 inline-block rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"
              >
                Open Feature →
              </Link>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="bg-emerald-600 px-6 py-16 text-center text-white">

        <h2 className="text-3xl font-bold md:text-4xl">
          Start Using LifeCare AI
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-emerald-50">
          Explore the dashboard and access all LifeCare AI
          healthcare tools.
        </p>

        <Link
          href="/dashboard"
          className="mt-8 inline-block rounded-xl bg-white px-7 py-3 font-semibold text-emerald-700 hover:bg-emerald-50"
        >
          Open Dashboard
        </Link>

      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 text-center text-slate-400">
        <p>© 2026 LifeCare AI. All rights reserved.</p>

        <p className="mt-2 text-sm">
          For informational purposes only. Not a substitute for
          professional medical advice.
        </p>
      </footer>

    </main>
  );
}
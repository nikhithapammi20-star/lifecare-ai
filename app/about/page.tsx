import Link from "next/link";

export default function AboutPage() {
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

            <Link
              href="/about"
              className="font-semibold text-emerald-600"
            >
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
          ABOUT LIFECARE AI
        </p>

        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          Technology for Better Health Awareness
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          LifeCare AI is a digital healthcare platform designed to
          make health information easier to understand and everyday
          wellness management more convenient.
        </p>

      </section>

      {/* About Content */}
      <section className="mx-auto max-w-6xl px-6 pb-20">

        <div className="grid gap-8 md:grid-cols-2">

          {/* Mission */}
          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="text-5xl">🎯</div>

            <h2 className="mt-5 text-2xl font-bold">
              Our Mission
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Our mission is to make useful healthcare information
              more accessible through simple digital tools and
              artificial intelligence. LifeCare AI aims to help users
              understand health information and organize their
              everyday wellness activities.
            </p>

          </div>

          {/* Vision */}
          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="text-5xl">🌍</div>

            <h2 className="mt-5 text-2xl font-bold">
              Our Vision
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Our vision is to build a user-friendly digital health
              platform where people can access health information,
              track wellness, manage reminders, and find useful
              healthcare resources from one place.
            </p>

          </div>

        </div>

      </section>

      {/* What LifeCare Provides */}
      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <p className="font-semibold text-emerald-600">
              WHAT WE PROVIDE
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              A Simple Digital Health Experience
            </h2>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <InfoCard
              icon="🤖"
              title="AI Assistance"
              text="Provides general health information through an easy-to-use AI assistant."
            />

            <InfoCard
              icon="📊"
              title="Wellness Tracking"
              text="Helps users record and monitor everyday wellness information."
            />

            <InfoCard
              icon="🔔"
              title="Health Reminders"
              text="Allows users to create reminders for medicines, exercise, water, and checkups."
            />

          </div>

        </div>

      </section>

      {/* Technology */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-5xl text-center">

          <p className="font-semibold text-emerald-600">
            TECHNOLOGY
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Built with Modern Technology
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
            LifeCare AI is being developed using modern web
            technologies and artificial intelligence to create a
            responsive, accessible, and user-friendly healthcare
            experience.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <TechBadge text="Next.js" />
            <TechBadge text="React" />
            <TechBadge text="TypeScript" />
            <TechBadge text="Tailwind CSS" />
            <TechBadge text="Artificial Intelligence" />
            <TechBadge text="Database" />

          </div>

        </div>

      </section>

      {/* Disclaimer */}
      <section className="mx-auto max-w-6xl px-6 pb-16">

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">

          <h3 className="font-bold text-amber-800">
            ⚠️ Important
          </h3>

          <p className="mt-2 leading-7 text-amber-900">
            LifeCare AI is designed to provide general health
            information and wellness tools. It is not intended to
            replace doctors, hospitals, emergency services, or
            professional medical advice.
          </p>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-emerald-600 px-6 py-16 text-center text-white">

        <h2 className="text-3xl font-bold md:text-4xl">
          Explore LifeCare AI
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-emerald-50">
          Explore the available healthcare tools and start managing
          your wellness information.
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

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">

      <div className="text-4xl">
        {icon}
      </div>

      <h3 className="mt-4 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {text}
      </p>

    </div>
  );
}

function TechBadge({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 font-medium text-emerald-700">
      {text}
    </span>
  );
}
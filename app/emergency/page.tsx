import Link from "next/link";

export default function EmergencyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      
      {/* Navbar */}
      <nav className="border-b bg-white/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600"
          >
            LifeCare AI
          </Link>

          <div className="flex flex-wrap gap-5 text-sm font-medium">
            
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600"
            >
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
              href="/mental-wellness"
              className="text-gray-600 hover:text-purple-600"
            >
              Wellness
            </Link>

            <Link
              href="/emergency"
              className="font-bold text-red-600"
            >
              Emergency
            </Link>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-6 py-12">

        <div className="rounded-3xl bg-red-600 p-8 text-center text-white shadow-xl">

          <div className="text-6xl">🚨</div>

          <h1 className="mt-4 text-4xl font-bold">
            Emergency Help
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg">
            If you or someone else may be experiencing a medical
            emergency, seek professional emergency help immediately.
          </p>

          <a
            href="tel:112"
            className="mt-7 inline-block rounded-xl bg-white px-10 py-4 text-xl font-bold text-red-600 shadow-lg transition hover:bg-gray-100"
          >
            📞 Call 112
          </a>

          <p className="mt-3 text-sm text-red-100">
            India unified emergency number
          </p>

        </div>

        {/* Emergency Signs */}
        <div className="mt-8 rounded-2xl bg-white p-7 shadow-lg">

          <h2 className="text-2xl font-bold text-gray-800">
            ⚠️ Seek Emergency Help For
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">

            {[
              "Difficulty breathing or severe shortness of breath",
              "Severe chest pain or pressure",
              "Sudden loss of consciousness",
              "Severe bleeding that does not stop",
              "Sudden weakness or difficulty speaking",
              "Severe allergic reaction",
              "Serious injury or major accident",
              "Seizures that require urgent attention",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-red-100 bg-red-50 p-4 text-gray-700"
              >
                🚨 {item}
              </div>
            ))}

          </div>
        </div>

        {/* What To Do */}
        <div className="mt-8 rounded-2xl bg-white p-7 shadow-lg">

          <h2 className="text-2xl font-bold text-gray-800">
            🩺 What Should You Do?
          </h2>

          <div className="mt-5 space-y-4 text-gray-700">

            <p>
              <strong>1. Stay calm:</strong> Try to remain calm and
              help the person stay as comfortable and safe as possible.
            </p>

            <p>
              <strong>2. Call emergency services:</strong> In India,
              call <strong>112</strong> for emergency assistance.
            </p>

            <p>
              <strong>3. Follow instructions:</strong> Follow the
              emergency operator instructions while waiting for help.
            </p>

            <p>
              <strong>4. Do not delay:</strong> Do not rely on an AI
              assistant instead of emergency medical care.
            </p>

          </div>
        </div>

        {/* Important Warning */}
        <div className="mt-8 rounded-2xl border-2 border-yellow-300 bg-yellow-50 p-7">

          <h2 className="text-xl font-bold text-yellow-800">
            ⚠️ Important Safety Notice
          </h2>

          <p className="mt-3 leading-7 text-yellow-900">
            LifeCare AI provides general health information and is not
            an emergency medical service. If you believe someone is in
            immediate danger, contact emergency services or go to the
            nearest emergency medical facility.
          </p>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-6 text-center text-sm text-gray-500">
        © 2026 LifeCare AI — Emergency information and general health guidance.
      </footer>

    </main>
  );
}
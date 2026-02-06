export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl pulse-soft" />
      <div className="pointer-events-none absolute top-40 -left-24 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl float-slower" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-56 w-56 rounded-full bg-indigo-200/40 blur-3xl float-slow" />
      {/* Header */}
      <header className="bg-white/70 backdrop-blur shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">OnPage CV</span>
            </div>
            <a
              href="https://chromewebstore.google.com/detail/onpage-cv/biglceojgmidchjmifhennljloohamni?utm_source=item-share-cb"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md"
            >
              Install Extension
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/70 px-4 py-2 text-sm font-semibold text-blue-700">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              AI-powered resume tailoring
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-6">
              OnPage CV
              <span className="block text-blue-600 mt-3">AI Resume Builder Chrome Extension</span>
            </h1>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl">
              Tailor your resume to any job description instantly. Generate ATS-compliant resumes
              with AI-powered keyword optimization, strong impact verbs, and clean formatting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <a
                href="https://chromewebstore.google.com/detail/onpage-cv/biglceojgmidchjmifhennljloohamni?utm_source=item-share-cb"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg"
              >
                Get Started Free
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg"
              >
                See How It Works
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="rounded-lg bg-white/70 p-4 shadow-md">
                <div className="text-2xl font-bold text-gray-900">30s</div>
                Average resume tailor
              </div>
              <div className="rounded-lg bg-white/70 p-4 shadow-md">
                <div className="text-2xl font-bold text-gray-900">ATS</div>
                Clean formatting
              </div>
              <div className="rounded-lg bg-white/70 p-4 shadow-md">
                <div className="text-2xl font-bold text-gray-900">AI</div>
                Keyword optimization
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-200/60 to-purple-200/60 blur-2xl" />
            <div className="relative rounded-3xl bg-white/90 p-8 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-lg font-bold">
                  CV
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-600">Resume Tailor</p>
                  <p className="text-xl font-bold text-gray-900">OnPage CV Dashboard</p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                  <p className="text-sm text-gray-600">Job Description</p>
                  <p className="text-gray-900 font-semibold">Product Designer · AI tools</p>
                </div>
                <div className="rounded-xl border border-purple-100 bg-purple-50/60 p-4">
                  <p className="text-sm text-gray-600">Resume Match</p>
                  <div className="mt-2 h-2 w-full rounded-full bg-purple-100">
                    <div className="h-2 w-4/5 rounded-full bg-purple-500" />
                  </div>
                  <p className="mt-2 text-sm text-gray-600">+32% keyword alignment</p>
                </div>
                <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-4">
                  <p className="text-sm text-gray-600">Suggested bullets</p>
                  <p className="text-gray-900 font-semibold">“Improved conversion by 18%...”</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Tailoring</h3>
            <p className="text-gray-600">
              Automatically match your resume to job descriptions with intelligent keyword optimization.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">ATS Compliant</h3>
            <p className="text-gray-600">
              Ensure your resume passes Applicant Tracking Systems with proper formatting and structure.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Results</h3>
            <p className="text-gray-600">
              Get tailored resumes and cover letters in seconds, not hours. Save time and land more interviews.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div id="how-it-works" className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
                  { step: '1', title: 'Install Extension', desc: 'Add the OnPage CV extension to Chrome' },
              { step: '2', title: 'Upload Resume', desc: 'Upload your existing resume or create a new one' },
              { step: '3', title: 'Select Job Description', desc: 'Highlight the job description on any website' },
              { step: '4', title: 'Get Tailored Resume', desc: 'Receive an optimized, ATS-compliant resume instantly' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-24 grid lg:grid-cols-3 gap-8">
          {[
            {
              quote:
                "OnPage CV helped me tailor my resume in minutes and I landed 3 interviews in a week.",
              name: "Mariam K.",
            },
            {
              quote:
                "The keyword optimization is spot on. My resume finally passes ATS scans.",
              name: "David A.",
            },
            {
              quote:
                "Beautiful, fast, and simple. It feels like a personal resume coach.",
              name: "Sophia L.",
            },
          ].map((item) => (
            <div key={item.name} className="rounded-2xl bg-white/80 p-8 shadow-lg">
              <p className="text-gray-700 italic">“{item.quote}”</p>
              <p className="mt-4 font-semibold text-gray-900">{item.name}</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-24 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to tailor your resume in seconds?</h2>
          <p className="mt-4 text-lg text-blue-100">
            Install OnPage CV and start applying with confidence today.
          </p>
          <a
            href="https://chromewebstore.google.com/detail/onpage-cv/biglceojgmidchjmifhennljloohamni?utm_source=item-share-cb"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex px-8 py-4 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg"
          >
            Install Extension
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center space-y-3">
            <p className="text-gray-400">© 2026 OnPage CV. All rights reserved.</p>
            <a href="/privacy" className="text-sm text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

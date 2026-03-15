import Link from 'next/link';

const CHROME_WEB_STORE_URL =
  'https://chromewebstore.google.com/detail/onpage-cv/biglceojgmidchjmifhennljloohamni';

export const metadata = {
  title: 'Thank You | OnPage CV',
  description: 'Thank you for your purchase. Get started with OnPage CV and tailor your resume on any job page.',
  robots: 'noindex, nofollow',
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50 flex flex-col">
      {/* Subtle grid background */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <main className="relative flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg mx-auto text-center space-y-8">
          {/* Success icon with ring */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping" />
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-xl shadow-emerald-500/25 ring-4 ring-emerald-400/20">
                <svg
                  className="h-12 w-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Thank you for your purchase
            </h1>
            <p className="text-slate-300 text-lg max-w-md mx-auto">
              Your payment was successful. You now have access to OnPage CV Pro — tailor your resume on any job page in one click.
            </p>
          </div>

          {/* Next steps card */}
          <div className="rounded-2xl border border-slate-700/80 bg-slate-800/60 p-6 text-left backdrop-blur">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-4">
              What&apos;s next
            </h2>
            <ol className="space-y-4 text-slate-200">
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-bold">
                  1
                </span>
                <div>
                  <span className="font-medium text-slate-50">Install the Chrome extension</span>
                  <p className="text-sm text-slate-400 mt-0.5">
                    Add OnPage CV to Chrome to start tailoring resumes on LinkedIn, Indeed, and more.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-bold">
                  2
                </span>
                <div>
                  <span className="font-medium text-slate-50">Open any job listing</span>
                  <p className="text-sm text-slate-400 mt-0.5">
                    Go to your favorite job board and open a job you want to apply for.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-bold">
                  3
                </span>
                <div>
                  <span className="font-medium text-slate-50">Tailor your resume in one click</span>
                  <p className="text-sm text-slate-400 mt-0.5">
                    Click the OnPage CV icon and let AI optimize your resume for that job.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <a
              href={CHROME_WEB_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              Get the Chrome extension
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 bg-slate-800/80 px-6 py-3.5 text-base font-semibold text-slate-100 transition hover:bg-slate-700 hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Go to homepage
            </Link>
          </div>

          <p className="text-slate-500 text-sm">
            Need help? Check your email for receipt and setup instructions.
          </p>
        </div>
      </main>

      {/* Footer branding */}
      <footer className="relative py-6 text-center">
        <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-700/80 text-slate-300 text-xs font-bold">
            CV
          </span>
          <span className="font-medium text-slate-400">OnPage CV</span>
        </div>
      </footer>
    </div>
  );
}

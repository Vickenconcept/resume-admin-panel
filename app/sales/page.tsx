'use client';

import Image from 'next/image';
import { useState } from 'react';

const CHROME_WEB_STORE_URL =
  'https://chromewebstore.google.com/detail/onpage-cv/biglceojgmidchjmifhennljloohamni?utm_source=jvzoo-sales-page';

export default function SalesPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(CHROME_WEB_STORE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50">
      {/* Simple header */}
      <header className="bg-white/80 backdrop-blur shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
              CV
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                OnPage CV · Chrome Extension
              </p>
              <p className="text-sm font-semibold text-gray-900">AI Resume Tailor</p>
            </div>
          </div>
          <a
            href={CHROME_WEB_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors"
          >
            Install OnPage CV
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 space-y-16">
        {/* Hero section */}
        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
              Land more interviews · Faster
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              Turn any job listing
              <span className="block text-blue-600">into a perfectly tailored resume in seconds.</span>
            </h1>
            <p className="mt-5 text-lg text-gray-700">
              OnPage CV is an AI-powered Chrome extension that rewrites your resume around each job description{' '}
              <span className="font-semibold text-gray-900">directly on the job page</span> — so you can apply with
              confidence and finally get noticed.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-gray-700">
              <li>✅ No more rewriting the same resume 20+ times.</li>
              <li>✅ Automatically includes the right skills, tools, and keywords.</li>
              <li>✅ Keeps your resume clean, simple, and ATS-friendly.</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={CHROME_WEB_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 transition-colors"
              >
                Install OnPage CV Free
              </a>
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center justify-center rounded-lg border border-blue-600 bg-white px-7 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
              >
                Copy Install Link
              </button>
            </div>
            {copied && (
              <p className="mt-2 text-xs font-semibold text-emerald-600">
                Install link copied. Share it in your browser or with your audience.
              </p>
            )}
            <p className="mt-4 text-xs text-gray-500">
              Works great whether you search for OnPage CV, onpage cv, or on-page cv in Chrome.
            </p>
          </div>

          {/* Visual mockup */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-blue-200/60 via-purple-200/60 to-indigo-200/60 blur-2xl" />
            <div className="relative rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white">
                    CV
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                      OnPage CV Panel
                    </p>
                    <p className="text-sm font-semibold text-gray-900">Job: Product Designer · Remote</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  ATS Ready
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-600">Job Description</p>
                  <p className="mt-2 text-sm font-semibold text-gray-900">
                    “We&apos;re looking for a designer who can ship fast, work with data, and own end-to-end
                    experiences…”
                  </p>
                  <p className="mt-2 text-xs text-gray-500">
                    You highlight the description directly on LinkedIn, Indeed, or any job board.
                  </p>
                </div>
                <div className="rounded-xl border border-purple-100 bg-purple-50/70 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-600">Match Score</p>
                  <div className="mt-2 h-2 w-full rounded-full bg-purple-100">
                    <div className="h-2 w-4/5 rounded-full bg-purple-500" />
                  </div>
                  <p className="mt-2 text-xs text-gray-600">
                    +32% better keyword alignment compared to your original resume.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-600">
                  AI-Optimized Bullet Example
                </p>
                <p className="mt-2 text-sm text-gray-900">
                  “Increased application response rate by 45% by tailoring resume content to role-specific KPIs,
                  tools, and outcomes across 30+ applications.”
                </p>
                <p className="mt-2 text-xs text-gray-500">
                  Strong, specific, and aligned with what the job actually asks for.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Demo video section */}
        <section className="rounded-3xl border border-gray-100 bg-white/90 p-6 shadow-xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                See it working in real time
              </p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                Watch how OnPage CV tailors a resume directly on the job page.
              </h2>
              <p className="mt-3 text-sm text-gray-700">
                In this short demo you&apos;ll see exactly how quickly you can go from a plain, generic resume to a
                focused, AI-optimized version that matches the role you&apos;re applying for.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>• How the extension reads the job description in your browser.</li>
                <li>• How AI suggests stronger, clearer bullets based on what the job asks for.</li>
                <li>• How you can download and reuse your tailored resume for similar roles.</li>
              </ul>
            </div>
            <div>
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-lg">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/RxOsWhVq2y4"
                  title="OnPage CV Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Prefer to watch later? Bookmark this page and come back when you&apos;re ready to install and try it
                on your next application.
              </p>
            </div>
          </div>
        </section>

        {/* Pain section */}
        <section className="grid items-start gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              The brutal truth about why most resumes never get a reply.
            </h2>
            <p className="text-gray-700">
              You&apos;re not getting rejected because you&apos;re not good enough — most of the time,{' '}
              <span className="font-semibold text-gray-900">
                your resume simply doesn&apos;t match what the job description is asking for.
              </span>
            </p>
            <ul className="mt-3 space-y-3 text-sm text-gray-700">
              <li>
                <span className="mr-2 text-red-500">✖</span>
                Using the same generic resume for every role.
              </li>
              <li>
                <span className="mr-2 text-red-500">✖</span>
                Missing the keywords, tools, and responsibilities the ATS is screening for.
              </li>
              <li>
                <span className="mr-2 text-red-500">✖</span>
                Spending hours rewriting bullets and still feeling unsure if it&apos;s good enough.
              </li>
              <li>
                <span className="mr-2 text-red-500">✖</span>
                Getting &quot;We moved forward with other candidates&quot; emails or total silence.
              </li>
            </ul>
            <p className="mt-4 text-sm font-medium text-gray-800">
              OnPage CV fixes this by sitting right on top of the job page, reading the description, and helping
              you send a resume that actually speaks the same language.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Imagine this for your next 10 applications…
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>• Every resume is tuned to the exact role in front of you.</li>
              <li>• You know your key skills and tools are clearly highlighted.</li>
              <li>• You stop overthinking your wording — AI gives you strong, clear bullets.</li>
              <li>• You apply faster, with more confidence, and track more interviews.</li>
            </ul>
            <p className="mt-2 text-sm text-gray-700">
              That&apos;s the real power of OnPage CV: less guessing, more applying, and more chances to say “yes”
              to interview invites.
            </p>
          </div>
        </section>

        {/* 3-step section */}
        <section className="space-y-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Works in just 3 simple steps.
            </h2>
            <p className="max-w-xl text-sm text-gray-700">
              You don&apos;t need to be a writer or designer. If you can open a job listing in your browser, you can
              use OnPage CV.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: 'Step 1',
                title: 'Install the extension',
                desc: 'Add OnPage CV from the Chrome Web Store and pin it to your toolbar.',
                image: '/images/onpagecv-step-1.png',
              },
              {
                step: 'Step 2',
                title: 'Open a job & launch OnPage CV',
                desc: 'On any job page, open the extension, select your resume, and let AI analyze the description.',
                image: '/images/onpagecv-step-2.png',
              },
              {
                step: 'Step 3',
                title: 'Download your tailored resume',
                desc: 'Get a clean, ATS-aware version you can upload immediately and reuse for similar roles.',
                image: '/images/onpagecv-step-3.png',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-md"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      {item.step}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Feature grid */}
        <section className="space-y-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">What you get with OnPage CV.</h2>
            <p className="max-w-md text-sm text-gray-700">
              Designed for real job seekers who want more interviews without turning resume writing into a second
              job.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'AI-tailored resumes in seconds',
                desc: 'Rewrites bullets, summary, and sections to clearly match each new role.',
              },
              {
                title: 'ATS-aware structure',
                desc: 'Keeps formatting simple and scannable so common Applicant Tracking Systems can read it.',
              },
              {
                title: 'Keyword & skill alignment',
                desc: 'Picks out important tools, skills, and responsibilities and brings them into your resume.',
              },
              {
                title: 'Impact-focused bullets',
                desc: 'Turns vague tasks into measurable achievements hiring managers actually care about.',
              },
              {
                title: 'Works on major job boards',
                desc: 'Use it on LinkedIn Jobs, Indeed, and other popular platforms right in your browser.',
              },
              {
                title: 'Browser-native experience',
                desc: 'No new dashboard to learn — everything happens on the page where the job is posted.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md"
              >
                <h3 className="text-base font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Package & email list benefits */}
        <section className="space-y-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              When you install OnPage CV, you&apos;re not just getting an extension…
            </h2>
            <p className="max-w-md text-sm text-gray-700">
              You&apos;re also joining a growing community of job seekers and professionals who get ongoing AI help
              with their applications.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
              <h3 className="text-base font-semibold text-gray-900">The core OnPage CV extension</h3>
              <p className="mt-2 text-sm text-gray-700">
                Tailor resumes right on the job page, get stronger wording, and keep everything ATS-friendly — all
                inside your browser.
              </p>
            </div>
            <div className="rounded-2xl border border-purple-100 bg-purple-50/70 p-5">
              <h3 className="text-base font-semibold text-gray-900">Access to our private email list</h3>
              <p className="mt-2 text-sm text-gray-700">
                We&apos;ll send you new templates, examples, and short training emails that show you how to get the
                most out of AI for your job search, without overwhelming you.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5">
              <h3 className="text-base font-semibold text-gray-900">Custom AI application ideas, based on demand</h3>
              <p className="mt-2 text-sm text-gray-700">
                As more people join, we listen. You can tell us which roles, industries, or application problems you
                want solved — and we&apos;ll keep creating new AI-powered flows, prompts, and presets around your real
                needs.
              </p>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-700">
            Our goal is simple: not just to give you one tool, but to keep improving how AI can support your
            applications as hiring changes — with you on the inside, giving feedback.
          </p>
        </section>

        {/* Audience + final CTA */}
        <section className="grid items-start gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900">Perfect if you are…</h2>
            <p className="mt-3 text-sm text-gray-700">
              OnPage CV is built for anyone who wants to apply smarter, not just harder.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              {[
                'Recent graduate',
                'Career switcher',
                'International applicant',
                'Mid-level professional',
                'Tech or product role',
                'Remote job seeker',
                'Freelancer',
                'Job search coach',
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-linear-to-br from-blue-600 to-purple-600 p-6 text-white shadow-2xl">
            <h2 className="text-xl font-bold md:text-2xl">
              Ready to send resumes that finally match the jobs you&apos;re applying for?
            </h2>
            <p className="mt-3 text-sm text-blue-100">
              Install OnPage CV in your browser, open your next job listing, and let AI do the heavy lifting. You
              stay in control — but no longer have to start from a blank page.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={CHROME_WEB_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
              >
                Install OnPage CV Free
              </a>
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center justify-center rounded-lg border border-white/70 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Copy Install Link
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


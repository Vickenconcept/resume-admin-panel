'use client';

import Link from 'next/link';

const SALES_PAGE_URL = '/sales';
const CHROME_WEB_STORE_URL =
  'https://chromewebstore.google.com/detail/onpage-cv/biglceojgmidchjmifhennljloohamni';
// TODO: Replace with your real JVZoo affiliate signup URL for OnPage CV
const JVZOO_AFFILIATE_URL = '#';

export default function JvPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-sm font-bold text-white">
              CV
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-400">
                OnPage CV · JV Partners
              </p>
              <p className="text-sm font-semibold text-slate-50">AI Resume Tailor Chrome Extension</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href={SALES_PAGE_URL}
              className="rounded-lg border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-800 transition-colors"
            >
              View Sales Page
            </Link>
            <a
              href={JVZOO_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow hover:bg-emerald-400 transition-colors"
            >
              Apply To Promote On JVZoo
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 space-y-16">
        {/* Hero / Big Promise */}
        <section className="grid items-center gap-8 rounded-3xl bg-slate-900/70 p-6 shadow-xl ring-1 ring-slate-800 md:grid-cols-[1.3fr,0.9fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300">
              JV & Affiliates – OnPage CV Launch
            </p>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-50 md:text-4xl">
              Help job seekers fix their resumes
              <span className="block text-emerald-400">
                and get paid every time they upgrade to Pro.
              </span>
            </h1>
            <p className="mt-4 text-sm text-slate-200 md:text-base">
              OnPage CV is an AI-powered Chrome extension that tailors resumes directly on any job listing page.
              It solves a painful, mainstream problem for job seekers — generic resumes that don&apos;t match the
              job — which makes it incredibly easy to promote on email lists, LinkedIn, Facebook groups, and
              career audiences.
            </p>
            <div className="mt-6 grid gap-4 text-xs text-slate-200 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-900/80 p-4 ring-1 ring-slate-800">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  Offer Type
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-50">
                  Freemium Chrome extension + paid Pro upgrade
                </p>
              </div>
              <div className="rounded-2xl bg-slate-900/80 p-4 ring-1 ring-slate-800">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  Audience Fit
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-50">
                  Job seekers, LinkedIn users, career lists, student communities
                </p>
              </div>
              <div className="rounded-2xl bg-slate-900/80 p-4 ring-1 ring-slate-800">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  Promo Angle
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-50">
                  &ldquo;Turn any job listing into a tailored, ATS-friendly resume in seconds.&rdquo;
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={JVZOO_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-xs font-semibold text-slate-950 shadow hover:bg-emerald-400 transition-colors"
              >
                Get Your JVZoo Affiliate Link
              </a>
              <Link
                href={SALES_PAGE_URL}
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 text-xs font-semibold text-slate-100 hover:bg-slate-800 transition-colors"
              >
                Preview Sales Page
              </Link>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl bg-slate-950/60 p-4 ring-1 ring-slate-800">
            <h2 className="text-base font-semibold text-slate-50">
              Quick Snapshot For Affiliates
            </h2>
            <ul className="space-y-2 text-xs text-slate-200">
              <li>• Evergreen problem – everyone hates rewriting resumes for every job.</li>
              <li>• Visual AI tool – demo looks great in videos, Reels, and webinars.</li>
              <li>• Chrome extension – frictionless install and instant perceived value.</li>
              <li>• Pro upgrade sold via JVZoo – real commissions for serious buyers.</li>
            </ul>
            <p className="mt-2 text-[11px] text-slate-400">
              You can safely use the same sales page URL for both the Sales Page and JV Page fields in JVZoo if
              you&apos;re just starting. This page simply gives you extra details focused on EPC, commission
              logic, and promo angles.
            </p>
          </div>
        </section>

        {/* Demo section */}
        <section className="grid items-start gap-8 rounded-3xl bg-slate-900/70 p-6 shadow-xl ring-1 ring-slate-800 md:grid-cols-[1.1fr,0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              See the product in action
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-50 md:text-3xl">
              Watch how OnPage CV tailors a resume directly on a live job listing.
            </h2>
            <p className="mt-3 text-sm text-slate-200">
              This is the same demo you can embed in your review videos, webinars, bridge pages, and social
              content. It clearly shows how the extension reads the job description and rewrites the resume
              around it in seconds.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-200">
              <li>• Great for pre-frame: &ldquo;Let me show you why this converts for job seekers.&rdquo;</li>
              <li>• Use it as B-roll for TikTok/shorts/Reels with your own voiceover.</li>
              <li>• Add your affiliate link above/below the video on your own pages.</li>
            </ul>
          </div>
          <div>
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-800 bg-black shadow-lg">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/RxOsWhVq2y4"
                title="OnPage CV Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-[11px] text-slate-400">
              You can also send traffic straight to our main sales page at{' '}
              <Link href={SALES_PAGE_URL} className="underline decoration-emerald-400 decoration-2 underline-offset-2">
                {SALES_PAGE_URL}
              </Link>{' '}
              and let the demo plus copy do the selling for you.
            </p>
          </div>
        </section>

        {/* How the funnel & money side works */}
        <section className="space-y-6 rounded-3xl bg-slate-900/70 p-6 shadow-xl ring-1 ring-slate-800">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-bold text-slate-50 md:text-3xl">
              How the offer is structured for JVZoo.
            </h2>
            <p className="max-w-md text-xs text-slate-200">
              We know affiliates care about EPC, refunds, and the money-making angle. Here&apos;s how OnPage CV is
              set up so clicks can actually turn into commissions instead of just free installs.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-950/70 p-5 ring-1 ring-slate-800">
              <h3 className="text-sm font-semibold text-slate-50">1. Freemium front door</h3>
              <p className="mt-2 text-xs text-slate-200">
                Users can install a free version of the Chrome extension from the{' '}
                <a
                  href={CHROME_WEB_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 underline underline-offset-2"
                >
                  Chrome Web Store
                </a>{' '}
                to experience how fast AI tailoring works. This builds trust and usage without resistance.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-950/70 p-5 ring-1 ring-slate-800">
              <h3 className="text-sm font-semibold text-slate-50">2. Pro upgrade sold via JVZoo</h3>
              <p className="mt-2 text-xs text-slate-200">
                The real money is in the Pro version: more credits, advanced templates, stronger AI settings and
                future premium flows. The Pro unlock and any higher tiers are sold through JVZoo checkout so
                every serious buyer generates a tracked sale and commission.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-950/70 p-5 ring-1 ring-slate-800">
              <h3 className="text-sm font-semibold text-slate-50">3. Clean delivery & low refunds</h3>
              <p className="mt-2 text-xs text-slate-200">
                Buyers receive clear instructions and instant access to Pro features. Because the tool solves a
                real, repeatable problem (tailoring resumes), we expect low refunds and strong long-term EPC.
              </p>
            </div>
          </div>
        </section>

        {/* Why promote section */}
        <section className="space-y-6 rounded-3xl bg-slate-900/70 p-6 shadow-xl ring-1 ring-slate-800">
          <h2 className="text-2xl font-bold text-slate-50 md:text-3xl">
            Why OnPage CV is an easy win for affiliates.
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-3 text-xs text-slate-200">
              <h3 className="text-sm font-semibold text-slate-50">Huge, evergreen audience</h3>
              <p>
                Millions of people are applying for jobs every month — graduates, career switchers, remote job
                hunters, and professionals on LinkedIn. Almost all of them are frustrated with rewriting their
                resumes and fighting ATS filters.
              </p>
              <h3 className="mt-4 text-sm font-semibold text-slate-50">Clear, visual transformation</h3>
              <p>
                Instead of vague promises, OnPage CV literally <span className="font-semibold">shows</span> before
                and after resumes. That makes it perfect for short-form content, YouTube reviews, webinars, and
                email campaigns that need a strong demo.
              </p>
              <h3 className="mt-4 text-sm font-semibold text-slate-50">Simple, believable promise</h3>
              <p>
                We stay away from fake income claims and unrealistic guarantees. The angle is clean: better
                tailored resumes → more interviews and callbacks. That makes it easier to stay compliant and still
                convert cold traffic.
              </p>
            </div>
            <div className="space-y-3 rounded-2xl bg-slate-950/70 p-5 ring-1 ring-slate-800">
              <h3 className="text-sm font-semibold text-slate-50">What you can highlight in your promos</h3>
              <ul className="mt-2 space-y-2">
                <li>• &ldquo;Turn any job description into a tailored resume in 30–60 seconds.&rdquo;</li>
                <li>• &ldquo;Stop guessing what to write – let AI rewrite your resume around the job.&rdquo;</li>
                <li>• &ldquo;Finally send resumes that match the tools, skills, and outcomes in the listing.&rdquo;</li>
                <li>• &ldquo;No need to learn new software – it lives right inside your browser.&rdquo;</li>
              </ul>
              <p className="mt-3 text-xs text-slate-200">
                Use these angles in your emails, DMs, posts, and long-form videos. We&apos;re also happy to create
                custom hooks or swipes for your specific audience once you&apos;re on board.
              </p>
            </div>
          </div>
        </section>

        {/* How to promote in 3 steps */}
        <section className="space-y-6 rounded-3xl bg-slate-900/70 p-6 shadow-xl ring-1 ring-slate-800">
          <h2 className="text-2xl font-bold text-slate-50 md:text-3xl">
            Promote OnPage CV in 3 simple steps.
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-950/70 p-5 ring-1 ring-slate-800">
              <p className="inline-flex rounded-full bg-slate-800 px-3 py-1 text-[11px] font-semibold text-slate-200">
                Step 1 – Get approved
              </p>
              <h3 className="mt-3 text-sm font-semibold text-slate-50">Apply inside JVZoo</h3>
              <p className="mt-2 text-xs text-slate-200">
                Click the button below, request approval, and let us know where you plan to promote (email list,
                YouTube, social, etc.). We&apos;re especially friendly to new but serious affiliates.
              </p>
              <a
                href={JVZOO_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-[11px] font-semibold text-slate-950 hover:bg-emerald-400 transition-colors"
              >
                Apply To Promote On JVZoo
              </a>
            </div>
            <div className="rounded-2xl bg-slate-950/70 p-5 ring-1 ring-slate-800">
              <p className="inline-flex rounded-full bg-slate-800 px-3 py-1 text-[11px] font-semibold text-slate-200">
                Step 2 – Plug in your link
              </p>
              <h3 className="mt-3 text-sm font-semibold text-slate-50">Use our sales page & demo</h3>
              <p className="mt-2 text-xs text-slate-200">
                Send traffic to the main sales page at{' '}
                <Link
                  href={SALES_PAGE_URL}
                  className="text-emerald-300 underline underline-offset-2"
                >
                  {SALES_PAGE_URL}
                </Link>{' '}
                using your JVZoo affiliate link. The long-form copy, demo video, and three-step explanation are
                built to do the heavy lifting for you.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-950/70 p-5 ring-1 ring-slate-800">
              <p className="inline-flex rounded-full bg-slate-800 px-3 py-1 text-[11px] font-semibold text-slate-200">
                Step 3 – Grab swipes & support
              </p>
              <h3 className="mt-3 text-sm font-semibold text-slate-50">Use our done-for-you assets</h3>
              <p className="mt-2 text-xs text-slate-200">
                Once approved, you can reach out for email swipes, social post ideas, and short-form script
                prompts. We can also share new templates and angles with you as we expand the product.
              </p>
            </div>
          </div>
        </section>

        {/* Final JV CTA */}
        <section className="rounded-3xl bg-linear-to-br from-emerald-500 to-blue-500 p-6 text-slate-950 shadow-2xl">
          <h2 className="text-2xl font-extrabold md:text-3xl">
            Let&apos;s help more people land interviews — and make great commissions doing it.
          </h2>
          <p className="mt-3 text-sm text-emerald-950/80">
            If you like promoting practical, ethical tools that solve a real everyday problem, OnPage CV is built
            for you. Apply today, plug in your JVZoo link, and we&apos;ll work with you to turn your audience into
            happy users and long-term customers.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={JVZOO_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-slate-950 px-6 py-3 text-xs font-semibold text-emerald-300 hover:bg-slate-900 transition-colors"
            >
              Apply To Promote On JVZoo
            </a>
            <Link
              href={SALES_PAGE_URL}
              className="inline-flex items-center justify-center rounded-lg border border-emerald-100/70 bg-emerald-400/20 px-6 py-3 text-xs font-semibold text-slate-950 hover:bg-emerald-300/40 transition-colors"
            >
              Preview Buyer-Facing Sales Page
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}


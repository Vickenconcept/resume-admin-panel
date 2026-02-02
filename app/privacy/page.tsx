'use client';

import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">OnPage CV</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
              >
                Home
              </Link>
              <Link
                href="/admin/login"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Admin Login
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4">
                OnPage CV ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Chrome extension and related services.
              </p>
              <p className="text-gray-700">
                By using OnPage CV, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">1. Personally Identifiable Information</h3>
              <p className="text-gray-700 mb-4">
                We collect the following personally identifiable information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Email Address:</strong> Collected during account registration and login for account management and communication purposes.</li>
                <li><strong>Name:</strong> Collected during account registration to personalize your experience.</li>
                <li><strong>User Account Data:</strong> Information associated with your account, including preferences and settings.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2. Authentication Information</h3>
              <p className="text-gray-700 mb-4">
                We collect and store:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Passwords:</strong> Securely hashed and stored for account authentication. We never store passwords in plain text.</li>
                <li><strong>Authentication Tokens:</strong> Stored locally in your browser to maintain secure sessions and prevent unauthorized access.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3. Financial and Payment Information</h3>
              <p className="text-gray-700 mb-4">
                For credit purchases, we process payments through Paystack, a third-party payment processor:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Payment References:</strong> We track payment transaction references for order processing and verification.</li>
                <li><strong>Transaction Status:</strong> We monitor payment status to ensure successful credit allocation.</li>
                <li><strong>Credit Balance:</strong> We maintain records of your credit balance and transaction history.</li>
                <li><strong>Note:</strong> Actual credit card information is handled directly by Paystack and is never stored on our servers. We do not have access to your full payment card details.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4. Website Content</h3>
              <p className="text-gray-700 mb-4">
                We collect and process:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Job Description Text:</strong> When you highlight and select job description text on web pages, we process this content to generate tailored resume content. This is the core functionality of our service.</li>
                <li><strong>Resume Content:</strong> When you upload your resume, we process and store this content to generate tailored versions based on job descriptions.</li>
                <li><strong>Generated Content:</strong> We store the resume bullets, summaries, and other content we generate for you, so you can access it later.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>To provide, maintain, and improve our services</li>
                <li>To process your account registration and authenticate your identity</li>
                <li>To generate tailored resume content based on job descriptions you provide</li>
                <li>To process payments and manage your credit balance</li>
                <li>To communicate with you about your account, transactions, and service updates</li>
                <li>To store your preferences and generated content for future access</li>
                <li>To ensure the security and integrity of our service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Storage and Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Encryption:</strong> All data transmission uses HTTPS encryption to protect information in transit.</li>
                <li><strong>Secure Storage:</strong> Authentication tokens and sensitive data are stored securely using industry-standard practices.</li>
                <li><strong>Password Security:</strong> Passwords are hashed using secure algorithms and never stored in plain text.</li>
                <li><strong>Local Storage:</strong> Some data (like authentication tokens and preferences) is stored locally in your browser using Chrome's secure storage API.</li>
                <li><strong>Server Storage:</strong> Your account data, resume content, and generated content are stored on secure servers with restricted access.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Payment Processing:</strong> We share necessary payment information with Paystack to process credit purchases. Paystack's privacy policy governs their use of your payment data.</li>
                <li><strong>Service Providers:</strong> We may use third-party service providers to help operate our service (e.g., hosting, analytics). These providers are contractually obligated to protect your information.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Access:</strong> You can access and review your account information at any time through the extension interface.</li>
                <li><strong>Correction:</strong> You can update your account information, including email and name, through the extension settings.</li>
                <li><strong>Deletion:</strong> You can delete your account and all associated data at any time. To do so, please contact us or use the account deletion feature in the extension.</li>
                <li><strong>Data Portability:</strong> You can export your generated resume content and data.</li>
                <li><strong>Opt-Out:</strong> You can stop using the extension at any time and uninstall it from your browser.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                Our service integrates with the following third-party services:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Paystack:</strong> Payment processing service. Their privacy policy applies to payment transactions: <a href="https://paystack.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://paystack.com/legal/privacy</a></li>
                <li><strong>API Services:</strong> Our backend API services are hosted on secure infrastructure. API calls are made to <code className="bg-gray-100 px-2 py-1 rounded">https://onpagecv.on-forge.com</code> for content generation and account management.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this policy:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Account information is retained while your account is active.</li>
                <li>Generated resume content is stored so you can access it later.</li>
                <li>When you delete your account, we will delete or anonymize your personal information within 30 days, except where we are required to retain it for legal purposes.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our service is not intended for users under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> <a href="mailto:privacy@onpagecv.com" className="text-blue-600 hover:underline">privacy@onpagecv.com</a></p>
                <p className="text-gray-700"><strong>Website:</strong> <a href="/" className="text-blue-600 hover:underline">https://onpagecv.on-forge.com</a></p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance</h2>
              <p className="text-gray-700 mb-4">
                This Privacy Policy is designed to comply with:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Chrome Web Store Developer Program Policies</li>
                <li>General Data Protection Regulation (GDPR) principles</li>
                <li>California Consumer Privacy Act (CCPA) principles</li>
                <li>Industry best practices for data protection</li>
              </ul>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} OnPage CV. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

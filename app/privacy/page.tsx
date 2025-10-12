// app/privacy/page.tsx
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy • ON Chart Podcast",
  description:
    "Privacy Policy for ON Chart Podcast — how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicy() {
  return (
    <main className="text-neutral-800">
      {/* Gradient Hero */}
      <div className="bg-gradient-to-r from-cyan-500 to-rose-500 text-white shadow-md">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-white/90">
            How ON Chart Podcast collects, uses, and protects your information.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-5xl px-6 py-16 leading-relaxed">
        {/* Dates */}
        <div className="mb-10">
          <p className="font-semibold">
            Effective Date:{" "}
            <span className="font-normal">September 27, 2025</span>
          </p>
          <p className="font-semibold">
            Last Updated: <span className="font-normal">October 12, 2025</span>
          </p>
        </div>

        {/* 1. Who We Are */}
        <h2 className="text-2xl font-bold mb-4">1. Who We Are and Scope</h2>
        <p className="mb-10">
          ON Chart Podcast operates{" "}
          <a
            href="https://onchartpodcast.com"
            className="underline decoration-rose-400 underline-offset-4 hover:text-rose-600 transition-colors"
            target="_blank"
          >
            https://onchartpodcast.com
          </a>
          . This Privacy Policy applies to all visitors and subscribers who
          access our website, listen to our podcast, or interact with our
          newsletter and contact forms.
        </p>

        {/* 2. Data We Collect */}
        <h2 className="text-2xl font-bold mb-4">2. Personal Data We Collect</h2>
        <div className="overflow-x-auto mb-8 rounded-xl border border-neutral-200 shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-neutral-50 text-neutral-900">
              <tr className="[&>th]:py-3 [&>th]:px-4 [&>th]:font-semibold text-left">
                <th>Category</th>
                <th>Specific Data</th>
                <th>Source</th>
                <th>Purpose</th>
                <th>Legal Basis*</th>
              </tr>
            </thead>
            <tbody className="[&>tr]:border-t [&>tr]:border-neutral-200">
              <tr className="[&>td]:py-3 [&>td]:px-4 align-top">
                <td>Personal Identifiers</td>
                <td>Name, email address</td>
                <td>You</td>
                <td>Send newsletters, respond to messages</td>
                <td>Consent / Contract</td>
              </tr>
              <tr className="[&>td]:py-3 [&>td]:px-4 align-top">
                <td>Usage Data</td>
                <td>IP, pages viewed, browser/device info</td>
                <td>Automatically via cookies</td>
                <td>Analytics, performance, security</td>
                <td>Legitimate Interests</td>
              </tr>
              <tr className="[&>td]:py-3 [&>td]:px-4 align-top">
                <td>Preference Data</td>
                <td>Newsletter topics, engagement metrics</td>
                <td>You & cookies</td>
                <td>Personalization</td>
                <td>Consent</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-neutral-600 mb-4">
          * Under GDPR, consent may be required for certain processing. You may
          withdraw it anytime.
        </p>
        <p className="text-sm mb-10">
          <strong>Note:</strong> We do not intentionally collect sensitive
          personal data (e.g., health or geolocation). If this changes, we will
          obtain explicit consent and provide opt-out mechanisms under the
          California Privacy Rights Act (CPRA).
        </p>

        {/* 3. Cookies */}
        <h2 className="text-2xl font-bold mb-4">
          3. Cookies & Similar Technologies
        </h2>
        <ul className="list-disc list-inside mb-10 space-y-1">
          <li>
            <strong>Essential Cookies –</strong> required for basic site
            functionality.
          </li>
          <li>
            <strong>Analytics Cookies –</strong> help us understand visitor
            traffic.
          </li>
          <li>
            <strong>Functional Cookies –</strong> remember your preferences and
            login status.
          </li>
        </ul>

        {/* 4. Use of Data */}
        <h2 className="text-2xl font-bold mb-4">4. How We Use Personal Data</h2>
        <ul className="list-disc list-inside mb-10 space-y-1">
          <li>To send newsletters and podcast updates you subscribed to</li>
          <li>To improve and secure our website and content</li>
          <li>To respond to messages and collaboration inquiries</li>
          <li>To comply with legal obligations or enforce policies</li>
        </ul>

        {/* 5. Disclosure */}
        <h2 className="text-2xl font-bold mb-4">5. Disclosure to Third Parties</h2>
        <div className="overflow-x-auto mb-10 rounded-xl border border-neutral-200 shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-neutral-50 text-neutral-900">
              <tr className="[&>th]:py-3 [&>th]:px-4 font-semibold text-left">
                <th>Recipient</th>
                <th>Purpose</th>
                <th>Data Shared</th>
              </tr>
            </thead>
            <tbody className="[&>tr]:border-t [&>tr]:border-neutral-200">
              <tr className="[&>td]:py-3 [&>td]:px-4 align-top">
                <td>Email Service (e.g., Substack)</td>
                <td>Deliver newsletters</td>
                <td>Name, email</td>
              </tr>
              <tr className="[&>td]:py-3 [&>td]:px-4 align-top">
                <td>Hosting Provider</td>
                <td>Website operation</td>
                <td>Technical logs</td>
              </tr>
              <tr className="[&>td]:py-3 [&>td]:px-4 align-top">
                <td>Analytics Provider (e.g., Google)</td>
                <td>Measure site usage</td>
                <td>Usage data</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 6–10 condensed */}
        <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
        <p className="mb-10">
          We retain data as long as necessary to provide services or meet legal
          obligations. Newsletter data is deleted within 30 days of unsubscribing.
        </p>

        <h2 className="text-2xl font-bold mb-4">7. Security</h2>
        <p className="mb-10">
          We use TLS encryption, firewalls, and access controls to protect your
          data. However, no internet system is fully secure; please contact us if
          you suspect a breach.
        </p>

        <h2 className="text-2xl font-bold mb-4">8. Your Privacy Rights</h2>
        <ul className="list-disc list-inside mb-10 space-y-1">
          <li>Access, correct, delete, or restrict your data</li>
          <li>Opt out of marketing communications</li>
          <li>Request data portability or withdraw consent</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
        <p className="mb-10">
          We may revise this Privacy Policy periodically. Major updates will be
          announced on our website and emailed to subscribers 15 days before
          taking effect.
        </p>

        <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
        <p>
          For privacy questions or requests, contact us at: <br />
          <strong>Email:</strong>{" "}
          <a
            href="mailto:medicalize.this@gmail.com"
            className="underline decoration-rose-400 underline-offset-4 hover:text-rose-600 transition-colors"
          >
            medicalize.this@gmail.com
          </a>
        </p>

        <p className="text-sm text-neutral-500 mt-12">
          © {new Date().getFullYear()} ON Chart Podcast. All rights reserved.
        </p>
      </div>
    </main>
  )
}

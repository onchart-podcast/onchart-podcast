// app/terms/page.tsx
import Link from "next/link"

export const metadata = {
  title: "Terms of Use • ON Chart Podcast",
  description:
    "Terms of Use for ON Chart Podcast — the legal agreement governing access to our website and services.",
}

export default function TermsOfUse() {
  return (
    <main className="text-neutral-800">
      {/* Gradient Hero */}
      <div className="bg-gradient-to-r from-cyan-500 to-rose-500 text-white shadow-md">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm">
            Terms of Use
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Please read these terms carefully before using our website or
            services.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-5xl px-6 py-16 leading-relaxed">
        <p className="font-semibold">
          Effective Date: <span className="font-normal">September 27, 2025</span>
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-6">
          By accessing{" "}
          <a
            href="https://onchartpodcast.com"
            className="underline decoration-rose-400 underline-offset-4 hover:text-rose-600 transition-colors"
            target="_blank"
          >
            onchartpodcast.com
          </a>{" "}
          (the “Site”) or related services, including our newsletter or podcast
          platforms (collectively, the “Services”), you agree to be bound by
          these Terms of Use (“Terms”) and our{" "}
          <Link
            href="/privacy"
            className="underline decoration-rose-400 underline-offset-4 hover:text-rose-600 transition-colors"
          >
            Privacy Policy
          </Link>
          . If you do not accept these Terms, please do not use our Services.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">2. Eligibility</h2>
        <p className="mb-6">
          You must be at least <strong>13 years of age or older</strong> to use
          our Services. By using the Site, you represent that you meet this age
          requirement and that you have the legal capacity to enter into this
          agreement.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">3. Account Registration</h2>
        <p className="mb-4">
          To access certain features (e.g., newsletters or commenting), you may
          be required to register an account. You agree to:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Provide accurate and current information.</li>
          <li>Maintain the confidentiality of your login credentials.</li>
          <li>
            Notify us at{" "}
            <a
              href="mailto:medicalize.this@gmail.com"
              className="underline decoration-rose-400 underline-offset-4 hover:text-rose-600"
            >
              medicalize.this@gmail.com
            </a>{" "}
            if you suspect unauthorized access.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          4. Permitted & Prohibited Uses
        </h2>
        <p className="mb-4">
          You agree to use the Services only for lawful purposes and will not:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Post or transmit unlawful, harassing, or defamatory content.</li>
          <li>
            Copy, distribute, or modify any part of the Site except as expressly
            permitted.
          </li>
          <li>Interfere with or disrupt our servers or networks.</li>
          <li>Attempt to gain unauthorized access to the Site.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">5. User Content & License</h2>
        <p className="mb-6">
          You retain ownership of all content you submit but grant ON Chart
          Podcast a <strong>worldwide, royalty-free, sublicensable license</strong>{" "}
          to host, reproduce, and display your content for the purpose of
          operating and promoting our Services.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">6. Intellectual Property</h2>
        <p className="mb-6">
          All original content, design, graphics, and functionality on this Site
          are the exclusive property of ON Chart Podcast or its licensors. You
          may not reproduce, distribute, or create derivative works without
          prior written consent.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          7. Third-Party Links & Services
        </h2>
        <p className="mb-6">
          The Site may contain links to third-party platforms (e.g., Spotify,
          Apple Podcasts, YouTube). We are not responsible for their content,
          privacy practices, or policies.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">8. Privacy</h2>
        <p className="mb-6">
          Our collection and use of personal data are governed by our{" "}
          <Link
            href="/privacy"
            className="underline decoration-rose-400 underline-offset-4 hover:text-rose-600 transition-colors"
          >
            Privacy Policy
          </Link>
          . By using our Services, you consent to those practices.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">9. Disclaimer of Warranties</h2>
        <p className="mb-6">
          THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE.” We make no
          warranties, express or implied, including merchantability or fitness
          for a particular purpose. We do not guarantee uninterrupted or
          error-free operation.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">10. Limitation of Liability</h2>
        <p className="mb-6">
          To the fullest extent permitted by law, ON Chart Podcast, its
          affiliates, and contributors are not liable for any indirect,
          consequential, or punitive damages. Our total liability will not
          exceed <strong>USD 100</strong> or the amount you paid us, whichever
          is less.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">11. Indemnification</h2>
        <p className="mb-6">
          You agree to defend and hold harmless ON Chart Podcast, its owners,
          and affiliates from any claims or damages arising out of your use of
          the Site or violation of these Terms.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          12. Governing Law & Jurisdiction
        </h2>
        <p className="mb-6">
          These Terms are governed by the laws of the{" "}
          <strong>District of Columbia, United States</strong>, without regard to
          conflicts of law. You agree to submit to the exclusive jurisdiction of
          courts located in Washington, D.C.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">13. Changes to Terms</h2>
        <p className="mb-6">
          We may update these Terms from time to time. The latest effective date
          will be posted at the top. Continued use of the Site constitutes
          acceptance of any changes.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">14. Contact</h2>
        <p>
          If you have any questions about these Terms, contact us at: <br />
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

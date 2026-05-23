import { MenuBar } from "@/components/MacWindow";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Muscle Yummi Mami Privacy Policy — how we collect, use, and protect your personal data.",
  openGraph: {
    title: "Privacy Policy — Muscle Yummi Mami",
    description: "How Muscle Yummi Mami collects, uses, and protects your personal data.",
    url: "https://musclemami.fit/privacy",
  },
};

const sections = [
  {
    title: "WHO WE ARE & WHO THIS POLICY APPLIES TO",
    icon: "01",
    content: `Muscle Yummi Mami ("MMM," "we," "us," "our") is a company legally organized and operating under the laws of the United Mexican States, with its principal place of business in Hermosillo, Sonora, México.

We operate the website musclemami.fit and are the data controller ("responsable") for all personal data collected through this site, as defined under the Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).

This Privacy Policy applies to:
• Every visitor to musclemami.fit
• Every person who submits a form on our site (email signup, model application, love letter)
• Every customer who makes a purchase
• Anyone who contacts us by email or social media

By using this site, you acknowledge that you have read and understood this Privacy Policy.`
  },
  {
    title: "WHAT PERSONAL DATA WE COLLECT",
    icon: "02",
    content: `We only collect data that is necessary to operate our business and serve you. Here is exactly what we collect and where:

EMAIL LIST SIGNUP FORM:
• Full name
• Email address
• Phone number (optional)
• Your interest (Customer, Model, Fan, or Artist)

MODEL APPLICATION FORM:
• Full name
• Email address
• Phone number (optional)
• Instagram handle (optional)
• Type of collaboration requested
• A personal message about yourself (optional)

LOVE LETTER FORM:
• Your name (optional)
• Email address (optional)
• Your role (Customer, Model, Fan, or Other)
• Your written message
• A photo (optional — submitted entirely at your own risk)

WHEN YOU MAKE A PURCHASE (coming soon via Stripe):
• Name and billing address
• Shipping address
• Email address
• Payment information — NOTE: we never see or store your card number. All payment data is handled directly and securely by Stripe.

AUTOMATICALLY COLLECTED DATA:
• Basic server logs collected by Vercel (our hosting provider) — this includes IP address, browser type, and pages visited. This data is used for security and uptime monitoring only. We do not use it for marketing or profiling.

We do NOT collect:
• Sensitive personal data (health, religion, political views, biometrics)
• Data from minors under 13
• Any data beyond what is listed above`
  },
  {
    title: "WHY WE COLLECT YOUR DATA (PURPOSE & LEGAL BASIS)",
    icon: "03",
    content: `We collect your personal data for the following specific purposes:

PURPOSE 1 — Processing orders and fulfilling purchases
Legal basis: Contract performance / Ejecución de contrato

PURPOSE 2 — Sending you updates, drop alerts, and brand news (only if you signed up)
Legal basis: Your consent / Tu consentimiento
You can unsubscribe at any time — every email includes an unsubscribe link.

PURPOSE 3 — Reviewing model applications and love letter submissions
Legal basis: Your consent / Tu consentimiento
Submitting a form is voluntary. You choose what to share.

PURPOSE 4 — Responding to your questions and communications
Legal basis: Legitimate interest / Interés legítimo

PURPOSE 5 — Protecting against fraud and ensuring site security
Legal basis: Legitimate interest / Interés legítimo

We do NOT use your data for:
• Selling or renting to third parties
• Behavioral advertising or profiling
• Any purpose not listed above`
  },
  {
    title: "WHO WE SHARE YOUR DATA WITH",
    icon: "04",
    content: `We do not sell, rent, or trade your personal data. Ever. Period.

We share your data only with the following trusted service providers ("encargados") who process it strictly on our behalf:

GOOGLE LLC — Data storage
• We use Google Sheets to store form submissions (email signups, model applications, love letters)
• Google processes this data under our instructions only
• Google's Privacy Policy: policies.google.com/privacy

VERCEL INC. — Website hosting
• Vercel hosts musclemami.fit and collects basic server logs for security and performance
• Vercel's Privacy Policy: vercel.com/legal/privacy-policy

STRIPE INC. — Payment processing (coming soon)
• Stripe handles all payment transactions securely. We never see your full card number.
• Stripe is PCI-DSS compliant
• Stripe's Privacy Policy: stripe.com/privacy

SHIPPING CARRIERS — Order fulfillment (coming soon)
• Your name and shipping address will be shared with the carrier delivering your order (e.g., FedEx, UPS, DHL, Correos de México)

We require all third-party processors to maintain appropriate security measures and to use your data only for the purposes we specify. We do not authorize them to use your data for their own marketing.`
  },
  {
    title: "HOW LONG WE KEEP YOUR DATA",
    icon: "05",
    content: `We keep your personal data only for as long as necessary for the purpose it was collected:

• Email list signups — kept until you unsubscribe or request deletion
• Model applications — kept for 12 months, then deleted unless a collaboration is active
• Love letter submissions — kept for 12 months for internal review, then deleted
• Order records — kept for 5 years as required by Mexican tax law (SAT / Ley del SAT)
• Server logs (Vercel) — typically 30 days, per Vercel's standard retention policy

When data is no longer needed, we delete it or anonymize it so it can no longer be linked to you.`
  },
  {
    title: "YOUR RIGHTS — ARCO (MEXICAN CUSTOMERS)",
    icon: "06",
    content: `Under the Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), you have the following rights, known as ARCO rights:

ACCESO (Access) — You have the right to know what personal data we hold about you, where it came from, how we use it, and who we share it with.

RECTIFICACIÓN (Rectification) — You have the right to correct any personal data we hold that is inaccurate, incomplete, or out of date.

CANCELACIÓN (Cancellation) — You have the right to request that we delete your personal data from our records, subject to legal retention obligations.

OPOSICIÓN (Opposition) — You have the right to object to the processing of your personal data for specific purposes, including marketing communications.

HOW TO EXERCISE YOUR ARCO RIGHTS:
Send a written request to: privacidad@musclemami.fit

Your request must include:
(1) Your full name
(2) A description of the right you wish to exercise
(3) Any information that helps us identify your data (e.g., the email address you used)
(4) A copy of a valid ID to verify your identity

We will respond within 20 business days as required by the LFPDPPP. We will not charge you a fee to exercise these rights.

If you are not satisfied with our response, you may file a complaint with the Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI) at www.inai.org.mx.`
  },
  {
    title: "YOUR RIGHTS — GDPR (EU / EEA CUSTOMERS)",
    icon: "07",
    content: `If you are located in the European Union or European Economic Area, you have the following additional rights under the General Data Protection Regulation (GDPR):

• Right of access — obtain a copy of your personal data
• Right to rectification — correct inaccurate data
• Right to erasure ("right to be forgotten") — request deletion of your data
• Right to restrict processing — limit how we use your data
• Right to data portability — receive your data in a machine-readable format
• Right to object — object to processing based on legitimate interests
• Right to withdraw consent — at any time, without affecting prior processing

LEGAL BASIS FOR PROCESSING EU DATA:
• Contract performance — when processing is necessary to fulfill your order
• Consent — for marketing emails and voluntary form submissions
• Legitimate interests — for fraud prevention and site security

To exercise any of these rights, contact: privacidad@musclemami.fit

You also have the right to lodge a complaint with your local data protection supervisory authority in your EU member state.

Please note: Muscle Yummi Mami is a Mexican company. Your data may be transferred to and stored in México, which may not have the same data protection laws as your country. By using this site, you consent to this transfer.`
  },
  {
    title: "YOUR RIGHTS — CCPA (CALIFORNIA CUSTOMERS)",
    icon: "08",
    content: `If you are a California resident, the California Consumer Privacy Act (CCPA) grants you the following rights:

RIGHT TO KNOW — You may request that we disclose what personal information we have collected about you, the categories of sources, the business purpose for collecting it, and the categories of third parties we share it with.

RIGHT TO DELETE — You may request that we delete personal information we have collected from you, subject to certain exceptions.

RIGHT TO OPT OUT OF SALE — We do NOT sell your personal information to any third party. You do not need to opt out.

RIGHT TO NON-DISCRIMINATION — We will not discriminate against you for exercising any of your CCPA rights.

To exercise your California privacy rights, contact: privacidad@musclemami.fit

We will respond to verified requests within 45 days as required by the CCPA.`
  },
  {
    title: "COOKIES & TRACKING",
    icon: "09",
    content: `Muscle Yummi Mami currently does NOT use:
• Tracking cookies
• Analytics tools (Google Analytics, Meta Pixel, etc.)
• Behavioral advertising or retargeting pixels
• Any third-party tracking scripts

The only technical data collected is standard server logs by Vercel (our hosting provider) for security and uptime purposes. This is not used for marketing or profiling.

If we add analytics or tracking tools in the future, we will update this Privacy Policy and notify you before any tracking begins. We will also add a cookie consent notice at that time if required by law.`
  },
  {
    title: "DATA SECURITY",
    icon: "10",
    content: `We take the security of your personal data seriously and implement the following measures:

• All data transmitted between your browser and our site is encrypted via HTTPS (TLS)
• Form submissions are transmitted securely to Google Sheets via encrypted API calls
• Payment processing is handled entirely by Stripe, which is PCI-DSS Level 1 compliant — the highest level of payment security
• Access to our data storage is restricted to authorized MMM personnel only

IMPORTANT LIMITATIONS:
No system is 100% secure. While we use industry-standard measures, we cannot guarantee that your data will never be accessed by an unauthorized party. In the event of a data breach that affects your rights and freedoms, we will notify you and the relevant authorities as required by applicable law (LFPDPPP Article 20, GDPR Article 33).

Photos submitted through our Love Letter form are transmitted and stored at your own risk. Please do not submit photos containing sensitive personal information.`
  },
  {
    title: "EMAIL COMMUNICATIONS",
    icon: "11",
    content: `If you sign up for our email list, we may send you:
• Drop alerts and product launch announcements
• Brand updates and Mami Monday features
• Promotional offers and exclusive access

UNSUBSCRIBE: Every marketing email we send includes an unsubscribe link at the bottom. You can opt out at any time. Unsubscribing from marketing emails does not affect order confirmation or transactional emails related to a purchase.

We do not send spam. We do not share your email address with third-party marketers. We use your email only for the purposes described above.`
  },
  {
    title: "CHILDREN'S PRIVACY",
    icon: "12",
    content: `This site is not directed to children under the age of 13. We do not knowingly collect personal data from children under 13.

If you are a parent or guardian and believe your child has submitted personal data to us, please contact us immediately at privacidad@musclemami.fit and we will delete the data promptly.

Users between 13 and 17 years of age must have parental or guardian consent to use this site and make purchases.`
  },
  {
    title: "INTERNATIONAL DATA TRANSFERS",
    icon: "13",
    content: `Muscle Yummi Mami is based in Hermosillo, Sonora, México. Your personal data is stored and processed in México and may also be processed in the United States by our service providers (Google, Vercel, Stripe), which are headquartered there.

If you are located in the EU/EEA, please be aware that México and the United States may not have data protection laws equivalent to those in your country. By using this site and submitting your data, you consent to this international transfer.

We ensure that all third-party processors we use (Google, Vercel, Stripe) maintain appropriate data protection standards regardless of where your data is processed.`
  },
  {
    title: "CHANGES TO THIS PRIVACY POLICY",
    icon: "14",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or the services we offer.

When we make changes:
• The updated policy will be posted at musclemami.fit/privacy
• The "Last Updated" date at the top of this page will be revised
• For significant changes, we will notify email list subscribers directly

Your continued use of this site after any changes constitutes your acceptance of the updated Privacy Policy. We recommend reviewing this page periodically.

This policy was last updated: May 2026.`
  },
  {
    title: "CONTACT — PRIVACY QUESTIONS",
    icon: "15",
    content: `For all privacy-related questions, ARCO rights requests, or data complaints:

Privacy Email:        privacidad@musclemami.fit
General Contact:    contact@musclemami.fit
Legal Matters:        legal@musclemami.fit
Website:                musclemami.fit
Instagram:             @muscle.yummi.mami.fit_models

Company Location: Hermosillo, Sonora, México

REGULATORY AUTHORITIES:
INAI (México — data privacy):     www.inai.org.mx
PROFECO (México — consumers): www.profeco.gob.mx — 800-468-8722

We will acknowledge all privacy requests within 5 business days and respond fully within 20 business days as required by Mexican law.

© 2026 Muscle Yummi Mami — All Rights Reserved.`
  }
];

export default function PrivacyPage() {
  return (
    <div style={{
      width: "100vw",
      minHeight: "100vh",
      background: "#a4bccc",
      fontFamily: "Geneva, Charcoal, Chicago, Arial, sans-serif",
      userSelect: "none"
    }}>
      <MenuBar active="Privacy" />

      <div className="mobile-page-padding" style={{ padding: "48px 60px 80px", display: "flex", flexDirection: "column", alignItems: "center" }}>

        {/* Breadcrumb */}
        <div style={{ color: "#888", fontSize: 10, marginBottom: 16, alignSelf: "flex-start" }}>
          💾 musclemami.fit &nbsp;▶&nbsp; Privacy Policy
        </div>

        {/* Main window */}
        <div style={{ width: "100%", maxWidth: 720, border: "2px solid #000", boxShadow: "4px 4px 0 #333" }}>

          {/* Title bar */}
          <div style={{
            height: 22,
            background: "repeating-linear-gradient(to bottom, #ffffff 0px, #ffffff 1px, #888888 1px, #888888 2px)",
            borderBottom: "1.5px solid #000",
            display: "flex", alignItems: "center", justifyContent: "center", position: "relative"
          }}>
            <div style={{ position: "absolute", left: 5, width: 14, height: 14, border: "1.5px solid #000", background: "#fff" }} />
            <div style={{ background: "#fff", padding: "0 8px", fontSize: 11, fontWeight: "bold", letterSpacing: 1 }}>
              🔒 &nbsp; Privacy Policy — Muscle Yummi Mami
            </div>
            <div style={{ position: "absolute", right: 5, width: 14, height: 14, border: "1.5px solid #000", background: "#fff" }} />
          </div>

          {/* Toolbar */}
          <div style={{ background: "#e8e8e8", borderBottom: "1px solid #000", padding: "2px 8px", fontSize: 10, display: "flex", justifyContent: "space-between" }}>
            <span>Privacy Document — 15 Sections — LFPDPPP · GDPR · CCPA</span>
            <span>Last Updated: May 2026 — Hermosillo, Sonora, México</span>
          </div>

          {/* Content body */}
          <div style={{ background: "#f8f6f2", padding: "32px 40px", borderBottom: "1px solid #000" }}>

            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <div style={{ fontSize: 26 }}>🔒</div>
              <h1 style={{ fontSize: 17, fontWeight: "bold", color: "#000", marginTop: 8, letterSpacing: 3 }}>
                PRIVACY POLICY
              </h1>
              <p style={{ fontSize: 10, color: "#666", marginTop: 6 }}>
                musclemami.fit — Last Updated: May 2026
              </p>
              <p style={{ fontSize: 9, color: "#888", marginTop: 4, lineHeight: 1.7 }}>
                Muscle Yummi Mami is committed to protecting your personal data. This policy explains exactly what we collect, why, and what rights you have — in plain language, no legal runaround.
              </p>

              {/* Quick summary box */}
              <div style={{ marginTop: 16, background: "#fff", border: "2px solid #000", padding: "14px 16px", textAlign: "left", boxShadow: "2px 2px 0 #333" }}>
                <div style={{ fontSize: 10, fontWeight: "bold", marginBottom: 10, letterSpacing: 1 }}>⚡ QUICK SUMMARY</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {[
                    { icon: "✅", text: "We only collect what we need to run the business" },
                    { icon: "✅", text: "We never sell or rent your data to anyone" },
                    { icon: "✅", text: "We don't use tracking cookies or analytics (yet)" },
                    { icon: "✅", text: "You can request, correct, or delete your data anytime" },
                    { icon: "✅", text: "Payments go through Stripe — we never see your card number" },
                    { icon: "✅", text: "Your data is stored in Google Sheets, governed by Mexican law" },
                  ].map(({ icon, text }) => (
                    <div key={text} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 9, color: "#333", lineHeight: 1.5 }}>
                      <span>{icon}</span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Table of contents */}
              <div style={{ marginTop: 16, textAlign: "left", background: "#fff", border: "1px solid #ccc", padding: "12px 16px" }}>
                <div style={{ fontSize: 10, fontWeight: "bold", marginBottom: 8, letterSpacing: 1 }}>TABLE OF CONTENTS</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px 24px" }}>
                  {sections.map((s, i) => (
                    <div key={i} style={{ fontSize: 9, color: "#444", display: "flex", gap: 6 }}>
                      <span style={{ color: "#888", minWidth: 16 }}>{s.icon}</span>
                      <span>{s.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ borderBottom: "2px solid #000", marginTop: 20 }} />
            </div>

            {/* Sections */}
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {sections.map((section, i) => (
                <div key={i}>
                  <h2 style={{
                    fontSize: 11,
                    fontWeight: "bold",
                    color: "#000",
                    letterSpacing: 1.5,
                    marginBottom: 10,
                    paddingBottom: 6,
                    borderBottom: "1.5px solid #000",
                    display: "flex",
                    alignItems: "center",
                    gap: 10
                  }}>
                    <span style={{
                      background: "#000",
                      color: "#fff",
                      fontSize: 9,
                      padding: "2px 6px",
                      fontWeight: "bold",
                      letterSpacing: 0,
                      flexShrink: 0
                    }}>
                      {section.icon}
                    </span>
                    {section.title}
                  </h2>
                  <p style={{
                    fontSize: 10,
                    color: "#222",
                    lineHeight: 2,
                    whiteSpace: "pre-line"
                  }}>
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Closing statement */}
            <div style={{
              marginTop: 40,
              padding: "16px 20px",
              background: "#000",
              color: "#fff",
              fontSize: 10,
              lineHeight: 1.9,
              letterSpacing: 0.3
            }}>
              <div style={{ fontWeight: "bold", fontSize: 11, marginBottom: 6, letterSpacing: 2 }}>🔒 OUR COMMITMENT</div>
              We built Muscle Yummi Mami from nothing. Every person who supports this brand — customer, model, fan, or artist — deserves to know their information is safe with us. We don&apos;t play games with your data. We collect what we need, protect it, and respect your right to control it.
              <br /><br />
              Questions? privacidad@musclemami.fit — we actually read these.
              <br /><br />
              <span style={{ color: "#aaa", fontSize: 9 }}>© 2026 Muscle Yummi Mami. All Rights Reserved. — Hermosillo, Sonora, México</span>
            </div>

          </div>

          {/* Bottom bar */}
          <div style={{
            background: "#c8c8c8",
            borderTop: "1px solid #000",
            height: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 8,
            paddingRight: 8,
            fontSize: 9,
            color: "#555"
          }}>
            <span>musclemami.fit/privacy — 15 sections — LFPDPPP · GDPR · CCPA</span>
            <span>© 2026 Muscle Yummi Mami</span>
          </div>

        </div>
      </div>
    </div>
  );
}

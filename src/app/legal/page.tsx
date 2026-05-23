"use client";

import { MenuBar } from "@/components/MacWindow";
import { useState } from "react";

const termsSections = [
  {
    title: "AGREEMENT TO TERMS",
    icon: "01",
    content: `Welcome to musclemami.fit — the official online store of Muscle Yummi Mami, a company legally organized and operating under the laws of the United Mexican States ("México"), with its principal place of business in Hermosillo, Sonora, México. These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("User," "Customer," "you") and Muscle Yummi Mami ("we," "us," "our," "MMM") governing your access to and use of this website and the purchase of our products.

BY ACCESSING THIS SITE, CREATING AN ACCOUNT, OR COMPLETING A PURCHASE, YOU CONFIRM THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS IN THEIR ENTIRETY. If you do not agree, you must immediately stop using this site.

We reserve the right to update these Terms at any time. Updates take effect immediately upon posting. Your continued use of the site constitutes acceptance of the revised Terms. Check this page regularly.

NOTE: These Terms are governed by Mexican law. International customers agree to these Terms as a condition of purchasing from a Mexican-based seller.`
  },
  {
    title: "ELIGIBILITY & AGE REQUIREMENT",
    icon: "02",
    content: `This site is intended for users who are at least 13 years of age. By using this site, you represent that you are at least 13 years old. If you are under 18, you represent that a parent or legal guardian has reviewed and agreed to these Terms on your behalf.

To place an order, you must be at least 18 years of age or have the permission and supervision of a parent or legal guardian. We reserve the right to cancel any order we reasonably believe was placed by a minor without proper authorization.`
  },
  {
    title: "COPYRIGHT, TRADEMARKS & INTELLECTUAL PROPERTY",
    icon: "03",
    content: `All content on this site — including but not limited to the Muscle Yummi Mami name, the "MMM" mark, our logo, all original apparel and footwear designs, graphics, photographs, artwork, slogans, the "Mami Monday" feature, the "Art Doesn't Stop at Bars" concept, all written content, and all other creative works — are the exclusive intellectual property of Muscle Yummi Mami and are protected under:

• Ley Federal del Derecho de Autor (LFDA) — Mexican Federal Copyright Law
• Ley Federal de Protección a la Propiedad Industrial (LFPPI) — Mexican Industrial Property Protection Law
• The Berne Convention for the Protection of Literary and Artistic Works
• The Agreement on Trade-Related Aspects of Intellectual Property Rights (TRIPS)
• All other applicable international intellectual property treaties

YOU MAY NOT, without our express prior written permission:
• Copy, reproduce, republish, download, or distribute any content from this site
• Use our name, logo, or designs in any commercial context
• Create derivative works based on our original designs
• Display our intellectual property on any third-party platform, product, or service
• Frame or mirror any portion of this site on another website

Any permission granted to use our content is non-exclusive, non-transferable, revocable, and limited to the specific use authorized in writing.`
  },
  {
    title: "ANTI-PIRACY, COUNTERFEITING & BRAND ENFORCEMENT",
    icon: "04",
    content: `Muscle Yummi Mami takes intellectual property theft with the utmost seriousness. We actively monitor the internet, social media, and online marketplaces — including Amazon, Etsy, eBay, Depop, Poshmark, Redbubble, TeePublic, Facebook Marketplace, TikTok Shop, and all print-on-demand platforms — for unauthorized use of our brand, logo, designs, and other protected works.

PROHIBITED CONDUCT INCLUDES:
• Selling, distributing, or manufacturing counterfeit or bootleg items bearing our name, logo, or designs
• Listing our products or designs on any platform without written authorization
• Screen printing, embroidering, or reproducing our designs on any product without permission
• Using our brand identity — including name, logo, color schemes, or design style — to imply an affiliation with MMM that does not exist
• Purchasing our products for the purpose of reverse-engineering or copying our designs

ENFORCEMENT ACTIONS: Violators may face any or all of the following:
• Immediate cease and desist demand
• Formal complaint filed with the Instituto Mexicano de la Propiedad Industrial (IMPI)
• Civil action for damages under the LFPPI and LFDA
• Criminal complaint under the Código Penal Federal (Artículos 223–229)
• DMCA takedown notices filed with US-based platforms under 17 U.S.C. § 512
• Injunctive relief to immediately halt all infringing activity
• Public disclosure of the infringement across all MMM platforms

We do not warn twice. We do not negotiate with thieves. If you steal from this brand, we will find you, and we will act.

TO REPORT INFRINGEMENT: legal@musclemami.fit — subject line "IP Notice"`
  },
  {
    title: "USER-GENERATED CONTENT & SUBMITTED MEDIA LICENSE",
    icon: "05",
    content: `When you voluntarily submit any content to Muscle Yummi Mami — including photos, images, written messages, love letters, model portfolios, artwork, or any other media ("Submitted Content") — you grant Muscle Yummi Mami a non-exclusive, worldwide, royalty-free, perpetual, irrevocable, sublicensable license to use, reproduce, display, distribute, adapt, and promote that Submitted Content in connection with our business.

BY SUBMITTING CONTENT, YOU REPRESENT AND WARRANT THAT:
• You own all rights to the Submitted Content, or have obtained all necessary permissions
• The Submitted Content does not infringe any third-party rights
• You have the consent of any identifiable person depicted in photos or videos
• The Submitted Content does not contain illegal, defamatory, obscene, or harmful material

You retain ownership of your Submitted Content. The license you grant us remains in effect even if you stop using our site.`
  },
  {
    title: "PHOTO & FILE UPLOAD — LIABILITY DISCLAIMER",
    icon: "06",
    content: `BY UPLOADING ANY PHOTO, IMAGE, OR FILE TO THIS SITE, YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT:

• You submit all content entirely at your own risk
• Muscle Yummi Mami is NOT liable for any unauthorized access to, breach of, or leakage of any photo or file you submit
• We strongly advise you not to submit photos containing sensitive personal information, identifying documents, or minors

DO NOT UPLOAD:
• Photos of minors without clear parental/guardian authorization
• Images containing personal identifying information
• Content depicting illegal activity
• Photos you do not own or have rights to

To request removal of previously submitted content: contact@musclemami.fit`
  },
  {
    title: "PRODUCTS, ORDERS & PRICING",
    icon: "07",
    content: `All products are subject to availability. We reserve the right to limit quantities, discontinue products, or refuse any order at our sole discretion. Product descriptions and pricing are provided in good faith but may contain errors. We reserve the right to correct errors and cancel orders affected by pricing mistakes.

In the event of a pricing error, we will notify you and give you the option to confirm at the correct price or receive a full refund.

Prices may be displayed in USD for international convenience. The functional currency of Muscle Yummi Mami is the Mexican Peso (MXN). Exchange rate fluctuations are not grounds for refund.`
  },
  {
    title: "CUSTOM & LIMITED-EDITION DROPS",
    icon: "08",
    content: `Many MMM products are custom-made, limited-edition, or exclusive drops. These products:

• Are available strictly on a first-come, first-served basis
• May not be restocked once sold out
• Are not held or reserved — placing an item in your cart does not guarantee availability
• May have production lead times of 2–6 weeks from order date

Subscribe to our email list or follow us on social media to be notified of upcoming drops.`
  },
  {
    title: "PAYMENT, FRAUD & ORDER CANCELLATION",
    icon: "09",
    content: `All payments are processed securely through Stripe. By placing an order, you represent that you are the authorized holder of the payment method used.

FRAUD & CHARGEBACKS: Any fraudulent chargeback attempt will be reported to the appropriate authorities, payment networks, PROFECO, and the Unidad de Inteligencia Financiera (UIF). We reserve the right to blacklist customers engaged in fraud.

ORDER CANCELLATION: Once an order enters production, it cannot be cancelled. Production begins within 24–48 hours of order confirmation. Contact contact@musclemami.fit immediately if you need to cancel.`
  },
  {
    title: "RETURNS, EXCHANGES & FINAL SALE POLICY",
    icon: "10",
    content: `ALL SALES ARE FINAL. We do not accept returns or exchanges for:
• Change of mind
• Incorrect size selection (refer to our size guide)
• Color differences between screen and physical product
• Delays in transit

EXCEPTIONS — We will replace or refund items that arrive:
• With a manufacturing defect
• Incorrect from your order (wrong item or size sent by us)

To initiate a claim: contact@musclemami.fit within 7 days of delivery with your order number and photos of the issue. Approved claims resolved within 3–5 business days.

MEXICAN CONSUMER RIGHTS: Customers in México may file complaints with PROFECO at www.profeco.gob.mx or 800-468-8722. Nothing in these Terms limits your rights under mandatory consumer protection laws.`
  },
  {
    title: "SHIPPING & DELIVERY",
    icon: "11",
    content: `We ship within México, the United States, and select international destinations. Shipping times are estimates and are not guaranteed. We are not responsible for:
• Carrier delays or lost packages
• Delays caused by weather, disasters, or events outside our control
• Customs delays on international orders
• Delays from incorrect shipping information provided by the customer

Once handed to the carrier with a tracking number, the package is in the carrier's custody. For lost packages, file a claim directly with the carrier.`
  },
  {
    title: "INTERNATIONAL ORDERS & CUSTOMS",
    icon: "12",
    content: `International customers are responsible for all import duties, taxes, customs fees, and brokerage charges. We are required by Mexican customs law (Ley Aduanera) to accurately declare the value and contents of all shipments. We cannot mark packages as "gifts" or undervalue shipments.

Refusal to pay customs duties may result in the package being returned or destroyed — we are not responsible and refunds will not be issued in such cases.`
  },
  {
    title: "WARRANTY DISCLAIMER",
    icon: "13",
    content: `THIS SITE AND ALL PRODUCTS ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. We do not warrant that the site will be uninterrupted, error-free, or secure.

To the extent that applicable mandatory consumer protection law grants you rights that cannot be disclaimed, those rights remain unaffected.`
  },
  {
    title: "LIMITATION OF LIABILITY",
    icon: "14",
    content: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE MEXICAN LAW, IN NO EVENT SHALL MUSCLE YUMMI MAMI BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THIS SITE OR OUR PRODUCTS.

OUR TOTAL LIABILITY SHALL NOT EXCEED THE GREATER OF: (A) THE TOTAL AMOUNT YOU PAID US IN THE TWELVE MONTHS PRECEDING THE CLAIM, OR (B) $100.00 USD OR ITS EQUIVALENT IN MXN.

Nothing in this section limits liability for gross negligence, willful misconduct, or fraud.`
  },
  {
    title: "INDEMNIFICATION",
    icon: "15",
    content: `You agree to defend, indemnify, and hold harmless Muscle Yummi Mami and its owners, officers, employees, and agents from and against any claims, damages, losses, and expenses (including attorneys' fees) arising out of:

• Your use of this site or products purchased through it
• Your violation of these Terms
• Your violation of any third-party right
• Any Submitted Content you provide
• Your fraudulent, illegal, or harmful conduct`
  },
  {
    title: "FORCE MAJEURE",
    icon: "16",
    content: `Muscle Yummi Mami shall not be liable for any delay or failure to perform where such delay results from circumstances beyond our reasonable control — including acts of God, natural disasters, pandemics, supply chain disruptions, government actions, cyberattacks, or civil unrest ("caso fortuito o fuerza mayor" under Mexican law).

We will make reasonable efforts to notify affected customers and fulfill orders as soon as practicable.`
  },
  {
    title: "DISPUTE RESOLUTION",
    icon: "17",
    content: `INFORMAL RESOLUTION: Contact legal@musclemami.fit first. We will attempt to resolve disputes within 30 calendar days.

PROFECO CONCILIATION: Mexican consumers may file a complaint with PROFECO through CONCILIANET at www.profeco.gob.mx.

ARBITRATION: Unresolved disputes may be submitted to binding arbitration administered by the Centro de Arbitraje de México (CAM), conducted in Spanish, seated in Hermosillo, Sonora, México.

CLASS ACTION WAIVER: Claims may only be brought individually, not as part of any class or representative action.

EXCEPTIONS: Either party may seek emergency injunctive relief from a competent Mexican court. IP infringement claims may be brought before IMPI or competent courts without arbitration.`
  },
  {
    title: "GOVERNING LAW & JURISDICTION",
    icon: "18",
    content: `These Terms are governed by the federal laws of the United Mexican States, including:

• Código Civil Federal
• Código de Comercio
• Ley Federal de Protección al Consumidor (LFPC)
• Ley Federal de Protección a la Propiedad Industrial (LFPPI)
• Ley Federal del Derecho de Autor (LFDA)
• Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)

Venue for all disputes: competent courts of Hermosillo, Sonora, México.`
  },
  {
    title: "TAXES & IVA",
    icon: "19",
    content: `MEXICAN CUSTOMERS: All prices may be subject to the Impuesto al Valor Agregado (IVA) at 16% as required by the Ley del Impuesto al Valor Agregado. We issue electronic invoices (CFDI) upon request — contact contact@musclemami.fit with your RFC and fiscal data.

INTERNATIONAL CUSTOMERS: Responsible for all applicable VAT, GST, sales tax, import duties, and local taxes in their jurisdiction.`
  },
  {
    title: "SEVERABILITY, WAIVER & ENTIRE AGREEMENT",
    icon: "20",
    content: `SEVERABILITY: If any provision is found invalid or unenforceable, it shall be modified to the minimum extent necessary or severed, and remaining provisions continue in full force.

WAIVER: Failure to enforce any right does not constitute a waiver of that right.

ENTIRE AGREEMENT: These Terms and our Privacy Policy constitute the entire agreement between you and MMM and supersede all prior agreements.

LANGUAGE: These Terms are written in English. In the event of conflict with any translation, the English version prevails except where Mexican law requires otherwise.`
  },
  {
    title: "CONTACT & LEGAL NOTICES",
    icon: "21",
    content: `General inquiries:      contact@musclemami.fit
Legal matters:           legal@musclemami.fit
IP / brand enforcement: legal@musclemami.fit
Privacy / ARCO rights:  privacidad@musclemami.fit
Website:                     musclemami.fit
Instagram:                  @muscle.yummi.mami.fit_models
Location:                    Hermosillo, Sonora, México

PROFECO:  www.profeco.gob.mx — 800-468-8722
IMPI:          www.impi.gob.mx
INAI:           www.inai.org.mx

© 2026 Muscle Yummi Mami — All Rights Reserved.`
  }
];

const privacySections = [
  {
    title: "WHO WE ARE & WHO THIS POLICY APPLIES TO",
    icon: "01",
    content: `Muscle Yummi Mami ("MMM," "we," "us," "our") is a company legally organized and operating under the laws of the United Mexican States, with its principal place of business in Hermosillo, Sonora, México.

We operate musclemami.fit and are the data controller ("responsable") for all personal data collected through this site, as defined under the Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).

This Privacy Policy applies to every visitor, form submitter, customer, and anyone who contacts us. By using this site, you acknowledge that you have read and understood this Privacy Policy.`
  },
  {
    title: "WHAT PERSONAL DATA WE COLLECT",
    icon: "02",
    content: `We only collect data necessary to operate our business and serve you:

EMAIL LIST SIGNUP:
• Full name, email address, phone (optional), interest category

MODEL APPLICATION:
• Full name, email, phone (optional), Instagram handle (optional), collaboration type, personal message (optional)

LOVE LETTER FORM:
• Name (optional), email (optional), role, written message, photo (optional — at your own risk)

PURCHASES (coming soon via Stripe):
• Name, billing/shipping address, email
• Payment info — we never see or store your card number. Stripe handles all payment data.

AUTOMATICALLY COLLECTED (by Vercel, our host):
• Basic server logs — IP address, browser type, pages visited. Used for security only, not marketing.

We do NOT collect sensitive data (health, religion, biometrics) or data from children under 13.`
  },
  {
    title: "WHY WE COLLECT YOUR DATA",
    icon: "03",
    content: `PURPOSE 1 — Processing and fulfilling orders
Legal basis: Contract performance

PURPOSE 2 — Sending drop alerts and brand news (email list subscribers only)
Legal basis: Your consent — unsubscribe anytime via the link in every email

PURPOSE 3 — Reviewing model applications and love letter submissions
Legal basis: Your consent — submission is entirely voluntary

PURPOSE 4 — Responding to your questions and communications
Legal basis: Legitimate interest

PURPOSE 5 — Fraud prevention and site security
Legal basis: Legitimate interest

We do NOT use your data for selling to third parties, behavioral advertising, or any purpose not listed above.`
  },
  {
    title: "WHO WE SHARE YOUR DATA WITH",
    icon: "04",
    content: `We do not sell, rent, or trade your personal data. Ever.

We share data only with these trusted processors who act strictly on our behalf:

GOOGLE LLC — stores form submissions in Google Sheets
→ policies.google.com/privacy

VERCEL INC. — hosts musclemami.fit, collects basic server logs
→ vercel.com/legal/privacy-policy

STRIPE INC. — handles all payment transactions (coming soon), PCI-DSS compliant
→ stripe.com/privacy

SHIPPING CARRIERS — your name and address shared with delivery carrier only
→ FedEx, UPS, DHL, Correos de México as applicable

All processors are required to use your data only as we instruct and to maintain appropriate security.`
  },
  {
    title: "HOW LONG WE KEEP YOUR DATA",
    icon: "05",
    content: `• Email list signups — until you unsubscribe or request deletion
• Model applications — 12 months, then deleted unless collaboration is active
• Love letter submissions — 12 months for internal review, then deleted
• Order records — 5 years as required by Mexican tax law (SAT)
• Server logs (Vercel) — approximately 30 days

When data is no longer needed, we delete or anonymize it.`
  },
  {
    title: "YOUR RIGHTS — ARCO (MEXICAN CUSTOMERS)",
    icon: "06",
    content: `Under the LFPDPPP, you have the following ARCO rights:

ACCESO — Know what personal data we hold about you and how we use it
RECTIFICACIÓN — Correct inaccurate or incomplete data
CANCELACIÓN — Request deletion of your personal data
OPOSICIÓN — Object to processing for specific purposes, including marketing

HOW TO EXERCISE YOUR ARCO RIGHTS:
Email: privacidad@musclemami.fit

Include: (1) your full name, (2) the right you wish to exercise, (3) identifying info (e.g., email used), (4) copy of valid ID.

We respond within 20 business days at no charge.

If unsatisfied, file a complaint with:
INAI — www.inai.org.mx`
  },
  {
    title: "YOUR RIGHTS — GDPR (EU / EEA CUSTOMERS)",
    icon: "07",
    content: `If you are in the EU or EEA, you have additional rights under the GDPR:

• Right of access — obtain a copy of your personal data
• Right to rectification — correct inaccurate data
• Right to erasure ("right to be forgotten")
• Right to restrict processing
• Right to data portability
• Right to object to processing
• Right to withdraw consent at any time

Legal basis for processing EU data: contract performance, consent, or legitimate interests.

To exercise these rights: privacidad@musclemami.fit

You may also lodge a complaint with your local EU data protection supervisory authority.

Note: Your data may be transferred to and stored in México. By using this site, you consent to this transfer.`
  },
  {
    title: "YOUR RIGHTS — CCPA (CALIFORNIA CUSTOMERS)",
    icon: "08",
    content: `California residents have the following rights under the CCPA:

RIGHT TO KNOW — Request disclosure of what personal information we collect, its sources, our business purpose, and who we share it with.

RIGHT TO DELETE — Request deletion of your personal information, subject to legal exceptions.

RIGHT TO OPT OUT OF SALE — We do NOT sell your personal information. No opt-out needed.

RIGHT TO NON-DISCRIMINATION — We will not discriminate against you for exercising CCPA rights.

To exercise California privacy rights: privacidad@musclemami.fit
We respond to verified requests within 45 days.`
  },
  {
    title: "COOKIES & TRACKING",
    icon: "09",
    content: `Muscle Yummi Mami currently does NOT use:
• Tracking cookies
• Analytics tools (Google Analytics, Meta Pixel, etc.)
• Behavioral advertising or retargeting pixels
• Any third-party tracking scripts

The only technical data collected is standard server logs by Vercel for security and uptime — not used for marketing or profiling.

If we add analytics or tracking in the future, we will update this Privacy Policy and add a cookie consent notice before any tracking begins.`
  },
  {
    title: "DATA SECURITY",
    icon: "10",
    content: `We protect your data with the following measures:

• All data is transmitted via HTTPS (TLS encryption)
• Form submissions are sent securely to Google Sheets via encrypted API
• Stripe is PCI-DSS Level 1 compliant — the highest payment security standard
• Access to data is restricted to authorized MMM personnel only

No system is 100% secure. In the event of a data breach affecting your rights, we will notify you and relevant authorities as required by the LFPDPPP and applicable law.

Do not submit photos containing sensitive personal information — photo uploads are at your own risk.`
  },
  {
    title: "EMAIL COMMUNICATIONS",
    icon: "11",
    content: `If you sign up for our email list, we may send:
• Drop alerts and product launch announcements
• Brand updates and Mami Monday features
• Promotional offers and exclusive access

UNSUBSCRIBE: Every marketing email includes an unsubscribe link. Opting out does not affect order confirmation emails.

We do not send spam. We do not share your email with third-party marketers.`
  },
  {
    title: "CHILDREN'S PRIVACY",
    icon: "12",
    content: `This site is not directed to children under 13. We do not knowingly collect personal data from children under 13.

If you believe your child has submitted data to us, contact privacidad@musclemami.fit immediately and we will delete it promptly.

Users between 13 and 17 must have parental or guardian consent to use this site and make purchases.`
  },
  {
    title: "CHANGES TO THIS PRIVACY POLICY",
    icon: "13",
    content: `We may update this Privacy Policy to reflect changes in our practices or legal requirements. When we do:

• The updated policy will be posted at musclemami.fit/legal
• The "Last Updated" date will be revised
• For significant changes, we will notify email list subscribers directly

Your continued use of this site after changes constitutes acceptance of the updated policy.

Last updated: May 2026`
  },
  {
    title: "CONTACT — PRIVACY QUESTIONS",
    icon: "14",
    content: `Privacy / ARCO rights:  privacidad@musclemami.fit
General contact:           contact@musclemami.fit
Legal matters:              legal@musclemami.fit
Website:                        musclemami.fit
Instagram:                     @muscle.yummi.mami.fit_models
Location:                       Hermosillo, Sonora, México

INAI (data privacy):      www.inai.org.mx
PROFECO (consumers):  www.profeco.gob.mx — 800-468-8722

We acknowledge all privacy requests within 5 business days and respond fully within 20 business days.

© 2026 Muscle Yummi Mami — All Rights Reserved.`
  }
];

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState<"terms" | "privacy">("terms");
  const sections = activeTab === "terms" ? termsSections : privacySections;

  return (
    <div style={{
      width: "100vw",
      minHeight: "100vh",
      background: "#a4bccc",
      fontFamily: "Geneva, Charcoal, Chicago, Arial, sans-serif",
      userSelect: "none"
    }}>
      <MenuBar active="Legal" />

      <div className="mobile-page-padding" style={{ padding: "48px 60px 80px", display: "flex", flexDirection: "column", alignItems: "center" }}>

        {/* Breadcrumb */}
        <div style={{ color: "#888", fontSize: 10, marginBottom: 16, alignSelf: "flex-start" }}>
          💾 musclemami.fit &nbsp;▶&nbsp; Legal
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
              ⚖️ &nbsp; Legal — Muscle Yummi Mami
            </div>
            <div style={{ position: "absolute", right: 5, width: 14, height: 14, border: "1.5px solid #000", background: "#fff" }} />
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", borderBottom: "1.5px solid #000", background: "#e0e0e0" }}>
            <button
              onClick={() => setActiveTab("terms")}
              style={{
                padding: "7px 20px",
                fontSize: 11,
                fontWeight: "bold",
                fontFamily: "Geneva, Arial, sans-serif",
                cursor: "pointer",
                border: "none",
                borderRight: "1.5px solid #000",
                background: activeTab === "terms" ? "#fff" : "#c8c8c8",
                color: "#000",
                letterSpacing: 0.5,
                borderBottom: activeTab === "terms" ? "1.5px solid #fff" : "none",
                marginBottom: activeTab === "terms" ? -1.5 : 0,
                position: "relative",
                zIndex: activeTab === "terms" ? 1 : 0,
              }}
            >
              📋 Terms &amp; Conditions
            </button>
            <button
              onClick={() => setActiveTab("privacy")}
              style={{
                padding: "7px 20px",
                fontSize: 11,
                fontWeight: "bold",
                fontFamily: "Geneva, Arial, sans-serif",
                cursor: "pointer",
                border: "none",
                borderRight: "1.5px solid #000",
                background: activeTab === "privacy" ? "#fff" : "#c8c8c8",
                color: "#000",
                letterSpacing: 0.5,
                borderBottom: activeTab === "privacy" ? "1.5px solid #fff" : "none",
                marginBottom: activeTab === "privacy" ? -1.5 : 0,
                position: "relative",
                zIndex: activeTab === "privacy" ? 1 : 0,
              }}
            >
              🔒 Privacy Policy
            </button>
            <div style={{ flex: 1, background: "#c8c8c8", fontSize: 9, color: "#888", display: "flex", alignItems: "center", paddingLeft: 10 }}>
              Governed by Mexican Law — Hermosillo, Sonora, México
            </div>
          </div>

          {/* Content body */}
          <div style={{ background: "#f8f6f2", padding: "32px 40px", borderBottom: "1px solid #000" }}>

            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <div style={{ fontSize: 26 }}>{activeTab === "terms" ? "⚖️" : "🔒"}</div>
              <h1 style={{ fontSize: 17, fontWeight: "bold", color: "#000", marginTop: 8, letterSpacing: 3 }}>
                {activeTab === "terms" ? "TERMS & CONDITIONS" : "PRIVACY POLICY"}
              </h1>
              <p style={{ fontSize: 10, color: "#666", marginTop: 6 }}>
                musclemami.fit — Effective 2026 — Governed by the laws of the United Mexican States
              </p>

              {/* Attorney notice (terms only) */}
              {activeTab === "terms" && (
                <div style={{ marginTop: 12, background: "#fffef0", border: "1px solid #e8b86d", padding: "8px 12px", fontSize: 9, color: "#7a5500", lineHeight: 1.7, textAlign: "left" }}>
                  <strong>⚠️ Legal Notice:</strong> These Terms should be reviewed by a licensed Mexican attorney (abogado) familiar with e-commerce, LFPC, and LFPDPPP before going live commercially.
                </div>
              )}

              {/* Privacy quick summary */}
              {activeTab === "privacy" && (
                <div style={{ marginTop: 12, background: "#fff", border: "2px solid #000", padding: "14px 16px", textAlign: "left", boxShadow: "2px 2px 0 #333" }}>
                  <div style={{ fontSize: 10, fontWeight: "bold", marginBottom: 8, letterSpacing: 1 }}>⚡ QUICK SUMMARY</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                    {[
                      "We only collect what we need to run the business",
                      "We never sell or rent your data to anyone",
                      "We don't use tracking cookies or analytics (yet)",
                      "You can request, correct, or delete your data anytime",
                      "Payments go through Stripe — we never see your card number",
                      "Your data is governed by Mexican law (LFPDPPP)",
                    ].map(text => (
                      <div key={text} style={{ display: "flex", gap: 8, fontSize: 9, color: "#333", lineHeight: 1.5 }}>
                        <span>✅</span><span>{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Table of contents */}
              <div style={{ marginTop: 14, textAlign: "left", background: "#fff", border: "1px solid #ccc", padding: "12px 16px" }}>
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
                  <p style={{ fontSize: 10, color: "#222", lineHeight: 2, whiteSpace: "pre-line" }}>
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Closing */}
            <div style={{ marginTop: 40, padding: "16px 20px", background: "#000", color: "#fff", fontSize: 10, lineHeight: 1.9, letterSpacing: 0.3 }}>
              <div style={{ fontWeight: "bold", fontSize: 11, marginBottom: 6, letterSpacing: 2 }}>
                {activeTab === "terms" ? "⚖️ FINAL NOTICE" : "🔒 OUR COMMITMENT"}
              </div>
              {activeTab === "terms"
                ? `These Terms & Conditions constitute a complete and legally binding agreement between you and Muscle Yummi Mami, a company operating under the laws of the United Mexican States, domiciled in Hermosillo, Sonora, México. By using this site or purchasing our products, you confirm that you have read, understood, and agreed to every section above.\n\nWe built this brand from nothing. We protect it like everything. Respect the work.`
                : `We built Muscle Yummi Mami from nothing. Every person who supports this brand deserves to know their information is safe with us. We don't play games with your data. We collect what we need, protect it, and respect your right to control it.\n\nQuestions? privacidad@musclemami.fit — we actually read these.`
              }
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
            <span>musclemami.fit/legal — Governing Law: México</span>
            <span>© 2026 Muscle Yummi Mami</span>
          </div>

        </div>
      </div>
    </div>
  );
}

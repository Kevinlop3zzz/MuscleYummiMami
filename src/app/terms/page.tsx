import { MenuBar } from "@/components/MacWindow";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Muscle Yummi Mami Terms and Conditions — governing use of musclemami.fit and purchase of our products.",
  openGraph: {
    title: "Terms & Conditions — Muscle Yummi Mami",
    description: "Terms and Conditions governing use of musclemami.fit and purchase of our products.",
    url: "https://musclemami.fit/terms",
  },
};

const sections = [
  {
    title: "AGREEMENT TO TERMS",
    icon: "01",
    content: `Welcome to musclemami.fit — the official online store of Muscle Yummi Mami. These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("User," "Customer," "you") and Muscle Yummi Mami ("we," "us," "our," "MMM") governing your access to and use of this website and the purchase of our products.

BY ACCESSING THIS SITE, CREATING AN ACCOUNT, OR COMPLETING A PURCHASE, YOU CONFIRM THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS IN THEIR ENTIRETY. If you do not agree, you must immediately stop using this site.

We reserve the right to update these Terms at any time. Updates take effect immediately upon posting. Your continued use of the site constitutes acceptance of the revised Terms. Check this page regularly.`
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
    content: `All content on this site — including but not limited to the Muscle Yummi Mami name, the "MMM" mark, our logo, all original apparel and footwear designs, graphics, photographs, artwork, slogans, cereal box product icons, the "Mami Monday" feature, the "Art Doesn't Stop at Bars" concept, all written content, and all other creative works — are the exclusive intellectual property of Muscle Yummi Mami and are protected under the United States Copyright Act (17 U.S.C. § 101 et seq.), the Lanham Act (15 U.S.C. § 1051 et seq.), and applicable international treaties.

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
• DMCA takedown notices filed with all relevant platforms
• Civil litigation seeking statutory damages up to $150,000 per infringed work under 17 U.S.C. § 504(c)(2)
• Claims for actual damages, lost profits, and disgorgement of infringer's profits
• Injunctive relief to immediately halt all infringing activity
• Criminal referral under 18 U.S.C. § 2320 (trafficking in counterfeit goods — up to 10 years federal imprisonment for first offense)
• Public disclosure of the infringement across all MMM platforms

We do not warn twice. We do not negotiate with thieves. If you steal from this brand, we will find you, and we will act.

TO REPORT INFRINGEMENT: If you witness unauthorized use of our intellectual property, please contact legal@musclemami.fit immediately. We act fast, and we appreciate the community's help protecting what we've built.

DMCA DESIGNATED AGENT: To submit a formal DMCA takedown notice, contact legal@musclemami.fit with the subject line "DMCA Notice." Your notice must comply with 17 U.S.C. § 512(c)(3) and include: (1) identification of the copyrighted work; (2) identification of the infringing material and its URL; (3) your contact information; (4) a statement of good faith belief; (5) a statement of accuracy under penalty of perjury; and (6) your physical or electronic signature.`
  },
  {
    title: "USER-GENERATED CONTENT & SUBMITTED MEDIA LICENSE",
    icon: "05",
    content: `When you voluntarily submit any content to Muscle Yummi Mami — including but not limited to photos, images, written messages, love letters, model portfolios, artwork, or any other media ("Submitted Content") through our Love Letter page, email, social media, or any other channel — you grant Muscle Yummi Mami a non-exclusive, worldwide, royalty-free, perpetual, irrevocable, sublicensable license to use, reproduce, display, distribute, adapt, and promote that Submitted Content in connection with our business, including on our website, social media platforms, marketing materials, and press.

BY SUBMITTING CONTENT, YOU REPRESENT AND WARRANT THAT:
• You own all rights to the Submitted Content, or have obtained all necessary permissions from rights holders
• The Submitted Content does not infringe the intellectual property, privacy, or publicity rights of any third party
• You have the consent of any identifiable person depicted in photos or videos
• The Submitted Content does not contain illegal, defamatory, obscene, or harmful material

We reserve the right — but are not obligated — to review, edit, refuse, or remove any Submitted Content at our sole discretion, for any reason, at any time, without notice. Submission of content does not guarantee publication, feature, or collaboration.

You retain ownership of your Submitted Content. We will never claim to own it outright. However, the license you grant us above remains in effect even if you stop using our site.`
  },
  {
    title: "PHOTO & FILE UPLOAD — LIABILITY DISCLAIMER",
    icon: "06",
    content: `Muscle Yummi Mami implements reasonable technical and organizational security measures to protect Submitted Content. However, no data transmission over the internet or electronic storage system is 100% secure.

BY UPLOADING ANY PHOTO, IMAGE, OR FILE TO THIS SITE, YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT:

• You submit all content entirely at your own risk
• Muscle Yummi Mami is NOT liable for any unauthorized access to, breach of, exposure of, or leakage of any photo or file you submit — including but not limited to data breaches, hacking, third-party interception, or technical failures
• We are not responsible for any harm, embarrassment, reputational damage, or loss arising from the unauthorized exposure of your Submitted Content
• We strongly advise you not to submit photos containing sensitive personal information, identifying documents, minors, or content you would not be comfortable with others potentially accessing

DO NOT UPLOAD:
• Photos of minors without clear parental/guardian authorization
• Images containing personal identifying information (ID cards, addresses, financial info)
• Content depicting illegal activity
• Photos you do not own or have rights to

To request removal of previously submitted content, contact contact@musclemami.fit. We will make reasonable efforts to comply promptly.`
  },
  {
    title: "PRODUCTS, ORDERS & PRICING",
    icon: "07",
    content: `All products are subject to availability. We reserve the right to limit quantities, discontinue products, or refuse any order at our sole discretion. Product descriptions, images, and pricing are provided in good faith but may contain typographical errors or inaccuracies. We reserve the right to correct errors and cancel orders affected by pricing mistakes, even after an order has been placed.

In the event of a pricing error, we will notify you and give you the option to confirm the order at the correct price or receive a full refund.

We reserve the right to change prices at any time without notice. The price displayed at checkout is the price you will be charged. Promotional pricing is valid only for the stated promotional period.`
  },
  {
    title: "CUSTOM & LIMITED-EDITION DROPS",
    icon: "08",
    content: `Many Muscle Yummi Mami products are custom-made, limited-edition, or exclusive drops. These products:

• Are available strictly on a first-come, first-served basis
• May not be restocked once sold out
• Are not held or reserved under any circumstances — placing an item in your cart does not guarantee availability
• May have production lead times of 2–6 weeks from order date

We are not responsible for missed drop windows. Subscribe to our email list or follow us on social media to be notified of upcoming drops.`
  },
  {
    title: "PAYMENT, FRAUD & ORDER CANCELLATION",
    icon: "09",
    content: `All payments are processed securely through our payment processor. By placing an order, you represent that you are the authorized holder of the payment method used and that all billing information provided is accurate.

FRAUD & CHARGEBACKS: Any attempt to use stolen payment credentials, file a fraudulent chargeback, or otherwise defraud Muscle Yummi Mami will be reported to the appropriate authorities and payment networks. We reserve the right to blacklist any customer found to have engaged in fraudulent activity, refuse future orders, and pursue civil and criminal remedies.

ORDER CANCELLATION: Once an order enters production, it cannot be cancelled. For made-to-order or custom items, production begins within 24–48 hours of order confirmation. If you need to cancel within that window, contact us immediately at contact@musclemami.fit — we will do our best but cannot guarantee cancellation once production has begun.

We reserve the right to cancel any order for any reason — including but not limited to suspected fraud, product unavailability, or pricing errors — and will issue a full refund in such cases.`
  },
  {
    title: "RETURNS, EXCHANGES & FINAL SALE POLICY",
    icon: "10",
    content: `Due to the custom and limited-edition nature of our products, ALL SALES ARE FINAL. We do not accept returns or exchanges for:
• Change of mind
• Incorrect size selection (please refer to our size guide before ordering)
• Color perception differences between screen and physical product
• Delays in transit

EXCEPTIONS — We will replace or refund items that arrive:
• With a manufacturing defect (misprints, stitching errors, damaged packaging)
• Incorrect from your order (wrong item, wrong size sent by us)

To initiate a defect or error claim, contact contact@musclemami.fit within 7 days of delivery with:
(1) Your order number
(2) Photos of the defect or incorrect item
(3) A brief description of the issue

We will review your claim and respond within 3–5 business days. Approved claims will be resolved with a replacement or store credit at our discretion.`
  },
  {
    title: "SHIPPING & DELIVERY",
    icon: "11",
    content: `We ship within the United States and to select international destinations. Shipping times are estimates provided by the carrier and are not guaranteed. Muscle Yummi Mami is not responsible for:
• Carrier delays, lost packages, or packages marked delivered but not received
• Delays caused by weather, natural disasters, or events outside our control
• Customs delays on international orders

Once your order has been handed to the carrier and a tracking number has been issued, the package is in the carrier's custody. For lost or stolen packages, you must file a claim directly with the carrier. We are happy to assist with documentation where possible, but we are not liable for packages lost after confirmed handoff to the carrier.

Tracking information will be emailed to you when your order ships. It may take up to 48 hours for tracking to update after the label is created.`
  },
  {
    title: "INTERNATIONAL ORDERS & CUSTOMS",
    icon: "12",
    content: `International customers are responsible for all import duties, taxes, customs fees, and brokerage charges imposed by their country's government. These charges are not included in our product or shipping prices and are not our responsibility.

We are required by law to accurately declare the value and contents of all international shipments. We cannot mark packages as "gifts" or undervalue shipments to reduce customs fees. Refusal to pay customs duties may result in the package being returned or destroyed by customs — in such cases, we are not responsible and refunds will not be issued.

If your country restricts the import of apparel or related goods, it is your responsibility to be aware of and comply with those restrictions before placing an order.`
  },
  {
    title: "COLORS & PRODUCT APPEARANCE",
    icon: "13",
    content: `We make every reasonable effort to accurately represent the colors, textures, and appearance of our products in photos and descriptions on this site. However, the colors you see on your screen depend on your device's display calibration, brightness settings, and color profile — factors entirely outside our control.

Slight variations between the product shown online and the physical product received are normal and do not constitute a defect. If accurate color matching is critical to your purchase, please contact us before ordering.`
  },
  {
    title: "WARRANTY DISCLAIMER",
    icon: "14",
    content: `THIS SITE AND ALL PRODUCTS AND SERVICES OFFERED THROUGH IT ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.

We do not warrant that: (a) the site will be uninterrupted, error-free, or secure; (b) defects will be corrected; (c) the site or servers are free of viruses or harmful components; or (d) results obtained from use of the site will be accurate or reliable.

Some jurisdictions do not allow the exclusion of implied warranties, so some of the above exclusions may not apply to you.`
  },
  {
    title: "LIMITATION OF LIABILITY",
    icon: "15",
    content: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL MUSCLE YUMMI MAMI, ITS OWNERS, EMPLOYEES, AGENTS, PARTNERS, OR SUPPLIERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES — INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES — ARISING OUT OF OR RELATED TO:

• Your use of or inability to use this site
• Any products purchased through this site
• Unauthorized access to or alteration of your data or Submitted Content
• Any third-party conduct or content on this site
• Any other matter relating to our products or services

IN NO EVENT SHALL OUR TOTAL CUMULATIVE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS EXCEED THE GREATER OF: (A) THE TOTAL AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED DOLLARS ($100.00 USD).

These limitations apply regardless of the theory of liability (contract, tort, negligence, strict liability, or otherwise) and even if we have been advised of the possibility of such damages.`
  },
  {
    title: "INDEMNIFICATION",
    icon: "16",
    content: `You agree to defend, indemnify, and hold harmless Muscle Yummi Mami and its owners, officers, employees, agents, and representatives from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or related to:

• Your use of this site or any products purchased through it
• Your violation of these Terms
• Your violation of any third-party right, including intellectual property, privacy, or publicity rights
• Any Submitted Content you provide to us
• Your fraudulent, illegal, or harmful conduct

This obligation survives termination of your relationship with Muscle Yummi Mami and your use of this site.`
  },
  {
    title: "FORCE MAJEURE",
    icon: "17",
    content: `Muscle Yummi Mami shall not be liable for any delay or failure to perform our obligations under these Terms where such delay or failure results from circumstances beyond our reasonable control, including but not limited to: acts of God, natural disasters, pandemics, supply chain disruptions, labor disputes, power outages, government actions or restrictions, carrier failures, cyberattacks, or civil unrest.

In such events, we will make reasonable efforts to notify affected customers and fulfill orders as soon as practicable.`
  },
  {
    title: "DISPUTE RESOLUTION & BINDING ARBITRATION",
    icon: "18",
    content: `PLEASE READ THIS SECTION CAREFULLY — IT AFFECTS YOUR LEGAL RIGHTS.

INFORMAL RESOLUTION: Before initiating any formal legal proceeding, you agree to first contact us at legal@musclemami.fit and attempt to resolve the dispute informally. We will make a good-faith effort to resolve the issue within 30 days. If we cannot resolve the dispute informally, either party may proceed to arbitration as set forth below.

BINDING ARBITRATION: Except as set forth below, any dispute, claim, or controversy arising out of or relating to these Terms, our products, or your use of this site shall be resolved exclusively by binding arbitration administered by the American Arbitration Association (AAA) under its Consumer Arbitration Rules, rather than in court. The arbitration shall take place in the United States. The arbitrator's decision shall be final and binding.

CLASS ACTION WAIVER: YOU AND MUSCLE YUMMI MAMI AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE ACTION. The arbitrator may not consolidate claims of more than one person and may not preside over any form of a representative or class proceeding.

EXCEPTIONS: Either party may seek emergency injunctive or other equitable relief in a court of competent jurisdiction to prevent irreparable harm pending arbitration. Claims involving intellectual property infringement may also be brought in court.

If the class action waiver is found unenforceable, then the entirety of this arbitration agreement shall be null and void.`
  },
  {
    title: "GOVERNING LAW & JURISDICTION",
    icon: "19",
    content: `These Terms shall be governed by and construed in accordance with the laws of the United States and the laws of the state in which Muscle Yummi Mami is domiciled, without regard to conflict-of-law principles. To the extent any dispute is not subject to arbitration, you agree to submit to the exclusive personal jurisdiction of the state and federal courts located in that jurisdiction and waive any objection to such jurisdiction or venue.`
  },
  {
    title: "PRIVACY & CUSTOMER DATA",
    icon: "20",
    content: `Your personal information — including your name, email address, shipping address, and purchase history — is collected and used solely to process and fulfill your orders, communicate with you about your account, and improve our services. We do not sell, rent, or share your personal information with third parties for their own marketing purposes.

We use industry-standard security measures to protect your data. However, no method of electronic transmission or storage is fully secure, and we cannot guarantee absolute data security.

For full details on how we collect, use, and protect your data, please review our Privacy Policy at musclemami.fit/privacy. Our Privacy Policy is incorporated into these Terms by reference.`
  },
  {
    title: "SALES TAX",
    icon: "21",
    content: `Sales tax is collected on orders shipped to states where Muscle Yummi Mami has a tax nexus obligation under applicable state and federal law. The applicable tax rate is determined by your shipping address and is calculated at checkout. Tax rates are set by state and local governments and are subject to change without notice.

International customers are responsible for all applicable VAT, GST, import duties, and local taxes as required by their jurisdiction.`
  },
  {
    title: "SEVERABILITY, WAIVER & ENTIRE AGREEMENT",
    icon: "22",
    content: `SEVERABILITY: If any provision of these Terms is found by a court or arbitrator of competent jurisdiction to be invalid, illegal, or unenforceable, that provision shall be modified to the minimum extent necessary to make it enforceable, or severed from these Terms if modification is not possible — and the remaining provisions shall continue in full force and effect.

WAIVER: Our failure to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision. No waiver of any breach shall constitute a waiver of any subsequent breach.

ENTIRE AGREEMENT: These Terms, together with our Privacy Policy, constitute the entire agreement between you and Muscle Yummi Mami with respect to your use of this site and the purchase of our products, and supersede all prior or contemporaneous agreements, representations, warranties, and understandings — whether written or oral — relating to the same subject matter.

ASSIGNMENT: You may not assign or transfer any rights or obligations under these Terms without our prior written consent. We may assign our rights and obligations freely.`
  },
  {
    title: "CONTACT & LEGAL NOTICES",
    icon: "23",
    content: `For general inquiries:       contact@musclemami.fit
For legal matters:             legal@musclemami.fit
For IP / DMCA notices:      legal@musclemami.fit
Website:                           musclemami.fit
Instagram:                        @muscleyummimami

All formal legal notices must be sent in writing to legal@musclemami.fit. We will acknowledge receipt and respond within 10 business days.

© 2025 Muscle Yummi Mami — All Rights Reserved. Original designs. Built different.`
  }
];

export default function TermsPage() {
  return (
    <div style={{
      width: "100vw",
      minHeight: "100vh",
      background: "#a4bccc",
      fontFamily: "Geneva, Charcoal, Chicago, Arial, sans-serif",
      userSelect: "none"
    }}>
      <MenuBar active="Terms" />

      <div className="mobile-page-padding" style={{ padding: "48px 60px 80px", display: "flex", flexDirection: "column", alignItems: "center" }}>

        {/* Breadcrumb */}
        <div style={{ color: "#888", fontSize: 10, marginBottom: 16, alignSelf: "flex-start" }}>
          💾 musclemami.fit &nbsp;▶&nbsp; Terms &amp; Conditions
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
              📄 &nbsp; Terms &amp; Conditions — Muscle Yummi Mami
            </div>
            <div style={{ position: "absolute", right: 5, width: 14, height: 14, border: "1.5px solid #000", background: "#fff" }} />
          </div>

          {/* Toolbar */}
          <div style={{ background: "#e8e8e8", borderBottom: "1px solid #000", padding: "2px 8px", fontSize: 10, display: "flex", justifyContent: "space-between" }}>
            <span>Legal Document — 23 Sections</span>
            <span>Effective May 2025</span>
          </div>

          {/* Content body */}
          <div style={{ background: "#f8f6f2", padding: "32px 40px", borderBottom: "1px solid #000" }}>

            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <div style={{ fontSize: 26 }}>⚖️</div>
              <h1 style={{ fontSize: 17, fontWeight: "bold", color: "#000", marginTop: 8, letterSpacing: 3 }}>
                TERMS &amp; CONDITIONS
              </h1>
              <p style={{ fontSize: 10, color: "#666", marginTop: 6 }}>
                musclemami.fit — Effective May 2025 — All 23 sections are legally binding upon use of this site.
              </p>

              {/* Quick-jump index */}
              <div style={{ marginTop: 20, textAlign: "left", background: "#fff", border: "1px solid #ccc", padding: "12px 16px" }}>
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
              <div style={{ fontWeight: "bold", fontSize: 11, marginBottom: 6, letterSpacing: 2 }}>⚖️ FINAL NOTICE</div>
              These Terms & Conditions constitute a complete and legally binding agreement between you and Muscle Yummi Mami. By using this site or purchasing our products, you confirm that you have read, understood, and agreed to every section above. Ignorance of these Terms is not a valid defense in any legal proceeding.
              <br /><br />
              We built this brand from nothing. We protect it like everything. Respect the work.
              <br /><br />
              <span style={{ color: "#aaa", fontSize: 9 }}>© 2025 Muscle Yummi Mami. All Rights Reserved. Original designs. Built different.</span>
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
            <span>musclemami.fit/terms — 23 sections — Effective May 2025</span>
            <span>© 2025 Muscle Yummi Mami</span>
          </div>

        </div>
      </div>
    </div>
  );
}

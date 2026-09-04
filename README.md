# Contract Clarity

Build a clean, modern, professional single-page website for a law firm called MD Legal Contract Advisory, a specialist legal advisory firm focused on commercial and corporate contracts, based in Johannesburg, South Africa.

STYLE DIRECTION
- Clean, minimal, professional — NOT flashy, NOT "AI generated" looking. No generic gradients, no stock-photo-heavy hero, no overused rounded-card-with-shadow-on-everything look.
- Reference the layout structure and information flow of kamferlegal.co.za: simple top nav, a confident one-line hero statement, a services grid, a short "how it works" process (3 numbered steps), an FAQ accordion, and a contact section combining firm details with a contact form and map.
- Color palette: deep navy or charcoal + one warm accent (gold, deep green, or burgundy) + off-white background. Restrained — 2-3 colors max.
- Typography: a serif or semi-serif for headings (to feel authoritative/legal), clean sans-serif for body text. Generous white space, no clutter.
- Subtle, tasteful animation only:
  - Text: fade-up/slide-in on scroll for headings and paragraphs (staggered, not bouncy)
  - Images: gentle fade/scale-in on scroll, subtle parallax on the hero image only
  - Buttons/links: soft hover states (color shift or underline animation), no gimmicky effects
  - Keep all animations fast (200-400ms) and understated — this is a law firm, not a startup product page

PAGES / SECTIONS (single-page scroll, with anchor navigation)
1. Header/Nav — logo left ("MD Legal Contract Advisory"), links (Home, About, Services, Contact), sticky on scroll, mobile hamburger menu
2. Hero — Firm name, tagline: "Expert guidance on commercial and corporate contracts." Supporting line: "We help businesses navigate complex agreements with clarity and confidence, ensuring their interests are protected at every step." Location line: "Serving clients in Johannesburg and beyond." Primary CTA: "Book a Consultation." Secondary CTA: "WhatsApp Us."
3. About/Mission — Feature this as a pull-quote or highlighted statement block:
   "Our mission is to empower people and businesses by providing expert, reliable, and strategic legal guidance across all aspects of commercial law — ensuring clarity, compliance, and confidence in every agreement and decision."
4. Services — grid of practice areas as cards (icon + title + short description), built from these core competencies:
   - Contract Drafting, Review & Negotiation — drafting, reviewing, and negotiating a wide range of commercial contracts
   - Compliance Advisory — ensuring compliance with applicable laws, regulations, and company policies
   - Risk Assessment & Due Diligence — thorough contract risk assessments and due diligence
   - Contract Lifecycle Management — managing renewals, amendments, and terminations
   - Stakeholder Advisory — advising on contractual rights, obligations, and risk mitigation
   - Contract Records & Documentation — maintaining organized contract records and documentation systems
   - Legal-Commercial Liaison — facilitating communication between legal, commercial, and operational teams
   - Dispute Resolution Support — overseeing contract disputes and supporting litigation or ADR processes
   - Process Improvement — implementing best practices in contract management
   - Training & Guidance — training on contract procedures and compliance requirements
5. How It Works — 3 simple numbered steps: 1) Contact Us — reach out via form, email, or WhatsApp. 2) Consultation — discuss your contract needs with Dineo Motepe. 3) Tailored Support — receive expert guidance through drafting, review, negotiation, or ongoing contract management.
6. FAQ — accordion with 3-5 questions relevant to contract advisory (e.g. "What types of contracts do you review?", "How long does a contract review take?", "Do you handle contract disputes?", "Can you manage our full contract lifecycle?")
7. Contact —
   - Contact form (Name, Email, Phone, Message, Submit button) with clean validation and a success state
   - Firm/contact details displayed alongside: Dineo Motepe, Legal Contract Specialist; email mdlegalcontractadvisory@gmail.com; phone 066 240 7953; location Johannesburg, South Africa
   - Embedded Google Map (iframe) centered on Johannesburg, South Africa (general city view, not a specific office pin)
8. Floating WhatsApp button — fixed bottom-right corner, links to wa.me/27662407953 with a prefilled message: "Hi, I'd like to enquire about your contract advisory services."
9. Footer — logo, short tagline, quick links, contact details (email + phone + "Johannesburg, South Africa"), copyright line

FUNCTIONAL REQUIREMENTS
- Fully responsive (mobile-first)
- Contact form should be functional

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://md-legal-guide.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f1116517-8dfb-4b56-b85e-c76dc520b245).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

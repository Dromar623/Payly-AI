# Payly AI — Autonomous Spend Defense Agent

> **Stop Paying Incorrect Invoices.** Autonomous Accounts Payable & Spend Defense Agent for mid-market enterprises. Built with a Series A enterprise aesthetic (Linear / Stripe / Vercel design system).

![Theme](https://img.shields.io/badge/Theme-Dark%20Obsidian%20(Zinc%20950)-blueviolet)
![Status](https://img.shields.io/badge/Security-SOC%202%20Type%20II%20Certified-emerald)
![Stack](https://img.shields.io/badge/Tech%20Stack-React%20%7C%20Tailwind%20%7C%20Framer%20Motion%20%7C%20Lucide-cyan)

---

## ⚡ Tech Stack & Architecture

- **React 18**: Functional components with hooks and clean modular state management.
- **Tailwind CSS**: Custom dark mode palette (`bg-zinc-950`), custom electric/neon accents, glassmorphism (`backdrop-blur-xl`), and ambient glowing gradient orbs.
- **Framer Motion**: Smooth page reveals, card hover lift states, interactive spring tabs, and animated modal toasts.
- **Lucide React**: Crisp iconography for enterprise AP workflows (`Users`, `FileCheck`, `Database`, `ShieldCheck`, etc.).
- **React Router v6**: Seamless multi-page routing with automatic scroll restoration (`ScrollToTop`).

---

## 🚀 Navigation & Pages

1. **Page 1: Home (`/`)**
   - **Hero Section**: Eyebrow badge *"AUTONOMOUS SPEND DEFENSE"*, headline *"Stop Paying Incorrect Invoices."*, subheadline, *"Start Your Free Audit"* & *"Explore Platform"* CTAs.
   - **Interactive Spend Defense Simulator**: Live real-time widget simulating invoice intake, contract comparison against Datadog / Figma / Agency SOWs, discrepancy highlighting, and autonomous dispute drafting.
   - **Social Proof**: Secure integration badges for NetSuite, QuickBooks, Stripe, Okta, and AWS.
   - **Feature Grid (3 Cards)**:
     - 👥 **SaaS 'Ghost Seat' Detection** (Stop paying for departed employees via Okta telemetry).
     - 📄 **Contractor Verification** (Reconcile inbound agency invoices against Jira/GitHub).
     - 🗄️ **Zero-Touch ERP Sync** (Automatically route perfect matches to CFO approval).
   - **Interactive Spend Leakage Calculator**: Mid-market benchmark slider dynamically calculating annual clawback savings.

2. **Page 2: Product / How It Works (`/product`)**
   - **Step-by-Step Vertical Timeline**:
     - **Step 1: Unstructured Ingestion** (Forward PDFs to an email, AI parses line items and contract riders).
     - **Step 2: The Autonomous Match** (Cross-reference contract terms + live usage telemetry).
     - **Step 3: Auto-Dispute & Resolution** (AI drafts polite dispute emails to vendors for overcharges).
   - **Enterprise Security Pillars**: SOC 2 Type II, Read-Only Connectors, Zero Model Training on invoice data, and Dedicated VPC options.

3. **Page 3: Pricing (`/pricing`)**
   - **Annual / Monthly Billing Toggle** (Save 20% + 2 Months Free).
   - **3-Tier Pricing Layout**:
     - **Growth**: `$19/mo` ($15/mo billed annually) — Up to $100k spend audited.
     - **Scale**: `$99/mo` ($79/mo billed annually) — **"Most Popular"** with glowing violet badge, auto-dispute, Okta telemetry, and ERP sync.
     - **Enterprise**: `Custom` — Unlimited spend, custom data lakes, bespoke SOW parsing.
   - **Interactive FAQ Accordion** for CFOs and finance teams.

4. **Page 4: Book a Demo (`/book-demo`)**
   - Sleek centered lead capture form with fields: Full Name, Work Email, Company Name, Monthly Vendor Spend volume dropdown, and ERP selector.
   - **Automated Lead Routing to `Omar@PaylyAi.com`**:
     - Dispatches full lead dossiers (Name, Email, Company, Spend Volume, ERP, and Priorities) directly to **`Omar@PaylyAi.com`** via FormSubmit gateway and internal `/api/send-demo` stream.
     - Confirmation receipt displayed in the floating toast notification and success card.
     - Direct fallback `mailto` trigger included.
   - Interactive Success Toast Notification and dynamic booking confirmation card with a sample audit report download preview.

---

## 🛠️ Quickstart

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run preview
```

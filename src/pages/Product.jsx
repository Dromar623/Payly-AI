import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FileUp, 
  Cpu, 
  SendHorizontal, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Mail, 
  Sparkles, 
  Database, 
  Terminal, 
  Activity, 
  FileText, 
  Layers, 
  Lock, 
  AlertOctagon, 
  Server,
  Zap,
  ChevronRight
} from 'lucide-react';
import GlowingOrb from '../components/GlowingOrb';

export default function Product() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      step: '01',
      id: 1,
      title: 'Unstructured Ingestion',
      subtitle: 'Forward PDFs to an email, AI parses them.',
      badge: 'Step 1: Multi-Modal Extraction',
      icon: FileUp,
      color: 'from-violet-500 to-indigo-500',
      description: 'Zero manual data entry or template setup required. Forward any vendor invoice PDF, messy scan, or electronic bill to invoices@yourcompany.payly.ai. Our vision-native models extract line items, tiered pricing tables, renewal riders, and complex terms in sub-3 seconds.',
      features: [
        'Handles multi-page tabular bills and foreign currencies',
        'Extracts implicit rate tiers and volume commitment clauses',
        'Direct automated inbox forwarding with SPF/DKIM verification',
        'Instant deduplication across departments and subsidiaries'
      ],
      codeSnippet: `// Step 1: Vision Ingestion Stream
POST /api/v1/invoices/ingest
Content-Type: multipart/form-data
Payload: {
  source: "ap-inbound@acme.com",
  vendor: "Snowflake Inc.",
  file: "SNOW-2026-Q1.pdf",
  parsed_line_items: 48,
  confidence_score: 99.87%
}`
    },
    {
      step: '02',
      id: 2,
      title: 'The Autonomous Match',
      subtitle: 'Cross-reference contract terms + live usage telemetry.',
      badge: 'Step 2: Triple-Point Verification',
      icon: Cpu,
      color: 'from-cyan-500 to-blue-500',
      description: 'Legacy AP tools only check if a Purchase Order exists. Payly performs a real-time 3-Way Match: cross-referencing original MSA contract pricing, live identity seat counts (Okta/Google), and cloud usage telemetry (AWS/Datadog) against what the vendor actually billed.',
      features: [
        'Queries Okta Directory to verify active employee seat counts',
        'Cross-checks AWS CloudWatch logs against billed infrastructure units',
        'Scans executed MSA contracts for hidden discounts and SLA credits',
        'Detects unauthorized annual indexations and price creep'
      ],
      codeSnippet: `// Step 2: 3-Way Cross-Referencing
MATCH_RESULT: {
  contracted_rate_per_seat: $24.00,
  billed_rate_per_seat: $36.00,  // <-- ANOMALY: Indexation breach
  billed_seat_count: 450,
  okta_active_seats: 382,        // <-- ANOMALY: 68 Ghost seats
  calculated_variance: +$7,296.00 OVERCHARGE,
  action: "HOLD_PAYMENT_GENERATE_DISPUTE"
}`
    },
    {
      step: '03',
      id: 3,
      title: 'Auto-Dispute & Resolution',
      subtitle: 'AI drafts polite dispute emails to vendors for overcharges.',
      badge: 'Step 3: Autonomous Remediation',
      icon: SendHorizontal,
      color: 'from-emerald-500 to-teal-500',
      description: 'When an overcharge is intercepted, Payly halts payment in your ERP and drafts a professional, fact-backed dispute email with contractual evidence and audit logs attached. You can approve with 1 click, or let Payly negotiate credit memos on autopilot.',
      features: [
        'Generates polite, legally airtight vendor dispute memos',
        'Attaches timestamped identity/telemetry evidence logs',
        'Applies temporary payment hold in NetSuite/QuickBooks',
        'Tracks vendor credit memo receipts and updates ERP ledger'
      ],
      codeSnippet: `// Step 3: Outbound Vendor Dispute
DISPUTE_DISPATCH: {
  to: "enterprise-ar@vendor.com",
  subject: "Discrepancy Notice for Invoice #SNOW-2026-Q1",
  credit_requested: "$7,296.00",
  evidence_attached: ["Okta_Audit_Report.pdf", "MSA_Section_3.2.pdf"],
  cfo_approval_status: "AUTONOMOUS_APPROVED"
}`
    }
  ];

  return (
    <div className="relative overflow-hidden py-16 md:py-24">
      {/* Background Orbs */}
      <GlowingOrb 
        className="top-10 left-1/2 -translate-x-1/2" 
        color="from-cyan-600/20 via-violet-600/15 to-transparent" 
        size="w-[800px] h-[600px]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-violet-500/30 text-xs font-mono uppercase tracking-widest text-violet-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>HOW IT WORKS & ARCHITECTURE</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            The Autonomous <br />
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              3-Way Match
            </span>
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed">
            Traditional AP software only looks for an approved Purchase Order. Payly AI goes deeper—verifying contract MSAs, real-time employee seats, and cloud consumption telemetry before approving payment.
          </p>
        </div>

        {/* STEP-BY-STEP VERTICAL & ALTERNATING TIMELINE */}
        <div className="space-y-24 relative">
          
          {/* Vertical Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-violet-500/40 via-cyan-500/40 to-emerald-500/40 -translate-x-1/2 pointer-events-none" />

          {steps.map((item, index) => {
            const isEven = index % 2 === 1;
            const Icon = item.icon;

            return (
              <div 
                key={item.id} 
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                
                {/* Center Node Indicator (Desktop) */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-zinc-950 border-2 border-violet-500/80 items-center justify-center text-xs font-mono font-bold text-white shadow-lg shadow-violet-600/30 z-20">
                  {item.step}
                </div>

                {/* Text Content Column */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2 lg:pl-8' : 'lg:order-1 lg:pr-8'}`}>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-300">
                    <span>{item.badge}</span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                      {item.title}
                    </h2>
                    <h3 className="text-base sm:text-lg font-semibold text-violet-300">
                      {item.subtitle}
                    </h3>
                  </div>

                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-3 pt-2">
                    {item.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Visual / Code Card Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden group"
                  >
                    {/* Glowing corner accent */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${item.color} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity`} />

                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800/80">
                      <div className="flex items-center gap-2.5">
                        <div className={`p-2 rounded-lg bg-gradient-to-tr ${item.color} text-white`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-mono text-zinc-300 font-semibold">
                          System Execution View
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                        Agent Log
                      </span>
                    </div>

                    <pre className="text-xs font-mono text-zinc-300 bg-zinc-950/80 p-4 rounded-xl border border-zinc-800/80 overflow-x-auto leading-relaxed">
                      {item.codeSnippet}
                    </pre>

                    <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-500">
                      <span>Latency: &lt; 2.4s</span>
                      <span className="text-emerald-400 font-mono">Status: Verified Autonomous</span>
                    </div>
                  </motion.div>
                </div>

              </div>
            );
          })}

        </div>

        {/* ARCHITECTURE SUMMARY & SECURITY CERTIFICATIONS */}
        <div className="mt-32 pt-20 border-t border-zinc-800/80">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              ENTERPRISE SECURITY PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Bank-Grade Security for Mid-Market Balance Sheets
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              We understand you are processing sensitive vendor contracts and financial ledgers. Payly AI is built around zero-trust isolation and zero-data retention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">SOC 2 Type II Certified</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Audited annually by independent CPA firms. Complete end-to-end data encryption at rest (AES-256) and in transit (TLS 1.3).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Read-Only Connectors</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Payly connects to your ERP, Okta, and AWS via strict read-only scopes. Payments cannot be released without explicit finance rules.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Zero Model Training</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Your invoice line items and confidential vendor discount rates are never fed back into public or shared foundational AI training pools.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Dedicated VPC Hosting</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Available single-tenant isolated deployment with customer-managed AWS KMS keys and localized data residency.
              </p>
            </div>

          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-24 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 rounded-2xl bg-zinc-900/80 border border-zinc-800 max-w-xl mx-auto shadow-xl">
            <span className="text-xs text-zinc-300 px-4 py-2">
              Ready to test the 3-Way Match on your actual invoice stack?
            </span>
            <Link
              to="/book-demo"
              className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <span>Schedule Pilot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

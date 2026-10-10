import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertTriangle, 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  Mail, 
  Sparkles, 
  Terminal, 
  ExternalLink, 
  Users, 
  ShieldAlert, 
  Send, 
  RefreshCw 
} from 'lucide-react';

const mockScenarios = [
  {
    id: 'datadog',
    vendor: 'Datadog Enterprise APM',
    category: 'Cloud Infrastructure',
    invoiceNumber: 'INV-2026-8841',
    amountBilled: '$42,850.00',
    contractRate: '$31,370.00',
    overcharge: '$11,480.00',
    discrepancyType: 'Host Agent Overage & Tier Discount Miscalculation',
    details: 'Vendor billed 185 Enterprise APM hosts at list price ($35/mo). Contract MSA Section 4.2 grants tier discount of $23/mo, plus 14 hosts decommissioned in AWS last month were still billed.',
    telemetrySource: 'AWS CloudWatch & Datadog API telemetry',
    disputeDraft: `Subject: Billing Discrepancy Notice: Invoice INV-2026-8841

Hi Datadog Enterprise Billing Team,

Payly AI on behalf of our AP team has completed autonomous reconciliation for Invoice #INV-2026-8841. 

We identified a line-item overcharge of $11,480.00 based on:
1. Section 4.2 Volume Tier Discount ($23/host vs billed $35/host).
2. Live AWS CloudWatch audit showing 14 terminated host instances billed.

Please issue a revised credit memo for $11,480.00 before our ERP initiates automated payment.`,
  },
  {
    id: 'figma',
    vendor: 'Figma Organization',
    category: 'SaaS License Seats',
    invoiceNumber: 'FIG-904221',
    amountBilled: '$18,450.00',
    contractRate: '$12,750.00',
    overcharge: '$5,700.00',
    discrepancyType: '19 Ghost Seats (Departed Staff & Inactive Users)',
    details: '19 enterprise full-seat licenses billed for users who were de-provisioned in Okta 45+ days ago or had zero edits in the past 90 days according to Google SSO logs.',
    telemetrySource: 'Okta Directory & Google Workspace SSO Logs',
    disputeDraft: `Subject: Seat True-Down Credit Request - Invoice FIG-904221

Hello Figma Accounts Team,

Our autonomous spend defense agent detected 19 inactive user accounts billed under the Full Design Seat tier on invoice FIG-904221.

Audit logs from our Okta Identity Provider confirm these 19 employees offboarded prior to the current billing period. 

We request a true-down adjustment of $5,700.00 crediting our account.`,
  },
  {
    id: 'contractor',
    vendor: 'Stratum Dev Agency',
    category: 'Contractor SOW',
    invoiceNumber: 'SOW-AUG-04',
    amountBilled: '$34,200.00',
    contractRate: '$25,750.00',
    overcharge: '$8,450.00',
    discrepancyType: '65 Unverified Billable Hours vs Git Telemetry',
    details: 'Agency billed 220 senior engineering hours. Reconciled against Jira tickets and GitHub commit timestamps, verified productive engineering volume was 155 hours.',
    telemetrySource: 'GitHub Commits & Linear / Jira Worklogs',
    disputeDraft: `Subject: Inbound Invoice SOW-AUG-04 Engineering Reconciliation

Hi Stratum Agency Operations,

During automated AP intake for SOW-AUG-04, our systems cross-referenced billed hours with authorized milestone sprint trackers. 

We noted 65 unlogged/non-ticketed billable hours ($8,450.00 variance). 

Please submit an itemized timesheet with corresponding Jira IDs to release payment for the adjusted $25,750.00.`,
  }
];

export default function SpendAuditSimulator() {
  const [selectedId, setSelectedId] = useState(mockScenarios[0].id);
  const [disputeSent, setDisputeSent] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  const current = mockScenarios.find((s) => s.id === selectedId) || mockScenarios[0];

  const handleSelect = (id) => {
    setIsScanning(true);
    setDisputeSent(false);
    setSelectedId(id);
    setTimeout(() => {
      setIsScanning(false);
    }, 400);
  };

  const handleSendDispute = () => {
    setDisputeSent(true);
  };

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl bg-zinc-950/80 border border-zinc-800/80 shadow-2xl shadow-violet-950/20 backdrop-blur-xl overflow-hidden relative">
      
      {/* Top terminal bar */}
      <div className="px-5 py-3.5 bg-zinc-900/70 border-b border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600" />
          </div>
          <div className="h-4 w-px bg-zinc-800" />
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <Terminal className="w-3.5 h-3.5 text-violet-400" />
            <span>payly-agent: spend-defense --live-stream</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-zinc-400 font-mono text-[11px]">Real-Time Ingestion: 3 Active Audits</span>
        </div>
      </div>

      {/* Scenario switcher buttons */}
      <div className="p-4 bg-zinc-900/30 border-b border-zinc-800/50 flex flex-wrap gap-2">
        {mockScenarios.map((scenario) => {
          const isActive = scenario.id === selectedId;
          return (
            <button
              key={scenario.id}
              onClick={() => handleSelect(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-gradient-to-r from-violet-600/30 to-cyan-600/30 text-white border border-violet-500/50 shadow-sm'
                  : 'bg-zinc-900/50 text-zinc-400 hover:text-zinc-200 border border-zinc-800 hover:bg-zinc-800/50'
              }`}
            >
              <span>{scenario.vendor}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                isActive ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'bg-zinc-800 text-zinc-400'
              }`}>
                +{scenario.overcharge} Saved
              </span>
            </button>
          );
        })}
      </div>

      {/* Main interactive body */}
      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
        {isScanning && (
          <div className="absolute inset-0 bg-zinc-950/70 backdrop-blur-xs flex items-center justify-center z-20">
            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-zinc-900 border border-violet-500/40 text-violet-300 text-xs font-mono animate-pulse">
              <RefreshCw className="w-4 h-4 animate-spin text-cyan-400" />
              <span>Cross-referencing MSA Contract Clauses & Live Usage Telemetry...</span>
            </div>
          </div>
        )}

        {/* Left Column: The Invoice Discrepancy Breakdown */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-violet-400 bg-violet-950/60 border border-violet-800/50 px-2.5 py-1 rounded-md">
                {current.category}
              </span>
              <h4 className="text-xl font-bold text-white mt-2">
                {current.vendor}
              </h4>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">
                Invoice ID: {current.invoiceNumber} • Status: <span className="text-rose-400 font-semibold">Payment Blocked</span>
              </p>
            </div>

            <div className="text-right">
              <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-mono">Discrepancy Clawback</div>
              <div className="text-2xl font-bold text-emerald-400 font-mono">
                +{current.overcharge}
              </div>
            </div>
          </div>

          {/* Contrast Comparison Grid */}
          <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-[11px] text-zinc-400 block">Vendor Billed Amount</span>
              <span className="text-lg font-bold text-rose-400 font-mono line-through decoration-rose-500/60">
                {current.amountBilled}
              </span>
              <span className="text-[10px] text-rose-400/80 block">Unverified Line Items</span>
            </div>
            <div className="space-y-1 border-l border-zinc-800/80 pl-4">
              <span className="text-[11px] text-zinc-400 block">Contractual Verified Truth</span>
              <span className="text-lg font-bold text-emerald-400 font-mono">
                {current.contractRate}
              </span>
              <span className="text-[10px] text-emerald-400/80 block">Payly Validated Amount</span>
            </div>
          </div>

          {/* Finding Alert Box */}
          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-800/30 space-y-2">
            <div className="flex items-center gap-2 text-rose-300 font-semibold text-xs">
              <ShieldAlert className="w-4 h-4 text-rose-400" />
              <span>Anomaly: {current.discrepancyType}</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {current.details}
            </p>
            <div className="flex items-center gap-2 pt-1 text-[11px] text-zinc-400 font-mono">
              <span className="text-cyan-400">Telemetry Feed:</span>
              <span>{current.telemetrySource}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-zinc-400 pt-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>ERP Sync: Payment on hold until vendor issues updated credit memo.</span>
          </div>
        </div>

        {/* Right Column: AI Auto-Dispute Resolution Action */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-xl bg-zinc-900/70 border border-zinc-800/80 p-5 space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Autonomous Dispute Draft</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/40 font-mono">
                AI Ready
              </span>
            </div>

            <div className="bg-zinc-950/80 rounded-lg p-3 border border-zinc-800/80 text-[11px] font-mono text-zinc-300 leading-relaxed overflow-y-auto max-h-[170px] whitespace-pre-wrap">
              {current.disputeDraft}
            </div>
          </div>

          <div className="pt-2">
            {disputeSent ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-1"
              >
                <div className="flex items-center justify-center gap-2 text-emerald-300 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Dispute Sent to Vendor & Logged in ERP</span>
                </div>
                <p className="text-[10px] text-zinc-400">
                  {current.overcharge} credit memo pending receipt. AP payment holds active.
                </p>
              </motion.div>
            ) : (
              <button
                onClick={handleSendDispute}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-md shadow-violet-700/20 transition-all hover:scale-[1.01] active:scale-[0.99] border border-white/10"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Dispatch Vendor Dispute & Claim {current.overcharge}</span>
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Simulator Bottom Status Footer */}
      <div className="px-6 py-3 bg-zinc-900/50 border-t border-zinc-800/50 flex flex-wrap items-center justify-between text-xs text-zinc-400">
        <span className="text-[11px]">
          Simulated live on actual Q1 enterprise invoice data.
        </span>
        <span className="text-[11px] text-cyan-300 font-mono">
          Average AP accuracy: 99.8% • Total client savings: $34.2M
        </span>
      </div>
    </div>
  );
}

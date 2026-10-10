import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Download, 
  Printer, 
  FileText, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Building2, 
  Users, 
  DollarSign, 
  Filter, 
  ArrowUpRight, 
  ChevronRight, 
  ExternalLink, 
  Sparkles, 
  Search, 
  ArrowLeft,
  Share2,
  Lock,
  Layers,
  Cpu,
  Mail,
  CheckCircle,
  FileCheck,
  ArrowRight
} from 'lucide-react';
import GlowingOrb from '../components/GlowingOrb';

export default function SampleAudit() {
  const [activeTab, setActiveTab] = useState('all'); // all | ghost-seats | contracts | contractors | disputes
  const [selectedDiscrepancy, setSelectedDiscrepancy] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const auditMetadata = {
    reportId: 'PAYLY-AUD-2026-9921-X9',
    clientName: 'Apex Global Technologies, Inc.',
    headcount: '420 FTE',
    auditPeriod: 'Q1 Retrospective (Last 90 Days)',
    totalInvoicesAudited: 418,
    vendorsAnalyzed: 74,
    totalSpendAudited: 4892400, // $4,892,400.00
    totalVarianceDetected: 164820, // $164,820.00 (3.37%)
    clawbackRecovered: 142350, // $142,350.00 (86.4%)
    ghostSeatsFound: 73,
    unverifiedHours: 214,
    auditDate: 'March 28, 2026',
    auditor: 'Payly Autonomous AP Intelligence Agent v4.1',
    certifications: 'SOC 2 Type II • ISO 27001'
  };

  const findingsList = [
    {
      id: 'FIND-01',
      category: 'ghost-seats',
      vendor: 'Figma Enterprise',
      serviceType: 'Design Collaboration Cloud',
      invoiceId: 'FIG-904221',
      severity: 'Critical',
      billedAmount: 18450,
      verifiedAmount: 12750,
      varianceAmount: 5700,
      description: '19 enterprise full-seat licenses billed for users who were de-provisioned in Okta 45+ days ago.',
      evidence: 'Okta Identity Provider SCIM log confirms 19 employees departed in Q4. Zero edits recorded in past 90 days.',
      status: 'Credit Memo Received',
      statusColor: 'emerald',
      recoveryDetails: 'Vendor issued Credit Memo #CM-8812 for $5,700.00 applied to next billing cycle.',
      actionTaken: 'Auto-dispute dispatched with attached Okta deprovisioning timestamps.',
      affectedUsers: [
        { name: 'Alex Rivera', email: 'a.rivera@apex.io', offboardDate: 'Nov 14', seatCost: '$300/mo' },
        { name: 'Marcus Chen', email: 'm.chen@apex.io', offboardDate: 'Nov 29', seatCost: '$300/mo' },
        { name: 'Elena Rostova', email: 'e.rostova@apex.io', offboardDate: 'Dec 05', seatCost: '$300/mo' },
        { name: 'Sarah Patel', email: 's.patel@apex.io', offboardDate: 'Dec 18', seatCost: '$300/mo' },
        { name: '+ 15 other departed team members', email: 'Various de-provisioned accounts', offboardDate: 'Q4', seatCost: '$4,500 total' }
      ]
    },
    {
      id: 'FIND-02',
      category: 'contracts',
      vendor: 'Datadog Enterprise APM',
      serviceType: 'Cloud Observability Infrastructure',
      invoiceId: 'INV-2026-8841',
      severity: 'Critical',
      billedAmount: 42850,
      verifiedAmount: 31370,
      varianceAmount: 11480,
      description: 'Billed 185 APM host units at standard list price ($35/mo) instead of contracted MSA Tier 2 rate ($23/mo), plus 14 decommissioned AWS EC2 instances billed.',
      evidence: 'MSA Section 4.2 Volume Commitment Tier vs AWS CloudWatch EC2 active instance telemetry.',
      status: 'Dispute Resolved',
      statusColor: 'emerald',
      recoveryDetails: 'Datadog billing team acknowledged rate-table discrepancy and issued adjusted invoice.',
      actionTaken: 'Payment held in NetSuite. Contract terms PDF and CloudWatch log dispatched.',
      affectedUsers: []
    },
    {
      id: 'FIND-03',
      category: 'contractors',
      vendor: 'Stratum Digital Agency',
      serviceType: 'External React / Cloud Engineering',
      invoiceId: 'SOW-AUG-04',
      severity: 'High',
      billedAmount: 34200,
      verifiedAmount: 25750,
      varianceAmount: 8450,
      description: 'Agency billed 220 senior engineering hours. Reconciled against Jira sprint logs and GitHub commit timestamps, verified productive engineering volume was 155 hours.',
      evidence: 'Cross-referenced Jira sprint burndowns & GitHub commit author timestamps for 3 billed contractors.',
      status: 'Payment Adjusted',
      statusColor: 'emerald',
      recoveryDetails: 'Agency agreed to waive 65 unsubstantiated hours. ERP payment approved at $25,750.',
      actionTaken: 'AP payment hold placed in QuickBooks; timesheet breakdown requested from vendor PM.',
      affectedUsers: []
    },
    {
      id: 'FIND-04',
      category: 'contracts',
      vendor: 'Snowflake Data Cloud',
      serviceType: 'Enterprise Data Warehouse',
      invoiceId: 'SNOW-Q1-1092',
      severity: 'Medium',
      billedAmount: 89400,
      verifiedAmount: 81200,
      varianceAmount: 8200,
      description: 'Annual 7% indexation rate applied 3 months ahead of contract renewal anniversary date.',
      evidence: 'Original 2-year Order Form Amendment #3 stipulates rate hold through June 30, 2026.',
      status: 'Under Review',
      statusColor: 'amber',
      recoveryDetails: 'Vendor finance reviewing credit rider. $8,200 held in reserve pending credit memo.',
      actionTaken: 'Automated contract clause breach notice served to Snowflake Account Executive.',
      affectedUsers: []
    },
    {
      id: 'FIND-05',
      category: 'ghost-seats',
      vendor: 'Salesforce Sales Cloud',
      serviceType: 'CRM Enterprise',
      invoiceId: 'SFDC-2026-03',
      severity: 'High',
      billedAmount: 64500,
      verifiedAmount: 51900,
      varianceAmount: 12600,
      description: '28 CRM seats assigned to contractors whose project completed 4 months ago. Zero logins in past 120 days.',
      evidence: 'Salesforce Login History API cross-referenced against HR contractor roster termination dates.',
      status: 'True-Down Applied',
      statusColor: 'emerald',
      recoveryDetails: 'License count reduced from 145 to 117 seats, preventing future $50,400 annual overpayment.',
      actionTaken: 'True-down notice dispatched; licenses revoked in Salesforce admin console.',
      affectedUsers: []
    },
    {
      id: 'FIND-06',
      category: 'contracts',
      vendor: 'Twilio Cloud Communications',
      serviceType: 'Voice & SMS Messaging Gateway',
      invoiceId: 'TW-449102',
      severity: 'Medium',
      billedAmount: 14320,
      verifiedAmount: 11180,
      varianceAmount: 3140,
      description: 'Carrier fees billed without applying contracted enterprise high-volume discount tier (-22%).',
      evidence: 'Enterprise Master Services Agreement Schedule B discount matrix.',
      status: 'Credit Memo Received',
      statusColor: 'emerald',
      recoveryDetails: '$3,140 credit credited to prepaid balance account.',
      actionTaken: 'Auto-dispute sent with Schedule B attached.',
      affectedUsers: []
    }
  ];

  const filteredFindings = findingsList.filter(f => {
    if (activeTab === 'all') return true;
    if (activeTab === 'ghost-seats') return f.category === 'ghost-seats';
    if (activeTab === 'contracts') return f.category === 'contracts';
    if (activeTab === 'contractors') return f.category === 'contractors';
    return true;
  });

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="relative overflow-hidden py-10 sm:py-16 text-zinc-100">
      
      {/* Background ambient lighting */}
      <GlowingOrb 
        className="-top-20 left-1/2 -translate-x-1/2" 
        color="from-violet-600/20 via-cyan-600/15 to-transparent" 
        size="w-[900px] h-[600px]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* TOP NAVIGATION & CONTROLS */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80">
          <div className="flex items-center gap-3">
            <Link 
              to="/book-demo" 
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Demo</span>
            </Link>

            <span className="text-zinc-600">/</span>

            <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-1 rounded-md">
              SAMPLE AUDIT DOSSIER
            </span>
          </div>

          {/* Action buttons: Print & Share */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleShare}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-300 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Link Copied!' : 'Share Dossier'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-300 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <Link
              to="/book-demo"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-xs font-bold text-white shadow-lg shadow-violet-600/25 hover:from-violet-500 hover:to-cyan-500 transition-all whitespace-nowrap"
            >
              <span>Audit Your Invoices Free</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* AUDIT HEADER / COVER BANNER */}
        <div className="rounded-3xl bg-zinc-900/70 border border-zinc-800 p-6 sm:p-10 backdrop-blur-2xl relative overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Header Info */}
            <div className="lg:col-span-8 space-y-4">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-violet-400 bg-violet-950/80 border border-violet-800/60 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-violet-400" />
                  <span>CONFIDENTIAL EXECUTIVE REPORT</span>
                </span>
                
                <span className="text-[11px] font-mono text-zinc-500">
                  REF: {auditMetadata.reportId}
                </span>

                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2 py-0.5 rounded">
                  SOC 2 Type II Audited
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Spend Defense Audit Dossier
              </h1>

              <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
                Autonomous accounts payable retrospective prepared for <span className="text-white font-semibold">{auditMetadata.clientName}</span> ({auditMetadata.headcount}). Cross-referencing 90 days of ERP invoices against executed contracts, Okta identity seats, and cloud telemetry.
              </p>

              {/* Client Metadata Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs font-mono">
                <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 space-y-1">
                  <span className="text-zinc-500 block text-[10px] uppercase">Audit Window</span>
                  <span className="text-zinc-200 font-semibold">{auditMetadata.auditPeriod}</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 space-y-1">
                  <span className="text-zinc-500 block text-[10px] uppercase">Invoices Scanned</span>
                  <span className="text-cyan-300 font-semibold">{auditMetadata.totalInvoicesAudited} Invoices</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 space-y-1">
                  <span className="text-zinc-500 block text-[10px] uppercase">Vendor Cohort</span>
                  <span className="text-violet-300 font-semibold">{auditMetadata.vendorsAnalyzed} Enterprise Vendors</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 space-y-1">
                  <span className="text-zinc-500 block text-[10px] uppercase">Audit Engine</span>
                  <span className="text-emerald-300 font-semibold">Payly Agent v4.1</span>
                </div>
              </div>

            </div>

            {/* Right Summary Badge Card */}
            <div className="lg:col-span-4 rounded-2xl bg-zinc-950/90 border border-violet-500/30 p-6 space-y-4 shadow-xl">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Audited Net Recovery
              </div>

              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-gradient-to-r from-emerald-400 via-cyan-300 to-violet-300 bg-clip-text font-mono">
                  +${auditMetadata.clawbackRecovered.toLocaleString()}
                </div>
                <span className="text-xs text-zinc-400 block font-mono">
                  Clawed back before payment release (86.4% success)
                </span>
              </div>

              <div className="space-y-2 pt-3 border-t border-zinc-800/80 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>Gross Variances Flagged:</span>
                  <span className="text-rose-400 font-mono font-semibold">+${auditMetadata.totalVarianceDetected.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Variance as % of AP Spend:</span>
                  <span className="text-amber-400 font-mono font-semibold">3.37%</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Projected Annual Savings:</span>
                  <span className="text-emerald-400 font-mono font-semibold">+${(auditMetadata.clawbackRecovered * 4).toLocaleString()} / yr</span>
                </div>
              </div>

              <Link
                to="/book-demo"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-all shadow-md"
              >
                <span>Run Free Audit on Your AP</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

        {/* AUDIT METRICS DASHBOARD (4 METRIC CARDS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 space-y-2">
            <div className="flex items-center justify-between text-zinc-400 text-xs font-mono">
              <span>Total AP Spend Audited</span>
              <DollarSign className="w-4 h-4 text-zinc-500" />
            </div>
            <div className="text-2xl font-bold text-white font-mono">
              ${auditMetadata.totalSpendAudited.toLocaleString()}
            </div>
            <div className="text-[11px] text-zinc-500">
              100% reconciled across NetSuite & Stripe
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 space-y-2">
            <div className="flex items-center justify-between text-zinc-400 text-xs font-mono">
              <span>Ghost Seats Intercepted</span>
              <Users className="w-4 h-4 text-violet-400" />
            </div>
            <div className="text-2xl font-bold text-violet-400 font-mono">
              {auditMetadata.ghostSeatsFound} Orphaned Seats
            </div>
            <div className="text-[11px] text-zinc-500">
              Across Figma, Salesforce, Slack & Zoom
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 space-y-2">
            <div className="flex items-center justify-between text-zinc-400 text-xs font-mono">
              <span>Unverified Agency Hours</span>
              <FileCheck className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl font-bold text-cyan-400 font-mono">
              {auditMetadata.unverifiedHours} Billed Hours
            </div>
            <div className="text-[11px] text-zinc-500">
              Contradicted by Jira & GitHub activity
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 space-y-2">
            <div className="flex items-center justify-between text-zinc-400 text-xs font-mono">
              <span>Autonomous Resolution Rate</span>
              <Sparkles className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-bold text-emerald-400 font-mono">
              86.4%
            </div>
            <div className="text-[11px] text-zinc-500">
              Credit memos issued without legal escalations
            </div>
          </div>

        </div>

        {/* DETAILED FINDINGS SECTION */}
        <div className="space-y-6">
          
          {/* Section Header & Category Filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Itemized Discrepancy Findings
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Review verified invoice line-item variances, contractual breaches, and automated resolution status.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-medium">
              {[
                { id: 'all', label: 'All Findings (6)' },
                { id: 'ghost-seats', label: 'Ghost Seats' },
                { id: 'contracts', label: 'Contract Breaches' },
                { id: 'contractors', label: 'Agency Hours' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-violet-600/30 text-white border border-violet-500/50 shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Findings Table / Card Stream */}
          <div className="space-y-4">
            {filteredFindings.map((finding) => (
              <motion.div
                key={finding.id}
                layout
                className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700/80 p-6 transition-all duration-200 space-y-4"
              >
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-zinc-400 px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800">
                      {finding.id}
                    </span>

                    <div>
                      <h3 className="text-base font-bold text-white flex items-center gap-2">
                        <span>{finding.vendor}</span>
                        <span className="text-xs font-normal text-zinc-400">({finding.serviceType})</span>
                      </h3>
                      <div className="text-[11px] text-zinc-500 font-mono">
                        Invoice ID: {finding.invoiceId}
                      </div>
                    </div>
                  </div>

                  {/* Overcharge badge & Status */}
                  <div className="flex items-center gap-4 text-right">
                    <div>
                      <div className="text-[10px] text-zinc-500 uppercase font-mono">Overcharge Detected</div>
                      <div className="text-lg font-bold text-rose-400 font-mono">
                        +${finding.varianceAmount.toLocaleString()}.00
                      </div>
                    </div>

                    <div className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{finding.status}</span>
                    </div>
                  </div>
                </div>

                {/* Description & Evidence */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-2 text-xs">
                  
                  <div className="lg:col-span-8 space-y-2">
                    <div className="text-zinc-300 leading-relaxed">
                      <strong className="text-white">Observation: </strong>
                      {finding.description}
                    </div>

                    <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 text-zinc-400 font-mono text-[11px] space-y-1">
                      <div className="text-cyan-400 flex items-center gap-1.5 font-semibold">
                        <Cpu className="w-3 h-3" />
                        <span>Telemetry Evidence:</span>
                      </div>
                      <div>{finding.evidence}</div>
                    </div>

                    <div className="text-zinc-400">
                      <strong className="text-zinc-300">Action Executed: </strong>
                      {finding.actionTaken}
                    </div>
                  </div>

                  {/* Cost Contrast Box */}
                  <div className="lg:col-span-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 p-3.5 flex flex-col justify-between font-mono text-xs">
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-zinc-400">
                        <span>Vendor Billed:</span>
                        <span className="text-rose-400 line-through">${finding.billedAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-zinc-400">
                        <span>Contract Rate:</span>
                        <span className="text-emerald-400 font-bold">${finding.verifiedAmount.toLocaleString()}</span>
                      </div>
                      <div className="pt-2 border-t border-zinc-800 flex justify-between font-bold">
                        <span className="text-zinc-300">Net Clawback:</span>
                        <span className="text-cyan-300">+${finding.varianceAmount.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="text-[10px] text-emerald-400/90 pt-3 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{finding.recoveryDetails}</span>
                    </div>
                  </div>

                </div>

                {/* If affected users exist (Ghost Seats) */}
                {finding.affectedUsers.length > 0 && (
                  <div className="pt-3 border-t border-zinc-800/50">
                    <div className="text-[11px] font-mono text-zinc-400 mb-2 font-semibold">
                      Sample Ghost Seat De-provisioning Log (Cross-referenced with Okta):
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      {finding.affectedUsers.map((user, uIdx) => (
                        <div key={uIdx} className="p-2 rounded-lg bg-zinc-950/60 border border-zinc-800 text-[11px] flex justify-between items-center">
                          <div>
                            <div className="text-zinc-200 font-medium">{user.name}</div>
                            <div className="text-zinc-500 font-mono text-[10px]">{user.email}</div>
                          </div>
                          <div className="text-right font-mono">
                            <span className="text-rose-400 text-[10px] block">Offboarded: {user.offboardDate}</span>
                            <span className="text-zinc-400 text-[10px]">{user.seatCost}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </motion.div>
            ))}
          </div>

        </div>

        {/* SECTION 3: AUTONOMOUS VENDOR DISPUTE DISPATCH LOG */}
        <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800/80 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                AUDIT EVIDENCE TRAIL
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Sample AI Dispute Package Dispatched to Datadog
              </h2>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded bg-zinc-950 border border-zinc-800 text-zinc-400">
              Outbound Transmission #DISP-9842
            </span>
          </div>

          <div className="rounded-2xl bg-zinc-950/90 border border-zinc-800 p-5 font-mono text-xs text-zinc-300 space-y-3 leading-relaxed">
            <div className="text-zinc-500 border-b border-zinc-800/80 pb-2 space-y-1 text-[11px]">
              <div><strong>FROM:</strong> ap-defense-agent@apex.payly.ai (On behalf of VP Finance)</div>
              <div><strong>TO:</strong> billing-enterprise@datadoghq.com</div>
              <div><strong>CC:</strong> controller@apex.io, payly-audits@apex.io</div>
              <div><strong>SUBJECT:</strong> Autonomous AP Reconciliation Notice: Invoice #INV-2026-8841 Variance Notice</div>
            </div>

            <div className="pt-2 text-zinc-300 space-y-2 whitespace-pre-wrap">
{`Hello Datadog Enterprise Billing Team,

Payly AI on behalf of Apex Global Technologies has completed autonomous reconciliation for Invoice #INV-2026-8841 (Billed: $42,850.00).

During automated multi-point verification against our Master Services Agreement and live infrastructure telemetry, our systems intercepted an unauthorized variance of $11,480.00 based on the following verified findings:

1. Contractual Rate Discrepancy:
   - Schedule A, Section 4.2 grants Tier 2 volume discount: $23.00 / APM host unit.
   - Billed line item reflects standard $35.00 list price ($2,220.00 variance).

2. Unprovisioned / Terminated Instances Billed:
   - AWS CloudWatch telemetry confirms 14 EC2 host instances were decommissioned on Jan 14.
   - Agent telemetry confirms zero logs received from host IDs [i-09f182e, i-081b99a...].
   - Cumulative overage charged: $9,260.00.

ACTION REQUIRED:
In accordance with our automated payment controls, Invoice #INV-2026-8841 has been placed on hold in our Oracle NetSuite ERP.

Please issue an updated invoice or Credit Memo #CM-DATADOG for $11,480.00 to ap-inbound@apex.payly.ai to initiate autonomous payment release for the verified amount of $31,370.00.

Attached:
- Executed_MSA_Schedule_A_Excerpts.pdf
- AWS_CloudWatch_Instance_Termination_Logs.csv
- Payly_Line_Item_Variance_Audit.pdf`}
            </div>
          </div>
        </div>

        {/* BOTTOM CTA: CLAIM YOUR OWN AUDIT */}
        <div className="rounded-3xl bg-gradient-to-r from-violet-950/60 via-zinc-900 to-cyan-950/60 border border-violet-500/30 p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              COMPLIMENTARY EXECUTIVE AP AUDIT
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to See How Much Your Company is Overpaying?
            </h2>

            <p className="text-sm sm:text-base text-zinc-300">
              Connect NetSuite, QuickBooks, or forward your last 90 days of invoices. Payly AI will deliver a complete, customized Spend Defense Audit Dossier like this in less than 48 hours.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/book-demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-xl shadow-violet-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Request Your Free 90-Day Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={handlePrint}
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm font-semibold text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 transition-colors"
              >
                Print / Save This Sample Dossier
              </button>
            </div>

            <div className="pt-2 text-xs text-zinc-500 font-mono">
              100% Confidential • SOC 2 Type II Certified • Zero Commitment Required
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

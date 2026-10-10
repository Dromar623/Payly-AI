import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  FileCheck, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  TrendingDown, 
  Lock, 
  DollarSign, 
  Zap, 
  AlertCircle,
  Building2,
  Layers,
  ChevronRight
} from 'lucide-react';
import GlowingOrb from '../components/GlowingOrb';
import SpendAuditSimulator from '../components/SpendAuditSimulator';

export default function Home() {
  // Interactive ROI Calculator State
  const [annualSpend, setAnnualSpend] = useState(5000000); // $5M
  const [vendorCount, setVendorCount] = useState(65);

  // Industry average invoice error rate is ~3.2% in mid-market
  const calculatedSavings = Math.round(annualSpend * 0.032);
  const ghostSeatSavings = Math.round(vendorCount * 1850);
  const totalDefenseValue = calculatedSavings + ghostSeatSavings;

  return (
    <div className="relative overflow-hidden">
      
      {/* Background Glows */}
      <GlowingOrb 
        className="-top-40 left-1/2 -translate-x-1/2" 
        color="from-violet-600/25 via-indigo-600/20 to-cyan-500/10" 
        size="w-[850px] h-[600px]" 
      />
      <GlowingOrb 
        className="top-[900px] -left-60" 
        color="from-cyan-600/15 via-blue-600/10 to-transparent" 
        size="w-[500px] h-[500px]" 
      />

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-violet-500/30 text-xs font-semibold tracking-widest text-zinc-300 uppercase shadow-lg shadow-violet-950/20 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="bg-gradient-to-r from-violet-300 via-zinc-100 to-cyan-300 bg-clip-text text-transparent">
              AUTONOMOUS SPEND DEFENSE
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-cyan-400 font-mono text-[11px]">SERIES A ENTERPRISE</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]"
          >
            Stop Paying <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Incorrect Invoices.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Payly AI automatically verifies every vendor invoice against your original contracts and actual team usage. Catch overcharges and SaaS bloat before a single dollar leaves the bank.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              to="/book-demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:via-indigo-500 hover:to-cyan-500 shadow-xl shadow-violet-600/30 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-white/10 group"
            >
              <span>Start Your Free Audit</span>
              <ArrowRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/product"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-zinc-300 hover:text-white rounded-xl bg-zinc-900/80 hover:bg-zinc-800/80 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
            >
              <span>Explore Platform</span>
              <ChevronRight className="w-4 h-4 text-zinc-500" />
            </Link>
          </motion.div>

          {/* Security & Audit Micro-trust */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-zinc-500"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 15-Minute Zero-Code ERP Connect
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-cyan-400" /> SOC 2 Type II Certified
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-violet-400" /> Read-Only Permission Guard
            </span>
          </motion.div>

        </div>

        {/* HERO LIVE SIMULATOR WIDGET */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14"
        >
          <SpendAuditSimulator />
        </motion.div>
      </section>

      {/* SOCIAL PROOF / INTEGRATIONS BAR */}
      <section className="border-y border-zinc-800/80 bg-zinc-950/70 backdrop-blur-md py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">
            Securely integrates with <span className="text-white font-semibold">NetSuite</span>, <span className="text-white font-semibold">QuickBooks</span>, <span className="text-white font-semibold">Stripe</span>, <span className="text-white font-semibold">Okta</span>, and <span className="text-white font-semibold">AWS</span>
          </p>

          {/* Integration Badges / Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 lg:gap-6 items-center justify-center">
            
            {/* NetSuite */}
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/70 hover:border-zinc-700/80 transition-all group">
              <div className="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-700/40 flex items-center justify-center text-indigo-400 font-bold text-xs">
                NS
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-zinc-200 group-hover:text-white">NetSuite</div>
                <div className="text-[10px] text-emerald-400 font-mono">Live ERP Sync</div>
              </div>
            </div>

            {/* QuickBooks */}
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/70 hover:border-zinc-700/80 transition-all group">
              <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-700/40 flex items-center justify-center text-emerald-400 font-bold text-xs">
                QB
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-zinc-200 group-hover:text-white">QuickBooks</div>
                <div className="text-[10px] text-emerald-400 font-mono">Ledger Verified</div>
              </div>
            </div>

            {/* Stripe */}
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/70 hover:border-zinc-700/80 transition-all group">
              <div className="w-8 h-8 rounded-lg bg-violet-950/60 border border-violet-700/40 flex items-center justify-center text-violet-400 font-bold text-xs">
                S
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-zinc-200 group-hover:text-white">Stripe</div>
                <div className="text-[10px] text-cyan-400 font-mono">Sub-Ledger Feed</div>
              </div>
            </div>

            {/* Okta */}
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/70 hover:border-zinc-700/80 transition-all group">
              <div className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-700/40 flex items-center justify-center text-blue-400 font-bold text-xs">
                OK
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-zinc-200 group-hover:text-white">Okta</div>
                <div className="text-[10px] text-blue-400 font-mono">Seat Telemetry</div>
              </div>
            </div>

            {/* AWS */}
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/70 hover:border-zinc-700/80 transition-all group col-span-2 sm:col-span-1">
              <div className="w-8 h-8 rounded-lg bg-amber-950/60 border border-amber-700/40 flex items-center justify-center text-amber-400 font-bold text-xs">
                AWS
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-zinc-200 group-hover:text-white">AWS Cloud</div>
                <div className="text-[10px] text-amber-400 font-mono">Usage Meters</div>
              </div>
            </div>

          </div>

          <div className="pt-2 text-xs text-zinc-500">
            Read-only OAuth 2.0 connectors • Zero credentials stored on Payly servers • Bank-grade isolation
          </div>
        </div>
      </section>

      {/* FEATURE GRID (3 CARDS AS SPECIFIED) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="text-xs font-semibold font-mono uppercase tracking-widest text-violet-400">
            AUTONOMOUS AP CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Engineered to Intercept Every Variance.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Mid-market finance teams lose an average of $280,000 annually to unnoticed vendor creep, orphaned SaaS seats, and non-contracted rate hikes. Payly AI defends your margins.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: SaaS Ghost Seat Detection */}
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-600/15 backdrop-blur-xl transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Users className="w-32 h-32 text-violet-400" />
            </div>

            <div className="w-12 h-12 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 group-hover:bg-violet-600/30 transition-all">
              <Users className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-200 transition-colors">
              SaaS 'Ghost Seat' Detection
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              Stop paying for departed employees. Payly continuously syncs with Okta, Google Workspace, and Microsoft Entra ID to identify billed licenses assigned to deactivated or dormant users.
            </p>

            <div className="space-y-2.5 pt-4 border-t border-zinc-800/60 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Identifies zombie seats across Figma, Slack, Zoom</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Auto-calculates true-down credit requests</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Average ROI: $4,200/mo recovered per 100 headcount</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Contractor Verification */}
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-600/15 backdrop-blur-xl transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <FileCheck className="w-32 h-32 text-cyan-400" />
            </div>

            <div className="w-12 h-12 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-600/30 transition-all">
              <FileCheck className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
              Contractor Verification
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              Reconcile inbound agency invoices against project trackers. Automatically compare billed hours against Jira milestone completion, GitHub pull requests, and Linear task timestamps.
            </p>

            <div className="space-y-2.5 pt-4 border-t border-zinc-800/60 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Cross-checks SOW hourly caps and rate cards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Flags unlogged overtime and unverified hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Halts agency payouts until PM verification</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Zero-Touch ERP Sync */}
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-600/15 backdrop-blur-xl transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Database className="w-32 h-32 text-indigo-400" />
            </div>

            <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-600/30 transition-all">
              <Database className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
              Zero-Touch ERP Sync
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              Automatically route perfect matches to CFO approval. When invoices match contracts, POs, and telemetry 100%, Payly updates NetSuite or QuickBooks with GL codes and release triggers.
            </p>

            <div className="space-y-2.5 pt-4 border-t border-zinc-800/60 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Autonomous GL code mapping & tax parsing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Single-click approval digest for Finance Directors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Zero manual keying: 90% reduction in AP cycle time</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* INTERACTIVE SPEND DEFENSE ROI CALCULATOR */}
      <section className="py-20 bg-zinc-950/60 border-t border-zinc-800/80 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800 p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <GlowingOrb 
              className="-bottom-20 -right-20" 
              color="from-cyan-600/20 to-violet-600/10" 
              size="w-[400px] h-[400px]" 
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                    BENCHMARK CALCULATOR
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-bold text-white mt-1">
                    Calculate Your Spend Leakage
                  </h3>
                  <p className="text-sm text-zinc-400 mt-2">
                    Adjust your company's vendor spend volume to forecast how much uncontracted spend Payly will intercept annually.
                  </p>
                </div>

                {/* Slider 1: Annual Spend */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-400">Annual AP & Vendor Spend</span>
                    <span className="text-white font-bold text-sm">
                      ${(annualSpend / 1000000).toFixed(1)}M / year
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500000"
                    max="30000000"
                    step="500000"
                    value={annualSpend}
                    onChange={(e) => setAnnualSpend(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-violet-500"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-600 font-mono">
                    <span>$500K</span>
                    <span>$15M</span>
                    <span>$30M+</span>
                  </div>
                </div>

                {/* Slider 2: Vendor count */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-400">Active SaaS & Cloud Vendors</span>
                    <span className="text-white font-bold text-sm">
                      {vendorCount} Vendors
                    </span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="200"
                    step="5"
                    value={vendorCount}
                    onChange={(e) => setVendorCount(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-600 font-mono">
                    <span>15 tools</span>
                    <span>100 tools</span>
                    <span>200+ tools</span>
                  </div>
                </div>
              </div>

              {/* Right Result Box */}
              <div className="lg:col-span-5 rounded-2xl bg-zinc-950/90 border border-violet-500/30 p-6 space-y-5 text-center shadow-inner">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                  Projected Annual Clawback
                </span>
                
                <div className="space-y-1">
                  <div className="text-4xl sm:text-5xl font-black text-transparent bg-gradient-to-r from-emerald-400 via-cyan-300 to-violet-300 bg-clip-text font-mono">
                    ${totalDefenseValue.toLocaleString()}
                  </div>
                  <span className="text-xs text-zinc-500 font-mono block">
                    Estimated savings protected / yr
                  </span>
                </div>

                <div className="space-y-2 pt-3 border-t border-zinc-800/80 text-left text-xs text-zinc-300">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Rate variance & overcharges:</span>
                    <span className="font-mono text-emerald-400">+${calculatedSavings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Ghost seat elimination:</span>
                    <span className="font-mono text-emerald-400">+${ghostSeatSavings.toLocaleString()}</span>
                  </div>
                </div>

                <Link
                  to="/book-demo"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-all shadow-lg shadow-violet-600/30"
                >
                  <span>Claim Your Free Audit Slot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* PRE-FOOTER HIGH CONVERTING CTA */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-800/50 text-xs font-mono text-violet-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>14-Day Free Spend Defense Pilot</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to Catch Overcharges Before They Leave Your Bank?
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            Connect your ERP in read-only mode in 15 minutes. We will run an autonomous audit of your last 90 days of invoices at zero cost.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book-demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-xl shadow-violet-600/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <span>Schedule Enterprise Demo</span>
              <ArrowRight className="w-4 h-4 text-cyan-200" />
            </Link>

            <Link
              to="/pricing"
              className="w-full sm:w-auto px-7 py-4 text-base font-semibold text-zinc-300 hover:text-white rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all"
            >
              View Transparent Pricing
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lock, 
  CheckCircle, 
  ExternalLink, 
  ArrowUpRight, 
  Github, 
  Twitter, 
  Linkedin, 
  FileText 
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950/90 text-zinc-400 relative overflow-hidden">
      {/* Background glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-violet-900/10 via-cyan-900/5 to-transparent blur-[140px]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Brand & Security Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl transition-transform duration-300 group-hover:scale-105">
                <img src="/logo.jpg" alt="Payly AI Logo" className="w-full h-full rounded-xl object-cover border border-zinc-800 shadow-md shadow-violet-500/10" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white">Payly</span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-violet-600/20 text-cyan-300 border border-violet-500/30 font-mono">
                  AI
                </span>
              </div>
            </Link>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              The Autonomous Spend Defense Agent for mid-market finance teams. Automatically reconciling contract terms, live identity seats, and ERP ledgers before invoices get paid.
            </p>

            {/* Live System Operational Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>All AP Defense Agents Online</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-400 font-mono">99.99% SLA</span>
            </div>

            <div className="flex items-center gap-4 text-xs text-zinc-500 pt-1">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-zinc-400" /> SOC 2 Type II
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-zinc-400" /> AES-256 Bit
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-zinc-400" /> Read-Only ERP
              </span>
            </div>
          </div>

          {/* Navigation Column 1: Product */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-wider text-zinc-200 uppercase font-mono">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/product" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>The 3-Way Match</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-violet-400" />
                </Link>
              </li>
              <li>
                <Link to="/product#ghost-seats" className="hover:text-white transition-colors">
                  Ghost Seat Radar
                </Link>
              </li>
              <li>
                <Link to="/product#contractor-audit" className="hover:text-white transition-colors">
                  Contractor Verification
                </Link>
              </li>
              <li>
                <Link to="/product#erp-sync" className="hover:text-white transition-colors">
                  Zero-Touch ERP Sync
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Pricing & ROI Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2: Integrations */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-wider text-zinc-200 uppercase font-mono">
              Integrations
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center justify-between text-zinc-400">
                <span>Oracle NetSuite</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">Native</span>
              </li>
              <li className="flex items-center justify-between text-zinc-400">
                <span>QuickBooks Online</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">Certified</span>
              </li>
              <li className="flex items-center justify-between text-zinc-400">
                <span>Okta Identity Cloud</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">Live Telemetry</span>
              </li>
              <li className="flex items-center justify-between text-zinc-400">
                <span>AWS & CloudWatch</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">API</span>
              </li>
              <li className="flex items-center justify-between text-zinc-400">
                <span>Stripe Billing</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">Real-time</span>
              </li>
            </ul>
          </div>

          {/* Navigation Column 3: Trust & Action */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-wider text-zinc-200 uppercase font-mono">
              Spend Defense
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/book-demo" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium flex items-center gap-1">
                  <span>Request Free Audit</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link to="/sample-audit" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Sample Audit Report</span>
                  <ArrowUpRight className="w-3 h-3 text-cyan-400" />
                </Link>
              </li>
              <li>
                <span className="text-zinc-500 text-xs">Zero AI training on invoice data</span>
              </li>
              <li>
                <span className="text-zinc-500 text-xs">Customer-managed encryption keys</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; {currentYear} Payly AI Inc. All rights reserved. Built for mid-market finance teams.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-300 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-zinc-300 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-zinc-300 transition-colors cursor-pointer">Security Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

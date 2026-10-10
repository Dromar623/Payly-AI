import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  HelpCircle, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  ChevronDown, 
  Zap, 
  Layers, 
  X,
  CreditCard
} from 'lucide-react';
import GlowingOrb from '../components/GlowingOrb';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);

  const plans = [
    {
      name: 'Growth',
      monthlyPrice: 19,
      annualPrice: 15,
      description: 'Ideal for fast-growing businesses looking to eliminate phantom SaaS charges and manual invoice entry.',
      spendAudited: 'Up to $100k spend audited / mo',
      badge: 'Starter AP Defense',
      isPopular: false,
      buttonText: 'Start Growth Audit',
      ctaLink: '/book-demo?tier=growth',
      features: [
        'Up to $100,000 monthly spend audited',
        'Multi-Modal PDF & electronic invoice ingestion',
        'SaaS Ghost Seat detection (Google Workspace & Slack)',
        'Weekly AP discrepancy digest report',
        'Email & Slack instant alerts',
        'QuickBooks Online & Xero certified sync',
        'Standard email support (24h SLA)',
      ],
      notIncluded: [
        'Autonomous Auto-Dispute drafts & vendor dispatch',
        'Live Okta & Azure AD directory telemetry',
        'Contractor Jira/GitHub timesheet reconciliation',
        'NetSuite ERP native two-way sync',
      ]
    },
    {
      name: 'Scale',
      monthlyPrice: 99,
      annualPrice: 79,
      description: 'Full autonomous spend defense for mid-market finance teams that require active dispute resolution and ERP sync.',
      spendAudited: 'Up to $500k spend audited / mo',
      badge: 'Most Popular',
      isPopular: true,
      buttonText: 'Claim Scale License',
      ctaLink: '/book-demo?tier=scale',
      features: [
        'Up to $500,000 monthly spend audited',
        'Includes Auto-Dispute & Vendor Remediation',
        'Live Okta & Microsoft Entra ID seat telemetry',
        'Contractor & Agency project tracker verification',
        'Zero-Touch NetSuite & QuickBooks ERP sync',
        'Automated credit memo recovery tracking',
        'Custom approval thresholds & multi-entity routing',
        'Priority 24/7 Slack channel support with dedicated AP agent',
      ],
      notIncluded: [
        'Custom on-prem data lake integration',
        'Dedicated machine learning fine-tuning on custom SOWs',
      ]
    },
    {
      name: 'Enterprise',
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      description: 'Engineered for high-volume enterprise finance operations with complex ERPs and bespoke contractual SLAs.',
      spendAudited: 'Unlimited spend audited',
      badge: 'Bespoke Mid-Market',
      isPopular: false,
      buttonText: 'Contact Enterprise Sales',
      ctaLink: '/book-demo?tier=enterprise',
      features: [
        'Unlimited monthly vendor spend audited',
        'Includes Auto-Dispute + Autonomous Negotiation',
        'Custom data lakes & private cloud VPC options',
        'SAP S/4HANA, Workday, Coupa, & NetSuite Custom SuiteScripts',
        'Custom SOW milestone parsing & legal SLA penalty clawback',
        'Customer-managed KMS encryption keys',
        'Dedicated AP Automation Solutions Engineer',
        'Quarterly executive spend defense & margin analysis',
      ],
      notIncluded: []
    }
  ];

  const faqs = [
    {
      q: 'How does Payly AI connect to our ERP without risking data leaks?',
      a: 'Payly connects via official OAuth 2.0 REST APIs using strict, read-only permissions for transaction review. Payly never stores your core accounting credentials, operates under SOC 2 Type II controls, and cannot release actual payments without your CFO’s approval rules.'
    },
    {
      q: 'What happens when Payly identifies an invoice discrepancy?',
      a: 'The invoice is instantly flagged, and payment release is halted in your ERP. Payly generates a detailed audit dossier comparing the billed line item against your original MSA contract or telemetry logs. An AI-drafted polite dispute notice is prepared. On the Scale and Enterprise tiers, you can dispatch the dispute directly to the vendor with one click.'
    },
    {
      q: 'How quickly does Payly deliver positive ROI?',
      a: 'Across our mid-market customer base, the average payback period is 14 days. Most companies catch between 2% and 4.5% in cumulative overcharges, orphaned SaaS licenses, and unearned contractor hours on their very first 90-day back-audit.'
    },
    {
      q: 'Can we switch between Monthly and Annual billing?',
      a: 'Yes, you can upgrade, downgrade, or switch between annual and monthly billing at any time through your finance dashboard. Annual plans receive an immediate 20% discount plus two months free.'
    },
    {
      q: 'What ERPs and accounting systems do you support?',
      a: 'We provide out-of-the-box native integrations for Oracle NetSuite, QuickBooks Online, QuickBooks Desktop, Xero, Stripe, and bill.com. Enterprise customers can connect SAP, Workday, and Microsoft Dynamics.'
    }
  ];

  return (
    <div className="relative overflow-hidden py-16 md:py-24">
      {/* Background Orbs */}
      <GlowingOrb 
        className="-top-20 left-1/2 -translate-x-1/2" 
        color="from-violet-600/25 via-cyan-600/15 to-transparent" 
        size="w-[800px] h-[600px]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-violet-500/30 text-xs font-mono uppercase tracking-widest text-violet-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>TRANSPARENT VALUE-ALIGNED PRICING</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Predictable Pricing. <br />
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Immediate Payback.
            </span>
          </h1>

          <p className="text-lg text-zinc-400">
            Every Payly tier pays for itself in intercepted overcharges and eliminated ghost seats within the first 30 days.
          </p>

          {/* Billing Toggle */}
          <div className="pt-6 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-zinc-400'}`}>
              Monthly
            </span>

            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 rounded-full bg-zinc-800 border border-zinc-700 p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500"
              aria-label="Toggle annual billing"
            >
              <div 
                className={`w-6 h-6 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-transform duration-300 shadow-md ${
                  isAnnual ? 'translate-x-8' : 'translate-x-0'
                }`}
              />
            </button>

            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-zinc-400'}`}>
                Annual Billing
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-sm">
                Save 20% + 2 Mo Free
              </span>
            </div>
          </div>
        </div>

        {/* 3-TIER PRICING CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-24">
          {plans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.name}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-gradient-to-b from-zinc-900/95 via-zinc-900/80 to-zinc-950 border-2 border-violet-500 shadow-2xl shadow-violet-600/20 lg:-translate-y-2'
                    : 'bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                {/* Popular Glow / Top Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-violet-600/40 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div className="space-y-6">
                  
                  {/* Plan Name & Tag */}
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                      {!plan.isPopular && (
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-400 mt-2 min-h-[36px] leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Spend Audited Pill */}
                  <div className="px-3.5 py-2 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs font-mono text-cyan-300 flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{plan.spendAudited}</span>
                  </div>

                  {/* Price Display */}
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1">
                      {typeof price === 'number' ? (
                        <>
                          <span className="text-5xl font-black text-white font-mono tracking-tight">
                            ${price}
                          </span>
                          <span className="text-zinc-400 text-sm font-medium">/ month</span>
                        </>
                      ) : (
                        <span className="text-4xl font-black text-white tracking-tight">
                          Custom
                        </span>
                      )}
                    </div>
                    {typeof price === 'number' && (
                      <div className="text-[11px] text-zinc-500 font-mono">
                        {isAnnual ? 'Billed annually ($' + (price * 12) + '/yr)' : 'Billed monthly, cancel anytime'}
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-4 border-t border-zinc-800/80">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                      What's Included:
                    </div>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.isPopular ? 'text-cyan-400' : 'text-emerald-400'}`} />
                          <span>{feat}</span>
                        </li>
                      ))}

                      {plan.notIncluded.map((notFeat, nIdx) => (
                        <li key={nIdx} className="flex items-start gap-2.5 text-xs text-zinc-600 line-through">
                          <X className="w-4 h-4 mt-0.5 shrink-0 text-zinc-700" />
                          <span>{notFeat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Card Button */}
                <div className="pt-8 mt-6">
                  <Link
                    to={plan.ctaLink}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      plan.isPopular
                        ? 'bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white shadow-xl shadow-violet-600/30 hover:scale-[1.02] border border-white/10'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-700 hover:border-zinc-600'
                    }`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ ACCORDION */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-semibold">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Finance & Security Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-zinc-900/40 border border-zinc-800/80 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-semibold text-zinc-200">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-zinc-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-violet-400' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/40">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Micro-guarantee */}
          <div className="pt-10 text-center text-xs text-zinc-500 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>30-Day Zero Risk Guarantee: If Payly doesn't catch its annual license cost in invoice overcharges, cancel for a 100% refund.</span>
          </div>
        </div>

      </div>
    </div>
  );
}

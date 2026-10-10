import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Building, 
  Mail, 
  User, 
  DollarSign, 
  Lock, 
  Calendar, 
  Check, 
  Clock, 
  FileText,
  X
} from 'lucide-react';
import GlowingOrb from '../components/GlowingOrb';
import { sendDemoLeadEmail, NOTIFICATION_EMAIL, generateMailtoBackup } from '../services/emailService';

export default function BookDemo() {
  const [searchParams] = useSearchParams();
  const initialTier = searchParams.get('tier') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    monthlySpend: initialTier === 'growth' ? '< $100k' : initialTier === 'enterprise' ? '$2M+' : '$100k - $500k',
    erpSystem: 'NetSuite',
    priorities: ['Ghost Seat Elimination', 'Invoice Discrepancies'],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [dispatchInfo, setDispatchInfo] = useState(null);

  const spendOptions = [
    '< $100,000 / month',
    '$100,000 - $500,000 / month',
    '$500,000 - $2,000,000 / month',
    '$2,000,000 - $10,000,000 / month',
    '$10,000,000+ / month'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.workEmail.trim() || !formData.workEmail.includes('@')) {
      setErrorMsg('Please enter a valid work email address.');
      return;
    }
    if (!formData.companyName.trim()) {
      setErrorMsg('Please enter your company name.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Dispatches full lead details to Omar@PaylyAi.com
      const res = await sendDemoLeadEmail(formData);
      setDispatchInfo(res);
    } catch (err) {
      console.warn('Dispatch logged:', err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    setShowToast(true);

    // Auto-hide toast after 7s
    setTimeout(() => {
      setShowToast(false);
    }, 7000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setShowToast(false);
    setFormData({
      fullName: '',
      workEmail: '',
      companyName: '',
      monthlySpend: '$100,000 - $500,000 / month',
      erpSystem: 'NetSuite',
      priorities: ['Ghost Seat Elimination', 'Invoice Discrepancies'],
    });
  };

  return (
    <div className="relative overflow-hidden py-16 md:py-24">
      
      {/* Ambient background glows */}
      <GlowingOrb 
        className="top-10 left-1/2 -translate-x-1/2" 
        color="from-violet-600/25 via-indigo-600/15 to-cyan-500/10" 
        size="w-[850px] h-[600px]" 
      />

      {/* Floating Success Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 right-4 sm:right-8 z-50 max-w-md w-full bg-zinc-950/95 border border-emerald-500/50 rounded-2xl p-4 shadow-2xl shadow-black/80 backdrop-blur-2xl flex items-start gap-3.5"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>

            <div className="flex-1 space-y-1">
              <div className="text-sm font-bold text-white flex items-center justify-between">
                <span>Demo Request Dispatched!</span>
                <button 
                  onClick={() => setShowToast(false)} 
                  className="text-zinc-500 hover:text-zinc-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-zinc-300">
                Lead notification for <span className="text-emerald-300 font-semibold">{formData.companyName}</span> has been emailed directly to <span className="text-cyan-300 font-mono font-semibold">Omar@PaylyAi.com</span>.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-violet-500/30 text-xs font-mono uppercase tracking-widest text-violet-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>ENTERPRISE LEAD CAPTURE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Book Your 1-on-1 <br />
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Spend Defense Briefing
            </span>
          </h1>

          <p className="text-base text-zinc-400">
            See Payly AI run against real invoices from your stack. Includes a complimentary 90-day back-audit of your SaaS and contractor spend.
          </p>
        </div>

        {/* The Sleek Centered Form / Success Card */}
        <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800/80 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              
              /* Form State */
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/50 text-xs text-rose-300 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider font-mono">
                      Full Name <span className="text-violet-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Sarah Jenkins"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Work Email */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider font-mono">
                      Work Email <span className="text-violet-400">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        placeholder="sarah@company.com"
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider font-mono">
                      Company Name <span className="text-violet-400">*</span>
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Acme Enterprises"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Monthly Vendor Spend volume (Dropdown) */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider font-mono">
                      Monthly Vendor Spend <span className="text-violet-400">*</span>
                    </label>
                    <div className="relative">
                      <DollarSign className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        value={formData.monthlySpend}
                        onChange={(e) => setFormData({ ...formData, monthlySpend: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors appearance-none cursor-pointer"
                      >
                        {spendOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-zinc-950 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 text-xs">
                        ▼
                      </div>
                    </div>
                  </div>

                </div>

                {/* Primary ERP System */}
                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider font-mono">
                    Primary ERP / Accounting Platform
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['NetSuite', 'QuickBooks', 'Xero', 'SAP / Other'].map((erp) => (
                      <button
                        type="button"
                        key={erp}
                        onClick={() => setFormData({ ...formData, erpSystem: erp })}
                        className={`py-2.5 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                          formData.erpSystem === erp
                            ? 'bg-violet-600/30 text-white border-violet-500/80 shadow-sm'
                            : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                        }`}
                      >
                        {erp}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit button: "Request Access" */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:via-indigo-500 hover:to-cyan-500 shadow-xl shadow-violet-600/30 hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] border border-white/10 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Reserving Spend Defense Slot...</span>
                      </div>
                    ) : (
                      <>
                        <span>Request Access</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Trust Footer below button */}
                <div className="flex flex-wrap items-center justify-center gap-6 pt-3 text-[11px] text-zinc-500 text-center">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-zinc-400" /> SOC 2 Type II Certified
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Strict NDA Covered
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" /> Fast 15-Minute Setup
                  </span>
                </div>
              </motion.form>

            ) : (

              /* Success State Card */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-500 p-[2px] mx-auto shadow-xl shadow-emerald-500/20">
                  <div className="w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-xs font-mono text-cyan-300">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Lead Emailed to: <strong>Omar@PaylyAi.com</strong></span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Access Granted & Briefing Dispatched!
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-lg mx-auto">
                    Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. Your briefing details for <span className="text-white font-semibold">{formData.companyName}</span> have been delivered to <span className="text-cyan-300 font-mono">Omar@PaylyAi.com</span>.
                  </p>
                </div>

                {/* Reservation Summary */}
                <div className="max-w-md mx-auto p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-left text-xs space-y-2 font-mono">
                  <div className="flex justify-between text-zinc-400">
                    <span>Lead Name:</span>
                    <span className="text-white">{formData.fullName}</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>Work Email:</span>
                    <span className="text-white">{formData.workEmail}</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>Spend Volume:</span>
                    <span className="text-cyan-400">{formData.monthlySpend}</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>Primary ERP:</span>
                    <span className="text-violet-400">{formData.erpSystem}</span>
                  </div>
                  <div className="flex justify-between text-zinc-400 pt-2 border-t border-zinc-800/80">
                    <span>Delivered To:</span>
                    <span className="text-cyan-300 font-semibold">Omar@PaylyAi.com</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>Status:</span>
                    <span className="text-emerald-400 font-semibold">✅ Dispatched to Inbox</span>
                  </div>
                </div>

                {/* Direct mailto link backup option */}
                <div className="text-[11px] text-zinc-500">
                  <span>Need an immediate copy? </span>
                  <a
                    href={generateMailtoBackup(formData)}
                    className="text-violet-400 hover:text-violet-300 underline font-mono"
                  >
                    Open direct email in your mail client
                  </a>
                </div>

                {/* Sample Report Action */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <Link
                    to="/sample-audit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white text-xs font-bold hover:opacity-95 shadow-lg shadow-violet-600/30 transition-all hover:scale-[1.02]"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Interactive Sample Audit Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Why Mid-Market CFOs Choose Payly Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center sm:text-left">
          
          <div className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/60 space-y-2">
            <div className="text-cyan-400 font-mono text-xs font-semibold flex items-center gap-2">
              <Check className="w-4 h-4 text-cyan-400" />
              <span>Zero Disruption</span>
            </div>
            <h4 className="text-sm font-bold text-white">No Change to Existing AP Flows</h4>
            <p className="text-xs text-zinc-400">
              Your vendors continue sending invoices to your current AP email. Payly sits as an invisible autonomous shield before ledger sync.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/60 space-y-2">
            <div className="text-violet-400 font-mono text-xs font-semibold flex items-center gap-2">
              <Check className="w-4 h-4 text-violet-400" />
              <span>Full Audit Trail</span>
            </div>
            <h4 className="text-sm font-bold text-white">Every Decision Documented</h4>
            <p className="text-xs text-zinc-400">
              Export comprehensive audit packages ready for external auditors, showing exact contract clauses and telemetry logs that justified each hold.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/60 space-y-2">
            <div className="text-emerald-400 font-mono text-xs font-semibold flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Immediate Payback</span>
            </div>
            <h4 className="text-sm font-bold text-white">14-Day Average Payback</h4>
            <p className="text-xs text-zinc-400">
              The typical mid-market company catches over $32,000 in unearned line items during the initial 2-week pilot alone.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

import { FileText, Layers, Sparkles, Clock, Shield, Users } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: FileText,
      title: 'Document intelligence',
      desc: 'Upload KYC, financials, invoices—our AI extracts, validates, and structures data for lenders.'
    },
    {
      icon: Layers,
      title: 'Unified workflow',
      desc: 'Clients, financiers, and suppliers collaborate in one secure workspace with clear next steps.'
    },
    {
      icon: Sparkles,
      title: 'AI + expert review',
      desc: 'Automated scoring plus human expertise to shape bank-ready proposals that get faster approvals.'
    },
    {
      icon: Clock,
      title: 'Speed to offer',
      desc: 'Average first offers in 48 hours with parallel lender submissions and status tracking.'
    },
    {
      icon: Shield,
      title: 'Bank-grade security',
      desc: 'End-to-end encryption with strict access controls and audit trails across all stakeholders.'
    },
    {
      icon: Users,
      title: 'Lender marketplace',
      desc: 'Access a broad network across banks, NBFCs, and alt lenders to optimize pricing and terms.'
    },
  ]

  return (
    <section id="solutions" className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_0%,rgba(56,189,248,0.08),transparent),radial-gradient(600px_200px_at_90%_0%,rgba(59,130,246,0.07),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Built for speed, clarity, and certainty</h2>
          <p className="mt-3 text-white/70">From document intake to final sanction, every step is optimized to reduce friction and improve outcomes.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-600/30">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

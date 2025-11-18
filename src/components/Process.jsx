import { Upload, CheckCircle2, FileCheck2, FileCog, Handshake } from 'lucide-react'

export default function Process() {
  const steps = [
    { icon: Upload, title: 'Upload documents', desc: 'Drag-and-drop KYC, financials, and invoices securely into your workspace.' },
    { icon: FileCog, title: 'AI prep & validation', desc: 'We extract, analyze, and package your data into lender-ready formats.' },
    { icon: FileCheck2, title: 'Expert review', desc: 'Specialists fine-tune the case and match to the right lenders.' },
    { icon: CheckCircle2, title: 'Offers & negotiation', desc: 'Receive parallel offers, compare terms, and negotiate with support.' },
    { icon: Handshake, title: 'Sanction & disbursal', desc: 'Close with clarity and track disbursal and post-sanction documents.' },
  ]

  return (
    <section id="process" className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(500px_200px_at_0%_0%,rgba(59,130,246,0.06),transparent),radial-gradient(500px_200px_at_100%_10%,rgba(56,189,248,0.06),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">From upload to approval—seamlessly</h2>
          <p className="mt-3 text-white/70">A transparent, guided workflow reduces back-and-forth and accelerates decisioning.</p>
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-5">
          {steps.map((s, idx) => (
            <li key={s.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-600/30">
                <s.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-wide text-white/60">Step {idx + 1}</p>
              <h3 className="mt-1 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

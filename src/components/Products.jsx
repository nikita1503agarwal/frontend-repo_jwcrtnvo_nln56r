import { Stethoscope, Factory, Building2, Landmark, FileBarChart, Home } from 'lucide-react'

export default function Products() {
  const products = [
    { icon: Stethoscope, name: 'Medical equipment loans', desc: 'Finance for imaging, diagnostics, and healthcare equipment with flexible tenures.' },
    { icon: Factory, name: 'Industrial equipment loans', desc: 'Capex financing for machinery, production lines, and plant upgrades.' },
    { icon: Building2, name: 'Business loans', desc: 'Working capital and expansion loans tailored to your cashflows.' },
    { icon: Landmark, name: 'Term loans', desc: 'Medium to long-term structured funding for growth and consolidation.' },
    { icon: FileBarChart, name: 'Project loans', desc: 'Structured finance for infrastructure and large-scale initiatives.' },
    { icon: Home, name: 'Housing loans', desc: 'Competitive mortgages with fast eligibility checks and documentation.' },
  ]

  return (
    <section id="products" className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(500px_200px_at_50%_0%,rgba(255,255,255,0.04),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Solutions across products</h2>
          <p className="mt-3 text-white/70">Select a category to see typical documentation and lender preferences.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-600/30">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{p.desc}</p>
              <button className="mt-4 inline-flex items-center rounded-lg border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-white/80 hover:text-white">View details</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

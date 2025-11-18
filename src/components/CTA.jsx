export default function CTA() {
  return (
    <section id="cta" className="relative bg-gradient-to-b from-slate-950 to-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(700px_200px_at_50%_0%,rgba(56,189,248,0.07),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl shadow-2xl shadow-slate-900/40">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Get your first offer in 48 hours</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">Start by telling us about your requirement and uploading your documents. Our AI will pre-process them and an expert will reach out within hours.</p>
          <form className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            <input required placeholder="Name" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none" />
            <input required type="email" placeholder="Work email" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none" />
            <input required placeholder="Phone" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none" />
            <select className="sm:col-span-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none">
              <option className="text-slate-900">Medical equipment loans</option>
              <option className="text-slate-900">Industrial equipment loans</option>
              <option className="text-slate-900">Business loans</option>
              <option className="text-slate-900">Term loans</option>
              <option className="text-slate-900">Project loans</option>
              <option className="text-slate-900">Housing loans</option>
            </select>
            <button className="sm:col-span-3 mt-1 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30">Start application</button>
          </form>
          <p className="mt-3 text-xs text-white/50">By continuing, you agree to our Terms and Privacy Policy.</p>
        </div>
      </div>
    </section>
  )
}

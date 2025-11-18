import { useState } from 'react'
import { Menu, X, ShieldCheck, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Process', href: '#process' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-3 shadow-lg shadow-slate-900/20">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/30">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-base font-semibold tracking-tight text-white">Finexus</p>
              <p className="text-xs text-white/60 -mt-1">Finance Facilitation</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.name} href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {l.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20">
              <Phone className="h-4 w-4 opacity-80 group-hover:opacity-100" />
              Talk to an expert
            </a>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/30">
              Get financing
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 md:hidden">
            <nav className="flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.name} href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {l.name}
                </a>
              ))}
              <a href="#cta" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/30">
                Get financing
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

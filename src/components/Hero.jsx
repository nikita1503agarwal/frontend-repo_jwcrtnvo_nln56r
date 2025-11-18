import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950"></div>

      {/* Glow accents */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[1100px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 -right-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-8 pb-16 md:pt-12 md:pb-28">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              AI + Experts • From docs to deal, faster
            </div>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-6xl">
              Finance that moves at the speed of your ambition
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
              One platform that connects clients, financiers, and suppliers to unlock optimal funding across equipment, business, and project needs. Upload documents, let our AI prepare the case, and our experts finalize the best offer.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30">
                Start your application
              </a>
              <a href="#products" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm text-white/80 hover:text-white">
                Explore solutions
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6 text-white/70">
              <div>
                <p className="text-2xl font-semibold text-white">10k+</p>
                <p className="text-xs">Documents processed</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">48 hrs</p>
                <p className="text-xs">Average first offer</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">150+</p>
                <p className="text-xs">Lender network</p>
              </div>
            </div>
          </div>

          <div className="relative h-[420px] w-full md:h-[560px]">
            <div className="absolute inset-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-slate-900/40">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

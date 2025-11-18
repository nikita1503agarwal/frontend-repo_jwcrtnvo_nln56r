export default function Footer() {
  return (
    <footer id="contact" className="relative bg-slate-950 py-10">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <p className="text-sm text-white/70">© {new Date().getFullYear()} Finexus. All rights reserved.</p>
            <p className="text-xs text-white/50 mt-1">Bank-grade security • GDPR compliant • India & Global</p>
          </div>
          <div className="flex gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[4%] py-1 bg-white border-b border-gray-200 shadow-sm">
      <a href="/#start" className="flex items-center gap-1.5 font-bold text-[#1A56E8] text-base no-underline">
        <img src="/logo.png" alt="Logo" className="h-16 w-auto sm:h-16 md:h-46"/>
      </a>
      {/* Desktop nav */}
      <ul className="hidden md:flex gap-5 list-none">
        <li><a href="/#start" className="text-xs font-medium text-gray-800 hover:text-[#1A56E8] transition-colors no-underline">Startseite</a></li>
        <li><Link to="/leistungen" className="text-xs font-medium text-gray-800 hover:text-[#1A56E8] transition-colors no-underline">Leistungen</Link></li>
        <li><a href="/#prozess" className="text-xs font-medium text-gray-800 hover:text-[#1A56E8] transition-colors no-underline">Prozess</a></li>
        <li><a href="/#faq" className="text-xs font-medium text-gray-800 hover:text-[#1A56E8] transition-colors no-underline">FAQ</a></li>
      </ul>
      <Link to="/kontakt" className="hidden md:inline-block btn-primary text-xs py-1.5 px-3">Kontakt &amp; Angebot</Link>
      {/* Mobile hamburger */}
      <button
        className="md:hidden p-4 relative w-8 h-8 z-50 overflow-visible"
        onClick={() => setOpen(!open)}
        aria-label="Menü"
      >
        <div className={`absolute left-1/2 top-1/2 w-5 h-0.5 bg-gray-800 transition-all duration-300 origin-center ${open ? "rotate-45" : "-translate-y-1.5"}`}></div>
        <div className={`absolute left-1/2 top-1/2 w-5 h-0.5 bg-gray-800 transition-all duration-300 origin-center ${open ? "opacity-0" : ""}`}></div>
        <div className={`absolute left-1/2 top-1/2 w-5 h-0.5 bg-gray-800 transition-all duration-300 origin-center ${open ? "-rotate-45" : "translate-y-1.5"}`}></div>
      </button>
      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg md:hidden">
          <div className="flex flex-col px-[4%] py-3 gap-3">
            <NavLink to="/" end onClick={() => setOpen(false)} className="text-xs font-medium text-gray-800 no-underline">Startseite</NavLink>
            <Link to="/leistungen" onClick={() => setOpen(false)} className="text-xs font-medium text-gray-800 no-underline">Leistungen</Link>
            <a href="/#prozess" onClick={() => setOpen(false)} className="text-xs font-medium text-gray-800 no-underline">Prozess</a>
            <a href="/#faq" onClick={() => setOpen(false)} className="text-xs font-medium text-gray-800 no-underline">FAQ</a>
            <Link to="/kontakt" onClick={() => setOpen(false)} className="btn-primary text-xs text-center py-1.5">Kontakt &amp; Angebot</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
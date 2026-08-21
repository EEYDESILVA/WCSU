'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/data/site';

export default function Header({ onNavigate }) {
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-auto flex items-center justify-between px-6 py-5 md:px-12">
        <div className="flex items-center gap-2.5">
          <span className="animate-pulse-glow h-1.5 w-1.5 rounded-full bg-cambridge-blue" />
          <span className="font-mono text-[11px] tracking-[0.35em] text-white uppercase md:text-xs">
            Science Union
          </span>
        </div>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNav(link.id)}
              className="font-mono text-[11px] tracking-[0.2em] text-silver/70 uppercase transition-colors duration-300 hover:text-cambridge-blue"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="text-white md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="glass-card pointer-events-auto mx-4 mt-1 flex flex-col gap-4 p-5 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNav(link.id)}
                className="font-mono text-left text-xs tracking-[0.2em] text-silver/80 uppercase transition-colors hover:text-cambridge-blue"
              >
                {link.label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

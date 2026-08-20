'use client';

import { useState } from 'react';
import { Instagram, Facebook, Youtube, Mail, Send } from 'lucide-react';
import { SOCIAL_LINKS } from '@/data/site';

const ICONS = { Instagram, Facebook, Youtube, Mail };

export default function ContactSection() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    // This only simulates a send. Before launch, wire this up to a real
    // endpoint — Formspree, EmailJS, or a Next.js Route Handler that
    // forwards to your email/CRM of choice.
    setStatus('sent');
  };

  return (
    <section
      id="contact"
      className="pointer-events-none relative flex min-h-[100dvh] flex-col justify-center px-6 py-28 md:px-16"
    >
      <div className="pointer-events-auto mx-auto w-full max-w-xl">
        <span className="font-mono text-xs tracking-[0.4em] text-cambridge-blue uppercase">
          Transmission
        </span>
        <h2 className="font-display mt-3 mb-10 text-3xl text-white md:text-5xl">
          Contact
        </h2>

        <form onSubmit={handleSubmit} className="glass-card space-y-5 p-6 md:p-8">
          <div>
            <label
              htmlFor="name"
              className="font-mono text-[11px] tracking-wider text-silver/60 uppercase"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full border-b border-white/20 bg-transparent py-2 text-white outline-none transition-colors focus:border-cambridge-blue"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="font-mono text-[11px] tracking-wider text-silver/60 uppercase"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border-b border-white/20 bg-transparent py-2 text-white outline-none transition-colors focus:border-cambridge-blue"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="font-mono text-[11px] tracking-wider text-silver/60 uppercase"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={3}
              className="w-full resize-none border-b border-white/20 bg-transparent py-2 text-white outline-none transition-colors focus:border-cambridge-blue"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full border border-cambridge-blue/40 px-5 py-2.5 text-sm text-cambridge-blue transition-colors hover:bg-cambridge-blue/10"
          >
            <Send className="h-4 w-4" />
            {status === 'sent' ? 'Message sent' : 'Send message'}
          </button>
        </form>

        <div className="mt-8 flex items-center gap-5">
          {SOCIAL_LINKS.map((social) => {
            const Icon = ICONS[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-silver/60 transition-colors hover:text-cambridge-blue"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

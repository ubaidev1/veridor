import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please provide an email address.');
      return;
    }

    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email format.');
      return;
    }

    setStatus('loading');

    // Simulate verified registration into atelier mailing list
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 800);
  };

  return (
    <section
      id="newsletter"
      className="relative section-warm-light text-[#141518] py-24 sm:py-32 border-t border-[#D4C4B4]/40"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#8C5635] block mb-3">
          CORRESPONDENCE
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#141518] mb-5 font-normal [text-wrap:balance]">
          Letters from Veridor.
        </h2>

        <p className="text-base sm:text-lg text-[#4A4642] font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Discover new designs, material stories, and a closer look at the
          details behind the pieces.
        </p>

        {status === 'success' ? (
          <div className="p-6 bg-white border border-[#D4C4B4]/60 text-center max-w-lg mx-auto space-y-2 shadow-lg">
            <div className="inline-flex items-center gap-2 text-[#8C5635] text-sm font-medium">
              <CheckCircle2 className="w-5 h-5 text-[#8C5635]" />
              <span>You are now subscribed to Letters from Veridor.</span>
            </div>
            <p className="text-xs text-[#5A544E] font-light">
              We send thoughtful dispatches on leather craft and seasonal releases.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="text-xs text-[#8C5635] underline underline-offset-4 pt-2 cursor-pointer"
            >
              Subscribe another address
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto space-y-3"
            noValidate
          >
            <div className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0 border border-[#D4C4B4]/70 bg-white focus-within:border-[#8C5635] shadow-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Your email address"
                aria-label="Your email address"
                className="w-full px-5 py-3.5 bg-transparent text-sm text-[#141518] placeholder-[#5A544E]/60 focus:outline-none"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-charcoal-on-light px-7 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold whitespace-nowrap cursor-pointer flex items-center justify-center shrink-0 border-0"
              >
                {status === 'loading' ? (
                  <Loader2 className="w-4 h-4 animate-spin text-[#F5EFEB]" />
                ) : (
                  'Join the List'
                )}
              </button>
            </div>

            {status === 'error' && (
              <div className="flex items-center justify-center gap-1.5 text-xs text-red-600">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <p className="text-[11px] text-[#5A544E] tracking-wider">
              No frequent spam. Unsubscribe with a single click at any time.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

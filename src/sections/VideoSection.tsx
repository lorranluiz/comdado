'use client';

import { useEffect, useRef, useCallback } from 'react';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/animations/FadeIn';

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const mutedRef = useRef(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure autoplay on mobile
    const ensurePlay = () => {
      if (video.paused) {
        video.play().catch(() => {});
      }
    };

    video.addEventListener('loadeddata', ensurePlay);
    document.addEventListener('touchstart', ensurePlay, { once: true, passive: true });
    document.addEventListener('scroll', ensurePlay, { once: true, passive: true });

    return () => {
      video.removeEventListener('loadeddata', ensurePlay);
      document.removeEventListener('touchstart', ensurePlay);
      document.removeEventListener('scroll', ensurePlay);
    };
  }, []);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    const overlay = overlayRef.current;
    if (!video || !overlay) return;

    mutedRef.current = !mutedRef.current;
    video.muted = mutedRef.current;

    // Update overlay visually without React re-render
    if (mutedRef.current) {
      overlay.classList.remove('opacity-0', 'pointer-events-none');
      overlay.classList.add('opacity-100');
    } else {
      overlay.classList.remove('opacity-100');
      overlay.classList.add('opacity-0', 'pointer-events-none');
      // Re-trigger play on unmute for mobile
      video.play().catch(() => {});
    }

    window.dispatchEvent(new Event(mutedRef.current ? 'bgmusic:resume' : 'bgmusic:pause'));
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-stone-900 to-stone-800 relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-3xl" aria-hidden="true" />

      <Container>
        <FadeIn delay={0.1} direction="up">
          <div className="text-center mb-8 sm:mb-10 px-4">
            <span className="text-amber-400 font-semibold text-xs sm:text-sm tracking-wider uppercase">
              🎬 Veja na Prática
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-50 mt-3"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Uma Amostra da Experiência
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} direction="up">
          <div className="max-w-4xl mx-auto px-4">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-amber-500/20 cursor-pointer"
              onClick={toggleMute}
            >
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto block"
              >
                <source src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/videos/video.mp4`} type="video/mp4" />
              </video>

              {/* Mute overlay - manipulated via DOM, no React re-render */}
              <div
                ref={overlayRef}
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-100 bg-black/20"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-black/50 border border-white/20 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H2v6h4l5 4V5z" />
                    <line x1="23" y1="9" x2="17" y2="15" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="17" y1="9" x2="23" y2="15" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

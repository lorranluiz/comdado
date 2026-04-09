'use client';

import { useEffect, useRef, useState } from 'react';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/animations/FadeIn';

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const tryPlay = () => {
      video.play().catch(() => {});
    };
    tryPlay();
    document.addEventListener('touchstart', tryPlay, { once: true });
    return () => document.removeEventListener('touchstart', tryPlay);
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const newMuted = !video.muted;
    video.muted = newMuted;
    setIsMuted(newMuted);
    if (!newMuted) {
      video.play().catch(() => {});
    }
    window.dispatchEvent(new Event(newMuted ? 'bgmusic:resume' : 'bgmusic:pause'));
  };

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
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-amber-500/20 cursor-pointer group"
              onClick={toggleMute}
            >
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-auto block"
              >
                <source src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/videos/video.mp4`} type="video/mp4" />
              </video>

              {/* Mute/Unmute overlay - always in DOM, toggle via opacity */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  isMuted ? 'opacity-100 bg-black/20' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-transform group-hover:scale-110">
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

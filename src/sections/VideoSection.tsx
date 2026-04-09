'use client';

import Container from '@/components/ui/Container';
import FadeIn from '@/components/animations/FadeIn';

export default function VideoSection() {
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-amber-500/20">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto block"
              >
                <source src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/videos/video.mp4`} type="video/mp4" />
              </video>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

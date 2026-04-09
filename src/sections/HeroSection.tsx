'use client';

import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/animations/FadeIn';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white overflow-hidden px-4 sm:px-0"
      aria-labelledby="hero-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" aria-hidden="true" />
      
      {/* Animated particles/stars */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-100" />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-amber-500 rounded-full animate-pulse delay-200" />
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <FadeIn delay={0.2} direction="down">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 bg-amber-600/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium border border-amber-500/40">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full mr-2 animate-pulse" />
              🎲 Vagas Limitadas Abertas
            </div>
          </FadeIn>

          {/* Headline - ATENÇÃO */}
          <FadeIn delay={0.3} direction="up">
            <h1 
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Suas Histórias de RPG
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 animate-glow-pulse">
                Merecem Ser Épicas
              </span>
            </h1>
          </FadeIn>

          {/* Subheadline - INTERESSE (problema) */}
          <FadeIn delay={0.4} direction="up">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-amber-50 max-w-2xl mx-auto leading-relaxed">
              Cansado de sessões sem graça? Players desinteressados? Campanhas que morrem na metade?
              <br className="hidden sm:block" />
              <strong className="text-amber-300 block mt-2 sm:inline sm:mt-0">Aprenda a criar narrativas que prendem do início ao fim.</strong>
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.5} direction="up">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg mx-auto">
              <a href="#planos" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="group bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-stone-900 font-bold border-2 border-amber-400 shadow-lg shadow-amber-900/30 w-full min-h-[48px] text-sm sm:text-base"
                  aria-label="Comece sua jornada de Mestre"
                >
                  ⚔️ Quero Dominar a Narrativa
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 inline transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </a>
              <a href="#beneficios" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-amber-500 text-amber-100 hover:bg-amber-600/20 w-full min-h-[48px] text-sm sm:text-base"
                  aria-label="Ver o que você vai aprender"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                  Ver Conteúdo Grátis
                </Button>
              </a>
            </div>
          </FadeIn>

          {/* Social Proof */}
          <FadeIn delay={0.6} direction="up">
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-amber-100">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-amber-500 to-stone-700 border-2 border-stone-900 flex items-center justify-center text-xs font-bold"
                >
                  🎲
                </div>
              ))}
            </div>
            <p className="text-center">
              <strong className="text-amber-300">+2.500</strong> jogadores já narrando histórias incríveis
            </p>
          </div>
          </FadeIn>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:flex">
        <div className="flex flex-col items-center gap-2">
          <span className="text-amber-300 text-xs font-semibold"><br />Role para explorar</span>
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}

'use client';

import Container from '@/components/ui/Container';
import Card, { CardContent } from '@/components/ui/Card';
import FadeIn from '@/components/animations/FadeIn';
import Button from '@/components/ui/Button';
import { ReactNode } from 'react';

const testimonials: { id: string; name: string; role: string; company: string; content: ReactNode; rating: number }[] = [
  {
    id: '1',
    name: 'Rafael Silva',
    role: 'Mestre há 2 anos',
    company: '@rafaelrpg',
    content: (
      <>Antes minhas campanhas duravam <strong className="text-amber-300 not-italic">3 sessões</strong> e morriam. Depois do curso, minha mesa está na <strong className="text-amber-300 not-italic">15ª sessão</strong> e os players pedindo mais. A técnica de plot twists mudou tudo!</>
    ),
    rating: 5,
  },
  {
    id: '2',
    name: 'Mariana Costa',
    role: 'Jogadora que virou Mestre',
    company: 'D&D 5e',
    content: (
      <>Eu tinha medo de mestrar. Achava que não era criativa o suficiente. O módulo de improviso me deu confiança. Hoje <strong className="text-amber-300 not-italic">mestro 2 mesas</strong> e meus amigos dizem que sou <strong className="text-amber-300 not-italic">melhor que Netflix!</strong></>
    ),
    rating: 5,
  },
  {
    id: '3',
    name: 'Lucas Mendes',
    role: 'Jogador de RPG',
    company: 'Player',
    content: (
      <>Meu DM fez o curso e a diferença foi <strong className="text-amber-300 not-italic">ABSURDA</strong>. Os NPCs agora têm profundidade, as missões fazem sentido. A gente <strong className="text-amber-300 not-italic">chora, ri, vibra</strong>. Melhor investimento que ele já fez.</>
    ),
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section 
      id="depoimentos" 
      className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-stone-800 to-stone-900 text-white"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        {/* Section Header */}
        <FadeIn delay={0.1} direction="up">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-amber-400 font-semibold text-xs sm:text-sm tracking-wider uppercase">
              🌟 Histórias de Sucesso
            </span>
          </div>
          <h2 
            id="testimonials-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-amber-50"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            Mestres que Evoluíram
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-amber-100 max-w-2xl mx-auto">
            Veja como outros jogadores transformaram suas mesas em experiências inesquecíveis.
          </p>
        </div>
        </FadeIn>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={0.2 + index * 0.15} direction="up">
            <Card variant="elevated" className="h-full w-full bg-stone-700/50 backdrop-blur border-amber-600/30 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300">
              <CardContent className="p-5 sm:p-6 flex flex-col h-full">
                {/* Rating Stars */}
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-amber-50 mb-4 sm:mb-6 flex-grow italic text-sm sm:text-base leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-amber-600 to-stone-700 flex items-center justify-center text-white font-bold text-base sm:text-lg mr-3 sm:mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-amber-100 text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-amber-300">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            </FadeIn>
          ))}
        </div>

        {/* CTA Bridge */}
        <FadeIn delay={0.7} direction="up">
          <div className="mt-10 sm:mt-14 text-center px-4">
            <p className="text-amber-200 mb-4 text-base sm:text-lg">Junte-se a <strong className="text-amber-300">+2.500 mestres</strong> que já evoluíram</p>
            <a href="#planos">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-stone-900 font-bold border-2 border-amber-400 shadow-lg shadow-amber-900/30 min-h-[48px]"
              >
                ⚔️ Garantir Minha Vaga
                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Button>
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

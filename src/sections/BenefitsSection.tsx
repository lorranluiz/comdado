'use client';

import Container from '@/components/ui/Container';
import Card, { CardContent } from '@/components/ui/Card';
import FadeIn from '@/components/animations/FadeIn';
import Button from '@/components/ui/Button';

const benefits = [
  {
    id: '1',
    title: 'Estrutura de 3 Atos',
    description: 'Domine a arquitetura narrativa que Hollywood usa. Início impactante, meio envolvente, final inesquecível.',
    icon: '📖',
    color: 'from-amber-600 to-yellow-600',
  },
  {
    id: '2',
    title: 'Criação de Personagens',
    description: 'NPCs memoráveis com motivações reais. Vilões complexos que seus jogadores vão amar odiar.',
    icon: '🎭',
    color: 'from-emerald-600 to-green-700',
  },
  {
    id: '3',
    title: 'Worldbuilding Profundo',
    description: 'Construa mundos vivos e respirantes. Culturas, histórias e segredos que explodem na mesa.',
    icon: '🗺️',
    color: 'from-stone-600 to-amber-700',
  },
  {
    id: '4',
    title: 'Ritmo & Tensão',
    description: 'Aprenda quando acelerar, quando frear. Mantenha seus jogadores na ponta da cadeira.',
    icon: '⚡',
    color: 'from-orange-600 to-red-600',
  },
  {
    id: '5',
    title: 'Improviso Criativo',
    description: 'Nunca mais trave quando os players saírem do roteiro. Técnicas para improvisar como um profissional.',
    icon: '🎲',
    color: 'from-purple-600 to-indigo-700',
  },
  {
    id: '6',
    title: 'Comunidade Ativa',
    description: 'Grupo exclusivo de Mestres. Troca de ideias, feedback e amizades que duram uma vida.',
    icon: '🏰',
    color: 'from-blue-600 to-cyan-700',
  },
];

export default function BenefitsSection() {
  return (
    <section 
      id="beneficios" 
      className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-slate-100"
      aria-labelledby="benefits-heading"
    >
      <Container>
          {/* Section Header - INTERESSE */}
          <FadeIn direction="up" delay={0.1}>
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4">
            <div className="inline-block mb-3 sm:mb-4">
              <span className="text-amber-700 font-semibold text-xs sm:text-sm tracking-wider uppercase">
                📚 O Que Você Vai Dominar
              </span>
            </div>
            <h2 
              id="benefits-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-slate-900"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Do Zero ao Mestre da Narrativa
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Módulos práticos que transformam jogadores comuns em Mestres de RPG respeitados.
            </p>
          </div>
          </FadeIn>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4">
            {benefits.map((benefit, index) => (
              <FadeIn key={benefit.id} delay={0.2 + index * 0.1} direction="up">
              <Card
                variant="elevated"
                className="w-full hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <CardContent className="p-5 sm:p-6 md:p-8">
                  {/* Icon with gradient background */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300`}>
                    <span className="text-2xl sm:text-3xl" role="img" aria-label={benefit.title}>
                      {benefit.icon}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-gray-900 transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
              </FadeIn>
            ))}
          </div>

          {/* Trust Badge */}
          <FadeIn delay={0.8} direction="up">
          <div className="mt-10 sm:mt-12 md:mt-16 text-center px-4">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full border-2 border-amber-300">
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs sm:text-sm font-semibold text-slate-800">
                ⚔️ Certificado de Conclusão • Acesso Vitalício
              </span>
            </div>
          </div>
          </FadeIn>

          {/* CTA Bridge */}
          <FadeIn delay={0.9} direction="up">
            <div className="mt-10 sm:mt-14 text-center px-4">
              <p className="text-slate-600 mb-4 text-base sm:text-lg">Pronto para transformar suas sessões?</p>
              <a href="#planos">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-stone-900 font-bold border-2 border-amber-400 shadow-lg shadow-amber-500/20 min-h-[48px]"
                >
                  ⚔️ Ver Planos e Garantir Vaga
                  <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Button>
              </a>
            </div>
          </FadeIn>
      </Container>
    </section>
  );
}

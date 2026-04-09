'use client';

import Container from '@/components/ui/Container';
import Card, { CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';

const pricingPlans = [
  {
    id: '1',
    name: 'Iniciante',
    price: 0,
    originalPrice: 0,
    period: 'para sempre',
    description: 'Experimente sem compromisso',
    features: [
      '3 aulas completas liberadas',
      'Guia de criação de personagens',
      'Acesso à comunidade Discord',
      'Certificado digital',
    ],
    cta: 'Começar Grátis →',
    highlighted: false,
  },
  {
    id: '2',
    name: 'Mestre',
    price: 197,
    originalPrice: 397,
    period: 'pagamento único',
    description: 'O mais escolhido pelos Mestres',
    features: [
      'Todas as 40+ aulas em vídeo',
      '🎁 Bônus: 20 aventuras prontas',
      '🎁 Planilhas e templates exclusivos',
      'Suporte prioritário vitalício',
      'Grupo VIP no Telegram',
      'Atualizações gratuitas para sempre',
    ],
    cta: '⚔️ Garantir Minha Vaga',
    highlighted: true,
  },
  {
    id: '3',
    name: 'Lendário',
    price: 497,
    originalPrice: 997,
    period: 'pagamento único',
    description: 'Para quem quer ir além',
    features: [
      'Tudo do plano Mestre',
      '3 sessões de mentoria 1-on-1',
      'Análise detalhada da sua campanha',
      'Acesso antecipado a conteúdos',
      'Certificado físico assinado',
      '🛡️ Garantia 30 dias incondicional',
    ],
    cta: '👑 Virar Lenda',
    highlighted: false,
  },
];

export default function PricingSection() {

  return (
    <section 
      id="planos" 
      className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white"
      aria-labelledby="pricing-heading"
    >
      <Container>
        {/* Section Header */}
        <FadeIn delay={0.1} direction="up">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-amber-700 font-semibold text-xs sm:text-sm tracking-wider uppercase">
              💰 Invista em Suas Habilidades
            </span>
          </div>
          <h2 
            id="pricing-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-slate-900"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            Escolha Seu Caminho
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-6 sm:mb-8">
            Do gratuito ao lendário. Todos os planos incluem acesso vitalício.
          </p>

          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-red-700">🔥 Turma de Abril — restam poucas vagas</span>
          </div>
        </div>
        </FadeIn>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4">
          {pricingPlans.map((plan, index) => (
            <FadeIn key={plan.id} delay={0.2 + index * 0.15} direction="up">
            <Card
              variant={plan.highlighted ? 'elevated' : 'bordered'}
              className={`relative w-full hover:scale-[1.03] transition-transform duration-300 ${
                plan.highlighted
                  ? 'ring-2 ring-amber-500 scale-105 shadow-xl shadow-amber-500/10'
                  : ''
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-600 to-yellow-600 text-white text-sm font-bold px-4 py-1 rounded-full border-2 border-amber-400 shadow-lg">
                  ⭐ Mais Escolhido
                </div>
              )}

              <CardHeader>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 mt-1">{plan.description}</p>
                <div className="mt-3 sm:mt-4">
                  {plan.originalPrice > 0 && (
                    <div className="mb-1">
                      <span className="text-base sm:text-lg text-gray-400 line-through">R${plan.originalPrice}</span>
                      <span className="ml-2 text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                        {Math.round((1 - plan.price / plan.originalPrice) * 100)}% OFF
                      </span>
                    </div>
                  )}
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                    {plan.price === 0 ? 'Grátis' : `R$${plan.price}`}
                  </span>
                  {plan.price > 0 && (
                    <span className="text-sm sm:text-base text-gray-600 ml-1">/{plan.period}</span>
                  )}
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-sm sm:text-base text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  fullWidth
                  size="lg"
                  variant={plan.highlighted ? 'primary' : 'outline'}
                  className="min-h-[48px] text-sm sm:text-base"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
            </FadeIn>
          ))}
        </div>

        {/* Trust Signals */}
        <FadeIn delay={0.7} direction="up">
        <div className="text-center mt-10 sm:mt-14 space-y-4 px-4">
          <p className="text-base sm:text-lg text-slate-700 font-semibold">
            🛡️ Garantia incondicional de 30 dias. Não gostou? Devolvemos 100% do seu investimento.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Acesso imediato
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Pagamento 100% seguro
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Sem mensalidades
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Acesso vitalício
            </span>
          </div>
        </div>
        </FadeIn>
      </Container>
    </section>
  );
}

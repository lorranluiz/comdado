'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import Container from '@/components/ui/Container';
import Card, { CardContent } from '@/components/ui/Card';

const features = [
  {
    id: '1',
    title: 'Análise em Tempo Real',
    description: 'Dashboards interativos com atualização instantânea dos seus dados.',
    icon: '⚡',
  },
  {
    id: '2',
    title: 'Segurança Avançada',
    description: 'Criptografia de ponta a ponta e conformidade com LGPD.',
    icon: '🔒',
  },
  {
    id: '3',
    title: 'Integração Fácil',
    description: 'Conecte com suas ferramentas favoritas em poucos minutos.',
    icon: '🔌',
  },
  {
    id: '4',
    title: 'Inteligência Artificial',
    description: 'IA que identifica padrões e sugere ações estratégicas.',
    icon: '🤖',
  },
  {
    id: '5',
    title: 'Relatórios Personalizados',
    description: 'Crie relatórios sob medida com drag-and-drop intuitivo.',
    icon: '📊',
  },
  {
    id: '6',
    title: 'Suporte Premium',
    description: 'Equipe especializada disponível 24/7 para ajudar você.',
    icon: '💬',
  },
];

export default function FeaturesSection() {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section id="beneficios" className="py-20 md:py-32 bg-gray-50">
      <Container>
        <div
          ref={elementRef}
          className={`transition-all duration-1000 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              Por que escolher o ComDado?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Recursos poderosos para transformar dados em resultados reais.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.id}
                variant="elevated"
                className={`transition-all duration-500 hover:scale-105 ${
                  isIntersecting
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

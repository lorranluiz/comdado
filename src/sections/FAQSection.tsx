'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import { cn } from '@/utils/cn';
import FadeIn from '@/components/animations/FadeIn';

const faqs = [
  {
    id: '1',
    question: 'Nunca mestrei antes. O curso é pra mim?',
    answer: 'COM CERTEZA! O curso começa do zero absoluto. Ensinamos desde "como preparar a primeira sessão" até técnicas avançadas de improviso e worldbuilding. 60% dos alunos nunca tinham mestrado antes.',
  },
  {
    id: '2',
    question: 'Funciona para qualquer sistema de RPG?',
    answer: 'SIM! As técnicas de narrativa funcionam em D&D, Ordem Paranormal, Tormenta, Cthulhu, GURPS, Vampiro, ou qualquer sistema. Ensinamos a ESTRUTURA por trás de boas histórias, não regras específicas.',
  },
  {
    id: '3',
    question: 'Quanto tempo leva pra concluir?',
    answer: 'Você vai no seu ritmo! A maioria dos alunos conclui em 4-6 semanas assistindo 30min por dia. Mas o acesso é VITALÍCIO, então pode levar o tempo que quiser.',
  },
  {
    id: '4',
    question: 'Tem garantia?',
    answer: 'Garantia TOTAL de 30 dias. Se por qualquer motivo você não gostar, devolvemos 100% do valor. Sem perguntas, sem complicação. Queremos alunos satisfeitos, não prisioneiros.',
  },
  {
    id: '5',
    question: 'Como funciona o acesso?',
    answer: 'Após a compra, você recebe login e senha na hora. Acessa por computador, celular ou tablet. As aulas ficam disponíveis 24/7 pra sempre. Zero mensalidades, zero surpresas.',
  },
  {
    id: '6',
    question: 'Vocês dão suporte?',
    answer: 'SEMPRE! Todos os alunos entram no grupo VIP do Telegram onde tiramos dúvidas, damos feedback em campanhas e trocamos ideias. Respondemos em até 24h (geralmente muito rápido).',
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      id="faq" 
      className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white"
      aria-labelledby="faq-heading"
    >
      <Container>
        <div className="max-w-3xl mx-auto px-4">
          {/* Section Header */}
          <FadeIn delay={0.1} direction="up">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="inline-block mb-3 sm:mb-4">
              <span className="text-amber-700 font-semibold text-xs sm:text-sm tracking-wider uppercase">
                📜 Dúvidas Comuns
              </span>
            </div>
            <h2 
              id="faq-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Perguntas Frequentes
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Tudo o que você precisa saber antes de começar
            </p>
          </div>
          </FadeIn>

          {/* FAQ Items */}
          <FadeIn delay={0.3} direction="up">
          <div className="space-y-4" role="list">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-200 transition-colors"
                role="listitem"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  aria-expanded={openId === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <svg
                    className={cn(
                      'w-5 h-5 text-gray-500 transition-transform flex-shrink-0 duration-300',
                      {
                        'rotate-180': openId === faq.id,
                      }
                    )}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div
                  id={`faq-answer-${faq.id}`}
                  className={cn(
                    'px-6 overflow-hidden transition-all duration-300',
                    {
                      'max-h-0': openId !== faq.id,
                      'max-h-96 py-4 border-t border-gray-100': openId === faq.id,
                    }
                  )}
                  role="region"
                  aria-hidden={openId !== faq.id}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          </FadeIn>

          {/* Contact CTA */}
          <FadeIn delay={0.5} direction="up">
          <div className="mt-12 text-center p-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border-2 border-amber-200 hover:shadow-lg hover:border-amber-300 transition-all duration-300">
            <p className="text-gray-700 mb-4 font-medium">
              Não encontrou a resposta no grimoório?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-semibold transition-colors group"
            >
              🧙 Convocar um Mestre
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

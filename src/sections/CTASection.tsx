'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { isValidEmail } from '@/utils/validation';
import FadeIn from '@/components/animations/FadeIn';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email é obrigatório');
      return;
    }
    
    if (!isValidEmail(email)) {
      setError('Por favor, insira um email válido');
      return;
    }

    // Simulate API call
    setIsLoading(true);
    setError('');
    
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      setEmail('');
      
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section 
      className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-600/10 rounded-full blur-3xl" />
      </div>
      <Container>
        <FadeIn delay={0.1} direction="up">
        <div className="max-w-3xl mx-auto text-center relative z-10 px-4">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-amber-400 font-semibold text-xs sm:text-sm tracking-wider uppercase">
              ⚔️ Última Chance
            </span>
          </div>
          <h2 
            id="cta-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            Suas Próximas Sessões Serão Diferentes
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-amber-100 leading-relaxed">
            Imagine seus jogadores totalmente imersos, rindo, chorando, vibrando com cada plot twist.
            <br className="hidden sm:block" />
            <strong className="text-amber-300 block mt-2 sm:inline sm:mt-0">Isso começa hoje. Agora.</strong>
          </p>

          {/* Primary CTA - Direct to pricing */}
          <div className="mb-6 sm:mb-8">
            <a href="#planos">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-stone-900 font-bold border-2 border-amber-400 shadow-lg shadow-amber-900/30 min-h-[52px] text-base sm:text-lg px-8"
              >
                ⚔️ Escolher Meu Plano
                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Button>
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 max-w-md mx-auto mb-6 sm:mb-8">
            <div className="flex-1 h-px bg-amber-500/30"></div>
            <span className="text-xs sm:text-sm text-amber-300/70 font-medium">ou receba aulas grátis</span>
            <div className="flex-1 h-px bg-amber-500/30"></div>
          </div>

          {/* Email Form */}
          {success ? (
            <div 
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg inline-flex items-center gap-2 animate-fade-in border-2 border-green-400 shadow-lg text-sm sm:text-base"
              role="alert"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              ✨ Sucesso! Você receberá o acesso em instantes. Confira seu email!
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto"
            >
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Digite seu melhor email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={error}
                  className="bg-white w-full min-h-[48px] text-sm sm:text-base"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                variant="secondary"
                disabled={isLoading}
                className="min-w-full sm:min-w-[200px] bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-stone-900 font-bold border-2 border-amber-400 shadow-lg min-h-[48px] text-sm sm:text-base"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Aguarde...
                  </>
                ) : (
                  '📚 Quero Acesso Agora'
                )}
              </Button>
            </form>
          )}

          <p className="text-xs sm:text-sm text-amber-200 mt-3 sm:mt-4">
            🛡️ 30 dias de garantia total • Acesso imediato • Cancele quando quiser
          </p>
        </div>
        </FadeIn>
      </Container>
    </section>
  );
}

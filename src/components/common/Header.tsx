'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/utils/cn';
import Container from '../ui/Container';
import Button from '../ui/Button';

const navLinks = [
  { label: 'O Curso', href: '#beneficios' },
  { label: 'Planos', href: '#planos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();

  const isScrolled = scrollPosition > 20;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        {
          'bg-stone-900/95 backdrop-blur-sm shadow-lg border-b border-amber-600/30': isScrolled,
          'bg-transparent': !isScrolled,
        }
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className={cn('text-2xl font-bold transition-colors flex items-center gap-2', {
              'text-amber-500': isScrolled,
              'text-amber-400': !isScrolled,
            })}
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/comdado_logo.jpeg`} alt="ComDado RPG" width={36} height={36} className="rounded-full border-2 border-amber-500/60" /> ComDado
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-medium transition-colors hover:text-amber-400 text-sm sm:text-base',
                  {
                    'text-stone-200': isScrolled,
                    'text-stone-800': !isScrolled,
                  }
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" variant={isScrolled ? 'primary' : 'outline'} className={cn({
              'bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-stone-900 border-amber-400 font-bold': isScrolled,
              'border-amber-600 text-amber-700 hover:bg-amber-600/20': !isScrolled,
            })}>
              📚 Entrar no Curso
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={cn('w-full h-0.5 transition-all', {
                  'bg-amber-500': isScrolled,
                  'bg-amber-300': !isScrolled,
                })}
              />
              <span
                className={cn('w-full h-0.5 transition-all', {
                  'bg-amber-500': isScrolled,
                  'bg-amber-300': !isScrolled,
                })}
              />
              <span
                className={cn('w-full h-0.5 transition-all', {
                  'bg-amber-500': isScrolled,
                  'bg-amber-300': !isScrolled,
                })}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-500/20 bg-stone-900/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-amber-100 hover:text-amber-400 font-medium transition-colors py-2 text-base min-h-[44px] flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                fullWidth 
                className="bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-900 font-bold min-h-[48px] mt-2"
              >
                ⚔️ Começar Agora
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}

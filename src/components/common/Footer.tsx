'use client';

import Link from 'next/link';
import Container from '../ui/Container';

const footerLinks = {
  product: [
    { label: 'O Curso', href: '#beneficios' },
    { label: 'Planos', href: '#planos' },
    { label: 'Depoimentos', href: '#depoimentos' },
  ],
  company: [
    { label: 'Instagram', href: 'https://www.instagram.com/comdadorpg/' },
    { label: 'Contato', href: 'mailto:contato@comdadorpg.com' },
    { label: 'FAQ', href: '#faq' },
  ],
  legal: [
    { label: 'Privacidade', href: '#privacidade' },
    { label: 'Termos de Uso', href: '#termos' },
  ],
};

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/comdadorpg/', icon: '📸' },
  { label: 'YouTube', href: '#', icon: '🎥' },
  { label: 'Discord', href: '#', icon: '🎮' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-stone-900 to-black text-white border-t border-amber-600/30">
      <Container>
        <div className="py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8 px-4 sm:px-0">
            {/* Brand Column */}
            <div className="col-span-1 sm:col-span-2 md:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-amber-500" style={{ fontFamily: 'var(--font-cinzel)' }}>
                🎲 ComDado RPG
              </h3>
              <p className="text-sm sm:text-base text-amber-100 mb-3 sm:mb-4">
                Domine a arte de narrar histórias épicas.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-stone-800 border border-amber-600/40 flex items-center justify-center hover:bg-amber-600/20 hover:border-amber-500 transition-colors text-lg sm:text-xl"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-amber-400 text-sm sm:text-base">Navegue</h4>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-amber-100 hover:text-amber-400 transition-colors text-sm sm:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-amber-400 text-sm sm:text-base">Comunidade</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-100 hover:text-amber-400 transition-colors text-sm sm:text-base"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-amber-400 text-sm sm:text-base">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-amber-100 hover:text-amber-400 transition-colors text-sm sm:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 sm:pt-8 border-t border-stone-800 text-center px-4 sm:px-0 space-y-3">
            <p className="text-xs sm:text-sm text-amber-100">&copy; {new Date().getFullYear()} ComDado RPG. Narrativas que marcam. 🎲</p>
            <p className="text-[11px] sm:text-xs text-stone-500">
              Desenvolvido por{' '}
              <a 
                href="mailto:lorranluiz.neki@gmail.com" 
                className="text-stone-400 hover:text-amber-400 transition-colors"
              >
                Lorran Luiz Desenvolvimento de Sistemas
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

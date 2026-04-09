# Componentes da Landing Page - ComDado

## 📁 Estrutura de Componentes

### Seções Principais (`src/sections/`)

Todos os componentes de seção são totalmente responsivos, acessíveis (WCAG 2.1) e otimizados para conversão.

#### 1. **HeroSection** 
- **Localização:** `src/sections/HeroSection.tsx`
- **Propósito:** Primeira impressão e captura de atenção
- **Características:**
  - Headline impactante com gradiente
  - 2 CTAs principais (primário e secundário)
  - Badge de novidades com animação pulse
  - Social proof (5.000+ empresas)
  - Scroll indicator animado
  - Background com padrão de grid
- **Responsividade:** Mobile-first, adapta texto de 4xl → 7xl
- **Acessibilidade:** ARIA labels, semantic HTML

#### 2. **BenefitsSection** (anteriormente FeaturesSection)
- **Localização:** `src/sections/BenefitsSection.tsx`
- **Propósito:** Demonstrar valor e benefícios do produto
- **Características:**
  - 6 benefícios em grid responsivo
  - Ícones com gradientes coloridos únicos
  - Animações de entrada escalonadas (stagger)
  - Hover effects com scale
  - Badge de certificação (ISO 27001, LGPD)
  - Intersection Observer para animações on-scroll
- **Responsividade:** 1 col (mobile) → 2 cols (tablet) → 3 cols (desktop)
- **UX:** Feedback visual em hover, transições suaves

#### 3. **TestimonialsSection**
- **Localização:** `src/sections/TestimonialsSection.tsx`
- **Propósito:** Prova social e credibilidade
- **Características:**
  - 3 depoimentos de clientes brasileiros
  - Sistema de avaliação com estrelas (5/5)
  - Avatar com iniciais
  - Layout em card elevado
- **Responsividade:** Stack vertical (mobile) → Grid 3 colunas (desktop)
- **Dados:** Nome, cargo, empresa, depoimento

#### 4. **PricingSection**
- **Localização:** `src/sections/PricingSection.tsx`
- **Propósito:** Conversão e escolha de plano
- **Características:**
  - 3 planos (Inicial, Profissional, Enterprise)
  - Toggle mensal/anual com desconto de 20%
  - Plano "Mais Popular" destacado
  - Preços em R$ (Reais)
  - Lista de recursos com checkmarks
  - CTAs diferenciados por plano
- **Responsividade:** Stack (mobile) → Grid 3 colunas (desktop)
- **Estados:** Mensal/Anual, hover, focus
- **Acessibilidade:** ARIA-pressed para toggle

#### 5. **FAQSection**
- **Localização:** `src/sections/FAQSection.tsx`
- **Propósito:** Reduzir atrito e responder objeções
- **Características:**
  - 6 perguntas frequentes em acordeão
  - Animações de abertura/fechamento suaves
  - CTA de contato para dúvidas adicionais
  - Ícones de seta com rotação
- **Responsividade:** 100% largura com max-width
- **Acessibilidade:** 
  - aria-expanded
  - aria-controls
  - aria-hidden
  - keyboard navigation
  - focus indicators

#### 6. **CTASection**
- **Localização:** `src/sections/CTASection.tsx`
- **Propósito:** Conversão final - captura de leads
- **Características:**
  - Formulário de email com validação
  - Estados: idle, loading, success, error
  - Spinner animado durante loading
  - Feedback visual de sucesso
  - Background gradiente azul→roxo
- **Validação:** Email format check
- **UX:** 
  - Loading state (1.5s simulado)
  - Success message (5s auto-hide)
  - Error inline com mensagem clara

---

## 🎨 Componentes UI Reutilizáveis (`src/components/ui/`)

### Button
- **Variantes:** primary, secondary, outline, ghost
- **Tamanhos:** sm, md, lg
- **Props:** fullWidth, disabled
- **Acessibilidade:** Focus indicators, disabled states

### Card
- **Variantes:** default, bordered, elevated
- **Sub-componentes:** CardHeader, CardContent, CardFooter
- **Uso:** Testemunhos, benefícios, planos

### Container
- **Tamanhos:** sm, md, lg, xl, full
- **Comportamento:** Responsivo com padding automático
- **Max-width:** Centralizado com margem automática

### Input
- **Props:** label, error, helperText
- **Estados:** normal, error, disabled
- **Validação:** Visual feedback de erro

---

## 🎯 Componentes Comuns (`src/components/common/`)

### Header
- **Tipo:** Fixed/Sticky
- **Características:**
  - Transparente no topo, branco ao scroll
  - Logo "ComDado"
  - 4 links de navegação
  - CTA destacado
  - Menu mobile hamburger
- **Estados:** scrolled/not-scrolled
- **Responsividade:** Desktop menu → Mobile drawer

### Footer
- **Seções:** 
  - Marca + Social links
  - Links de Produto
  - Links de Empresa
  - Links Legais
- **Copyright:** Dinâmico com ano atual
- **Redes sociais:** Twitter, LinkedIn, GitHub

---

## 🔧 Hooks Customizados (`src/hooks/`)

### useIntersectionObserver
- **Uso:** Animações on-scroll (BenefitsSection)
- **Props:** threshold, root, rootMargin
- **Retorna:** ref, isIntersecting

### useScrollPosition
- **Uso:** Header transparente/sólido
- **Retorna:** scrollPosition (number)

### useMediaQuery
- **Uso:** Detecção de breakpoints
- **Props:** query string
- **Retorna:** matches (boolean)

---

## 🎨 Guia de UX/UI

### Responsividade
- **Mobile-First:** Todos os componentes começam mobile
- **Breakpoints:**
  - `sm`: 640px (mobile landscape)
  - `md`: 768px (tablet)
  - `lg`: 1024px (desktop)
  - `xl`: 1280px (large desktop)

### Acessibilidade (WCAG 2.1)
- ✅ Semantic HTML (section, header, footer, nav)
- ✅ ARIA labels e roles
- ✅ Keyboard navigation
- ✅ Focus indicators visíveis
- ✅ Color contrast ratio > 4.5:1
- ✅ Reduced motion support

### Animações
- **Entrada:** fade-in, slide-up
- **Hover:** scale, color transitions
- **Loading:** spinner rotation
- **Duração:** 300-500ms (smooth)
- **Respeitam:** prefers-reduced-motion

### Performance
- ✅ Lazy loading via Intersection Observer
- ✅ Client components apenas quando necessário
- ✅ Otimização de animações (transform/opacity)
- ✅ No layout shift (CLS)

---

## 📱 Ordem das Seções

1. **Hero** - Captura atenção
2. **Benefits** - Demonstra valor
3. **Testimonials** - Prova social
4. **Pricing** - Conversão primária
5. **FAQ** - Remove objeções
6. **CTA** - Última chance de conversão

Esta ordem segue as melhores práticas de conversion-driven design.

---

## 🚀 Como Usar

```tsx
import { HeroSection, BenefitsSection, TestimonialsSection } from '@/sections';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      {/* ... */}
    </main>
  );
}
```

Todos os componentes são autocontidos e podem ser reordenados conforme necessário.

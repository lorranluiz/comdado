# 🎲 Tema RPG - ComDado Landing Page

## 🎨 Paleta de Cores

### Cores Primárias
```css
/* Dourado/Amarelo - Elementos de destaque (CTAs, badges) */
--amber-300: #fcd34d
--amber-400: #fbbf24  ← Ouro principal
--amber-500: #f59e0b
--yellow-400: #facc15
--yellow-500: #eab308

/* Roxo/Púrpura - Místico e elegante */
--purple-100: #f3e8ff
--purple-200: #e9d5ff
--purple-300: #d8b4fe
--purple-500: #a855f7
--purple-600: #9333ea
--purple-900: #581c87  ← Background escuro

/* Ardósia - Base profissional */
--slate-50: #f8fafc
--slate-900: #0f172a   ← Background principal
--black: #000000
```

### Cores Secundárias (Habilidades)
```css
/* Cada habilidade tem seu gradiente único */
Visão Estratégica: purple-500 → indigo-600
Escudo: emerald-500 → teal-600
Portal: cyan-500 → blue-600
Poder IA: amber-500 → orange-600
Grimório: rose-500 → pink-600
Guilda: violet-500 → purple-600
```

### Cores de Estado
```css
/* Sucesso */
--green-500: #22c55e
--emerald-500: #10b981

/* Atenção/Energia */
--amber-400: #fbbf24 (pulso, badges)

/* Informação */
--blue-500: #3b82f6
```

---

## 📝 Tipografia

### Fontes Utilizadas

#### 1. **Cinzel** (Headings)
- **Uso:** Títulos principais, seções, CTAs importantes
- **Weights:** 400, 600, 700
- **Características:** 
  - Serifada elegante
  - Reminiscente de épocas medievais/clássicas
  - Transmite autoridade e épica
- **Variável CSS:** `--font-cinzel`
- **Aplicação:**
  ```jsx
  style={{ fontFamily: 'var(--font-cinzel)' }}
  ```

**Exemplos de uso:**
- Hero headline: "Embarque na Jornada de Transformação de Dados"
- Section titles: "Poderes que Você Adquire"
- Logo: "🎲 ComDado"

#### 2. **Inter** (Body)
- **Uso:** Corpo de texto, parágrafos, descrições
- **Características:**
  - Sans-serif moderna e legível
  - Ótima para leitura em tela
  - Mantém profissionalismo
- **Variável CSS:** `--font-inter`
- **Classe padrão:** `font-sans`

---

## 🎯 Linguagem RPG Aplicada

### Glossário de Termos

| Termo Tradicional | Termo RPG | Contexto |
|-------------------|-----------|----------|
| Planos | Classes/Pactos | Inicial → Aprendiz, Pro → Guerreiro, Enterprise → Lendário |
| Recursos/Features | Habilidades/Poderes | Análise → Visão Estratégica |
| Período de teste | Missão/Quest de teste | 14 dias de aventura gratuita |
| Usuários | Aventureiros/Heróis | +5.000 aventureiros evoluindo |
| Começar | Iniciar Missão/Aceitar Quest | CTAs principais |
| Suporte | Guilda/Mestres | Equipe de suporte → Guilda |
| Projetos | Quests | Até 3 quests (projetos) |
| Armazenamento | Baú (mágico/infinito) | 1 GB no baú |
| Integração | Portal | Portal de Integração |
| Upgrade | Evoluir/Nível Up | Evoluir Agora |
| FAQ | Grimório de Sabedoria | Consulte o grimório |
| Cliente | Herói/Lenda | Crônicas dos Heróis |
| Cadastro | Embarcar/Aceitar | Aceitar Quest |

### Seções Renomeadas

1. **Hero Section**
   - Badge: "⚔️ Nova Quest Disponível"
   - CTA: "🎯 Iniciar Missão" + "Explorar Demo"
   - Social Proof: "+5.000 aventureiros já evoluindo"

2. **Benefits Section**
   - Título: "🗡️ Habilidades Desbloqueáveis"
   - Headline: "Poderes que Você Adquire"
   - Badge: "🏆 Certificado ISO 27001 • Selo LGPD"

3. **Testimonials**
   - Título: "🌟 Crônicas dos Heróis"
   - Headline: "Lendas que Evoluíram"
   - Depoimentos adaptados com linguagem de níveis/evolução

4. **Pricing**
   - Título: "💰 Escolha Sua Classe"
   - Headline: "Pactos de Evolução"
   - Planos: Aprendiz, Guerreiro (⭐ Mais Escolhido), Lendário

5. **FAQ**
   - Título: "📜 Grimório de Sabedoria"
   - Headline: "Questões Frequentes"
   - CTA: "🧙 Convocar um Mestre"

6. **CTA Final**
   - Badge: "⚔️ Última Quest"
   - Headline: "Pronto para a Aventura?"
   - Button: "🎯 Aceitar Quest"
   - Footer: "🎮 Sem moedas necessárias • 14 dias de aventura gratuita"

---

## 🎮 Elementos Gamificados

### 1. Barra de Progresso (ProgressBar)
- **Localização:** Fixed top (abaixo do header)
- **Níveis:** 5 níveis baseados no scroll
  1. Iniciante ⚔️ (0-20%)
  2. Explorador 🗺️ (20-40%)
  3. Aventureiro 🎯 (40-60%)
  4. Especialista ⭐ (60-80%)
  5. Mestre 👑 (80-100%)

- **Características:**
  - Gradiente dinâmico por nível
  - Animação shimmer (brilho)
  - Display de XP (%
  - Próximo nível indicado
  - Efeito glow ao progredir

### 2. Badges e Ícones
- **Emojis estratégicos:**
  - ⚔️ Missões/CTAs
  - 🎲 Logo (dado épico)
  - 🔮 Visão/Analytics
  - 🛡️ Segurança
  - ⚡ Poder/Velocidade
  - 📜 Documentação
  - 🎭 Suporte/Guilda
  - 👑 Nível máximo
  - ⭐ Destaque
  - 🎯 Objetivo/CTA
  - 🌀 Integração/Portal
  - 🏆 Certificação

### 3. Animações
```css
/* Animações existentes */
animate-pulse: badges, destaques
animate-bounce: scroll indicator
animate-glow-pulse: headline principal
animate-shimmer: barra de progresso
animate-fade-in: entradas suaves

/* Efeitos visuais */
- Partículas flutuantes no hero
- Gradientes animados
- Hover effects com scale
- Transições suaves (300-500ms)
```

---

## 🎨 Gradientes Temáticos

### Backgrounds
```css
/* Hero/CTA */
from-slate-900 via-purple-900 to-slate-900

/* Testimonials */
from-slate-900 to-purple-900

/* Benefits */
from-slate-50 to-slate-100

/* FAQ */
from-slate-50 to-white

/* Progress Bar */
from-slate-900/95 to-slate-900/80 + backdrop-blur
```

### Botões e CTAs
```css
/* CTA Principal (Dourado) */
from-amber-500 to-yellow-500
hover: from-amber-600 to-yellow-600
border: amber-300
text: slate-900

/* CTA Secundário (Outline) */
border: amber-400
text: amber-100
hover: bg-amber-500/10
```

### Cards de Habilidades
```css
/* Cada card tem gradiente único no ícone */
w-16 h-16 rounded-2xl bg-gradient-to-br {color}
hover: scale-110 + shadow-xl
```

---

## 📐 Componentes Chave

### ProgressBar Component
```tsx
Localização: src/components/common/ProgressBar.tsx
Props: Nenhuma (usa hook useScrollPosition)
Features:
- 5 níveis de progressão
- Animação shimmer
- Indicador de próximo nível
- Responsivo
```

### Fontes (Layout)
```tsx
// layout.tsx
import { Inter, Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cinzel",
});
```

---

## 🎯 Princípios de Design

### 1. Profissionalismo Mantido
- ✅ Cores sóbrias (slate, purple)
- ✅ Tipografia elegante (Cinzel)
- ✅ Não infantil (sem cartoon/chibi)
- ✅ Ícones discretos (emojis pequenos)

### 2. Épico e Aspiracional
- ✅ Linguagem de conquista
- ✅ Progressão visível
- ✅ Senso de evolução
- ✅ Gamificação sutil

### 3. Conversão Otimizada
- ✅ CTAs destacados (dourado)
- ✅ Hierarquia clara
- ✅ Progressão guiada
- ✅ Social proof adaptado

---

## 📱 Responsividade

Todos os elementos mantêm:
- Mobile-first approach
- Breakpoints: sm(640), md(768), lg(1024), xl(1280)
- Texto fluido (4xl → 7xl)
- Grids adaptáveis (1 → 2 → 3 cols)
- Progress bar sempre visível

---

## ♿ Acessibilidade

Mantido WCAG 2.1:
- ✅ ARIA labels em todas seções
- ✅ Focus indicators (outline azul)
- ✅ Keyboard navigation
- ✅ Contrast ratio > 4.5:1
- ✅ Semantic HTML
- ✅ Reduced motion support

---

## 🚀 Implementação

### Quick Start
1. Barra de progresso adicionada ao layout
2. Todas as seções com linguagem RPG
3. Cores e gradientes aplicados
4. Tipografia Cinzel nos títulos
5. Animações e efeitos visuais

### Performance
- ✅ Intersection Observer (lazy animations)
- ✅ CSS animations otimizadas
- ✅ Client components minimizados
- ✅ No layout shift

---

**Tema completo implementado mantendo profissionalismo e foco em conversão!** 🎲✨

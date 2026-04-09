# Modern Next.js Landing Page

Um projeto Next.js moderno configurado com TypeScript, Tailwind CSS e ESLint, estruturado para criar landing pages de alta conversão.

## 🚀 Tecnologias

- **Next.js 16** - Framework React para produção
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utility-first
- **ESLint** - Linter para código JavaScript/TypeScript

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx          # Página inicial
│   └── globals.css       # Estilos globais
├── components/            # Componentes reutilizáveis
│   ├── ui/               # Componentes de interface
│   │   ├── Button.tsx    # Componente de botão
│   │   ├── Input.tsx     # Componente de input
│   │   ├── Card.tsx      # Componente de card
│   │   └── Container.tsx # Container responsivo
│   └── common/           # Componentes comuns
│       ├── Header.tsx    # Cabeçalho
│       └── Footer.tsx    # Rodapé
├── sections/              # Seções da landing page
│   ├── HeroSection.tsx       # Seção hero
│   ├── FeaturesSection.tsx   # Seção de features
│   ├── PricingSection.tsx    # Seção de preços
│   ├── TestimonialsSection.tsx # Depoimentos
│   └── CTASection.tsx        # Call-to-action
├── hooks/                 # Custom hooks
│   ├── useMediaQuery.ts  # Hook para media queries
│   ├── useScrollPosition.ts # Hook de posição do scroll
│   └── useIntersectionObserver.ts # Hook de observação
├── utils/                 # Funções utilitárias
│   ├── cn.ts             # Função para classes CSS
│   ├── formatting.ts     # Formatação de dados
│   └── validation.ts     # Validações
└── types/                 # Tipos TypeScript
    └── index.ts          # Tipos globais
```

## 🎨 Componentes Disponíveis

### UI Components
- **Button**: Botão com variantes (primary, secondary, outline, ghost)
- **Input**: Campo de entrada com label e mensagem de erro
- **Card**: Container estilizado com CardHeader, CardContent, CardFooter
- **Container**: Container responsivo com diferentes tamanhos

### Sections
- **HeroSection**: Seção principal com CTA
- **FeaturesSection**: Demonstração de funcionalidades
- **PricingSection**: Planos e preços
- **TestimonialsSection**: Depoimentos de clientes
- **CTASection**: Call-to-action com formulário

### Hooks
- **useMediaQuery**: Detecta breakpoints responsivos
- **useScrollPosition**: Rastreia posição do scroll
- **useIntersectionObserver**: Detecta quando elemento está visível

## 🛠️ Como Usar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build para Produção

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## 📝 Personalizando

### Alterar Cores do Tema

Edite o arquivo `tailwind.config.ts` para personalizar as cores:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#yourcolor',
        secondary: '#yourcolor',
      },
    },
  },
}
```

### Adicionar Novas Seções

1. Crie um arquivo em `src/sections/`
2. Importe e adicione em `src/app/page.tsx`

```typescript
import NewSection from '@/sections/NewSection';

export default function Home() {
  return (
    <main>
      {/* ... outras seções */}
      <NewSection />
    </main>
  );
}
```

### Criar Novos Componentes

Use a função `cn()` para mesclar classes do Tailwind:

```typescript
import { cn } from '@/utils/cn';

export default function MyComponent({ className }) {
  return (
    <div className={cn('base-classes', className)}>
      Content
    </div>
  );
}
```

## 🎯 Boas Práticas Implementadas

- ✅ Componentes modulares e reutilizáveis
- ✅ Tipagem completa com TypeScript
- ✅ Hooks personalizados para lógica reutilizável
- ✅ Utilitários de validação e formatação
- ✅ Design responsivo mobile-first
- ✅ Animações e transições suaves
- ✅ Acessibilidade (ARIA labels, semântica HTML)
- ✅ Performance otimizada
- ✅ SEO-friendly

## 📊 Estrutura Otimizada para Conversão

A landing page inclui:

1. **Hero Section** - Primeira impressão com CTA claro
2. **Features** - Benefícios e funcionalidades
3. **Social Proof** - Depoimentos e avaliações
4. **Pricing** - Planos transparentes
5. **CTA Final** - Última oportunidade de conversão

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm start` - Inicia servidor de produção
- `npm run lint` - Executa o linter

## 📖 Documentação Adicional

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

## 🤝 Contribuindo

Sinta-se à vontade para contribuir com melhorias!

## 📄 Licença

Este projeto está sob a licença MIT.

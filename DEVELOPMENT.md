# Guia Rápido de Desenvolvimento

## Estrutura de Pastas

### `/src/components`
Componentes reutilizáveis da aplicação.

- **ui/** - Componentes de UI básicos (Button, Input, Card, etc.)
- **common/** - Componentes comuns (Header, Footer, etc.)

### `/src/sections`
Seções específicas da landing page. Cada seção é um componente completo que representa uma parte da página.

### `/src/hooks`
Custom hooks do React para lógica reutilizável.

### `/src/utils`
Funções utilitárias e helpers.

### `/src/types`
Definições de tipos TypeScript compartilhados.

## Convenções de Código

### Nomenclatura
- **Componentes**: PascalCase (ex: `MyComponent.tsx`)
- **Hooks**: camelCase com prefixo 'use' (ex: `useMyHook.ts`)
- **Utils**: camelCase (ex: `formatDate.ts`)
- **Types**: PascalCase (ex: `UserType`)

### Estrutura de Componente

```typescript
'use client'; // Se usar hooks ou eventos do navegador

import { ComponentProps } from 'react';
import { cn } from '@/utils/cn';

export interface MyComponentProps extends ComponentProps<'div'> {
  variant?: 'default' | 'custom';
}

export default function MyComponent({
  className,
  variant = 'default',
  ...props
}: MyComponentProps) {
  return (
    <div className={cn('base-classes', className)} {...props}>
      {/* content */}
    </div>
  );
}
```

### Imports
Use aliases do TypeScript para imports limpos:

```typescript
import Component from '@/components/ui/Component';
import { useHook } from '@/hooks';
import { formatDate } from '@/utils';
```

## Adicionar Nova Feature

### 1. Criar Componente

```bash
# 1. Criar arquivo do componente
touch src/components/ui/NewComponent.tsx

# 2. Adicionar ao index.ts
# editar src/components/ui/index.ts
```

### 2. Criar Hook

```bash
# 1. Criar arquivo do hook
touch src/hooks/useNewHook.ts

# 2. Adicionar ao index.ts
# editar src/hooks/index.ts
```

### 3. Criar Seção

```bash
# 1. Criar arquivo da seção
touch src/sections/NewSection.tsx

# 2. Adicionar à página
# editar src/app/page.tsx
```

## Estilização

### Tailwind CSS
Use classes do Tailwind CSS para estilização:

```typescript
<div className="flex items-center justify-between p-4 bg-blue-500 text-white rounded-lg">
  Content
</div>
```

### Classes Condicionais
Use a função `cn()` para classes condicionais:

```typescript
import { cn } from '@/utils/cn';

<button
  className={cn(
    'base-class',
    {
      'active-class': isActive,
      'disabled-class': isDisabled,
    },
    className
  )}
/>
```

## Responsividade

Use breakpoints do Tailwind:

```typescript
// Mobile first
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>

// Grid responsivo
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* items */}
</div>
```

## Performance

### Client vs Server Components

```typescript
// Server Component (padrão)
export default function ServerComponent() {
  // Pode buscar dados no servidor
  return <div>Server rendered</div>;
}

// Client Component (para interatividade)
'use client';

export default function ClientComponent() {
  const [state, setState] = useState();
  // Pode usar hooks e eventos
  return <div onClick={() => {}}>Interactive</div>;
}
```

### Lazy Loading

```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

## Testing

```bash
# Rodar testes (quando configurado)
npm test

# Lint
npm run lint

# Type check
npm run type-check
```

## Deploy

### Vercel (Recomendado)

1. Push para GitHub
2. Conecte repositório no Vercel
3. Deploy automático

### Build Local

```bash
npm run build
npm start
```

## Troubleshooting

### Erro de Tipos
```bash
# Limpar cache do TypeScript
rm -rf .next
rm -rf node_modules
npm install
```

### Tailwind não funciona
```bash
# Verificar tailwind.config.ts
# Verificar imports no globals.css
```

## Recursos Úteis

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React Docs](https://react.dev)

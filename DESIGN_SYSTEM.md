# Design System - Studio Clara Link na Bio

## Paleta de Cores

### Cores Principais
- **Rosa Principal**: `#FAD1E8` - Backgrounds principais, botões primários
- **Rosa Apoio**: `#F7B7D2` - Hover states, variações
- **Branco**: `#FFFFFF` - Background base
- **Creme Suave**: `#FFF7FB` - Background alternativo, gradientes
- **Dourado**: `#C8A24A` - Detalhes premium, destaques
- **Dourado Alternativo**: `#D4AF37` - Variação do dourado
- **Texto Escuro**: `#111827` - Textos principais

### Gradientes

1. **Rosa → Branco**
   ```css
   background: linear-gradient(135deg, #FAD1E8 0%, #FFFFFF 65%);
   ```

2. **Branco → Creme**
   ```css
   background: linear-gradient(180deg, #FFFFFF 0%, #FFF7FB 100%);
   ```

3. **Dourado Suave**
   ```css
   background: linear-gradient(135deg, #C8A24A 0%, #F5E7C1 100%);
   ```

---

## Tipografia

### Font Family
- **Padrão**: Inter (via Next.js Google Fonts)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif

### Tamanhos

| Uso | Classe Tailwind | Tamanho | Peso |
|-----|----------------|---------|------|
| Título Principal (H1) | `text-3xl` | 30px | `font-bold` |
| Título Seção (H2) | `text-2xl` | 24px | `font-bold` |
| Subtítulo | `text-xl` | 20px | `font-semibold` |
| Texto Grande | `text-lg` | 18px | `font-medium` |
| Texto Corpo | `text-base` | 16px | `font-normal` |
| Texto Pequeno | `text-sm` | 14px | `font-normal` |
| Texto Muito Pequeno | `text-xs` | 12px | `font-normal` |

---

## Componentes

### Botões

#### Botão Principal (CTA)
```tsx
<Button 
  size="lg" 
  variant="primary"
  className="w-full h-16 text-lg font-semibold bg-gradient-to-r from-[#FAD1E8] to-[#F7B7D2]"
>
```

**Características:**
- Altura: 64px (h-16)
- Padding horizontal: 32px
- Border radius: 12px (rounded-xl)
- Shadow: shadow-xl
- Hover: Mudança de gradiente + shadow-lg

#### Botão Secundário
```tsx
<Button variant="outline" className="border-2 border-accent">
```

#### Botão Ghost
```tsx
<Button variant="ghost" className="hover:bg-primary/5">
```

### Cards

```tsx
<Card className="bg-white/80 backdrop-blur-sm border-2 border-primary/30 rounded-2xl">
```

**Características:**
- Background: branco com 80% opacidade
- Backdrop blur para efeito glassmorphism
- Border: 2px, cor primária com 30% opacidade
- Border radius: 16px (rounded-2xl)
- Shadow: shadow-sm

### Chips/Badges

```tsx
<span className="px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium shadow-sm border border-primary/20">
```

**Características:**
- Padding: 12px horizontal, 6px vertical
- Border radius: 9999px (rounded-full)
- Background: branco com 80% opacidade
- Border: 1px, cor primária com 20% opacidade

---

## Espaçamento

### Sistema de Espaçamento (Tailwind)

| Tamanho | Valor | Uso |
|---------|-------|-----|
| `space-y-2` | 8px | Espaçamento entre elementos pequenos |
| `space-y-3` | 12px | Espaçamento entre cards |
| `space-y-4` | 16px | Espaçamento padrão entre seções |
| `space-y-6` | 24px | Espaçamento entre elementos grandes |
| `gap-2` | 8px | Gaps em flex/grid pequenos |
| `gap-3` | 12px | Gaps em flex/grid padrão |
| `gap-4` | 16px | Gaps em flex/grid grandes |

### Padding de Seções

- **Hero**: `pt-8 pb-6` (32px top, 24px bottom)
- **Seções**: `px-4 pb-8` (16px horizontal, 32px bottom)
- **Cards**: `p-4` ou `p-6` (16px ou 24px)

### Largura Máxima

- **Container Principal**: `max-w-md` (448px) - Mobile-first
- Centralizado com `mx-auto`

---

## Sombras

| Classe | Valor | Uso |
|--------|-------|-----|
| `shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | Chips, elementos sutis |
| `shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1)` | Cards padrão |
| `shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1)` | Cards destacados, hover |
| `shadow-xl` | `0 20px 25px -5px rgb(0 0 0 / 0.1)` | CTAs principais |
| `shadow-2xl` | `0 25px 50px -12px rgb(0 0 0 / 0.25)` | Botão flutuante |

---

## Animações e Transições

### Transições Padrão
```css
transition-all
```

### Estados Hover
- Botões: `hover:shadow-lg`, mudança de cor/gradiente
- Cards: `hover:shadow-lg`
- Links: `hover:text-primary` ou `hover:underline`

### Estados Active
- Botões: `active:scale-[0.98]` (efeito de pressionar)

### Rotação de Depoimentos
- Intervalo: 5000ms (5 segundos)
- Transição suave automática

---

## Ícones

### Biblioteca
- **Lucide React** (https://lucide.dev)

### Tamanhos Padrão

| Uso | Tamanho | Classe |
|-----|---------|--------|
| Ícones pequenos (chips) | 16px | `w-4 h-4` |
| Ícones padrão | 20px | `w-5 h-5` |
| Ícones médios | 24px | `w-6 h-6` |
| Ícones grandes (botões) | 24px | `w-6 h-6` |

### Cores de Ícones
- Primários: `text-primary-support`
- Accent: `text-accent`
- Texto: `text-[#111827]`

---

## Acessibilidade

### Contraste
- Texto escuro (#111827) sobre fundo claro: ✅ WCAG AAA
- Texto sobre gradiente: Verificar sempre

### Foco
- `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`
- Contraste adequado no foco

### Labels
- Todos os links têm `aria-label` quando necessário
- Imagens têm `alt` descritivo
- Botões têm texto descritivo

---

## Responsividade

### Mobile-First
- Design baseado em mobile (max-width: 448px)
- Breakpoints do Tailwind disponíveis para desktop:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px

### Imagens
- Next.js Image component com otimização automática
- `fill` para imagens em containers
- `priority` para imagem do logo (above the fold)

---

## Estados Visuais

### Destaque (Last Clicked)
```tsx
className={`border-2 ${lastClicked === 'portfolio' ? 'border-accent shadow-lg' : 'border-primary/30'}`}
```

- Border dourado quando foi o último clicado
- Shadow aumentada para destaque

### Loading States
- Ainda não implementado (pode ser adicionado)

### Empty States
- Não aplicável neste projeto

---

## Tokens do Tailwind (Customização)

As cores estão configuradas no `tailwind.config.js`:

```js
primary: {
  DEFAULT: "#FAD1E8",
  foreground: "#111827",
  support: "#F7B7D2",
},
secondary: {
  DEFAULT: "#FFF7FB",
  foreground: "#111827",
},
accent: {
  DEFAULT: "#C8A24A",
  foreground: "#FFFFFF",
  alt: "#D4AF37",
},
```

Uso:
- `bg-primary` → `#FAD1E8`
- `text-primary-foreground` → `#111827`
- `bg-accent` → `#C8A24A`
- `border-primary-support` → `#F7B7D2`


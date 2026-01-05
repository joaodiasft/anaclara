# Studio Clara - Link na Bio

Link na Bio (estilo Linktree) premium para Nail Designer Studio Clara, focado em conversão e agendamentos via WhatsApp.

## 🎨 Design System

### Paleta de Cores

- **Rosa Principal**: `#FAD1E8`
- **Rosa Apoio**: `#F7B7D2`
- **Branco**: `#FFFFFF`
- **Creme Suave**: `#FFF7FB`
- **Dourado**: `#C8A24A` (alternativa: `#D4AF37`)
- **Texto Escuro**: `#111827`

### Tipografia

- **Font Family**: Inter (sistema)
- **Títulos**: font-bold, text-2xl a text-3xl
- **Subtítulos**: font-semibold, text-lg a text-xl
- **Corpo**: font-medium/regular, text-sm a text-base

### Componentes

- **Botões**: rounded-xl, shadow-md, hover:shadow-lg
- **Cards**: rounded-2xl, bg-white/80, backdrop-blur-sm
- **Espaçamento**: Generoso, mobile-first

---

## 📋 Estrutura da Página (Wireframe)

```
┌─────────────────────────────────┐
│        [LOGO CÍRCULO]           │
│      Studio Clara               │
│      @studio_claraa1            │
│   Transforme suas unhas...      │
│  [✅][💎][✨][📍] Chips         │
├─────────────────────────────────┤
│   [AGENDAR AGORA WhatsApp]      │
│      Respondo rapidinho         │
├─────────────────────────────────┤
│      Comece por aqui            │
│  [Ver Portfólio]                │
│  [Tabela de Preços]             │
│  [Como Chegar]                  │
├─────────────────────────────────┤
│         Portfólio               │
│  [Grid 2x3 imagens]             │
├─────────────────────────────────┤
│      Tabela de Preços           │
│  [Lista de serviços]            │
├─────────────────────────────────┤
│   Destaque da Semana            │
│  [Card especial]                │
├─────────────────────────────────┤
│    O que dizem sobre nós        │
│  [Depoimentos rotativos]        │
├─────────────────────────────────┤
│    Dúvidas Frequentes           │
│  [Accordion FAQ]                │
├─────────────────────────────────┤
│    Informações Importantes      │
│  [Regras e políticas]           │
├─────────────────────────────────┤
│         [Instagram]             │
│   Feito com carinho Studio      │
└─────────────────────────────────┘
      [WhatsApp Flutuante]
```

---

## 📝 Copy Pronta

### Bio Curta (1 linha)
```
✨ Nail Designer Premium | Alongamento, Gel e Fibra | Agende seu horário
```

### Bio Média (2 linhas)
```
✨ Studio Clara | Nail Designer Premium
📍 Goiânia | Alongamento, Gel, Fibra de Vidro | Agende já! 💅
```

### CTAs Principais

**Variação 1 (Usada no site):**
- Botão: "AGENDAR AGORA no WhatsApp"
- Subtexto: "Respondo rapidinho ✨"

**Variação 2:**
- Botão: "Quero agendar meu horário"
- Subtexto: "Clique e fale comigo no WhatsApp 💬"

**Variação 3:**
- Botão: "Transforme suas unhas hoje"
- Subtexto: "Agendamento rápido e fácil ✨"

### Textos dos Botões

1. **Ver Portfólio**
   - Título: "Ver Portfólio"
   - Subtexto: "Veja trabalhos recentes"

2. **Tabela de Preços**
   - Título: "Tabela de Preços"
   - Subtexto: "Confira valores e serviços"

3. **Como Chegar**
   - Título: "Como Chegar"
   - Subtexto: "Veja no Google Maps"

---

## 🔗 Lista de Links

| Título | Subtexto | Ícone | URL |
|--------|----------|-------|-----|
| AGENDAR AGORA no WhatsApp | Respondo rapidinho ✨ | MessageCircle | https://wa.me/5562992846993 |
| Ver Portfólio | Veja trabalhos recentes | ImageIcon | #portfolio (scroll) |
| Tabela de Preços | Confira valores e serviços | DollarSign | #precos (scroll) |
| Como Chegar | Veja no Google Maps | Navigation | https://maps.app.goo.gl/v4MWrAfoe8bS2Fgx8 |
| Instagram | @studio_claraa1 | Instagram | https://www.instagram.com/studio_claraa1 |
| WhatsApp Flutuante | Falar no WhatsApp | MessageCircle | https://wa.me/5562992846993 |

---

## ⚙️ Funcionalidades Implementadas

✅ **Botão Flutuante WhatsApp** - Fixo no canto inferior direito  
✅ **Tracking de Cliques** - Console.log + pronto para GA4/Meta Pixel  
✅ **UTMs Automáticos** - Todos os links externos recebem UTMs  
✅ **localStorage** - Salva último botão clicado e destaca na volta  
✅ **Carrossel de Depoimentos** - Rotação automática a cada 5s  
✅ **Scroll Suave** - Navegação interna com smooth scroll  
✅ **Responsivo Mobile-First** - Otimizado para mobile  
✅ **Acessibilidade** - aria-labels, contraste adequado  
✅ **Performance** - Next.js Image, lazy loading  

---

## 📦 Instalação

```bash
cd Ana-Bio
npm install
npm run dev
```

Acesse: http://localhost:3000

---

## 🚀 Build para Produção

```bash
npm run build
npm start
```

---

## ✅ Checklist de Entrega

### Estrutura
- [x] Hero com logo, nome, slogan, chips
- [x] CTA principal (WhatsApp)
- [x] Seção "Comece por aqui" (3 botões)
- [x] Portfólio (grid de imagens)
- [x] Tabela de Preços
- [x] Destaque da Semana
- [x] Prova Social (depoimentos)
- [x] FAQ (4 perguntas)
- [x] Regras e Informações
- [x] Rodapé

### Funcionalidades Extras
- [x] Botão flutuante WhatsApp
- [x] Tracking de cliques
- [x] UTMs automáticos
- [x] localStorage (último clique)
- [x] Carrossel de depoimentos
- [x] Design premium (rosa/dourado)

### UX/UI
- [x] Mobile-first
- [x] Botões grandes e acessíveis
- [x] Espaçamento generoso
- [x] Cores da paleta oficial
- [x] Ícones lucide-react
- [x] Animações suaves

### Performance
- [x] Next.js Image
- [x] Lazy loading
- [x] Otimizações básicas

---

## 🧪 Ideias de Teste A/B

### 1. CTA Principal
- **Variante A** (Atual): "AGENDAR AGORA no WhatsApp" + "Respondo rapidinho ✨"
- **Variante B**: "Quero agendar meu horário" + "Clique e fale comigo 💬"
- **Métrica**: Taxa de clique no botão principal

### 2. Ordem das Seções
- **Variante A** (Atual): Portfólio → Preços → Localização
- **Variante B**: Preços → Portfólio → Localização
- **Métrica**: Scroll depth e taxa de conversão

### 3. Subtexto dos Botões
- **Variante A** (Atual): Descritivo ("Veja trabalhos recentes")
- **Variante B**: Call-to-action ("Explore meus trabalhos")
- **Métrica**: Taxa de clique nos botões secundários

### 4. Prova Social
- **Variante A** (Atual): 3 depoimentos rotativos
- **Variante B**: 1 depoimento fixo + foto
- **Métrica**: Taxa de conversão geral

### 5. Destaque da Semana
- **Variante A** (Atual): Card com texto
- **Variante B**: Card com imagem do design
- **Métrica**: Cliques no botão "Quero esse design"

---

## 📞 Informações de Contato

- **Instagram**: [@studio_claraa1](https://www.instagram.com/studio_claraa1)
- **WhatsApp**: [+55 62 99284-6993](https://wa.me/5562992846993)
- **Localização**: Goiânia, GO (Google Maps)

---

## 📄 Notas Importantes

- Os preços podem ser atualizados - mantenha a tabela sempre atualizada
- A chave PIX está como placeholder - substituir quando disponível
- Imagens do portfólio e local são carregadas de URLs externas (i.im.ge)
- UTMs configurados para Instagram bio link
- Pronto para integração com GA4 e Meta Pixel (código comentado no trackClick)

---

**Desenvolvido com ❤️ para Studio Clara**


# Instruções Rápidas - Studio Clara Link na Bio

## 🚀 Como Iniciar

1. **Instalar dependências:**
   ```bash
   cd Ana-Bio
   npm install
   ```

2. **Rodar em desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acessar no navegador:**
   ```
   http://localhost:3000
   ```

## 📦 Build para Produção

```bash
npm run build
npm start
```

## ✏️ Personalizações Necessárias

### 1. Chave PIX
Edite o arquivo `app/page.tsx`, linha ~70:
```typescript
const pixKey = 'SUA-CHAVE-PIX-AQUI'
```

### 2. Atualizar Preços
Edite o array `services` no arquivo `app/page.tsx` (linha ~103):
```typescript
const services = [
  { name: 'Banho de Gel', description: 'Na unha natural', price: 'R$ 80' },
  // ... atualize conforme necessário
]
```

### 3. Adicionar Analytics (Opcional)

Para Google Analytics 4, adicione no `app/layout.tsx`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    `,
  }}
/>
```

Para Meta Pixel, adicione:
```html
<script
  dangerouslySetInnerHTML={{
    __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', 'SEU_PIXEL_ID');
      fbq('track', 'PageView');
    `,
  }}
/>
```

## 📱 Deploy

### Vercel (Recomendado)
1. Faça push do código para GitHub
2. Conecte ao Vercel
3. Deploy automático!

### Netlify
1. Faça push do código para GitHub
2. Conecte ao Netlify
3. Configure build: `npm run build`
4. Publish directory: `.next`

## 📝 Estrutura de Arquivos

```
Ana-Bio/
├── app/
│   ├── layout.tsx      # Layout principal + metadata
│   ├── page.tsx        # Página principal (HOME)
│   └── globals.css     # Estilos globais
├── components/
│   └── ui/             # Componentes shadcn/ui
│       ├── button.tsx
│       ├── card.tsx
│       └── accordion.tsx
├── lib/
│   └── utils.ts        # Utilitários (cn function)
├── README.md           # Documentação completa
├── DESIGN_SYSTEM.md    # Design System detalhado
└── package.json        # Dependências
```

## 🎨 Cores e Estilo

Todas as cores estão definidas em `tailwind.config.js`. 
Para mudar cores, edite a seção `extend.colors`.

Paleta atual:
- Rosa Principal: `#FAD1E8`
- Rosa Apoio: `#F7B7D2`
- Dourado: `#C8A24A`
- Texto: `#111827`

## ✅ Checklist de Deploy

- [ ] Instalar dependências (`npm install`)
- [ ] Atualizar chave PIX
- [ ] Verificar preços atualizados
- [ ] Testar em mobile
- [ ] Testar links (WhatsApp, Instagram, Maps)
- [ ] Adicionar analytics (opcional)
- [ ] Fazer build (`npm run build`)
- [ ] Deploy

## 🆘 Problemas Comuns

### Erro: "Cannot find module 'react'"
**Solução:** Execute `npm install`

### Imagens não carregam
**Solução:** Verifique se os domínios estão em `next.config.js`:
```js
images: {
  domains: ['i.im.ge', 'im.ge'],
}
```

### TypeScript errors
**Solução:** Os erros devem desaparecer após `npm install`. Se persistirem, verifique se todas as dependências estão instaladas.

## 📞 Suporte

Para dúvidas sobre o código, consulte:
- `README.md` - Documentação completa
- `DESIGN_SYSTEM.md` - Guia de design


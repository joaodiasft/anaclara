# 🚀 Deploy no Netlify - Guia Rápido

## ✅ O que já está configurado

- ✅ Arquivo `netlify.toml` criado
- ✅ Plugin Next.js configurado
- ✅ Node version 18 definida
- ✅ Build command: `npm run build`
- ✅ Publish directory: `.next`

## 📋 Passos para Deploy

### 1. Conectar ao Netlify

1. Acesse [netlify.com](https://www.netlify.com)
2. Faça login com sua conta GitHub
3. Clique em **"Add new site"** → **"Import an existing project"**
4. Selecione o repositório: `joaodiasft/anaclara`

### 2. Configurações Automáticas

O Netlify detectará automaticamente:
- **Build command**: `npm run build` (do `netlify.toml`)
- **Publish directory**: `.next` (do `netlify.toml`)
- **Node version**: 18 (do `netlify.toml`)

### 3. Deploy

1. Clique em **"Deploy site"**
2. Aguarde o build completar (pode levar 2-5 minutos)
3. Seu site estará disponível em: `https://[nome-aleatorio].netlify.app`

## 🔧 Configurações Adicionais (Opcional)

### Variáveis de Ambiente

Se precisar adicionar variáveis de ambiente:
1. Vá em **Site settings** → **Environment variables**
2. Adicione as variáveis necessárias

### Domínio Customizado

1. Vá em **Site settings** → **Domain management**
2. Clique em **"Add custom domain"**
3. Siga as instruções para configurar DNS

## 📝 Notas Importantes

- ✅ O plugin `@netlify/plugin-nextjs` será instalado automaticamente
- ✅ O Next.js será otimizado para produção automaticamente
- ✅ Imagens serão otimizadas pelo Next.js Image
- ✅ O site será atualizado automaticamente a cada push no GitHub

## 🐛 Troubleshooting

### Erro de Build

Se o build falhar:
1. Verifique os logs no Netlify
2. Certifique-se de que todas as dependências estão no `package.json`
3. Verifique se o Node version está correto (18)

### Imagens não carregam

- As imagens externas (i.im.ge) devem funcionar normalmente
- Se houver problemas, verifique o `next.config.js` com `remotePatterns`

## ✅ Status

- [x] Código no GitHub
- [x] netlify.toml configurado
- [x] README atualizado
- [x] Pronto para deploy

---

**Repositório**: https://github.com/joaodiasft/anaclara.git  
**Status**: ✅ Pronto para deploy no Netlify


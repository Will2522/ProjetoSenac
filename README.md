# dev.folio — Portfólio Next.js

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Personalização

- Troque `Seu Nome` em `app/page.js`, `app/github/page.js` e `components` conforme desejar.
- Edite os projetos em `app/dados.js`.
- Substitua `public/avatar.svg` por sua imagem e atualize o `src` no `app/github/page.js`.
- A página GitHub usa projetos de demonstração; para repositórios reais, conecte a API do GitHub e informe seu usuário.
- O formulário valida e mostra agradecimento, mas não envia e-mail. Integre um backend para envio real.

## Estrutura

- `/`: apresentação, projetos, lista de tarefas
- `/projetos`: todos os projetos
- `/projetos/[id]`: detalhes dinâmicos
- `/contato`: formulário
- `/github`: perfil ilustrativo e projetos

Componentes: Cabecalho, Rodape, Secao, Cartao, Curtir, Contato e Tarefas.

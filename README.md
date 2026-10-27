# Instituto Semente do Amanhã — site institucional

Site responsivo em Next.js App Router, React e TypeScript. O banner original foi aplicado como fundo da seção principal; a ilustração complementar aparece na seção sobre o instituto.

## Executar
Requisitos: Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

Para validar a produção: `npm run lint`, `npm run build` e `npm start`.

## Estrutura
- `app/page.tsx`: página principal
- `app/globals.css`: identidade visual e responsividade
- `app/layout.tsx`: metadados e layout global
- `components/site-header.tsx`: menu
- `components/site-footer.tsx`: rodapé
- `public/images/banner-instituto.jpg`: banner recebido
- `public/images/criancas-aprendendo.png`: ilustração complementar
- `docs/`: documentação funcional e técnica

## Antes de publicar
Confirmar textos e parcerias com os responsáveis, trocar qualquer domínio provisório, adicionar somente contatos oficiais e obter autorização para imagens/marcas. O conteúdo atual não afirma que atividades ou inscrições já estejam abertas.

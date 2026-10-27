# Arquitetura

- Next.js App Router: estrutura e metadados da aplicação.
- React Server Components: sem estado cliente desnecessário.
- TypeScript: tipagem estrita.
- CSS próprio: tokens visuais, componentes de interface e breakpoints responsivos.
- `next/image`: renderização otimizada da ilustração.

## Estrutura
```text
app/
  layout.tsx
  page.tsx
  globals.css
components/
  site-header.tsx
  site-footer.tsx
public/images/
  banner-instituto.jpg
  criancas-aprendendo.png
docs/
```

O banner é aplicado como `background-image` na seção principal. A ilustração aparece na seção institucional e no bloco “Como ajudar”. O conteúdo é estático e não requer API ou banco de dados nesta fase.

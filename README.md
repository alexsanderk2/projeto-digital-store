# Digital Store

Projeto de e-commerce **Drip Store / Digital Store** desenvolvido em React como parte do curso da Digital College (Curso de Full Stack da Geração Tech - IEL), seguindo os requisitos de [projeto-digital-store](https://github.com/digitalcollegebr/projeto-digital-store) e o layout do Figma.

> **Versão completa com os opcionais:** produtos carregados de API (DummyJSON) e deploy na Vercel.
>
> - Site publicado: https://projeto-digital-store-opcionais.vercel.app/
> - Repositório: https://github.com/alexsanderk2/projeto-digital-store-opcionais

## Tecnologias

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- CSS puro com variáveis (paleta de cores do projeto)

## Como executar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

Outros scripts:

- `npm run build`: gera a versão de produção em `dist/`
- `npm run preview`: serve a versão de produção localmente
- `npm run lint`: executa o ESLint

## Rotas

| Rota            | Página                                   |
| --------------- | ---------------------------------------- |
| `/`             | Página inicial                           |
| `/products`     | Listagem de produtos (aceita `?filter=`) |
| `/produtos`     | Alias da listagem de produtos            |
| `/product/:id`  | Visualização do produto                  |

## Estrutura

```
src/
├── assets/                 # SVGs (logos, ícones, setas)
├── components/
│   ├── BuyBox/
│   ├── FilterGroup/
│   ├── Footer/
│   ├── FooterInformations/
│   ├── Gallery/
│   ├── Header/
│   ├── Logo/
│   ├── ProductCard/
│   ├── ProductListing/
│   ├── ProductOptions/
│   └── Section/
├── data/                   # Produtos mockados
├── pages/
│   ├── HomePage/
│   ├── Layout/
│   ├── NotFoundPage/
│   ├── ProductListingPage/
│   └── ProductViewPage/
├── utils/
├── App.jsx                 # Definição das rotas
└── main.jsx
```

## Funcionalidades

- **Header** com logo, campo de busca (Enter ou clique na lupa redireciona para `/products?filter=...`), links *Cadastre-se* / *Entrar*, carrinho e navegação com destaque do link ativo (`NavLink`).
- **Footer** com logo branca, redes sociais e colunas de informações renderizadas dinamicamente.
- **Gallery** com setas (desabilitadas no início/fim), animação de deslize e miniaturas opcionais (`showThumbs`).
- **Section**, **ProductCard** e **ProductListing** reutilizáveis.
- **Listagem de produtos** com ordenação por menor/maior preço e filtros por marca, categoria, gênero e estado; o título mostra o total de produtos encontrados.
- **Visualização do produto** com galeria, BuyBox, opções de tamanho/cor (`ProductOptions`) e produtos recomendados.

## Paleta de cores

| Nome         | Cor       |
| ------------ | --------- |
| primary      | `#C92071` |
| secondary    | `#B5B6F2` |
| tertiary     | `#991956` |
| error        | `#EE4266` |
| success      | `#52CA76` |
| warning      | `#F6AA1C` |
| dark-gray    | `#1F1F1F` |
| dark-gray-2  | `#474747` |
| dark-gray-3  | `#666666` |
| light-gray   | `#8F8F8F` |
| light-gray-2 | `#CCCCCC` |
| light-gray-3 | `#F5F5F5` |
| white        | `#FFFFFF` |

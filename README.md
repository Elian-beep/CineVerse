
# Cineverse

Plataforma web de streaming com os dados provenientes da API TMDB. Design moderno e interativo com suas funcionalidades.

Organização de favoritas e ordenação por tipo de mídia.

Conheça filmes em alta e lançamento, assista aos trailers e veja mais informações sobre sua série preferida.
## Screenshots

![Mobile home](https://raw.githubusercontent.com/Elian-beep/assets_icons/main/Cineverse/mobile%20home.png)

![Mobile details](https://raw.githubusercontent.com/Elian-beep/assets_icons/main/Cineverse/mobile%20details.png)

![Desktop home](https://raw.githubusercontent.com/Elian-beep/assets_icons/main/Cineverse/desktop%20home.png)

![Desktop bookmarkeds](https://raw.githubusercontent.com/Elian-beep/assets_icons/main/Cineverse/desktop%20bookmarkeds.png)
## Contribuidores

- [@ElianBatista](https://www.linkedin.com/in/elian-batista/)
## Stack utilizada

| **Mobile Híbrido** |   |
|--------------|---|
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) | ![Nuxt](https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82) |
| ![Vue](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) | ![Tailwind](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) |

Este é um projeto Nuxt 3 com integração de Tailwind CSS, Pinia, FontAwesome e Axios.

## Requisitos

- **Node.js**
- **Yarn** (instale com `npm install -g yarn` se não tiver)
- **Docker**

## Instalação

Após clonar o projeto, navegue até o diretório do projeto e execute o seguinte comando para instalar todas as dependências:

```bash
yarn install
```

Para rodar o servidor de desenvolvimento

```bash
yarn dev
```

Para gerar build
```bash
yarn build
```

## Como Rodar o Projeto com Docker

Execute o seguinte comando para buildar a imagem
```bash
docker build -t cineverse .
```

Rodar o Container Docker
```bash
docker run -p 8080:8080 cineverse
```

Verificar os Containers Rodando
```bash
docker ps
```

Parar o Container
```bash
docker stop <container-id>
```
## Público alvo

Esse projeto possui intuito em ser usado pelas seguintes entidades e motivos:

- Cinéfilos
- Qualquer usuário


## Funcionalidades

- Exibição de Filmes e Séries
- Paginação entre os dados
- Filtro por categorias
- Lista local de favoritos
- Visualização de mais detalhes
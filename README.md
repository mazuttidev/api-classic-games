# api-classic-games

Uma API RESTful desenvolvida em Node.js + Express + MySQL para gerenciar jogos retrô, jogadores e rankings de pontuação. Criada como projeto para uma comunidade de entusiastas de jogos clássicos.

## Funcionalidades

### Jogos
- Listar todos os jogos
- Buscar jogo por ID
- Cadastrar novo jogo
- Atualizar jogo existente
- Excluir jogo

### Jogadores
- Listar jogadores
- Cadastrar novo jogador (com nickname único)

### Pontuações
- Registrar pontuação (verificando se o jogo e jogador existem)
- Ver ranking (Top 10) por jogo
- Ver os 3 jogos mais populares (com mais pontuações)

## Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- MySQL
- dotenv
- nodemon


## Arquitetura e Organização

A API foi desenvolvida com base em princípios de Programação Orientada a Objetos (POO), visando modularidade, reutilização e facilidade de manutenção. As principais camadas do projeto são:

- `models/`: Representações das entidades como classes.
- `services/`: Regras de negócio encapsuladas em classes de serviço.
- `repositories/`: Acesso ao banco de dados com padrão DAO.
- `controllers/`: Camada intermediária que recebe requisições e chama os serviços.
- `routes/`: Define os endpoints e conecta aos controllers.


## Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/retro-games-api.git

# Acesse a pasta do projeto
cd retro-games-api

# Instale as dependências
npm install

# Configure seu arquivo .env com os dados do MySQL
cp .env.example .env

# Inicie o servidor
npm run dev
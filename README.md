# ConnectCircle - API

O ConnectCircle auxilia o usuário a manter uma lista de contatos de forma simples e eficiente. Esta é a API, o back-end do projeto. O front-end do projeto encontra-se neste outro repositório:

## Como rodar a API:

### 1. Instalar as dependências:

`yarn`

### 2. Configurar o .env

Criar um arquivo .env na raiz do projeto, baseando-se no .env.example, com as credenciais do seu banco de dados PostgreSQL.

### 3. Rodar as migrações:

`yarn typeorm migration:run -d src/data-source.ts`

### 4. Rodar o servidor:

`yarn dev`

# Bem vindo ao repositório do projeto Trybesmith

Este projeto é uma API REST de uma loja de itens medievais, foi desenvolvido as camadas Models, Service e Controllers, sendo possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (ou CRUD, para as pessoas mais íntimas 😜 - Create, Read, Update e Delete).

## Técnologias usadas

<section>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="ts">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="nodejs">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express">
  <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="mysql">
</section>

## Instalando Dependências

Para instalar as dependencias:

```bash
cd project-TrybeSmith/
npm i
```

## Executando aplicação Local

**Aviso: para executar a API localmente é necessario ter o Docker/Docker-Compose instalado.**

### Passo 1 - Configurar as variaveis de ambiente

Na raiz do projeto **renomeie o arquivo `.env.example` para `.env`** com as variáveis de ambiente. Por exemplo, caso o seu usuário SQL seja `nome` e a senha `1234` seu arquivo ficará desta forma:

```sh
MYSQL_HOST=localhost
MYSQL_USER=nome
MYSQL_PASSWORD=1234
PORT=3000
```

**Nota**: A variável **PORT** do arquivo `.env` deve ser utilizada para a conexão com o servidor.

### Passo 2 - Executar o docker-compose para criar um banco de dados local

Para rodar o Docker:

  ```
  docker-compose up
  ```

### Passo 3 - Criar o banco de dados

Utilizando uma ferramenta de gerenciamento do banco de dados MySQL como o **MySQL Workbench**, **DataGrip** ou qualquer outra ferramenta semelhante, e execute o código do arquivo `Trybesmith.sql`

## Testando

Para testar a API utilize o [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/) ou qualquer outra ferramenta semelhante.

Em breve estarei publicando os testes unitarios, e uma documentação detalhando as rotas da API REST.

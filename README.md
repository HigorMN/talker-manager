<h1 align="center">Talker Manager API</h1>

Este projeto tem como objetivo criar uma API para gerenciar informações de palestrantes (talkers) usando as operações básicas de CRUD (Create, Read, Update e Delete). Além disso, foram desenvolvidos alguns endpoints que utilizam o módulo fs para ler e escrever informações em um arquivo, tornando a aplicação completa para cadastro de talkers. Com essa API, é possível cadastrar novos palestrantes, visualizar suas informações, pesquisar por palestrantes específicos, editar dados já existentes e excluir palestrantes da lista. Tudo isso de forma fácil e organizada, utilizando uma API robusta e bem estruturada.

<h2>Stack utilizada</h2>

Back-end: `Node`, `Express`, `Javascript`, `MySQL2`, `Docker`

<h2>🐋 Rodando no Docker</h2>

Para executar o serviço Node, utilize o comando `docker-compose up -d`

Esse serviço ira inicializar um container chamado `trybers_and_dragons`. A partir daqui você pode rodar o container `trybers_and_dragons` via CLI ou abri-lo no VS Code. Use o comando `docker exec -it trybers_and_dragons bash`.

Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano. Instale as dependências "Caso existam" com `npm install`

⚠️ **Atenção** ⚠️ Caso opte por utilizar o Docker, TODOS os comandos disponíveis no package.json (npm start, npm test, npm run dev, ...) devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando docker exec citado acima.

⚠️ **Atenção** ⚠️ O git dentro do container não vem configurado com suas credenciais. Faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

⚠️ **Atenção** ⚠️ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

⚠️ **Atenção** ⚠️ Caso você esteja usando macOS e ao executar o docker-compose up -d se depare com o seguinte erro:

```typescript
The Compose file './docker-compose.yml' is invalid because:
Unsupported config option for services.db: 'platform'
Unsupported config option for services.node: 'platform'
```

<details>
  <summary><strong>🤷🏽‍♀️ Foram encontradas 2 possíveis soluções para este problema:</strong></summary><br />

- Você pode adicionar manualmente a option platform: linux/amd64 no service do banco de dados no arquivo docker-compose.yml do projeto, mas essa é uma solução local e você deverá reproduzir isso para os outros projetos.

- Você pode adicionar manualmente nos arquivos .bashrc, .zshenv ou .zshrc do seu computador a linha export DOCKER_DEFAULT_PLATFORM=linux/amd64, essa é uma solução global. As soluções foram com base nesta fonte.
</details>

<h1 align="center">Documentação da API</h1>

**Login na aplicação**

```http
  POST /login
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email`     | `string`   | **Obrigatório no body**. Email cadastrado no banco de dados |
| `password`  | `string`   | **Obrigatório no body**. Password cadastrado no banco de dados |

**Criar um talker**

```http
  POST /talker
```

| Parâmetro    | Tipo     | Descrição                                   |
| :----------  | :------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório no body**. Name para cadastrar |
| `age`       | `number` | **Obrigatório no body**. Idade para cadastrar |
| `talk`     | `string` | **Obrigatório no body**. Talk para cadastrar |

**Pegar talker**

```http
  GET /talker
  GET /talker/search
  GET /talker/:id
```

**Atualizar talker**

```http
  PUT /talker/:id
```

**Deletar talker**

```http
  DELETE /talker/:id
```

Qualquer duvida entre em contato comigo:

E-mail: higor.maranhao2000@gmail.com

Linkedin: https://www.linkedin.com/in/higor-maranhao/

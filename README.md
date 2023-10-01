# Personal Budget API

Este é um projeto de API para gerenciar seu orçamento pessoal usando os princípios do Envelope Budgeting. A API permite aos usuários criar, ler, atualizar e excluir envelopes de orçamento, bem como acompanhar o saldo de cada envelope. A API segue as melhores práticas em relação às convenções de nomenclatura de endpoints REST, códigos de resposta adequados e validação de dados para garantir que os usuários não ultrapassem seus orçamentos.

## Objetivos do Projeto

- Construir uma API usando Node.js e Express.
- Capacidade de criar, ler, atualizar e excluir envelopes de orçamento.
- Criar endpoint(s) para atualizar os saldos dos envelopes.
- Usar controle de versão Git para rastrear seu trabalho.
- Usar a linha de comando para navegar em seus arquivos e pastas.
- Usar o Postman para testar os endpoints da API.

## Pré-requisitos

Antes de começar a usar esta API, certifique-se de ter os seguintes pré-requisitos instalados:

- Linha de comando e navegação de arquivos.
- Javascript.
- Node.js.
- Express.
- Git e GitHub.
- Postman.

## Uso da API

Para começar a usar a API, siga estas etapas:

1. Clone este repositório em seu sistema local usando o seguinte comando:

git clone <URL_DO_SEU_REPOSITORIO>

csharp
Copy code

2. Instale as dependências do projeto com o comando:

npm install

markdown
Copy code

3. Inicie o servidor da API com o comando:

npm start

bash
Copy code

4. Você pode agora acessar a API localmente em [http://localhost:4001/envelopes](http://localhost:4001/envelopes) e começar a gerenciar seus envelopes de orçamento.

## Exemplos de Uso

Aqui estão alguns exemplos de como usar a API:

- Para obter todos os envelopes de orçamento, faça uma solicitação GET para `/envelopes`.

- Para criar um novo envelope de orçamento, faça uma solicitação POST para `/envelopes` com os dados necessários.

- Para atualizar um envelope de orçamento específico, faça uma solicitação PUT para `/envelopes/:id/usemoney`.

- Para excluir um envelope de orçamento, faça uma solicitação DELETE para `/envelopes/:id`.

- Para transferir fundos entre envelopes, faça uma solicitação POST para `/envelopes/transfer/:from/:to`.

Lembre-se de que você deve fornecer os dados necessários e seguir as convenções apropriadas ao fazer solicitações para a API.

## Contribuição

Este projeto foi criado especialmente para praticar as tecnologias e será aprimorado ao longo do tempo com o objetivo de ter uso real e ampliado. O projeto foi sugerido pelo curso do Codecademy.

Se você deseja contribuir com melhorias para este projeto, sinta-se à vontade para fazer um fork deste repositório, criar um novo branch para suas alterações e abrir um pedido de pull (Pull Request) para revisão. Estaremos felizes em analisar suas contribuições.

## Autor

Criado por Guido Tognini.

## Licença

Este projeto está licenciado sob a Licença MIT.

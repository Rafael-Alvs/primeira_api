Endpoints

Endpoints
=========

Criar Usuário
-------------

**Método:** POST

**URL:** /usuarios

**Corpo:** JSON contendo os campos nome, email, telefone e senha.

**Resposta:** JSON com o usuário criado ou um erro 500 em caso de falha.

### Exemplo de JSON:

    {
      "nome": "João da Silva",
      "email": "joao@example.com",
      "telefone": "(11) 98765-4321",
      "senha": "minhaSenhaForte"
    }

_Use o código com cuidado._

Ler Usuário por ID
------------------

**Método:** GET

**URL:** /usuarios/:id

**Resposta:** JSON com o usuário encontrado ou um erro 404 se não existir.

Ler Todos os Usuários
---------------------

**Método:** GET

**URL:** /usuarios

**Resposta:** JSON com um array de todos os usuários ou um erro 500 em caso de falha.

Atualizar Usuário
-----------------

**Método:** PUT

**URL:** /usuarios/:id

**Corpo:** JSON contendo os campos a serem atualizados.

**Resposta:** JSON com o usuário atualizado ou um erro 404 se não existir.

Excluir Usuário
---------------

**Método:** DELETE

**URL:** /usuarios/:id

**Resposta:** Status 200 em caso de sucesso ou um erro 404 se o usuário não existir.



# Implementação básica do Graphql

### <strong>Como usar</strong>

```shell
    docker run --name graphql-crud -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
    populate .env
    yarn install
    yarn migration:run
    yarn dev
```

# API

### <strong>Ideia</strong>
A ideia é ver o graphql de forma bem simplificada em funcionamento.

### <strong>Rota criada</strong>

```shell
http://localhost:8000/graphql
```


### <strong>Exemplos de chamada</strong>

## Listagem de usuários:
```shel
Com o graphql é possível escolher oque deseja retornar, então caso queira todos os campos pode executar da forma abaixo

query {
  lstUsers{
    name,
    id,
    email
  }
}

Se quiser listar apenas os e-mails, usaremos a mesma rota, porém iremos chamar da seguinte forma

query {
  lstUsers{
    email
  }
}

E assim sucessivamente para todos campos
```

## Adicionar usuário:
```shel
Assim como o listar podemos escolher os dados que a rota irá retornar, com isso basta escolher os campos a serem retornados, caso queira todos campos, execute da seguinte forma:

mutation {
  addUser(name: "any_name", email: "any_email@email.com", password: "any_password"){
    id,
    name,
    email
  }
}
```

## Deletar usuário de usuários:
```shel
mutation {
  delUser(id: 15)
}
```

## Atualizar usuário:
```shel
mutation {
  updUser(id: 8, name: "any_name")
}
```
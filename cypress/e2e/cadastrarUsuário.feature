# language: pt

Funcionalidade: Cadastrar usuário
Como uma pessoa qualquer
Desejo me cadastrar no sistema
Para conseguir avaliar filmes

Contexto: Deve ter acessado a funcionalidade de cadastro
Dado que acessei a página de cadastro de usuário

Cenário: cadastro de novo usuário informando os dados cadastrais
Quando informar um novo nome válido
E informar um novo e-mail válido
E informar a senha
E informar a confirmação de senha
E confirmar a operação
Então o usuário será cadastrado com sucesso


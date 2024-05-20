# language: pt

Funcionalidade: Logar usuário no sistema
Como um usuário com registro no sistema
Desejo efetuar login para poder gerenciar
minhas informações ou gerenciar o sistema.

@ignore
Cenário: Deve ser possível logar com e-mail e senha válidos
Dado que possuo um usuário já cadastrado no sistema
Quando informar o e-mail
E a senha
E confirmar a operação
Então o usuário será direcionado para página inicial

Cenário: Não deve ser possível logar sem preencher o campo e-mail
Dado que possuo um usuário já cadastrado no sistema

Cenário: Não deve ser possível logar sem preencher o campo senha
Dado que possuo um usuário já cadastrado no sistema

Esquema do Cenário: Não deve ser possível logar com e-mail inválido
Dado que possuo um usuário já cadastrado no sistema

Cenário: Não deve ser possível logar com um usuário não cadastrado
Dado que não possuo um usuário cadastrado no sistema








            # language: pt

            Funcionalidade: Logar usuário no sistema
            Como um usuário com registro no sistema
            Desejo efetuar login para poder gerenciar
            minhas informações ou gerenciar o sistema.

            @novoUsuario
            Cenário: Deve ser possível logar com um usuário já cadastrado
            Dado que possuo um usuário já cadastrado no sistema
            Quando informar o e-mail
            E informar a senha
            E confirmar a operação
            Então o usuário será direcionado para página inicial

            @novoUsuario
            Cenário: Não deve ser possível logar sem preencher o campo e-mail
            Dado que estou na página inicial de login
            Quando não informar o e-mail
            E informar a senha
            E confirmar a operação
            Então o usuário irá ver a mensagem de alerta "Informe o e-mail"

            @novoUsuario
            Cenário: Não deve ser possível logar sem preencher o campo senha
            Dado que estou na página inicial de login
            Quando informar o e-mail
            E não informar a senha
            E confirmar a operação
            Então o usuário irá ver a mensagem de alerta "Informe a senha"

            @novoUsuario
            Cenário: Não deve ser possível logar com um usuário não cadastrado
            Dado que estou na página inicial de login
            Quando informar um novo e-mail
            E informar a senha
            E confirmar a operação
            Então o usuário não será logado

            @novoUsuario
            Esquema do Cenário: Não deve ser possível logar com um e-mail inválido
            Dado que estou na página inicial de login
            Quando informar o e-mail "<email>"
            E informar a senha
            E confirmar a operação
            Então o usuário não será logado
            Exemplos:
            | email    |
            | ema      |
            | eriko@qa |
            | @pum     |
            | @        |
            | @.com    |
            | .com     |












            # language: pt

            Funcionalidade: Cadastrar usuário
            Como uma pessoa qualquer
            Desejo me cadastrar no sistema
            Para conseguir avaliar filmes

            Contexto: Deve ter acessado a funcionalidade de cadastro
            Dado que acessei a página de cadastro de usuário


            Cenário: Deve ser possível cadastrar um novo usuário informando os dados cadastrais obrigatórios
            Quando informar um novo nome válido
            E informar um novo e-mail válido
            E informar a senha
            E informar a confirmação de senha
            E confirmar a operação
            Então o usuário será cadastrado com sucesso


            Cenário: Não deve ser possível cadastrar um usuário com e-mail já cadastrado por outro usuário
            Quando informar um novo nome válido
            E informar um email que já está cadastrado
            E informar a senha
            E informar a confirmação de senha
            E confirmar a operação
            Então irei visualizar a mensagem de erro "E-mail já cadastrado. Utilize outro e-mail"


            Esquema do Cenário: Não deve ser possível cadastrar usuários com e-mails inválidos
            Quando informar um novo nome válido
            E informar o e-mail "<email>"
            E informar a senha
            E informar a confirmação de senha
            E confirmar a operação
            Então o usuário não será cadastrado
            Exemplos:
            | email    |
            | emaiu    |
            | email@qa |
            | @qa      |
            | @        |
            | @.com    |
            | .com     |


            Esquema do Cenário: Deve ser possível cadastrar usuários com qualquer tipo de Nome na plataforma
            Quando informar o nome "<nome>"
            E informar um novo e-mail válido
            E informar a senha
            E informar a confirmação de senha
            E confirmar a operação
            Então o usuário será cadastrado com sucesso
            Exemplos:
            | nome     |
            | Érik(o)  |
            | Thais*#  |
            | E#!&x    |
            | Ursu@    |
            | LUan(a)  |
            | Wesle(y) |


Cenário:Ao cadastrar um novo usuário, ele sempre será do tipo 0 = comum
Quando informar um novo nome válido
E informar um novo e-mail válido
E informar a senha
E informar a confirmação de senha
E confirmar a operação
Então o usuário será cadastrado com sucesso
E será do tipo 0


Cenário: Não deve ser possível cadastrar um usuário sem preencher os campos obrigatórios
Quando não informar um novo nome válido
E não informar um novo e-mail válido
E não informar a senha
E não informar a confirmação de senha
E confirmar a operação
Então o usuário deverá ver as mensagens dos campos obrigatórios e não será cadastrado


Cenário: Não deve ser possível cadastrar um nome com mais de 102 caracteres
Quando informar um novo nome com mais de 101 caracteres
E informar um novo e-mail válido
E informar a senha
E informar a confirmação de senha
E confirmar a operação
Então o usuário não será cadastrado


Cenário: Não deve ser possível cadastrar um e-mail com mais de 56 caracteres
Quando informar um novo nome válido
E informar um novo e-mail com 56 caracteres
E informar a senha
E informar a confirmação de senha
E confirmar a operação
Então o usuário não será cadastrado


Cenário: Não deve ser possível cadastrar um usuário com as senhas diferentes
Quando informar um novo nome válido
E informar um novo e-mail com 56 caracteres
E informar a senha
E informar a confirmação de senha com uma senha diferente
E confirmar a operação
Então o usuário irá verificar a mensagem "As senhas devem ser iguais."


Cenário: Não deve ser possível cadastrar um usuário com menos de 6 dígitos no campos senha e confirmação de senha
Quando informar um novo nome válido
E informar um novo e-mail válido
E informar a senha com 5 dígitos
E informar a confirmação de senha com 5 dígitos
E confirmar a operação
Então o usuário irá verificar a mensagem "A senha deve ter pelo menos 6 dígitos."





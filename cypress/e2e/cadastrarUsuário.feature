            # language: pt

            Funcionalidade: Cadastrar usuário
            Como uma pessoa qualquer
            Desejo me cadastrar no sistema
            Para conseguir avaliar filmes

            Contexto: Deve ter acessado a funcionalidade de cadastro
            Dado que acessei a página de cadastro de usuário

            @ignore
            Cenário: Deve ser possível cadastrar um novo usuário informando os dados cadastrais obrigatórios
            Quando informar um novo nome válido
            E informar um novo e-mail válido
            E informar a senha
            E informar a confirmação de senha
            E confirmar a operação
            Então o usuário será cadastrado com sucesso

            @ignore
            Cenário: Não deve ser possível cadastrar um usuário com e-mail já cadastrado por outro usuário
            Quando informar um novo nome válido
            E informar um email que já está cadastrado
            E informar a senha
            E informar a confirmação de senha
            E confirmar a operação
            Então irei visualizar a mensagem de erro "E-mail já cadastrado. Utilize outro e-mail"

            @ignore
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

            @ignore
            Esquema do Cenário: Deve ser possível cadastrar usuários com qualquer tipo de Nome na plataforma
            Quando informar o nome "<nome>"
            E informar um novo e-mail válido
            E informar a senha
            E informar a confirmação de senha
            E confirmar a operação
            Então o usuário será cadastrado com sucesso
            Exemplos:
            | nome     |
            | Erik(o)  |
            | Thais*#  |
            | E#!&x    |
            | Ursu@    |
            | LUan(a)  |
            | Wesle(y) |

@ignore
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
Então o usuário deverá as mensagens dos campos obrigatórios






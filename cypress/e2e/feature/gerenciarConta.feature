# language: pt

Funcionalidade: Gerenciar conta de usuários
Como um usuário do sistema
Desejo poder gerenciar minha conta
Para ter controle sobreminhas informações

Contexto: Apenas um usuário autenticado pode acessar a edição de informações
Dado que possuo um usuário logado no sistema


@NovoUsuario
Cenário: Apenas usuários cadastrados tem acesso ao gerenciamento de contas
Quando selecionar o campo perfil
E selecionar o campo Gerenciar conta
Então terei acesso ao gerenciamento da conta logada

@NovoUsuario
Cenário: Deve ser possível um usuário comum alterar apenas as próprias informações
E acessar o gerenciamento de contas
Quando editar as informações de nome e senha
E salvar a operação
Então os dados serão alterados com sucesso








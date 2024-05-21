# language: pt

Funcionalidade: Gerenciar conta de usuários
Como um usuário do sistema
Desejo poder gerenciar minha conta
Para ter controle sobreminhas informações

Contexto: Apenas um usuário autenticado pode acessar a edição de informações
Dado que possuo um usuário logado no sistema


@NovoUsuario
Cenário: Deve ser possível vizualizar todas as informações relevantes do usuário quando estiver editando seu perfil.
Quando selecionar o campo perfil
E selecionar o campo Gerenciar conta
Então terei acesso ao gerenciamento da conta logada e as informações do usuário

@NovoUsuario
Cenário: Deve ser possível um usuário comum alterar apenas suas próprias informações
E acessar o gerenciamento de contas
Quando editar as informações de nome e senha
E salvar a operação
Então os dados serão alterados com sucesso

@NovoUsuario
Cenário: Não deve ser possível atualizar a senha com menos de 6 dígitos
E acessar o gerenciamento de contas
Quando editar o nome
E editar a senha para uma senha com 5 dígitos
E salvar a operação
Então o usuário vizualizará as mensagens "A senha deve ter pelo menos 6 dígitos"

@NovoUsuario
Cenário: Não deve ser possível editar os campos de senha e confirmar senha com dados diferentes
E acessar o gerenciamento de contas
Quando editar o campo senha diferente do campo confirma senha
E salvar a operação
Então o usuário vizualizará uma mensagens "As senhas devem ser iguais."

@NovoUsuario
Cenário: não deve ser possível salvar uma edição sem preencher os campos senha e confirmar senha
E acessar o gerenciamento de contas
Quando não preencher os campos senha e confirmar senha
E salvar a operação
Então o usuário vizualizará as mensagens ""


















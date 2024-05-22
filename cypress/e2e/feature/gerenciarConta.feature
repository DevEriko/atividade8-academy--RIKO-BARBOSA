# language: pt

@NovoUsuario
Funcionalidade: Gerenciar conta de usuários
Como um usuário do sistema
Desejo poder gerenciar minha conta
Para ter controle sobreminhas informações


Cenário: Deve ser possível como usuário comum vizualizar todas as informações relevantes do usuário quando estiver editando seu perfil.
Dado que possuo um usuário comum logado no sistema
Quando selecionar o campo perfil
E selecionar o campo Gerenciar conta
Então terei acesso ao gerenciamento da conta logada e as informações do usuário


Cenário: Deve ser possível um usuário comum alterar apenas suas próprias informações
Dado que possuo um usuário comum logado no sistema
E acessar o gerenciamento de contas
Quando editar as informações de nome e senha
E salvar a operação
Então os dados serão alterados com sucesso


Cenário: Não deve ser possível como usuário comum atualizar a senha com menos de 6 dígitos
Dado que possuo um usuário comum logado no sistema
E acessar o gerenciamento de contas
Quando editar o nome
E editar a senha para uma senha com 5 dígitos
E salvar a operação
Então o usuário vizualizará as mensagens "A senha deve ter pelo menos 6 dígitos"


Cenário: Não deve ser possível como usuário comum editar os campos de senha e confirmar senha com dados diferentes
Dado que possuo um usuário comum logado no sistema
E acessar o gerenciamento de contas
Quando editar o campo senha diferente do campo confirma senha
E salvar a operação
Então o usuário vizualizará uma mensagens "As senhas devem ser iguais."


Cenário: não deve ser possível como usuário comum salvar uma edição sem preencher os campos senha e confirmar senha
Dado que possuo um usuário comum logado no sistema
E acessar o gerenciamento de contas
Quando não preencher os campos senha e confirmar senha
E salvar a operação
Então o usuário vizualizará as mensagens ""





Cenário: Deve ser possível como usuário crítico vizualizar todas as informações relevantes do usuário quando estiver editando seu perfil.
Dado que possuo um usuário crítico logado no sistema
Quando selecionar o campo perfil
E selecionar o campo Gerenciar conta
Então terei acesso ao gerenciamento da conta logada e as informações do usuário


Cenário: Deve ser possível um usuário crítico alterar apenas suas próprias informações
Dado que possuo um usuário crítico logado no sistema
E acessar o gerenciamento de contas
Quando editar as informações de nome e senha
E salvar a operação
Então os dados serão alterados com sucesso


Cenário: Não deve ser possível como usuário crítico atualizar a senha com menos de 6 dígitos
Dado que possuo um usuário crítico logado no sistema
E acessar o gerenciamento de contas
Quando editar o nome
E editar a senha para uma senha com 5 dígitos
E salvar a operação
Então o usuário vizualizará as mensagens "A senha deve ter pelo menos 6 dígitos"


Cenário: Não deve ser possível como usuário crítico editar os campos de senha e confirmar senha com dados diferentes
Dado que possuo um usuário crítico logado no sistema
E acessar o gerenciamento de contas
Quando editar o campo senha diferente do campo confirma senha
E salvar a operação
Então o usuário vizualizará uma mensagens "As senhas devem ser iguais."


Cenário: não deve ser possível como usuário crítico salvar uma edição sem preencher os campos senha e confirmar senha
Dado que possuo um usuário crítico logado no sistema
E acessar o gerenciamento de contas
Quando não preencher os campos senha e confirmar senha
E salvar a operação
Então o usuário vizualizará as mensagens ""





Cenário: Deve ser possível como um usuário administrador vizualizar todas as informações relevantes do usuário quando estiver editando seu perfil.
Dado que possuo um usuário administrador logado no sistema
Quando selecionar o campo perfil
E selecionar o campo Gerenciar conta
Então terei acesso ao gerenciamento da conta logada e as informações do usuário


Cenário: Deve ser possível um usuário administrador alterar apenas suas próprias informações
Dado que possuo um usuário administrador logado no sistema
E acessar o gerenciamento de contas
Quando editar as informações de nome e senha
E salvar a operação
Então os dados serão alterados com sucesso


Cenário: Não deve ser possível como um usuário administrador atualizar a senha com menos de 6 dígitos
Dado que possuo um usuário administrador logado no sistema
E acessar o gerenciamento de contas
Quando editar o nome
E editar a senha para uma senha com 5 dígitos
E salvar a operação
Então o usuário vizualizará as mensagens "A senha deve ter pelo menos 6 dígitos"


Cenário: Não deve ser possível como um usuário administrador editar os campos de senha e confirmar senha com dados diferentes
Dado que possuo um usuário administrador logado no sistema
E acessar o gerenciamento de contas
Quando editar o campo senha diferente do campo confirma senha
E salvar a operação
Então o usuário vizualizará uma mensagens "As senhas devem ser iguais."


Cenário: não deve ser possível como um usuário administrador salvar uma edição sem preencher os campos senha e confirmar senha
Dado que possuo um usuário administrador logado no sistema
E acessar o gerenciamento de contas
Quando não preencher os campos senha e confirmar senha
E salvar a operação
Então o usuário vizualizará as mensagens ""























import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import GerenciarContaPage from "../pages/gerenciarConta.page";
import { fakerPT_BR } from "@faker-js/faker";
const paginaGerenciar = new GerenciarContaPage();
var emailUsuario;
var tokenUsuario;
var id;


Before({ tags: "@NovoUsuario" }, () => {
    var nome = fakerPT_BR.person.firstName() + "ão";
    var email = fakerPT_BR.internet.email();
    cy.request({
        method: "POST",
        url: "https://raromdb-3c39614e42d4.herokuapp.com/api/users",
        body: {
            name: nome,
            email: email,
            password: "123456",
        },
    }).as('usuarioCadastrado').then((response) => {
        id = response.body.id;
        emailUsuario = response.body.email;
    });
});

Before(function () {
    cy.visit("/login");
    cy.get("@usuarioCadastrado").then(function (usuario) {
        paginaGerenciar.typeEmail(usuario.body.email);
        paginaGerenciar.typeSenha("123456");
        paginaGerenciar.clickButtonLogin();
    });
});

Given('que possuo um usuário comum logado no sistema', function () {
    cy.visit('/login')
    cy.get('@usuarioCadastrado').then(function (usuario) {
        paginaGerenciar.typeEmail(usuario.body.email)
        paginaGerenciar.typeSenha('123456')
        paginaGerenciar.clickButtonLogin()
    })
})

Given('que possuo um usuário crítico logado no sistema', function () {
    cy.request({
        method: "POST",
        url: "https://raromdb-3c39614e42d4.herokuapp.com/api/auth/login",
        body: {
            email: emailUsuario,
            password: "123456",
        },
    })
        .as("usuarioLogado")
        .then((response) => {
            tokenUsuario = response.body.accessToken;
            cy.request({
                method: "PATCH",
                url: "https://raromdb-3c39614e42d4.herokuapp.com/api/users/apply",
                headers: {
                    Authorization: "Bearer " + tokenUsuario,
                },
            }).as("usuarioCrítico");
        });
})

Given('que possuo um usuário administrador logado no sistema', function () {
    cy.request({
        method: "POST",
        url: "https://raromdb-3c39614e42d4.herokuapp.com/api/auth/login",
        body: {
            email: emailUsuario,
            password: "123456",
        },
    })
        .as("usuarioLogado")
        .then((response) => {
            tokenUsuario = response.body.accessToken;
            cy.request({
                method: "PATCH",
                url: "https://raromdb-3c39614e42d4.herokuapp.com/api/users/admin",
                headers: {
                    Authorization: "Bearer " + tokenUsuario,
                },
            }).as("usuarioAdmin");
        });
})

When('selecionar o campo perfil', function () {
    cy.get(paginaGerenciar.linkPerfil).click();
})

When('selecionar o campo Gerenciar conta', function () {
    cy.get(paginaGerenciar.linkGerenciarConta).click();
})

When('acessar o gerenciamento de contas', function () {
    cy.get(paginaGerenciar.linkPerfil).click();
    cy.get(paginaGerenciar.linkGerenciarConta).click();
})

When('editar as informações de nome e senha', function () {
    cy.get(paginaGerenciar.inputNome).clear();
    paginaGerenciar.typeNome('José das Coves')
    paginaGerenciar.clickButtonAlterarSenha();
    paginaGerenciar.typeSenha('333888')
    cy.get(paginaGerenciar.inputConfirmaSenha).click();
    paginaGerenciar.typeConfirmaSenha('333888')

})

When('salvar a operação', function () {
    paginaGerenciar.clickButtonSalvar();
})

When('editar o nome', function () {
    cy.get(paginaGerenciar.inputNome).clear();
    paginaGerenciar.typeNome('#Ranço')
})

When('editar a senha para uma senha com 5 dígitos', function () {
    paginaGerenciar.clickButtonAlterarSenha();
    paginaGerenciar.typeSenha('12345')
    cy.get(paginaGerenciar.inputConfirmaSenha).click();
    paginaGerenciar.typeConfirmaSenha('12345')
})

When('editar o campo senha diferente do campo confirma senha', function () {
    paginaGerenciar.clickButtonAlterarSenha();
    paginaGerenciar.typeSenha('123456')
    cy.get(paginaGerenciar.inputConfirmaSenha).click();
    paginaGerenciar.typeConfirmaSenha('456789')
})

When('não preencher os campos senha e confirmar senha', function () {
    paginaGerenciar.clickButtonAlterarSenha();
});

Then('os dados serão alterados com sucesso', function () {
    cy.get(paginaGerenciar.labelSucesso).should('contain', 'Sucesso')
    cy.get(paginaGerenciar.labelAtualizado).should('contain', 'Informações atualizadas!')
})

Then('terei acesso ao gerenciamento da conta logada e as informações do usuário', function () {
    cy.get(paginaGerenciar.labelContaUsuario).should('be.visible');
})

Then('o usuário vizualizará uma mensagens {string}', function (mensagem) {
    cy.get(paginaGerenciar.labelCampoConfirmaSenha).should('contain', mensagem)
})

Then('o usuário vizualizará as mensagens {string}', function (mensagem) {
    cy.get(paginaGerenciar.labelCampoSenha).should('contain', mensagem)
    cy.get(paginaGerenciar.labelCampoConfirmaSenha).should('contain', mensagem)
})





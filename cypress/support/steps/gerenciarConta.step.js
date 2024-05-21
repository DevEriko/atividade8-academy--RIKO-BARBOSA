import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import GerenciarContaPage from "../pages/gerenciarConta.page";
import { fakerPT_BR } from "@faker-js/faker";
const paginaGerenciar = new GerenciarContaPage();


Before({ tags: "@NovoUsuario" }, () => {
    var nome = fakerPT_BR.person.firstName() + " ão";
    var email = fakerPT_BR.internet.email();
    cy.request({
        method: "POST",
        url: "https://raromdb-3c39614e42d4.herokuapp.com/api/users",
        body: {
            name: nome,
            email: email,
            password: "123456",
        },
    }).as('usuarioCadastrado')
});

Given('que possuo um usuário logado no sistema', function () {
    cy.get('@usuarioCadastrado').then(function (usuario) {
        cy.visit('/login')
        let email = usuario.body.email
        cy.log(usuario)
        paginaGerenciar.typeEmail(email)
        paginaGerenciar.typeSenha('123456')
        paginaGerenciar.clickButtonLogin()
    })
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

})

Then('terei acesso ao gerenciamento da conta logada', function () {
    cy.get(paginaGerenciar.labelAtualizeSuaConta).should('contain', 'Atualize informações da sua conta.');
})


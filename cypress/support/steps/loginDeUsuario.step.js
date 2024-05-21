import { Given, When, Then, before } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/loginDeUsuario.page';
import { fakerPT_BR } from "@faker-js/faker";
const paginaLogin = new LoginPage();
var email = fakerPT_BR.internet.email();
var nome = fakerPT_BR.person.firstName() + "ão";

Given('que possuo um usuário já cadastrado no sistema', function () {
    cy.request({
        method: "POST",
        url: 'https://raromdb-3c39614e42d4.herokuapp.com/api/users',
        body: {
            name: nome,
            email: email,
            password: '123456'
        },
    }).as("usuarioCadastrado");
});

Given('que estou na página inicial de login', function () {
    cy.visit('https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/login')
})

When('informar o e-mail', function () {
    cy.visit('https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/login')
    paginaLogin.typeEmail(email)

});

When('informar a senha', function () {
    paginaLogin.typeSenha('123456')
});

When('confirmar a operação', function () {
    paginaLogin.clickButtonLogin();
});

When('não informar o e-mail', function () { });

When('não informar a senha', function () { });

When('informar o e-mail {string}', function (email) {
    paginaLogin.typeEmail(email)
})

When('informar um novo e-mail', function () {
    paginaLogin.typeEmail('ninja@emailtotalmentealeatorio.com.br')
})

Then('o usuário será direcionado para página inicial', function () {
    cy.url().should('eq', 'https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/')
})

Then('o usuário irá ver a mensagem de alerta {string}', function (mensagem) {
    cy.get(paginaLogin.labelAlerta).should('contain', mensagem)
})

Then('o usuário não será logado', function () {
    cy.get(paginaLogin.labelFalhaAutenticar).should('contain', 'Falha ao autenticar');
    cy.get(paginaLogin.labelInvalido).should('contain', 'Usuário ou senha inválidos.');
})


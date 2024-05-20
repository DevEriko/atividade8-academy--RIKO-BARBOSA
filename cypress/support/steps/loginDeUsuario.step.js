import { Given, When, Then, Before } from '@badeball/cypress-cucumber-preprocessor';
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
})

When('informar o e-mail', function () {
    cy.visit('https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/login')
    paginaLogin.typeEmail(email)
});

When('a senha', function () {
    paginaLogin.typeSenha('123456')
})

When('confirmar a operação', function () {
    paginaLogin.clickButtonLogin();
})

Then('o usuário será direcionado para página inicial', function () {
    cy.url().should('eq', 'https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/')
})
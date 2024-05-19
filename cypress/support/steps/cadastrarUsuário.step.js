import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";

Given('que acessei a página de cadastro de usuário', function () {
    cy.visit('/register');
})

When('informar um novo nome válido', function () {

});

When('informar um novo e-mail válido', function () { });

When('informar a senha e a confirmação de senha', function () { });

When('confirmar a operação', function () { });

Then('o usuário será cadastrado com sucesso', function () { });
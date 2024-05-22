import { fakerPT_BR } from "@faker-js/faker";
var id;
var email;
var token;

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("newUser", function () {
    var novoNome = fakerPT_BR.person.firstName() + "ão";
    var novoEmail = fakerPT_BR.internet.email();
    return cy.request({
        method: "POST",
        url: "https://raromdb-3c39614e42d4.herokuapp.com/api/users",
        body: {
            name: novoNome,
            email: novoEmail,
            password: "123456",
        },
    }).as('usuarioCadastrado').then(function (response) {
        id = response.body.id;
        email = response.body.email;
    });
});
Cypress.Commands.add("deleteUser", function () {
    cy.request({
        method: "POST",
        url: "https://raromdb-3c39614e42d4.herokuapp.com/api/auth/login",
        body: {
            email: email,
            password: "123456",
        },
    })
        .as("logarUsuario")
        .then((response) => {
            token = response.body.accessToken;
            cy.request({
                method: "PATCH",
                url: "https://raromdb-3c39614e42d4.herokuapp.com/api/users/admin",
                headers: {
                    Authorization: "Bearer " + token,
                },
            }).as("promoverAdmin");
        }).then((response) => {
            cy.request({
                method: "DELETE",
                url: "https://raromdb-3c39614e42d4.herokuapp.com/api/users/" + id,
                headers: {
                    Authorization: "Bearer " + token,
                },
            }).as("deletarUsuario");
        });
});

Cypress.Commands.add("userExixst", function () {
    cy.intercept("POST", "https://raromdb-3c39614e42d4.herokuapp.com/api/users", {
        statusCode: 409,
        body: {
            message: "Email already in use",
            error: "Conflict",
        },
    });
});
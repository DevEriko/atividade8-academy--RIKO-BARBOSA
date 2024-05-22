import { Given, When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor";
import CadastroPage from "../pages/paginaCadastro.page";
import { fakerPT_BR } from "@faker-js/faker";
const paginaCadastro = new CadastroPage();

Given('que acessei a página de cadastro de usuário', function () {
    cy.visit('/register');
})

When('informar um novo nome válido', function () {
    const nome = fakerPT_BR.person.firstName();
    cy.wrap(nome).as('nomeValido')
    paginaCadastro.typeNome(nome)
});

When('informar um novo e-mail válido', function () {
    const email = fakerPT_BR.internet.email();
    cy.wrap(email).as('emailValido')
    paginaCadastro.typeEmail(email)
});

When('informar a senha', function () {
    paginaCadastro.typeSenha('123456')
});

When('informar a confirmação de senha', function () {
    paginaCadastro.typeConfirmaSenha('123456')
});

When('confirmar a operação', function () {
    cy.intercept('POST', 'https://raromdb-3c39614e42d4.herokuapp.com/api/users').as('postUser')
    paginaCadastro.clickButtonCadastrar();
});

When('informar o e-mail {string}', function (email) {
    paginaCadastro.typeEmail(email);
})

When('informar o nome {string}', function (nome) {
    paginaCadastro.typeNome(nome)
})

When('informar um email que já está cadastrado', function () {
    cy.intercept('POST',
        'https://raromdb-3c39614e42d4.herokuapp.com/api/users', {
        statusCode: 409,
        body: {
            message: 'Email already in use',
            error: 'Conflict',
        },
    }).as('postUser')
    paginaCadastro.typeEmail(fakerPT_BR.internet.email())
})

When('será do tipo 0', function () {
    cy.wait('@postUser').then(function (interceptado) {
        var corpo = interceptado.response.body;
        var nome = corpo.name;
        var email = corpo.email;
        var type = corpo.type;
        cy.wrap(nome).should('equal', this.nomeValido)
        cy.wrap(email).should('equal', this.emailValido)
        cy.wrap(type).should('equal', 0)
    })
});

When('logar na conta de um usuário cadastrado', function () {
    cy.visit("/login");

})

When('não informar um novo nome válido', function () { });
When('não informar um novo e-mail válido', function () { });
When('não informar a senha', function () { });
When('não informar a confirmação de senha', function () { });
Then('o usuário deverá ver as mensagens dos campos obrigatórios e não será cadastrado', function () {
    cy.get(paginaCadastro.labelErroNome).should('contain', 'Informe o nome')
    cy.get(paginaCadastro.labelErroEmail).should('contain', 'Informe o e-mail')
    cy.get(paginaCadastro.labelErroSenha).should('contain', 'Informe a senha')
    cy.get(paginaCadastro.labelErroConfSenha).should('contain', 'Informe a senha')

})

When('informar um novo nome com mais de 101 caracteres', function () {
    const nome = Cypress._.repeat('ha', 51);
    paginaCadastro.typeNome(nome);
})

When('informar um novo e-mail com 56 caracteres', function () {
    const email = Cypress._.repeat('ha', 28);
    paginaCadastro.typeEmail(email);
})

When('informar a confirmação de senha com uma senha diferente', function () {
    paginaCadastro.typeConfirmaSenha('456789');
})

When('informar a senha com 5 dígitos', function () {
    paginaCadastro.typeSenha('12345')
})

When('informar a confirmação de senha com 5 dígitos', function () {
    paginaCadastro.typeConfirmaSenha('12345')
})

Then('o usuário será cadastrado com sucesso', function () {
    cy.get(paginaCadastro.mensagemSucesso).should('contain', 'Sucesso');
    cy.get(paginaCadastro.mensagemCadastroSucesso).should('contain', 'Cadastro realizado!');
    paginaCadastro.clicButtonOk();
});

Then('o usuário não será cadastrado', function () {
    cy.get(paginaCadastro.mensagemFalhaNoCadastro).should('contain', 'Falha no cadastro.');
    cy.get(paginaCadastro.mensagemNaoCadastrou).should('contain', 'Não foi possível cadastrar o usuário.');
});

Then('irei visualizar a mensagem de erro {string}', function (mensagem) {
    cy.get(paginaCadastro.mensagemFalhaNoCadastro).should('contain', 'Falha no cadastro.');
    cy.get(paginaCadastro.mensagemNaoCadastrou).should('contain', mensagem);
    paginaCadastro.clicButtonOk();
});

Then('o usuário irá verificar a mensagem {string}', function (mensagem) {
    cy.get(paginaCadastro.labelErroConfSenha).should('contain', mensagem)
})


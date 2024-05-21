export default class GerenciarContaPage {
    inputNome = '[name="name"]'
    inputEmail = '[name="email"]'
    inputSenha = '[name="password"]'
    inputConfirmaSenha = ':nth-child(6) > .profile-input'
    buttonLogin = '.login-button'

    linkPerfil = '[href="/profile"]'
    linkGerenciarConta = '[href="/account"]'

    labelContaUsuario = '.account-container'
    labelAlterarSenha = '.account-password-button'
    labelSalvar = '.account-save-button'

    labelSucesso = '.modal-body > h3'
    labelAtualizado = '.error-message'

    labelCampoSenha = ':nth-child(5) > .input-error'
    labelCampoConfirmaSenha = ':nth-child(6) > .input-error'

    typeNome(name) {
        cy.get(this.inputNome).type(name);
    }

    typeEmail(email) {
        cy.get(this.inputEmail).type(email);
    }

    typeSenha(password) {
        cy.get(this.inputSenha).type(password)
    }

    typeConfirmaSenha(password) {
        cy.get(this.inputConfirmaSenha).type(password)
    }

    clickButtonLogin() {
        cy.get(this.buttonLogin).click();
    }

    clickButtonAlterarSenha() {
        cy.get(this.labelAlterarSenha).click();
    }

    clickButtonSalvar() {
        cy.get(this.labelSalvar).click();
    }
}
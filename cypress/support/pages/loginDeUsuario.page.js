export default class LoginPage {
    inputEmail = '[name="email"]'
    inputSenha = '[name="password"]'

    buttonLogin = '.login-button'



    typeEmail(email) {
        cy.get(this.inputEmail).type(email);
    }

    typeSenha(password) {
        cy.get(this.inputSenha).type(password)
    }

    clickButtonLogin() {
        cy.get(this.buttonLogin).click();
    }
}


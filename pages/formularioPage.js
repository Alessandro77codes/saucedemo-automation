class FormularioPage {

    acessarSite() {
        cy.visit('https://demoqa.com/automation-practice-form')
    }

    preencherNome(nome) {
        cy.get('#firstName')
          .should('be.visible')
          .clear()
          .type(nome)
    }

    preencherSobrenome(sobrenome) {
        cy.get('#lastName')
          .should('be.visible')
          .clear()
          .type(sobrenome)
    }

    preencherEmail(email) {
        cy.get('#userEmail')
          .should('be.visible')
          .clear()
          .type(email)
    }

    preencherGenero(genero) {
        cy.contains('label', genero)
          .should('be.visible')
          .click()
    }

    preencherCelular(celular) {
        cy.get('#userNumber')
          .should('be.visible')
          .clear()
          .type(celular)
    }

    clicarSubmit() {
        cy.get('#submit')
          .click({ force: true })
    }

    validarEnvioSucesso() {
        cy.contains('Thanks for submitting the form')
          .should('be.visible')
    }
}

export default new FormularioPage()
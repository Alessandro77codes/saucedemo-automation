describe('Login SauceDemo', () => {

    it.only('Sem usuário e sem senha', () => {

        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="login-button"]')
          .click()

        cy.get('[data-test="error"]')
          .should('contain', 'Username is required')

    })

})
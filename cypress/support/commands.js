// Comando customizado para preencher as informações iniciais do cadastro
Cypress.Commands.add('fillBasicRegistration', (nome, sobrenome, email, genero, celular) => {
    cy.get('#firstName').should('be.visible').clear().type(nome)
    cy.get('#lastName').should('be.visible').clear().type(sobrenome)
    cy.get('#userEmail').should('be.visible').clear().type(email)
    
    // Seleciona o gênero de forma dinâmica baseada no texto (ex: 'Male')
    cy.contains('label', genero).should('be.visible').click()
    
    cy.get('#userNumber').should('be.visible').clear().type(celular)
})

// Comando customizado para clicar no submit
Cypress.Commands.add('submitForm', () => {
    cy.get('#submit').click({ force: true })
})
describe('Login SauceDemo', () => {

  // Executa esse comando automaticamente antes de cada "it" rodar
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  // 1. Cenário: Sem usuário e sem senha
  it('Sem usuário e sem senha', () => {
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required')
  })

  // 2. Cenário: Login de sucesso (Caminho feliz)
  it('Login com sucesso', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
  })

  // 3. Cenário: Senha incorreta
  it('Senha incorreta', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('senha_errada')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
  })

  // 4. Cenário: Digitar só a senha (sem usuário)
  it('Digitar só a senha', () => {
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required')
  })

  // 5. Cenário: Só colocar o nome do usuário e não a senha
  it('Só colocar o nome do usuário', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Password is required')
  })

  // 6. Cenário: Senha certa com usuário errado
  it('Senha certa com usuário errado', () => {
    cy.get('[data-test="username"]').type('usuario_errado')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
  })

})
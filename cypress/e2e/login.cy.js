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

    // 1. VALIDAÇÃO: Verifica se o primeiro produto contém o nome correto
    cy.get('[data-test="inventory-item-name"]')
      .eq(0) // Primeiro item (posição 0)
      .should('be.visible')
      .and('have.text', 'Sauce Labs Backpack')

    // 2. VALIDAÇÃO: Verifica se o segundo produto contém o nome correto
    cy.get('[data-test="inventory-item-name"]')
      .eq(1) // Segundo item (posição 1)
      .should('be.visible')
      .and('have.text', 'Sauce Labs Bike Light')
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
  // 7. Cenário: Adicionar produto ao carrinho e verificar a quantidade
  it('Deve adicionar um produto ao carrinho e validar a quantidade', () => {
    // Faz o login para conseguir acessar os produtos
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // 1. Ação: Clica no botão para adicionar a mochila ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    // 2. Validação: Verifica se a notificação do carrinho ficou visível e mostra o número "1"
    cy.get('[data-test="shopping-cart-badge"]')
      .should('be.visible')
      .and('have.text', '1')
      
  })
  // 7. Cenário: Adicionar produto ao carrinho, entrar e verificar a quantidade
  it.only('Deve adicionar um produto ao carrinho, entrar na página e validar a quantidade', () => {
    // Faz o login para conseguir acessar os produtos
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // 1. Ação: Clica no botão para adicionar a mochila ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    // 2. Validação: Verifica se a notificação do carrinho ficou visível e mostra o número "1"
    cy.get('[data-test="shopping-cart-badge"]')
      .should('be.visible')
      .and('have.text', '1')

    // 3. Ação: Clica no ícone do carrinho para abrir a página de compras
    cy.get('[data-test="shopping-cart-link"]').click()

    // 4. Validação: Garante que o sistema navegou com sucesso para a página do carrinho
    cy.url().should('include', '/cart.html')
  })


// 8. Cenário: Fazer logout do sistema com sucesso
  it.only('Deve realizar o logout com sucesso através do menu lateral', () => {
    // Faz o login para entrar no sistema
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // 1. Ação: Clica no botão de menu no topo esquerdo para abrir a barra lateral
    cy.get('#react-burger-menu-btn').click()

    // 2. Ação: Clica na opção "Logout" que você inspecionou no HTML
    cy.get('[data-test="logout-sidebar-link"]').click()

    // 3. Validação: Garante que voltou para a tela inicial de login verificando a URL pura
    cy.url().should('eq', 'https://www.saucedemo.com/')
    
    // 4. Validação Extra: Garante que o botão de login está visível de novo
    cy.get('[data-test="login-button"]').should('be.visible')
  })


})
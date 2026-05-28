import { dadosFormulario } from '../fixtures/dadosFormulario'

describe('Nível Avançado - Automação DemoQA', () => {

    beforeEach(() => {
        // Como definimos a baseUrl no config, só precisamos passar a rota final
        cy.visit('/automation-practice-form')
    })

    it('Cenário 1: Cadastro com sucesso usando Comando Customizado', () => {
        // Chamando o comando que você criou no Passo 3 de forma ultra limpa!
        cy.fillBasicRegistration(
            dadosFormulario.nome,
            dadosFormulario.sobrenome,
            dadosFormulario.email,
            dadosFormulario.genero,
            dadosFormulario.celular
        )
        // observe que essa ares do codigo esta totamente limpa.  sem screeenshots,sem prints
        cy.submitForm()

        // Validação de sucesso: o modal com o texto deve aparecer
        cy.get('.modal-content').should('be.visible')
    })

    it('Cenário 2 (PROVOCANDO ERRO): Deve falhar para gerar evidência automática', () => {
        cy.fillBasicRegistration(
            dadosFormulario.nome,
            dadosFormulario.sobrenome,
            dadosFormulario.email,
            dadosFormulario.genero,
            dadosFormulario.celular
        )
        
        cy.submitForm()

        // Forçando o erro: Vamos validar um texto que NÃO existe na tela.
        // O Cypress vai esperar por 4 segundos, vai falhar e o Mochawesome vai capturar o print!
        cy.contains('Texto Errado para Forçar o Print do QA').should('be.visible')
    })
})
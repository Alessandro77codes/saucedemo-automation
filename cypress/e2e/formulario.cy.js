import { dadosFormulario } from '../fixtures/dadosFormulario'
import formularioPage from '../../pages/formularioPage'

describe('Formulário DemoQA', () => {

    it.only('Preencher formulário completo', () => {
        
        // // ARRANGE
        formularioPage.acessarSite()
        cy.screenshot('01-site-aberto')

        // // ACT
        formularioPage.preencherNome(dadosFormulario.nome)
        cy.screenshot('02-nome-preenchido')

        formularioPage.preencherSobrenome(dadosFormulario.sobrenome)
        cy.screenshot('03-sobrenome-preenchido')

        // ALTERADO: Puxando direto da fixture de dados, sem travar no cy.env
        formularioPage.preencherEmail(dadosFormulario.email)
        cy.screenshot('04-email-preenchido')

        formularioPage.preencherGenero(dadosFormulario.genero)
        cy.screenshot('05-genero-selecionado')

        // ALTERADO: Puxando direto da fixture de dados, sem travar no cy.env
        formularioPage.preencherCelular(dadosFormulario.celular)
        cy.screenshot('06-celular-preenchido')

        // // SUBMIT
        formularioPage.clicarSubmit()
        cy.screenshot('07-form-enviado')

        // // ASSERT (IMPORTANTE)
        formularioPage.validarEnvioSucesso()
    })
})
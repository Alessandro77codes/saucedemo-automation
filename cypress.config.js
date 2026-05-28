const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true, 
  screenshotOnRunFailure: true, // Tira o print AUTOMATICAMENTE só se der erro!
  screenshotsFolder: 'cypress/reports/mochawesome-report/assets', // Envia a foto direto para o relatório
  video: false, 
  
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome-report',
    overwrite: false,
    html: false, 
    json: true,
    charts: true
  },

  e2e: {
    baseUrl: 'https://demoqa.com', // <-- ATUALIZADO PARA O DEMOQA!
    setupNodeEvents(on, config) {
      on('after:screenshot', (details) => {
        return { path: details.path }
      })
    },
  },
});
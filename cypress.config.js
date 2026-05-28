const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  video:true,
   screenshotOnRunFailure: true,


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

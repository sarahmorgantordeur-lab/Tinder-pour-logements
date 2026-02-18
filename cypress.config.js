const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "hkg3fg",
  allowCypressEnv: false,

  e2e: {
    baseUrl: "http://localhost:5173",
    specPattern: "client/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    fixturesFolder: "client/cypress/fixtures",
    supportFile: "client/cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

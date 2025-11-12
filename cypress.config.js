// cypress.config.js
const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
    screenshot:true,
    video:true,
    videoCompression: true,
    reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on, config) {
          // implement node event listeners here
          require('cypress-mochawesome-reporter/plugin')(on);
          allureWriter(on, config);
          return config;

        },

        reporter: 'cypress-mochawesome-reporter',
        reporterOptions: {
          charts: true, // Enable charts in the report
          reportPageTitle: 'My Cypress Test Report', // Custom report title
          embeddedScreenshots: true, // Embed screenshots in the report
          inlineAssets: true, // Embed all report assets inline
          saveAllAttempts: false, // Don't save separate reports for retries
        },
      },

      env: {
        loginUrl: "https://magnethub.selisestage.com",
      }
  })
// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   //retries: 1,
//   screenshot:true,
//   video:true,
//   videoCompression: true,
  
//   reporter: 'cypress-mochawesome-reporter',

//   e2e: {
//     setupNodeEvents(on, config) {

//     },
//   },

//   env: {
//     loginUrl: "https://magnethub.selisestage.com"
//   }

// });


const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },

  env: {
    loginUrl: "https://magnethub.selisestage.com"
  }

})
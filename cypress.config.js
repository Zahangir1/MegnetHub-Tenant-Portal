const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //retries: 1,
  screenshot:true,
  video:true,
  videoCompression: true,
  
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    //baseUrl: "https://magnethub.selisestage.com",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },

  env: {
    loginUrl: "https://magnethub.selisestage.com"
  }

});
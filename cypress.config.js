const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  viewport: {
    viewportWidth: 1024,
    viewportHeight: 600
  },

  env: {
    base_url: "https://www.britinsurance.com/",
  },

  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

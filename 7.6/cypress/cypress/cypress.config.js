const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: 1,
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
});

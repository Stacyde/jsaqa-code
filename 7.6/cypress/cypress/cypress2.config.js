const { defineConfig } = require('cypress')

module.exports = defineConfig({
  retries: 1,
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 360,
    viewportHeight: 640,
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
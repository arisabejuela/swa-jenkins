const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.{js,jsx,tx,tsx}',
    reporter: 'reporters/custom.js',
    excludeSpecPattern: ['**/2-advanced-examples']
  }
})
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // baseUrl: 'http://localhost:4200',
    // reporter: 'cypress-multi-reporters',
    // reporterOptions: {
    //   configFile: 'reporter-config.json'
    // },
    specPattern: 'cypress/e2e/**/*.{js,jsx,tx,tsx}',
    excludeSpecPattern: ['**/2-advanced-examples']
  }
})
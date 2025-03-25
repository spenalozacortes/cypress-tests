const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { preprendTransformerToOptions } = require("@badeball/cypress-cucumber-preprocessor/browserify");
const { allureCypress } = require("allure-cypress/reporter");

async function setupNodeEvents(on, config) {
  /* await addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify(preprendTransformerToOptions(config, browserify.defaultOptions))); */
 
  allureCypress(on, config, {
    resultsDir: "allure-results",
  });
  
  return config;
}

module.exports = defineConfig({
 e2e: {
  // specPattern: "**/*.feature",
  baseUrl: 'https://example.cypress.io',
  setupNodeEvents,
 },
 video: true,
});

const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { preprendTransformerToOptions } = require("@badeball/cypress-cucumber-preprocessor/browserify");
const allureWriter = require('@shelex/cypress-allure-plugin/writer.js');

async function setupNodeEvents(on, config) {
/*   const on = require('cypress-on-fix')(cypressOn)

  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify(preprendTransformerToOptions(config, browserify.defaultOptions))); */
  
  allureWriter(on, config);
  
  return config;
}

module.exports = defineConfig({
 e2e: {
  // specPattern: "**/*.feature",
  setupNodeEvents,
  'env': { 'allure': true }
 },
});

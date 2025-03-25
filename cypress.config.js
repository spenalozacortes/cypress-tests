const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { allureCypress } = require("allure-cypress/reporter");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);
  
  // Use ESBuild instead of Browserify
  on("file:preprocessor", createBundler({
    plugins: [createEsbuildPlugin(config)],
  }));

  // Enable Allure Reporting
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

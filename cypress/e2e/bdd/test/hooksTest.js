import { Before, After, BeforeAll, AfterAll } from "@badeball/cypress-cucumber-preprocessor";

BeforeAll(() => {
  cy.log("Run before any scenario");
});

Before(() => {
  cy.log("Run before every scenario");
});

After(() => {
  cy.log("Run after every scenario");
});

AfterAll(() => {
  cy.log("Run after all scenarios");
});

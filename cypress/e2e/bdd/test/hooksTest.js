import { Before, After, BeforeAll, AfterAll } from "@badeball/cypress-cucumber-preprocessor";

BeforeAll(() => {
  cy.log("Run before any scenario");
});

Before({ tags: '@test' }, () => {
  cy.log("Run before every scenario with tag @test");
});

After(() => {
  cy.log("Run after every scenario");
});

AfterAll(() => {
  cy.log("Run after all scenarios");
});

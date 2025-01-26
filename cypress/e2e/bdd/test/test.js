import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

const url = 'https://google.com'

Given('I open Google page', () => {
  cy.visit(url);
});

Then('I see {string} in the title', (title) => {
  cy.title().should('eq', title);
});

import * as allure from "allure-js-commons";
import { Severity } from "allure-js-commons";

describe('Test', () => {
  beforeEach(() => {
    cy.visit('/todo')
  });

  it('test', () => {
    allure.description("This is a test");
    allure.severity(Severity.BLOCKER);
    allure.label("label");

    allure.parentSuite("Tests for web interface");
    allure.suite("Tests for essential features");
    allure.subSuite("Tests for authentication");

    allure.step("Check length", () => {
      cy.get('.todo-list li').should('have.length', 2);
    });

    allure.step("Check text", () => {
      cy.get('.todo-list li').first().should('have.text', 'Pay electric bill');
      cy.get('.todo-list li').last().should('have.text', 'Walk the dog');
    });    
  });
});

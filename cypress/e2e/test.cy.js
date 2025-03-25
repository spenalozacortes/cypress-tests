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

    cy.allure().step("Check length");
    cy.get('.todo-list li').should('have.length', 2);

    cy.allure().step("Check text");
    cy.get('.todo-list li').first().should('have.text', 'Pay electric bill');
    cy.get('.todo-list li').last().should('have.text', 'Walk the dog');
  });
});

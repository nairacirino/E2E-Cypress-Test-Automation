/// <reference types="cypress" />

import CreateNewAccount from '../pages/create-new-account/index';
import HomePage from '../pages/home-page/index';

const homePage = new HomePage();
const createNewAccount = new CreateNewAccount();

Cypress.Commands.add('createNewAccount', () => {
    homePage.clickCreateAnAccountLink();
    createNewAccount.createAccount();
})

Cypress.Commands.add('assertThat', (element, shouldMethod, value) => {
    cy.get(element).should(shouldMethod, value)
})

Cypress.Commands.add('typeInfo', (field, info) => {
    cy.get(field).type(info)
})

Cypress.Commands.add('clickElement', (element) => {
    cy.get(element).click()
})

Cypress.Commands.add('selectInputValue', (element, value) => {
    cy.get(element).select(value)
})



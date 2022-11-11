/// <reference types="cypress" />

import CreateNewAccount from '../pages/create-new-account/index';
import HomePage from '../pages/home-page/index';
import AddNewAddress from '../pages/add-new-adress/index';
import MyAccount from '../pages/my-account/index';

const homePage = new HomePage();
const createNewAccount = new CreateNewAccount();
const addNewAddress = new AddNewAddress();
const myAccount = new MyAccount();

Cypress.Commands.add('createNewAccount', () => {
    homePage.clickCreateAnAccountLink();
    createNewAccount.createAccount();
})

Cypress.Commands.add('addDefaultBillingAddress', () => {
    myAccount.openEditAddressPage();
    addNewAddress.addDefaultBillingAddress();
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



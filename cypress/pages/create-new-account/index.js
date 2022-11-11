const ELEMENTS = require('./elements').ELEMENTS;
const USERDATA = require('../../fixtures/userdata').USERDATA;

export default class CreateNewAccount {
    
    createAccount() {
        cy.typeInfo(ELEMENTS.inputFieldFirstName, USERDATA.firstName)
        cy.typeInfo(ELEMENTS.inputFieldLastName, USERDATA.lastName)
        cy.typeInfo(ELEMENTS.inputFieldEmail, USERDATA.email)
        cy.typeInfo(ELEMENTS.inputFieldPassword, USERDATA.password)
        cy.typeInfo(ELEMENTS.inputFieldConfirmPassword, USERDATA.password)
        cy.clickElement(ELEMENTS.buttonCreateAccount)
    }
}
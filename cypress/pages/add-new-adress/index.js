const ELEMENTS = require('./elements').ELEMENTS;
const USERDATA = require('../../fixtures/userdata').USERDATA;

class AddNewAddress {

    addDefaultBillingAddress() {
        cy.typeInfo(ELEMENTS.inputFieldStreetAddress, USERDATA.streetAddress)
        cy.typeInfo(ELEMENTS.inputFieldCity, USERDATA.city)
        cy.typeInfo(ELEMENTS.inputFieldPhone, USERDATA.phone)
        cy.typeInfo(ELEMENTS.inputFieldZipCode, USERDATA.zipCode)
        cy.selectInputValue(ELEMENTS.selectFieldCountry, USERDATA.country)
        cy.selectInputValue(ELEMENTS.selectFieldState, USERDATA.state)
        cy.clickElement(ELEMENTS.buttonSave)
    }
}

export default AddNewAddress
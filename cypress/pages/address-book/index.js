const ELEMENTS = require('./elements').ELEMENTS;

class AddressBook {

    goBackToMyAccount() {
        cy.clickElement(ELEMENTS.myAccountLink)
    }
}

export default AddressBook
const ELEMENTS = require('./elements').ELEMENTS;
class HomePage {

    visitHomePage() {
        cy.visit('')
    }

    clickCreateAnAccountLink() {
        cy.clickElement(ELEMENTS.linkCreateAnAccount)
    }
}

export default HomePage
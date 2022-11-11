const ELEMENTS = require('./elements').ELEMENTS;
class HomePage {

    visitHomePage() {
        cy.visit(ELEMENTS.homeUrl)
    }

    clickCreateAnAccountLink() {
        cy.clickElement(ELEMENTS.linkCreateAnAccount)
    }
}

export default HomePage
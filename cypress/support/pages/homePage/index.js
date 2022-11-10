const ELEMENTS = require('./elements').ELEMENTS;
class HomePage {

    visitHomePage() {
        cy.visit(ELEMENTS.url)
    }

    clickCreateAnAccountLink() {
        cy.get(ELEMENTS.linkCreateAnAccount).click()
    }
}

export default HomePage
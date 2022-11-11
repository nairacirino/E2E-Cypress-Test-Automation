class BaseScripts {
    typeInfo(field, info) {
        cy.get(field).type(info)
    }

    clickElement(element) {
        cy.get(element).click()
    }

    selectInput(element, value) {
        cy.get(element).select(value)
    }

    shouldAssertion(element, shouldMethod, value) {
        cy.get(element).should(shouldMethod, value)
    }
}

export default BaseScripts
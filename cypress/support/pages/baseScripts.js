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
}

export default BaseScripts
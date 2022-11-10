class BaseScripts {
    typeInfo(field, info) {
        cy.get(field).type(info)
    }

    clickElement(element) {
        cy.get(element).click()
    }
}

export default BaseScripts
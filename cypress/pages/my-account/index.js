import { USERDATA } from '../../fixtures/userdata';

const ELEMENTS = require('./elements').ELEMENTS;

class MyAccount {

    openEditAddressPage() {
        cy.clickElement(ELEMENTS.defaultBillingAddressLink)
    }

    confirmCurrentPage() {
        cy.assertThat(ELEMENTS.pageTitle, 'have.text', 'My Account')
    }

    confirmDefaultBillingAddress() {
        cy.assertThat(ELEMENTS.billingAddress, 'contain', USERDATA.streetAddress)
        cy.assertThat(ELEMENTS.billingAddress, 'contain', USERDATA.city)
        cy.assertThat(ELEMENTS.billingAddress, 'contain', USERDATA.zipCode)
    }
}

export default MyAccount
import BaseScripts from '../baseScripts';
import { USERDATA } from '../userdata';

const ELEMENTS = require('./elements').ELEMENTS;

class MyAccount {

    scripts = new BaseScripts();

    openEditAddressPage() {
        this.scripts.clickElement(ELEMENTS.defaultBillingAddressLink)
    }

    assertFinalPage() {
        this.scripts.shouldAssertion(ELEMENTS.pageTitle, 'have.text', 'My Account')
    }

    assertDefaultBillingAddress() {
        this.scripts.shouldAssertion(ELEMENTS.billingAddress, 'contain', USERDATA.streetAddress)
        this.scripts.shouldAssertion(ELEMENTS.billingAddress, 'contain', USERDATA.city)
        this.scripts.shouldAssertion(ELEMENTS.billingAddress, 'contain', USERDATA.zipCode)
    }
}

export default MyAccount
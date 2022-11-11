import BaseScripts from '../baseScripts';

const ELEMENTS = require('./elements').ELEMENTS;

class MyAccount {

    scripts = new BaseScripts();

    openEditAddressPage() {
        this.scripts.clickElement(ELEMENTS.defaultBillingAddressLink)
    }
}

export default MyAccount
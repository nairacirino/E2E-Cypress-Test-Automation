import BaseScripts from '../baseScripts';

const ELEMENTS = require('./elements').ELEMENTS;

class AddressBook {
    scripts = new BaseScripts()

    goBackToMyAccount() {
        this.scripts.clickElement(ELEMENTS.myAccountLink)
    }
}

export default AddressBook
import BaseScripts from '../baseScripts';

const ELEMENTS = require('./elements').ELEMENTS;
const USERDATA = require('./userdata').USERDATA;

class CreateNewAccount {

    scripts = new BaseScripts();

    createAccount() {
        this.scripts.typeInfo(ELEMENTS.inputFirstName, USERDATA.firstName)
        this.scripts.typeInfo(ELEMENTS.inputLastName, USERDATA.lastName)
        this.scripts.typeInfo(ELEMENTS.inputEmail, USERDATA.email)
        this.scripts.typeInfo(ELEMENTS.inputPassword, USERDATA.password)
        this.scripts.typeInfo(ELEMENTS.inputConfirmPassword, USERDATA.password)
        this.scripts.clickElement(ELEMENTS.buttonCreateAccount)
    }
}

export default CreateNewAccount
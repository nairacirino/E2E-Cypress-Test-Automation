import BaseScripts from '../baseScripts';

const ELEMENTS = require('./elements').ELEMENTS;
const USERDATA = require('../userdata').USERDATA;

class AddNewAddress {

    scripts = new BaseScripts();

    addDefaultAddress() {
        this.scripts.typeInfo(ELEMENTS.inputStreetAddress, USERDATA.streetAddress)
        this.scripts.typeInfo(ELEMENTS.inputCity, USERDATA.city)
        this.scripts.typeInfo(ELEMENTS.inputPhone, USERDATA.phone)
        this.scripts.typeInfo(ELEMENTS.inputZipCode, USERDATA.zipCode)
        this.scripts.selectInput(ELEMENTS.selectCountry, USERDATA.country)
        this.scripts.selectInput(ELEMENTS.selectState, USERDATA.state)
        this.scripts.clickElement(ELEMENTS.buttonSave)
    }
}

export default AddNewAddress
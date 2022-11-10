/// <reference types="cypress" />

import HomePage from '../support/pages/homePage/index';
import CreateNewAccount from '../support/pages/createNewAccount/index';
import AddNewAddress from '../support/pages/addNewAdress/index';
import AddressBook from '../support/pages/addressBook/index';
import MyAccount from '../support/pages/myAccount/index';

describe('Magento Software Testing Board - Demo Website ', () => {
    const homePage = new HomePage();
    const createNewAccount = new CreateNewAccount();
    const addNewAddress = new AddNewAddress();
    const addressBook = new AddressBook();
    const myAccount = new MyAccount();

    it('Criação de conta de usuário no ecommerce', () => {
        //comandos do cypress
    })

}); 
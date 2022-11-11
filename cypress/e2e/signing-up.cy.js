/// <reference types="cypress" />

import AddNewAddress from '../support/pages/addNewAdress/index';
import AddressBook from '../support/pages/addressBook';
import CreateNewAccount from '../support/pages/createNewAccount/index';
import HomePage from '../support/pages/homePage/index';
import MyAccount from '../support/pages/myAccount/index';

describe('Magento Software Testing Board - Demo Website ', () => {
    const homePage = new HomePage();
    const createNewAccount = new CreateNewAccount();
    const addNewAddress = new AddNewAddress();
    const myAccount = new MyAccount();
    const addressBook = new AddressBook();

    // context('Usuário Logado', () => {
        beforeEach(() => {
            homePage.visitHomePage();
        })
        it('Criação de conta de usuário no ecommerce', () => {
            homePage.clickCreateAnAccountLink();
            createNewAccount.createAccount();
            myAccount.openEditAddressPage();
            addNewAddress.addDefaultAddress();
            addressBook.goBackToMyAccount();
            myAccount.assertFinalPage();
            myAccount.assertDefaultBillingAddress();
        })
    // })
}); 

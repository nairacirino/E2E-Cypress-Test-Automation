/// <reference types="cypress" />

import AddressBook from '../pages/address-book';
import HomePage from '../pages/home-page/index';
import MyAccount from '../pages/my-account/index';

describe('Cadastro de Usuário no Magento Demo Website', () => {
    const homePage = new HomePage();
    const myAccount = new MyAccount();
    const addressBook = new AddressBook();

    beforeEach(() => {
        homePage.visitHomePage();
    })

    it('Deve cadastrar conta de usuário e incluir endereço padrão de cobrança', () => {
        cy.createNewAccount()
        cy.addDefaultBillingAddress()
        addressBook.goBackToMyAccount();
        myAccount.confirmCurrentPage();
        myAccount.confirmDefaultBillingAddress();
    })
}); 

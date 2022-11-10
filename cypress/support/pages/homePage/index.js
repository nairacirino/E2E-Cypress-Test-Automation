// const ELEMENTS = require('./elements').ELEMENTS;
class HomePage {
    url = 'https://magento.softwaretestingboard.com/';
    linkCreateAnAccount = '.header .links a[href="https://magento.softwaretestingboard.com/customer/account/create/"]';

    visitHomePage() {
        cy.visit(this.url)
    }

    clickCreateAnAccountLink() {
        cy.get(this.linkCreateAnAccount).click()
    }
}

export default HomePage()
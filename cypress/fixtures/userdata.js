export const USERDATA = {
    firstName: 'Name',
    lastName: 'Lastname',
    email: generateRandomEmail(),
    password: 'STRONGpassword123*',
    streetAddress: 'Street, 123',
    city: 'My Town',
    phone: 551112345678,
    zipCode: 12345,
    country: 'US',
    state: 12,
}

function generateRandomEmail() {
    let randomMailNumber = Math.floor(Math.random()*(10**10));
    let randomDomainNumber = Math.floor(Math.random()*1000);
    return `testmail${randomMailNumber}@naira${randomDomainNumber}randommail.com`
}
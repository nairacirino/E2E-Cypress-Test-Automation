export const USERDATA = {
    firstName: 'NameTest',
    lastName: 'Lastname',
    email: generateRandomEmail(),
    password: 'STRONGpassword123*',
}

function generateRandomEmail() {
    let randomMailNumber = Math.floor(Math.random()*(10**10));
    let randomDomainNumber = Math.floor(Math.random()*1000);
    return `test${randomMailNumber}@naira${randomDomainNumber}randommail.com`
}
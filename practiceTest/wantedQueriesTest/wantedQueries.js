var pageObject = {}
var  licensePInfo = (browser, plate, state, date) => {
    pageObject
    .setValue('@lPlate', plate)
    .setValue('@lState', state)
    .setValue('@lPlate', plate)
    .click('@save')
    .expect.element('@isValid').text.to.equal('Errors Received:')
}
module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.wantedObjects()
        pageObject
            .navigate()
    },
    after: browser => {
        pageObject
            .end()
    },
    'Submit a valid query...': browser => {
        pageObject
            .waitForElementPresent('div[class="main-container"]')
            .setValue('@header', '1234567890')
            .setValue('@mke', 'ABC')
            .setValue('@origAI', 'OAI123456')
            .setValue('@name', 'Tony Stark')
            .setValue('@sex', 'M')
            .setValue('@race', 'Black')
            .setValue('@height', '603')
            .setValue('@weight', '225')
            .setValue('@hair', 'Brown')
            .setValue('@offense', 'Arson')
            .setValue('@dateOW', '10312010')
            .setValue('@driverL', '1031201011')
            .setValue('@dlState', 'LA')
            .setValue('@dlEDate', '10032025')
            .click('@save')
            .expect.element('@isValid').text.to.equal('Valid')
        },
        //Using a function to test
        'License Info Test...': browser => {
            licensePInfo(browser,'123Plate', 'LA','10252023')
        },
    }
    
















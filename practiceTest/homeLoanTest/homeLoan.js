var selectLoan = ['Home Purchase','Refinance', 'Home Equity loan/line']
var selectProp = ['Single Family Home', 'Townhome', 'Condo', 'Multi Family Dwelling', 'Mobile Home' ]
var propButton = ['Primary Home', 'Rental Property','Secondary Home']
var creditValue= ['Excellent', 'Good', 'Fair', 'Poor']
var city       = ['New Orleans', 'Houston', 'Denver']
var typeProp   = ['Primary Home', 'Rental Property', 'Secondary Home']
var price      = ['$175,000', '$100,000', '$275,000']
var downpay    = ['$100', '$1,000', '$10,000', '$100,000']




module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.homeLoanObjects()
        pageObject
            .navigate()
    },
    after: browser => {
        pageObject
            .end()
    },
    'Full Test': browser => {
        pageObject
        //Home Page
        .waitForElementPresent('@home')
        .click('@start')
        //Type of loan page
        .waitForElementPresent('@loan')
        .setValue('@loan', selectLoan[0])
        .setValue('@prop', selectProp[0])
        .click('@start')
        //City Prop Located
        .setValue('@city', city[0])
        .click('@start')
        //Property Type PH, RP, SH
        .waitForElementPresent('@pHBut')
        .click('@pHBut')
        //Found your home?
        .waitForElementPresent('@yesHom')
        .click('@yesHom')
        //Working with realtor?
        .waitForElementPresent('@yesHom')
        .click('@yesHom')
        //Purchase price and Down payment?
        .waitForElementPresent('@price')
        .setValue('@price', price[0])
        .setValue('@prop', downpay[0])
        .click('@start')
        //Credit score?


        //Bankruptcy






    }




















}
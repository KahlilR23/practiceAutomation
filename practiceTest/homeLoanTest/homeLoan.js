var selectLoan = ['Home Purchase','Refinance', 'Home Equity loan/line']
var selectProp = ['Single Family Home', 'Townhome', 'Condo', 'Multi Family Dwelling', 'Mobile Home' ]
var propButton = ['Primary Home', 'Rental Property','Secondary Home']
var creditValue= ['Excellent', 'Good', 'Fair', 'Poor']




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
























}
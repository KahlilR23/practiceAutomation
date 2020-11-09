var agePobjects = {}
module.exports = {
    beforeEach: browser => {
        agePobjects = browser.page.weathermanObjects()
        agePobjects
            .navigate()
    },
    after: browser => {
        agePobjects
            .end()
    },
    'Weather Search Test': browser => {
        var mySearches = {
            search1: '43210',
            search2: '02134',
            search3: 'Hoboken',
            result1: 'Columbus',
            result2: 'Allston',
            result3: 'Hoboken'
        }
        agePobjects
            .setValue('@searchBar', mySearches.search2)
            .click('@submitButton')
            .waitForElementVisible('@resultCity')
            .verify.containsText('@resultCity', mySearches.result2)
            .click('@searchAgain')
            .setValue('@searchBar', mySearches.search1)
            .click('@submitButton')
            .waitForElementVisible('@resultCity')
            .verify.containsText('@resultCity', mySearches.result1)
            .click('@searchAgain')
            .setValue('@searchBar', mySearches.search3)
            .click('@submitButton')
            .waitForElementVisible('@resultCity')
            .verify.containsText('@resultCity', mySearches.result3)
            .getText('@temp', results => {
                console.log(results.value)
            })
    }
}
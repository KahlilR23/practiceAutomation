var agePobjects = {}
var myData = [
    {
        search: '43210',
        result: 'Columbus'
    },
    {
        search: '02134',
        result: 'Allston'
    },
    {
        search: 'Hoboken',
        result: 'Hoboken'
    }
]
function searchTest (object, data){
    object
            .setValue('@searchBar', data.search)
            .click('@submitButton')
            
            .waitForElementVisible('@resultCity')
            .verify.containsText('@resultCity', data.result)
}
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
        agePobjects
    
            console.log('This is the test data: ' + myData[0])
            searchTest(agePobjects, myData[0])
        },
        

}
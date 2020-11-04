module.exports = {
    beforeEach: browser => {
        browser.url("http://www.google.com")
            
    },
    after: browser=> {
        browser.end()
    },
    'Google Search': browser =>{
        browser
            .setValue('input[name="q"]',['ironman', browser.Keys.ENTER])
            .waitForElementVisible('#res')
            .clearValue('input[name="q"]')
            .setValue('input[name="q"]',['batman', browser.Keys.ENTER])
            .verify.containsText('#res', 'Batman')
    },
}
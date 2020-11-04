/*
This is a basic NightwatchJS automation script to test clicking see all for each cateorgory and verying the page loads. 
It will also test clicking  each category button at the bottom of the home page. 
Will optimize this in a later file.
*/

module.exports = {
    beforeEach: browser => {
        browser.url('https://www.yoodlize.com/')
    },
    after: browser => {
        browser.end()
    },
        // 'Recreational Vehicles See All Test...': browser =>{
        //     browser
        //         .useXpath()
        //         .waitForElementVisible('//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")]') //Wait for Recreational Vehicle title to show
        //         .click('//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVge")]')//Rec Vehicle See All Button
        //         .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]')
        //         .back()
        //         .waitForElementVisible('//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")]')
        //         .verify.containsText('//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")]', 'RECREATIONAL VEHICLES')
        // },
        // 'Outdoor Gear See All Test...': browser => {
        //     browser
        //         .useXpath()
        //         .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[2]') //Wait for Outdoor Gear  title to show
        //         .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[2]') //Click See All Button
        //         .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
        //         .back() //ckick the back button
        //         .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[2]') //Wait for Outdoor Gear  title to show
        //         .verify.containsText('//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")][2]', 'OUTDOOR GEAR') //Verify Outdoor Gear  title shows
        // },
        // 'Electromics See All Test...': browser => {
        //     browser
        //         .useXpath()
        //         .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[3]') //Wait for Electromics title to show
        //         .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[3]') //Click See All Button
        //         .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
        //         .back() //ckick the back button
        //         .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[3]') //Wait for Electromics title to show
        //         .verify.containsText('//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")][3]', 'ELECTRONICS') //Verify Electromics title shows
        // },
        // 'Party & Wedding Equip See All Test...': browser => {
        //     browser
        //         .useXpath()
        //         .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[4]') //Wait for Party & Wedding Equip title to show
        //         .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[4]') //Click See All Button
        //         .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
        //         .back() //ckick the back button
        //         .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[4]') //Wait for Party & Wedding Equip title to show
        //         .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[4]', 'PARTY & WEDDING EQUIPMENT') //Verify Party & Wedding Equip title shows
        // },
        // 'Tools See All Test...': browser => {
        //     browser
        //         .useXpath()
        //         .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[5]') //Wait for Tools to show
        //         .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[5]') //Click See All Button
        //         .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
        //         .back() //ckick the back button
        //         .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[5]') //Wait for Tools title to show
        //         .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[5]', 'TOOLS') //Verify Tools title shows
        // },
        //  'Clothing See All Test...': browser => {
        //     browser
        //         .useXpath()
        //         .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[6]') //Wait for Clothing  to show
        //         .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[6]') //Click See All Button
        //         .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
        //         .back() //ckick the back button
        //         .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[6]') //Wait for Clothing title to show
        //         .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[6]', 'CLOTHING') //Verify Clothing title shows
        // },
        'Home & Kitchen See All Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[7]') //Wait for Home & Kitchen  to show
                .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[7]') //Click See All Button
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[7]') //Wait for Home & Kitchen title to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[7]', 'HOME & KITCHEN') //Verify Home & Kitchen title shows
        },










}
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
        'Recreational Vehicles See All Test...': browser =>{
            browser
                .useXpath()
                .waitForElementVisible('//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")]') //Wait for Recreational Vehicle title to show
                .click('//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVge")]')//Rec Vehicle See All Button
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //CLick the back button
                .waitForElementVisible('//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")]') //Wait for RECREATIONAL VEHICLES title to show
                .verify.containsText('//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")]', 'RECREATIONAL VEHICLES') //Verify RECREATIONAL VEHICLES title shows
        },
        'Outdoor Gear See All Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[2]') //Wait for Outdoor Gear  title to show
                .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[2]') //Click See All Button
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //CLick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[2]') //Wait for Outdoor Gear  title to show
                .verify.containsText('//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")][2]', 'OUTDOOR GEAR') //Verify Outdoor Gear  title shows
        },
        'Electromics See All Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[3]') //Wait for Electromics title to show
                .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[3]') //Click See All Button
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[3]') //Wait for Electromics title to show
                .verify.containsText('//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")][3]', 'ELECTRONICS') //Verify Electromics title shows
        },
        'Party & Wedding Equipment See All Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[4]') //Wait for Party & Wedding Equip title to show
                .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[4]') //Click See All Button
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[4]') //Wait for Party & Wedding Equip title to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[4]', 'PARTY & WEDDING EQUIPMENT') //Verify Party & Wedding Equip title shows
        },
        'Tools See All Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK ldgrqE sc-gqjmRU gSDGNT")])') //Wait for Tools to show
                .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[5]') //Click See All Button
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK ldgrqE sc-gqjmRU gSDGNT")])') //Wait for Tools title to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK ldgrqE sc-gqjmRU gSDGNT")])', 'TOOLS') //Verify title shows
        },
         'Clothing See All Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[5]') //Wait for Clothing  to show
                .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[5]') //Click See All Button
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[5]') //Wait for Clothing title to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])', 'RECREATIONAL VEHICLES') //Verify title shows
        },
        'Home & Kitchen See All Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[6]') //Wait for Home & Kitchen  to show
                .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[6]') //Click See All Button
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[6]') //Wait for Home & Kitchen title to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])', 'RECREATIONAL VEHICLES') //Verify title shows
        },
        'TOYS & GAMES See All Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[7]') //Wait for TOYS & GAMES  to show
                .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[7]') //Click See All Button
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[7]') //Wait for TOYS & GAMES title to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])', 'RECREATIONAL VEHICLES') //Verify title shows
        },
        'LAWN & GARDEN See All Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[8]') //Wait for LAWN & GARDEN to show
                .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[8]') //Click See All Button
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[8]') //Wait for LAWN & GARDEN title to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])', 'RECREATIONAL VEHICLES') //Verify title shows
        },
        'SPORTING GOODS See All Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[9]') //Wait for SPORTING GOODS to show
                .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[9]') //Click See All Button
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[9]') //Wait for SPORTING GOODS to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])', 'RECREATIONAL VEHICLES') //Verify title shows
        },
        'DVDs & VIDEO GAMES See All Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[10]') //Wait for DVDS & VIDEO GAMES to show
                .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[10]') //Click See All Button
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[10]') //Wait for Home & Kitchen title to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])', 'RECREATIONAL VEHICLES') //Verify title shows
        },
        'VENUES See All Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[11]') //Wait for VENUES to show
                .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[11]') //Click See All Button
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[11]') //Wait for VENUES title to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])', 'RECREATIONAL VEHICLES') //Verify title shows
        },
        'MUSIC See All Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[12]') //Wait for MUSIC to show
                .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[12]') //Click See All Button
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[12]') //Wait for MUSIC title to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])', 'RECREATIONAL VEHICLES') //Verify title shows
        },
        'BUSINESS EQUIPMENT See All Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[13]') //Wait for BUSINESS EQUIPMENT to show
                .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[13]') //Click See All Button
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[13]') //Wait for BUSINESS EQUIPMENT title to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])', 'RECREATIONAL VEHICLES') //Verify title shows
        },
        'MISC See All Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[14]') //Wait for MISC to show
                .click('(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])[14]') //Click See All Button
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .pause(2000)
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])[14]') //Wait for MISC title to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])', 'RECREATIONAL VEHICLES') //Verify title shows
        },
        //Testing Browse Categories section--------------------------------------------------------------------------
        'Tools Browse Categories Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])') //Wait for Tools to show
                .click('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])') //Click See All Button
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])') //Wait for Tools title to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])', 'RECREATIONAL VEHICLES') //Verify RECREATIONAL VEHICLES title shows
        },
        'OUTDOOR GEAR Browse Categories Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[2]') //Wait for OUTDOOR GEAR to show
                .click('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[2]') //Click OUTDOOR GEAR link
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[2]') //Wait for OUTDOOR GEAR title to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])', 'RECREATIONAL VEHICLES') //Verify RECREATIONAL VEHICLES title shows
        },
        'ELECTRONICS Browse Categories Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[3]') //Wait for ELECTRONICS to show
                .click('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[3]') //Click ELETRONICS link
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[3]') //Wait for ELECTRONICS title to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])', 'RECREATIONAL VEHICLES') //Verify RECREATIONAL VEHICLES title shows
        },
        'PARTY & WEDDING Browse Categories Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[4]') //Wait for PARTY & WEDDING to show
                .click('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[4]') //Click PARTY & WEDDING link
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[4]') //Wait for PARTY & WEDDING title to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])', 'RECREATIONAL VEHICLES') //Verify RECREATIONAL VEHICLES title shows
        },
        'RECREATIONAL VEHICLES Browse Categories Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[5]') //Wait for RECREATION VEHICLES to show
                .click('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[5]') //Click RECREATIONAL VEHICLES link
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[5]') //Wait for RECREATION VEHICLES title to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])', 'RECREATIONAL VEHICLES') //Verify RECREATIONAL VEHICLES title shows
        },
        'CLOTHING Browse Categories Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[6]') //Wait for CLOTHING to show
                .click('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[6]') //Click CLOTHING link
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[6]') //Wait for CLOTHING title to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])', 'RECREATIONAL VEHICLES') //Verify RECREATIONAL VEHICLES title shows
        },
        'HOME & KITCHEN Browse Categories Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[7]') //Wait for HOME & KITCHEN to show
                .click('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[7]') //Click HOME & KITCHEN link
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[7]') //Wait for HOME & KITCHEN title to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])', 'RECREATIONAL VEHICLES') //Verify RECREATIONAL VEHICLES title shows
        },
        'TOYS & GAMES Browse Categories Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[8]') //Wait for TOYS & GAMES to show
                .click('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[8]') //Click TOYS & GAMES link
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[8]') //Wait for TOYS & GAMES title to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])', 'RECREATIONAL VEHICLES') //Verify RECREATIONAL VEHICLES title shows
        },
        'LAWN & GARDEN Browse Categories Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[9]') //Wait for LAWN & GARDEN to show
                .click('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[9]') //Click LAWN & GARDEN link
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[9]') //Wait for LAWN & GARDEN title to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])', 'RECREATIONAL VEHICLES') //Verify RECREATIONAL VEHICLES title shows
        },
        'SPORTING GOODS Browse Categories Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[10]') //Wait for SPORTING GOODS to show
                .click('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[10]') //Click SPORTING GOODS link
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[10]') //Wait for SPORTING GOODS title to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])', 'RECREATIONAL VEHICLES') //Verify RECREATIONAL VEHICLES title shows
        },
        'DVD & VIDEO GAMES Browse Categories Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[11]') //Wait for DVD & VIDEO GAMES to show
                .click('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[11]') //Click DVD & VIDEO GAMES link
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[11]') //Wait for DVD & VIDEO GAMES title to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])', 'RECREATIONAL VEHICLES') //Verify RECREATIONAL VEHICLES title shows
        },
        'VENUES Browse Categories Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[12]') //Wait for VENUES to show
                .click('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[12]') //Click VENUES link
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[12]') //Wait for VENUES title to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])', 'RECREATIONAL VEHICLES') //Verify RECREATIONAL VEHICLES title shows
        },
        'MUSIC Browse Categories Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[13]') //Wait for MUSIC to show
                .click('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[13]') //Click MUSIC link
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[13]') //Wait for MUSIC title to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])', 'RECREATIONAL VEHICLES') //Verify RECREATIONAL VEHICLES title shows
        },
        'MISC Browse Categories Test...': browser => {
            browser
                .useXpath()
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[14]') //Wait for MISC to show
                .click('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[14]') //Click MISC link
                .waitForElementVisible('//div[contains(@yid,"advanced-search-link")]') //Wait for advanced search button to be visible
                .back() //ckick the back button
                .waitForElementVisible('(//div[contains(@class,"sc-jqCOkK MvxJP sc-gqjmRU ksayja")])[14]') //Wait for MISC title to show
                .verify.containsText('(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])', 'RECREATIONAL VEHICLES') //Verify RECREATIONAL VEHICLES title shows
        },
}
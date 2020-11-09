/*
This is a basic NightwatchJS automation script to test clicking see all for each cateorgory and verying the page loads. 
It will also test clicking  each category button at the bottom of the home page. It will also test the search feature. 
Will optimize this in a later file.
*/

const { elements } = require("../pageObjects/yoodlizeObjects")

var pageObject = {}
var mySearches = {
            search1: 'drill',
            search2: 'lawnmower'
        }
module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.yoodlizeObjects()
        pageObject
            .navigate()
    },
    after: browser => {
        pageObject
            .end()
    },
    //New added test
    'Drill Search Test': browser => {
        pageObject
            .waitForElementVisible('@categoryTitle')
            .setValue('@searchBar', [mySearches.search1, browser.Keys.ENTER])
            .waitForElementPresent('@advancedSearch')
            .waitForElementVisible('@searchCircle')
            .verify.containsText('@searchCircle', mySearches.search1)
    },
    'Lawnmower Search Page Search Test': browser => {
        pageObject
            .waitForElementVisible('@categoryTitle')
            .setValue('@searchBar', [mySearches.search2, browser.Keys.ENTER])
            .waitForElementPresent('@advancedSearch')
            .waitForElementVisible('@searchCircle')
            .verify.containsText('@searchCircle', mySearches.search2)
    },
    //Refracted test to take in page objects
    'Recreational Vehicles See All Test...': browser =>{
        pageObject
            .waitForElementVisible('@categoryTitle') //Wait for Recreational Vehicle title to show
            .click('@seeAll')//Rec Vehicle See All Button
            .waitForElementPresent('@advancedSearch') //Wait for advanced search button to be visible
            .click('@home') //CLick the home button
            .waitForElementVisible('@categoryTitle') //Wait for RECREATIONAL VEHICLES title to show
            .verify.containsText('@categoryTitle', 'RECREATIONAL VEHICLES') //Verify RECREATIONAL VEHICLES title shows
    },
    //Have to add indexes
    // 'Outdoor Gear See All Test...': browser => {
    //     pageObject
    //     var Title = elements.categoryPath.selector+'[2]'
    //     var See = elements.seePath.selector+'[2]'
    //     console.log(Title)
    //     console.log(See)
    //     console.log(`${See}`)
    //         .waitForElementVisible('@categoryTitle')
    //         .waitForElementVisible(`${Title}`) //Wait for Outdoor Gear  title to show
    //         .click(`${See}`) //Click See All Button
    //         .waitForElementVisible('@advancedSearch') //Wait for advanced search button to be visible
    //         .click('@home') //CLick the back button
    //         .waitForElementVisible(`${Title}`) //Wait for Outdoor Gear  title to show
    //         //.verify.containsText(Title, 'OUTDOOR GEAR') //Verify Outdoor Gear  title shows
    // },










}
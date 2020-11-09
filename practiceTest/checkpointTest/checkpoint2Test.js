module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.checkpoint2Objects()
        pageObject
            .navigate()
    },
    after: browser => {
        pageObject
            .end()
    },
    'Odds and Evens Test...' : browser => {
        pageObject
            .waitForElementVisible('@inputEvenOdd')
        //input numbers
            .setValue('@inputEvenOdd', '20,11')
        //click split button
            .click('@splitEvenOdd')
        //check even output
            .verify.containsText('@evenResults', '20')
        //check odd output
            .verify.containsText('@oddResults', '11')
    },
    'Filter Objects Test...' : browser => {
        var objectValues =  [ "name", "title", "age", "hairColor" ]
        for (var i = 0; i < objectValues.length; i++)
        {
        pageObject
            .waitForElementVisible('@inputObject')
        //input "name" filter
            .setValue('@inputObject', objectValues[i])
        //click split button
            .click('@filterObject')
        //check "name" output
            .verify.containsText('@objectResult', objectValues[i])
        //clear input
            .clearValue('@inputObject')
    //     /*More efficient to use a for loop instead of repeating steps*/
    //     // //input "title" filter
    //     //     .setValue('@inputObject', 'title')
    //     // //click split button
    //     //     .click('@filterObject')
    //     // //check "title" output
    //     //     .verify.containsText('@objectResult', 'title')
    //     // //clear input
    //     //     .clearValue('@inputObject')
    //     // //input "age" filter
    //     //     .setValue('@inputObject', 'age')
    //     // //click split button
    //     //     .click('@filterObject')
    //     // //check "age" output
    //     //     .verify.containsText('@objectResult', 'age')
    //     // //clear input
    //     //     .clearValue('@inputObject')
    //     // //input "hairColor" filter
    //     //     .setValue('@inputObject', 'hairColor')
    //     // //click split button
    //     //     .click('@filterObject')
    //     // //check "age" output
    //     //     .verify.containsText('@objectResult', 'hairColor')
        }
    },
    'Filter String Test...' : browser => {
        var testValues =  [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ]
        for (var i = 0; i < testValues.length; i++)
        {
        pageObject
            .waitForElementVisible('@inputString')
        //input "testValues" filter
            .setValue('@inputString', testValues[i])
        //click Filter button
            .click('@filterString')
        //check "testValues" output
            .verify.containsText('@filterResult', testValues[i])
        //clear input
             .clearValue('@inputString')
        }
    },
    'Palindrome Test...' : browser => {
        pageObject
            .waitForElementVisible('@inputPalind')
        //input "racecar" 
            .setValue('@inputPalind', 'racecar')
        //click check button
            .click('@checkPalind')
        //check "true" output
            .verify.containsText('@palinResults', 'true')
        //clear input
             .clearValue('@inputPalind')
        //input "car" filter
            .setValue('@inputPalind', 'car')
        //click check button
            .click('@checkPalind')
        //check "true" output
            .verify.containsText('@palinResults', 'false')
        //clear input
             .clearValue('@inputPalind')
    },
    'Sum Test...' : browser => {
        pageObject
            .waitForElementVisible('@sumInput1')
        //input "23" 
            .setValue('@sumInput1', '23')
        //input "27" 
            .setValue('@sumInput2', '27')    
        //click check button
            .click('@addButton')
        //check "50" output
            .verify.containsText('@addResults', '50')
        //clear input
            .clearValue('@sumInput1')
            .clearValue('@sumInput2')
    },
}